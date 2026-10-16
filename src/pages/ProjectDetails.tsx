import { Navigate, useParams } from 'react-router-dom'
import { Seo } from '@/components/shared/Seo'
import { Badge } from '@/components/ui/Badge'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { Section } from '@/components/ui/Section'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { projects } from '@/data/projects'

export function ProjectDetails() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  if (!project) return <Navigate to="/portfolio" replace />

  return (
    <Section>
      <Seo title={project.title} description={project.summary} path={`/portfolio/${project.slug}`} />
      <Breadcrumb
        items={[
          { to: '/', label: 'خانه' },
          { to: '/portfolio', label: 'نمونه کارها' },
          { label: project.title },
        ]}
      />
      {project.placeholder ? <Badge>نمونه — پروژه واقعی نیست</Badge> : null}
      <SectionTitle as="h1" title={project.title} subtitle={project.summary} />
    </Section>
  )
}
