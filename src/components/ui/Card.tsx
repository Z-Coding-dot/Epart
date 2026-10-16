import { useId, useState, type ReactNode } from 'react'
import { ArrowUpRight, Plus, Minus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { uiCopy } from '@/data/ui'
import { cn } from '@/utils/cn'

export function Card({
  children,
  className,
  surface = 'glass',
  corner = false,
  description,
  subtitle,
  artwork,
  to,
  linkLabel,
  onSelect,
  controls,
  selected,
  size = 'default',
}: {
  children: ReactNode
  className?: string
  surface?: 'glass' | 'paper' | 'accent'
  corner?: boolean
  description?: string
  subtitle?: ReactNode
  artwork?: ReactNode
  to?: string
  linkLabel?: string
  onSelect?: () => void
  controls?: string
  selected?: boolean
  size?: 'default' | 'sm'
}) {
  const [expanded, setExpanded] = useState(false)
  const descriptionId = useId()
  const hasDetails = Boolean(subtitle || description)
  const reduce = useReducedMotion()
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: .12 }}
      whileHover={reduce ? undefined : { y: -5 }}
      whileTap={reduce ? undefined : { scale: .985 }}
      transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 240, damping: 26, mass: .7 }}
      className={cn(
        'epart-card',
        `epart-card--${surface}`,
        corner && 'epart-card--notched',
        (to || onSelect) && 'card-link',
        size === 'sm' && 'epart-card--sm',
        hasDetails && 'epart-card--reveal',
        artwork && 'epart-card--illustrated',
        className,
      )}
      data-expanded={expanded}
      data-selected={selected}
      tabIndex={hasDetails && !to && !onSelect ? 0 : undefined}
      role={hasDetails && !to && !onSelect ? 'group' : undefined}
      aria-label={!to && !onSelect ? linkLabel : undefined}
    >
      <div className="epart-card__surface" />
      <div className="epart-card__content">
        <div className="card-heading">{children}</div>
        {(hasDetails || artwork) && <div className="card-stage">
          {artwork && <div className="card-artwork">{artwork}</div>}
          {hasDetails && <div id={descriptionId} className="card-details">
            {subtitle && <div className="card-subtitle">{subtitle}</div>}
            {description && <p className="card-description">{description}</p>}
          </div>}
        </div>}
      </div>
      {onSelect ? <button type="button" className="card-hitarea" onClick={onSelect} aria-label={linkLabel}
        aria-controls={controls} aria-expanded={Boolean(selected)} aria-describedby={hasDetails ? descriptionId : undefined} />
        : to && <Link to={to} className="card-hitarea" aria-label={linkLabel} aria-describedby={hasDetails ? descriptionId : undefined} />}
      {hasDetails && <button
        type="button"
        className="card-description-toggle"
        aria-label={`${expanded ? uiCopy.card.hide : uiCopy.card.show}${linkLabel ? ` — ${linkLabel}` : ''}`}
        aria-expanded={expanded}
        aria-controls={descriptionId}
        onClick={() => setExpanded(value => !value)}
      >{expanded ? <Minus size={16} aria-hidden="true" /> : <Plus size={16} aria-hidden="true" />}{size === 'sm' ? (expanded ? uiCopy.card.hideShort : uiCopy.card.showShort) : (expanded ? uiCopy.card.hide : uiCopy.card.show)}</button>}
      {corner && <span className="epart-card__arrow" aria-hidden="true"><ArrowUpRight strokeWidth={2.5} /></span>}
    </motion.div>
  )
}
