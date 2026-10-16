import { ServiceExplorer } from '@/components/shared/ServiceExplorer'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { homeCopy } from '@/data/home'

export function ServicesSection() {
  return (
    <Section id="services">
      <Reveal>
        <SectionTitle title={homeCopy.services.title} subtitle={homeCopy.services.subtitle} />
        <ServiceExplorer id="home-services" includeCta />
      </Reveal>
    </Section>
  )
}
