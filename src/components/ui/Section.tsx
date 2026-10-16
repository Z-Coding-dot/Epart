import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'
import { Container } from '@/components/ui/Container'

type Tone = 'dark' | 'light'

export function Section({
  id,
  tone = 'dark',
  className,
  children,
}: {
  id?: string
  tone?: Tone
  className?: string
  children: ReactNode
}) {
  return (
    <section
      id={id}
      className={cn(
        'site-section relative py-16 sm:py-20 lg:py-24',
        tone === 'light' ? 'section-light bg-white text-brand-dark' : 'text-brand-dark',
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  )
}
