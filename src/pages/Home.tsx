import { AboutSection } from '@/components/home/AboutSection'
import { CTASection } from '@/components/home/CTASection'
import { Hero } from '@/components/home/Hero'
import { PortfolioSection } from '@/components/home/PortfolioSection'
import { ProcessSection } from '@/components/home/ProcessSection'
import { ServicesSection } from '@/components/home/ServicesSection'
import { WhyChooseUs } from '@/components/home/WhyChooseUs'
import { Seo } from '@/components/shared/Seo'
import { Marquee } from '@/components/ui/Marquee'
import { homeCopy } from '@/data/home'

export function Home() {
  return (
    <>
      <Seo
        title="خانه"
        description="ایپارت — ساخت وب‌سایت، اپلیکیشن و هویت دیجیتال با ظاهر لوکس و تجربه موبایل‌اول."
        path="/"
      />
      <Hero />
      <Marquee items={homeCopy.marquee} label={homeCopy.services.title} className="border-y border-brand-dark/10 bg-white" />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <WhyChooseUs />
      <ProcessSection />
      <CTASection />
    </>
  )
}
