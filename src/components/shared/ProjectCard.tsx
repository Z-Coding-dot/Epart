import { Card } from '@/components/ui/Card'
import type { Project } from '@/types'
import { CardArtwork } from '@/components/shared/CardArtwork'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card corner to={`/portfolio/${project.slug}`} linkLabel={project.title} description={project.summary}
      artwork={<CardArtwork kind={project.slug === 'storefront' ? 'store' : project.category === 'برندینگ' ? 'brand' : 'web'} />}
      subtitle={<div className="flex flex-wrap items-center gap-2">
        <span className="card-tag">{project.category}</span>
        {project.placeholder && <span>نمونه — پروژه واقعی نیست</span>}
      </div>} className="project-card h-full">
      <h3 className="text-lg font-bold">{project.title}</h3>
    </Card>
  )
}
