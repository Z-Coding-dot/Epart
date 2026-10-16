import { Seo } from '@/components/shared/Seo'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { Section } from '@/components/ui/Section'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { homeCopy } from '@/data/home'

export function About() {
  return (
    <Section>
      <Seo title="درباره ما" description={homeCopy.about.body} path="/about" />
      <Breadcrumb items={[{ to: '/', label: 'خانه' }, { label: 'درباره ما' }]} />
      <SectionTitle as="h1" title={homeCopy.about.title} subtitle={homeCopy.about.body} />
    </Section>
  )
}
