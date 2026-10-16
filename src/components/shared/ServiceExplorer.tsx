import { useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowUpLeft } from 'lucide-react'
import { ServiceCard } from '@/components/shared/ServiceCard'
import { ServiceItemCard } from '@/components/shared/ServiceItemCard'
import { CardArtwork, getCardArtworkKind } from '@/components/shared/CardArtwork'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { activeServices } from '@/data/services'
import { serviceCopy } from '@/data/serviceItems'
import { homeCopy } from '@/data/home'

export function ServiceExplorer({ id, includeCta = false }: { id: string; includeCta?: boolean }) {
  const categories = activeServices()
  const [slug, setSlug] = useState<string | null>(null)
  const [scrollRequest, setScrollRequest] = useState(0)
  const selected = categories.find(service => service.slug === slug)
  const detailId = `${id}-details`
  const detailRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!slug || !scrollRequest) return
    const frame = requestAnimationFrame(() => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      detailRef.current?.scrollIntoView({ behavior: reduce ? 'instant' : 'smooth', block: 'start' })
      titleRef.current?.focus({ preventScroll: true })
    })
    return () => cancelAnimationFrame(frame)
  }, [slug, scrollRequest])

  return (
    <div className="service-explorer">
      <p className="service-selection-hint"><ArrowDown size={16} aria-hidden="true" />{serviceCopy.selectionHint}</p>
      <div id={`${id}-categories`} className="service-grid grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map(service => <ServiceCard key={service.slug} service={service} selected={service.slug === slug}
          controls={detailId} onSelect={() => { setSlug(service.slug); setScrollRequest(value => value + 1) }} />)}
        {includeCta && <Card corner surface="accent" to="/contact" linkLabel={homeCopy.services.discoverTitle}
          subtitle={homeCopy.services.discoverCta} description={homeCopy.services.discoverBody}
          artwork={<CardArtwork kind="start" />} className="service-discover h-full">
          <h3 className="whitespace-pre-line text-title font-bold">{homeCopy.services.discoverTitle}</h3>
        </Card>}
      </div>

      <section id={detailId} ref={detailRef} hidden={!selected} className="service-detail-panel" aria-labelledby={`${detailId}-title`}>
        {selected && <>
          <div className="service-detail-summary">
            <div>
              <p className="service-detail-kicker">{serviceCopy.detailLabel}</p>
              <h2 id={`${detailId}-title`} ref={titleRef} tabIndex={-1} className="service-detail-title">{selected.title}</h2>
              <p className="service-detail-subtitle">{selected.short}</p>
              <p className="service-detail-description">{selected.description}</p>
              <div className="service-detail-actions">
                <Button to={`/contact?service=${encodeURIComponent(selected.slug)}`}>{serviceCopy.request}<ArrowUpLeft size={18} aria-hidden="true" /></Button>
                <a href={`#${id}-categories`} className="service-back-link">{serviceCopy.backToCategories}</a>
              </div>
            </div>
            <div className="service-detail-art"><CardArtwork kind={getCardArtworkKind(selected.artwork)} /></div>
          </div>
          <h3 className="service-items-title">{serviceCopy.itemsTitle}</h3>
          <div className="service-items-grid" key={selected.slug}>
            {selected.items.filter(item => item.active).map(item => <ServiceItemCard key={item.slug} service={selected} item={item} />)}
          </div>
        </>}
      </section>
    </div>
  )
}
