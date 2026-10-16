import {
  BadgeCheck, Building2, CalendarDays, Check, CodeXml, GraduationCap, HandHeart, Headset, HeartPulse, House, Languages, Layers3, LayoutDashboard, LayoutTemplate,
  Megaphone, MessageCircle, MousePointer2, PackageCheck, PenTool, Phone,
  Mail, Newspaper, Plane, Rocket, Search, ShieldCheck, ShoppingBag, Smartphone, Sparkles, Truck, Utensils, Workflow,
} from 'lucide-react'

const artworkIcons = {
  mobile: Smartphone,
  rtl: Languages,
  delivery: PackageCheck,
  web: LayoutTemplate,
  brand: PenTool,
  marketing: Megaphone,
  support: Headset,
  store: ShoppingBag,
  conversation: MessageCircle,
  plan: Workflow,
  code: CodeXml,
  premium: Sparkles,
  trust: ShieldCheck,
  start: Rocket,
  contact: Phone,
  corporate: Building2,
  health: HeartPulse,
  education: GraduationCap,
  property: House,
  restaurant: Utensils,
  travel: Plane,
  article: Newspaper,
  community: HandHeart,
  booking: CalendarDays,
  dashboard: LayoutDashboard,
  logistics: Truck,
  search: Search,
  mail: Mail,
} as const

export type CardArtworkKind = keyof typeof artworkIcons

export function getCardArtworkKind(value?: string): CardArtworkKind {
  return value && Object.hasOwn(artworkIcons, value) ? value as CardArtworkKind : 'web'
}

/** Lightweight title-related illustrations built from the shared Lucide icon system. */
export function CardArtwork({ kind, compact = false }: { kind: CardArtworkKind; compact?: boolean }) {
  const MainIcon = artworkIcons[kind]
  if (compact) return <div className="card-icon-artwork" data-artwork={kind} aria-hidden="true"><MainIcon size={34} strokeWidth={1.5} /></div>
  const DetailIcon = kind === 'delivery' || kind === 'trust' ? BadgeCheck : Check
  return (
    <div className={`card-illustration card-illustration--${kind}`} data-artwork={kind} aria-hidden="true">
      <div className="card-illustration__orbit card-illustration__orbit--one" />
      <div className="card-illustration__orbit card-illustration__orbit--two" />
      <span className="card-illustration__spark card-illustration__spark--one" />
      <span className="card-illustration__spark card-illustration__spark--two" />
      <div className="card-illustration__tile">
        <span className="card-illustration__chrome"><i /><i /><i /></span>
        <MainIcon className="card-illustration__icon" strokeWidth={1.35} />
        <span className="card-illustration__line" />
      </div>
      <span className="card-illustration__detail"><DetailIcon size={22} strokeWidth={1.7} /></span>
      <span className="card-illustration__satellite">
        {kind === 'web' || kind === 'mobile' ? <MousePointer2 size={23} /> : <Layers3 size={23} />}
      </span>
    </div>
  )
}
