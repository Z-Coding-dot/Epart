import { ProjectCard } from '@/components/shared/ProjectCard'
import { Carousel, CarouselItem } from '@/components/ui/Carousel'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { homeCopy } from '@/data/home'
import { projects } from '@/data/projects'

export function PortfolioSection() {
  return (
    <Section id="portfolio" className="open-section">
      <Reveal>
        <SectionTitle title={homeCopy.portfolio.title} subtitle={homeCopy.portfolio.subtitle} />
        <Carousel>
          {projects.map((project) => (
            <CarouselItem key={project.slug}>
              <ProjectCard
                project={project}
              />
            </CarouselItem>
          ))}
        </Carousel>
      </Reveal>
    </Section>
  )
}
