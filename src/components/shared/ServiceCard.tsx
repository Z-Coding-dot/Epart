import { Card } from '@/components/ui/Card'
import type { ServiceCategory } from '@/types'
import { CardArtwork, getCardArtworkKind } from '@/components/shared/CardArtwork'

export function ServiceCard({ service, onSelect, controls, selected }: {
  service: ServiceCategory
  onSelect?: () => void
  controls?: string
  selected?: boolean
}) {
  return (
    <Card corner to={onSelect ? undefined : `/services/${service.slug}`} onSelect={onSelect} controls={controls} selected={selected} linkLabel={service.title}
      subtitle={service.short} description={service.description} className="service-card h-full"
      artwork={<CardArtwork kind={getCardArtworkKind(service.artwork)} />}>
      <h3 className="text-xl font-bold sm:text-2xl">{service.title}</h3>
    </Card>
  )
}
