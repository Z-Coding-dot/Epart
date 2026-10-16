import { CTABanner } from '@/components/shared/CTABanner'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'

export function CTASection() {
  return (
    <Section>
      <Reveal>
        <CTABanner />
      </Reveal>
    </Section>
  )
}
