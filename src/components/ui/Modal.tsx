import { useEffect, useRef, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/utils/cn'

export function Modal({
  open,
  onClose,
  children,
  className,
  label = 'پنجره',
}: {
  open: boolean
  onClose: () => void
  children: ReactNode
  className?: string
  label?: string
}) {
  const panelRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!open) return
    const previous = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    panelRef.current?.querySelector<HTMLElement>('button, a[href], input, select, textarea')?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab') {
        const elements = panelRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), input, select, textarea, [tabindex="0"]')
        if (!elements?.length) return
        const first = elements[0]
        const last = elements[elements.length - 1]
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
        if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
      previous?.focus()
    }
  }, [open, onClose])

  if (!open) return null

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center" role="dialog" aria-modal="true" aria-label={label}>
      <button
        type="button"
        className="absolute inset-0 bg-black/60"
        aria-label="بستن"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        className={cn(
          'relative z-10 max-h-[90svh] w-full overflow-auto rounded-t-3xl bg-white p-6 sm:max-w-lg sm:rounded-3xl',
          className,
        )}
      >
        {children}
      </div>
    </div>, document.body,
  )
}

export function Sheet({
  open,
  onClose,
  children,
}: {
  open: boolean
  onClose: () => void
  children: ReactNode
}) {
  return (
    <Modal open={open} onClose={onClose} label="منوی اصلی" className="mobile-menu-sheet h-[100svh] max-h-[100svh] rounded-none sm:rounded-none sm:max-w-none">
      <div id="mobile-menu">{children}</div>
    </Modal>
  )
}
