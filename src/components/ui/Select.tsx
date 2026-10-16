import { useEffect, useLayoutEffect, useRef, useState, type KeyboardEvent } from 'react'
import { Check, ChevronDown } from 'lucide-react'
import { cn } from '@/utils/cn'

type SelectOption = { value: string; label: string; description?: string }

export function Select({ id, name, value, onChange, options, placeholder, className }: {
  id: string
  name: string
  value: string
  onChange: (value: string) => void
  options: SelectOption[]
  placeholder: string
  className?: string
}) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const [placement, setPlacement] = useState({ above: false, height: 310 })
  const root = useRef<HTMLDivElement>(null)
  const trigger = useRef<HTMLButtonElement>(null)
  const popup = useRef<HTMLDivElement>(null)
  const search = useRef({ text: '', time: 0 })
  const choices = [{ value: '', label: placeholder }, ...options]
  const selected = choices.findIndex((option) => option.value === value)
  const listId = `${id}-options`

  useEffect(() => {
    if (!open) return
    const dismiss = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener('pointerdown', dismiss)
    return () => document.removeEventListener('pointerdown', dismiss)
  }, [open])

  useLayoutEffect(() => {
    if (!open) return
    const position = () => {
      const rect = trigger.current?.getBoundingClientRect()
      if (!rect) return
      // Leave room for the sticky header and mobile contact bar.
      const below = window.innerHeight - rect.bottom - (window.innerWidth < 1024 ? 100 : 20)
      const above = rect.top - 100
      const flip = below < 310 && above > below
      setPlacement({ above: flip, height: Math.max(100, Math.min(310, flip ? above : below)) })
    }
    position()
    window.addEventListener('resize', position)
    window.addEventListener('scroll', position, true)
    return () => {
      window.removeEventListener('resize', position)
      window.removeEventListener('scroll', position, true)
    }
  }, [open])

  useEffect(() => {
    const option = document.getElementById(`${listId}-${active}`)
    const list = popup.current
    if (!open || !option || !list) return
    if (option.offsetTop < list.scrollTop) list.scrollTop = option.offsetTop
    else if (option.offsetTop + option.offsetHeight > list.scrollTop + list.clientHeight) {
      list.scrollTop = option.offsetTop + option.offsetHeight - list.clientHeight
    }
  }, [active, open, listId, placement.height])

  const choose = (index: number) => {
    onChange(choices[index].value)
    setOpen(false)
    trigger.current?.focus({ preventScroll: true })
  }

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Tab') { setOpen(false); return }
    if (event.key === 'Escape') {
      if (open) { event.preventDefault(); event.stopPropagation(); setOpen(false) }
      return
    }
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault()
      const step = event.key === 'ArrowDown' ? 1 : -1
      setActive(open ? (active + step + choices.length) % choices.length : Math.max(selected, 0))
      setOpen(true)
    } else if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault()
      setActive(event.key === 'Home' ? 0 : choices.length - 1)
      setOpen(true)
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      if (open) choose(active)
      else { setActive(Math.max(selected, 0)); setOpen(true) }
    } else if (event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey) {
      const now = Date.now()
      search.current = { text: (now - search.current.time < 700 ? search.current.text : '') + event.key, time: now }
      const match = choices.findIndex((option) => option.label.startsWith(search.current.text))
      if (match >= 0) { event.preventDefault(); setActive(match); setOpen(true) }
    }
  }

  return (
    <div ref={root} className={cn('select-field', className)} onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false)
    }}>
      <input type="hidden" name={name} value={value} />
      <button ref={trigger} id={id} type="button" role="combobox" className="select-trigger"
        aria-expanded={open} aria-haspopup="listbox" aria-controls={listId}
        aria-activedescendant={open ? `${listId}-${active}` : undefined}
        onKeyDown={onKeyDown} onClick={() => { setActive(Math.max(selected, 0)); setOpen(!open) }}>
        <span className={cn('select-value', !value && 'select-placeholder')}>{choices[selected]?.label ?? placeholder}</span>
        <ChevronDown size={18} aria-hidden="true" className={cn('select-chevron', open && 'select-chevron--open')} />
      </button>
      {open && <div ref={popup} id={listId} role="listbox" aria-labelledby={id}
        className={cn('select-options', placement.above && 'select-options--above')} style={{ maxHeight: placement.height }}>
        {choices.map((option, index) => (
          <div key={option.value} id={`${listId}-${index}`} role="option" aria-selected={value === option.value}
            className={cn('select-option', active === index && 'select-option--active')}
            onPointerMove={() => setActive(index)} onMouseDown={(event) => event.preventDefault()}
            onClick={() => choose(index)}>
            <span className="select-option-copy"><span className="select-option-label">{option.label}</span>
              {option.description && <span className="select-option-description">{option.description}</span>}
            </span>
            {value === option.value && <Check size={17} aria-hidden="true" />}
          </div>
        ))}
      </div>}
    </div>
  )
}
