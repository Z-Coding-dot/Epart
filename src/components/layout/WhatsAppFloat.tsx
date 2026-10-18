import { settings } from '@/data/settings'

export function WhatsAppFloat() {
  const href = `https://wa.me/${settings.whatsappNumber}`
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="whatsapp-float fixed bottom-[calc(5.25rem+var(--safe-bottom))] end-4 z-30 inline-flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-brand-orange text-white shadow-lift transition-colors hover:bg-brand-ink lg:bottom-[calc(1.5rem+var(--safe-bottom))]"
      aria-label="واتساپ"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
        <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.5-1.2A9 9 0 1 0 12 3Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M17 13.8c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.9 1.1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.3 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.1-.2a.5.5 0 0 0 0-.5c0-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4 13 13 0 0 0 1.3.5 3.1 3.1 0 0 0 1.4.1 2.4 2.4 0 0 0 1.6-1.1 2 2 0 0 0 .1-1.1c-.1-.2-.3-.2-.6-.3Z" />
      </svg>
    </a>
  )
}
