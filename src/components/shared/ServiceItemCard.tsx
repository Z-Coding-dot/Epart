import { Card } from '@/components/ui/Card'
import { CardArtwork, getCardArtworkKind } from '@/components/shared/CardArtwork'
import type { ServiceCategory, ServiceItem } from '@/types'

export function ServiceItemCard({ service, item }: { service: ServiceCategory; item: ServiceItem }) {
  const query = new URLSearchParams({ service: service.slug, type: item.slug })
  return (
    <Card corner size="sm" className="service-item-card" to={`/contact?${query}`} linkLabel={item.title}
      subtitle={item.subtitle} description={item.summary} artwork={<CardArtwork kind={getCardArtworkKind(item.artwork)} compact />}>
      <h4 className="font-bold">{item.title}</h4>
    </Card>
  )
}
