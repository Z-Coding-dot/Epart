import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { homeCopy } from '@/data/home'
import { Card } from '@/components/ui/Card'
import { CardArtwork, type CardArtworkKind } from '@/components/shared/CardArtwork'

export function AboutSection() {
  const artwork: CardArtworkKind[] = ['mobile', 'rtl', 'delivery']
  return (
    <Section id="about" className="open-section about-section">
      <Reveal>
        <div className="about-intro">
          <SectionTitle kicker={homeCopy.about.kicker} title={homeCopy.about.title} className="mb-0" />
          <p className="max-w-2xl text-body text-brand-dark/75">{homeCopy.about.body}</p>
        </div>
        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {homeCopy.about.points.map((point, index) => (
            <li key={point.title}>
              <Card className="about-feature-card h-full" subtitle={point.subtitle} description={point.body}
                linkLabel={point.title} artwork={<CardArtwork kind={artwork[index]} />}>
                <h3 className="text-xl font-bold">{point.title}</h3>
              </Card>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
