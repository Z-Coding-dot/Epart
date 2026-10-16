import type { InputHTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        'min-h-12 w-full rounded-2xl border border-brand-dark/15 bg-white px-4 text-base text-brand-dark placeholder:text-brand-dark/40',
        className,
      )}
      {...props}
    />
  )
}
