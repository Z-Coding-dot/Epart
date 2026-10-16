import { cn } from '@/utils/cn'
import { useEffect, useRef, useState, type CSSProperties } from 'react'

export function Marquee({
  items,
  className,
  label,
}: {
  items: readonly string[]
  className?: string
  label: string
}) {
  const rootRef = useRef<HTMLDivElement>(null)
  const cycleRef = useRef<HTMLDivElement>(null)
  const [metrics, setMetrics] = useState({ repeats: 2, duration: 60 })

  useEffect(() => {
    const root = rootRef.current
    const cycle = cycleRef.current
    if (!root || !cycle) return
    const measure = () => {
      const cycleWidth = cycle.getBoundingClientRect().width
      if (!cycleWidth) return
      // Each of the two identical groups is wider than the viewport at every size.
      const repeats = Math.max(1, Math.ceil(root.clientWidth / cycleWidth) + 1)
      const duration = Math.round(cycleWidth * repeats / 38)
      setMetrics(previous => previous.repeats === repeats && previous.duration === duration ? previous : { repeats, duration })
    }
    const observer = new ResizeObserver(measure)
    observer.observe(root)
    observer.observe(cycle)
    measure()
    return () => observer.disconnect()
  }, [items])

  return (
    <div ref={rootRef} className={cn('service-marquee relative overflow-hidden py-4', className)} dir="ltr" role="region" aria-label={label}>
      <div className="marquee-track" style={{ '--marquee-duration': `${metrics.duration}s` } as CSSProperties}>
        {[0, 1].map(group => <div className="marquee-group" key={group} aria-hidden={group === 1 ? true : undefined}>
          {Array.from({ length: metrics.repeats }, (_, cycle) => <div className="marquee-cycle" key={cycle}
            ref={group === 0 && cycle === 0 ? cycleRef : undefined} aria-hidden={cycle > 0 ? true : undefined}>
            {items.map((item, index) => <span key={`${item}-${index}`} className="marquee-item" dir="rtl">
              <span className="marquee-dot" aria-hidden="true" />{item}
            </span>)}
          </div>)}
        </div>)}
      </div>
    </div>
  )
}
