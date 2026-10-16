import { Card } from '@/components/ui/Card'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { homeCopy } from '@/data/home'
import { CardArtwork, type CardArtworkKind } from '@/components/shared/CardArtwork'

export function WhyChooseUs() {
  const artwork: CardArtworkKind[] = ['premium', 'mobile', 'trust']
  return (
    <Section>
      <Reveal>
        <SectionTitle title={homeCopy.why.title} />
        <div className="grid gap-4 lg:grid-cols-3">
          {homeCopy.why.items.map((item, index) => (
            <Card key={item.title} description={item.body} linkLabel={item.title} artwork={<CardArtwork kind={artwork[index]} />}>
              <h3 className="text-lg font-bold">{item.title}</h3>
            </Card>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
