import { Seo } from '@/components/shared/Seo'
import { ServiceExplorer } from '@/components/shared/ServiceExplorer'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { Section } from '@/components/ui/Section'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { homeCopy } from '@/data/home'

export function Services() {
  return (
    <Section>
      <Seo title="خدمات" description={homeCopy.services.subtitle} path="/services" />
      <Breadcrumb items={[{ to: '/', label: 'خانه' }, { label: 'خدمات' }]} />
      <SectionTitle as="h1" title={homeCopy.services.title} subtitle={homeCopy.services.subtitle} />
      <ServiceExplorer id="services-page" />
    </Section>
  )
}
