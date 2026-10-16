import { cn } from '@/utils/cn'

export function Badge({
  children,
  className,
}: {
  children: string
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex rounded-full bg-brand-orange/15 px-3 py-1 text-xs font-medium text-brand-ink',
        className,
      )}
    >
      {children}
    </span>
  )
}
