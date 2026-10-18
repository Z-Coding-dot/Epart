import type { NavItem } from '@/types'

export const navItems: NavItem[] = [
  { to: '/', label: 'خانه' },
  { to: '/about', label: 'درباره ما' },
  {
    to: '/services',
    label: 'خدمات',
    children: [
      { to: '/services/web-apps', label: 'وب و اپلیکیشن' },
      { to: '/services/branding', label: 'برندینگ و دیزاین' },
      { to: '/services/marketing', label: 'مارکتینگ دیجیتال' },
      { to: '/services/consulting', label: 'مشاوره و پشتیبانی' },
    ],
  },
  { to: '/portfolio', label: 'نمونه کارها' },
  { to: '/contact', label: 'تماس' },
]
