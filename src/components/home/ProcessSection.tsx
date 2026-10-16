import { Carousel, CarouselItem } from '@/components/ui/Carousel'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { homeCopy } from '@/data/home'
import { toFaDigits } from '@/utils/format'
import { Card } from '@/components/ui/Card'
import { CardArtwork, type CardArtworkKind } from '@/components/shared/CardArtwork'

export function ProcessSection() {
  const artwork: CardArtworkKind[] = ['conversation', 'plan', 'code', 'delivery']
  return (
    <Section id="process" className="open-section">
      <Reveal>
        <SectionTitle title={homeCopy.process.title} />
        <Carousel className="lg:grid-cols-4">
          {homeCopy.process.steps.map((step, i) => (
            <CarouselItem key={step.title}>
              <Card className="process-card h-full" subtitle={toFaDigits(`0${i + 1}`)} description={step.body} linkLabel={step.title}
                artwork={<CardArtwork kind={artwork[i]} />}>
                <h3 className="text-lg font-bold">{step.title}</h3>
              </Card>
            </CarouselItem>
          ))}
        </Carousel>
      </Reveal>
    </Section>
  )
}
