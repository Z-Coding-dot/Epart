import { Button } from '@/components/ui/Button'
import { homeCopy } from '@/data/home'

export function CTABanner() {
  return (
    <div className="cta-banner overflow-hidden rounded-[2rem] bg-white p-8 text-brand-dark sm:p-12">
      <h2 className="text-title font-bold">{homeCopy.cta.title}</h2>
      <p className="mt-3 max-w-xl text-body">{homeCopy.cta.body}</p>
      <Button to="/contact" className="mt-6" size="lg">
        {homeCopy.cta.button}
      </Button>
    </div>
  )
}
