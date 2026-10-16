import { useEffect, useState } from 'react'
import { Icon } from '@/components/ui/Icon'

export function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!show) return null

  return (
    <button
      type="button"
      className="fixed bottom-[calc(5.25rem+var(--safe-bottom))] start-4 z-30 inline-flex min-h-12 min-w-12 items-center justify-center rounded-full bg-white text-brand-dark ring-1 ring-brand-dark/15 lg:bottom-[calc(1.5rem+var(--safe-bottom))]"
      aria-label="بازگشت به بالا"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <Icon name="arrow-up" />
    </button>
  )
}
