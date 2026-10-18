import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/shared/Logo'
import { InstallPrompt } from '@/components/shared/InstallPrompt'
import { navItems } from '@/data/nav'
import { settings } from '@/data/settings'
import { toFaDigits } from '@/utils/format'
import { ArrowUp, ArrowUpLeft, Mail, MapPin, Phone } from 'lucide-react'
import { footerCopy } from '@/data/footer'
import { activeServices } from '@/data/services'

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-shell">
          <div className="footer-watermark" aria-hidden="true" dir="ltr">{settings.brandEn}</div>
          <Link to="/contact" className="footer-invite">
            <div>
              <p className="footer-kicker"><span />{footerCopy.kicker}</p>
              <h2>{footerCopy.title}</h2>
              <p className="footer-invite-label">{footerCopy.cta}</p>
            </div>
            <span className="footer-invite-arrow" aria-hidden="true"><ArrowUpLeft strokeWidth={1.5} /></span>
          </Link>

          <div className="footer-grid">
            <div className="footer-brand">
              <Logo />
              <p>{settings.tagline}</p>
              <span className="footer-signature">{footerCopy.signature}</span>
              <InstallPrompt />
            </div>
            <nav aria-label={footerCopy.pages}>
              <h3>{footerCopy.pages}</h3>
              <ul>{navItems.map(item => <li key={item.to}><Link to={item.to}>{item.label}</Link></li>)}</ul>
            </nav>
            <nav aria-label={footerCopy.services}>
              <h3>{footerCopy.services}</h3>
              <ul>{activeServices().map(service => <li key={service.slug}><Link to={`/services/${service.slug}`}>{service.title}</Link></li>)}</ul>
            </nav>
            <div className="footer-contact">
              <h3>{footerCopy.contact}</h3>
              <p>{footerCopy.contactBody}</p>
              <Link to="/contact" className="footer-contact-link">{footerCopy.contactLink}<ArrowUpLeft size={18} aria-hidden="true" /></Link>
              {!settings.placeholders.contact && <a href={`tel:+${settings.phoneDigits}`} className="footer-contact-detail"><Phone size={16} aria-hidden="true" /><span dir="ltr">{settings.phoneDisplay}</span></a>}
              {settings.email && <a href={`mailto:${settings.email}`} className="footer-contact-detail"><Mail size={16} aria-hidden="true" /><span dir="ltr">{settings.email}</span></a>}
              {settings.address && <p className="footer-contact-detail"><MapPin size={16} aria-hidden="true" />{settings.address}</p>}
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {toFaDigits(2026)} {settings.brandFa} — {footerCopy.rights}</p>
            <div className="footer-bottom-links">
              <Link to="/privacy">{footerCopy.privacy}</Link>
              <a href="#main-content">{footerCopy.backToTop}<ArrowUp size={16} aria-hidden="true" /></a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
