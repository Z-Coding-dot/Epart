import { ContactForm } from '@/components/shared/ContactForm'
import { useSearchParams } from 'react-router-dom'
import { ArrowUpLeft, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import { Seo } from '@/components/shared/Seo'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { Section } from '@/components/ui/Section'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { settings } from '@/data/settings'
import { activeServices } from '@/data/services'
import { contactCopy } from '@/data/contact'
import { toFaDigits } from '@/utils/format'

export function Contact() {
  const [params] = useSearchParams()
  const service = activeServices().find(item => item.slug === params.get('service'))
  const projectType = service?.items.find(item => item.active && item.slug === params.get('type'))
  return (
    <Section className="contact-section">
      <Seo title="تماس" description="درخواست پروژه ایپارت از طریق واتساپ." path="/contact" />
      <Breadcrumb items={[{ to: '/', label: 'خانه' }, { label: 'تماس' }]} />
      <SectionTitle as="h1"
        title={contactCopy.title}
        subtitle={contactCopy.subtitle}
      />
      <div className="contact-layout">
        <div className="contact-form-panel">
          <p className="contact-form-kicker">{contactCopy.formKicker}</p>
          <h2 className="contact-panel-title">{contactCopy.formTitle}</h2>
          <ContactForm key={`${service?.slug ?? ''}-${projectType?.slug ?? ''}`} layout="grid" prefillService={service?.title}
            prefillDescription={projectType ? `${contactCopy.typePrefix}: ${projectType.title}` : ''} />
        </div>
        <aside className="contact-aside" aria-labelledby="contact-aside-title">
          <Send className="contact-aside-watermark" strokeWidth={.7} aria-hidden="true" />
          <div className="contact-aside-top">
            <span className="contact-aside-icon"><MessageCircle size={32} strokeWidth={1.5} aria-hidden="true" /></span>
            <h2 id="contact-aside-title">{contactCopy.asideTitle}</h2>
            <p>{contactCopy.asideBody}</p>
          </div>
          <ol className="contact-steps">
            {contactCopy.steps.map((step, index) => <li key={step.title}>
              <span className="contact-step-number">{toFaDigits(`0${index + 1}`)}</span>
              <div><h3>{step.title}</h3><p>{step.body}</p></div>
            </li>)}
          </ol>
          <div className="contact-aside-bottom">
            <h3>{contactCopy.contactDetails}<ArrowUpLeft size={18} aria-hidden="true" /></h3>
            {settings.placeholders.contact ? <p className="contact-placeholder-note">{contactCopy.placeholderNotice}</p>
              : <a href={`tel:+${settings.phoneDigits}`}><Phone size={16} aria-hidden="true" /><span dir="ltr">{settings.phoneDisplay}</span></a>}
            {settings.email && <a href={`mailto:${settings.email}`}><Mail size={16} aria-hidden="true" /><span dir="ltr">{settings.email}</span></a>}
            {settings.address && <p><MapPin size={16} aria-hidden="true" />{settings.address}</p>}
          </div>
        </aside>
      </div>
    </Section>
  )
}
