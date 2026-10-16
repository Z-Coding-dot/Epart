import { motion, useReducedMotion } from 'motion/react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { ArrowDown, ArrowUpLeft } from 'lucide-react'
import { homeCopy } from '@/data/home'

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <Container>
        <div className="hero-stage">
        <div className="hero-panel" aria-hidden="true" />
        <div className="hero-copy">
          <p className="hero-kicker"><span />{homeCopy.hero.kicker}</p>
          <h1 id="hero-title">{homeCopy.hero.title}</h1>
          <p className="hero-description">{homeCopy.hero.body}</p>
          <div className="hero-actions">
            <Button to="/contact" variant="secondary" size="lg" className="hero-button hero-button--primary">
              {homeCopy.hero.primaryCta}
              <ArrowUpLeft className="h-5 w-5" aria-hidden="true" />
            </Button>
            <Button to="/services" variant="secondary" size="lg" className="hero-button">
              {homeCopy.hero.secondaryCta}
            </Button>
          </div>
          <a href="#services" className="hero-scroll"><span><ArrowDown className="h-4 w-4" aria-hidden="true" /></span>{homeCopy.services.title}</a>
        </div>

        <motion.div
          className="hero-visual"
          initial={reduce ? false : { y: 16, opacity: 0 }}
          animate={reduce ? undefined : { y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="hero-visual-ring" aria-hidden="true" />
          <span className="hero-visual-dot hero-visual-dot--one" aria-hidden="true" />
          <span className="hero-visual-dot hero-visual-dot--two" aria-hidden="true" />
          <span className="hero-visual-dot hero-visual-dot--three" aria-hidden="true" />
          <img className="hero-portrait" src="/images/hero/agency-professional.webp"
            alt={homeCopy.hero.imageAlt} width="1024" height="1536" fetchPriority="high" decoding="async" />
          <span className="hero-visual-caption">{homeCopy.hero.artLabel}</span>
        </motion.div>
        </div>
      </Container>
    </section>
  )
}
