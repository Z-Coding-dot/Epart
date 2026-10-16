import type { TextareaHTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        'min-h-32 w-full rounded-2xl border border-brand-dark/15 bg-white px-4 py-3 text-base text-brand-dark placeholder:text-brand-dark/40',
        className,
      )}
      {...props}
    />
  )
}
