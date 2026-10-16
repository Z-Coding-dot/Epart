import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

export function Carousel({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        '-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3',
        className,
      )}
    >
      {children}
    </div>
  )
}

export function CarouselItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn('min-w-[80%] snap-start sm:min-w-0', className)}>{children}</div>
  )
}
