import { ProjectCard } from '@/components/shared/ProjectCard'
import { Seo } from '@/components/shared/Seo'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { Section } from '@/components/ui/Section'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { homeCopy } from '@/data/home'
import { projects } from '@/data/projects'

export function Portfolio() {
  return (
    <Section>
      <Seo title="نمونه کارها" description={homeCopy.portfolio.subtitle} path="/portfolio" />
      <Breadcrumb items={[{ to: '/', label: 'خانه' }, { label: 'نمونه کارها' }]} />
      <SectionTitle as="h1" title={homeCopy.portfolio.title} subtitle={homeCopy.portfolio.subtitle} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  )
}
