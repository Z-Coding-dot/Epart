import { Navigate, useParams } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Seo } from '@/components/shared/Seo'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { Section } from '@/components/ui/Section'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { services } from '@/data/services'
import { ServiceItemCard } from '@/components/shared/ServiceItemCard'
import { serviceCopy } from '@/data/serviceItems'

export function ServiceDetails() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug && s.active)
  if (!service) return <Navigate to="/services" replace />

  return (
    <Section>
      <Seo title={service.title} description={service.description} path={`/services/${service.slug}`} />
      <Breadcrumb
        items={[
          { to: '/', label: 'خانه' },
          { to: '/services', label: 'خدمات' },
          { label: service.title },
        ]}
      />
      <SectionTitle as="h1" title={service.title} subtitle={service.description} />
      <h2 className="service-items-title">{serviceCopy.itemsTitle}</h2>
      <div className="service-items-grid">
        {service.items.filter(item => item.active).map(item => <ServiceItemCard key={item.slug} service={service} item={item} />)}
      </div>
      <Button to={`/contact?service=${encodeURIComponent(service.slug)}`} className="mt-10">
        {serviceCopy.request}
      </Button>
    </Section>
  )
}
