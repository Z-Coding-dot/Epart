import { cn } from '@/utils/cn'
import { toFaDigits } from '@/utils/format'

export function SectionTitle({
  kicker,
  title,
  subtitle,
  className,
  align = 'start',
  as: Heading = 'h2',
}: {
  kicker?: string
  title: string
  subtitle?: string
  className?: string
  align?: 'start' | 'center'
  as?: 'h1' | 'h2'
}) {
  return (
    <div
      className={cn(
        'mb-10 max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {kicker ? (
        <p className="mb-3 text-sm font-medium tracking-wide text-brand-ink">{kicker}</p>
      ) : null}
      <Heading className="text-title font-bold leading-normal">{toFaDigits(title)}</Heading>
      {subtitle ? (
        <p className="mt-3 text-body opacity-80">{toFaDigits(subtitle)}</p>
      ) : null}
    </div>
  )
}
