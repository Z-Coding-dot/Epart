import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

export function FormField({
  label,
  htmlFor,
  error,
  children,
  className,
}: {
  label: string
  htmlFor: string
  error?: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn('block space-y-2 min-w-0', className)}>
      <label htmlFor={htmlFor} className="block text-sm font-medium">{label}</label>
      {children}
      {error ? (
        <span className="block text-sm text-red-700" role="alert">
          {error}
        </span>
      ) : null}
    </div>
  )
}
