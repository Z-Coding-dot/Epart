import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

export function Container({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn('mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  )
}
