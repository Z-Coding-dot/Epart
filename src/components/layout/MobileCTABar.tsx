import { Button } from '@/components/ui/Button'
import { settings } from '@/data/settings'

export function MobileCTABar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-brand-dark/10 bg-white/95 px-3 pb-[max(0.5rem,var(--safe-bottom))] pt-2 backdrop-blur lg:hidden">
      <div className="mx-auto grid max-w-container grid-cols-2 gap-2">
        <Button to="/contact" size="sm" className="w-full">
          درخواست پروژه
        </Button>
        <Button
          href={`https://wa.me/${settings.whatsappNumber}`}
          variant="secondary"
          size="sm"
          className="w-full"
        >
          واتساپ
        </Button>
      </div>
    </div>
  )
}
