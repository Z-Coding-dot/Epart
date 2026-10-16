import { useId, useState, type ReactNode } from 'react'
import { cn } from '@/utils/cn'

export function Accordion({
  items,
}: {
  items: { title: string; content: ReactNode }[]
}) {
  const baseId = useId()
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="divide-y divide-brand-dark/10 rounded-3xl border border-brand-dark/10">
      {items.map((item, i) => {
        const expanded = open === i
        return (
          <div key={item.title}>
            <button
              type="button"
              className="flex min-h-12 w-full items-center justify-between gap-4 px-4 py-3 text-right"
              aria-expanded={expanded}
              aria-controls={`${baseId}-${i}`}
              onClick={() => setOpen(expanded ? null : i)}
            >
              <span className="font-medium">{item.title}</span>
              <span className={cn('text-brand-ink transition', expanded && 'rotate-45')}>+</span>
            </button>
            {expanded ? (
              <div id={`${baseId}-${i}`} className="px-4 pb-4 text-sm opacity-80">
                {item.content}
              </div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}
