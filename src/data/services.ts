import type { ServiceCategory } from '@/types'
import { serviceItems } from '@/data/serviceItems'

/**
 * PLACEHOLDER until the Dari site plan (§4 / §11) is provided.
 * Service options expanded at the user's request. Only active categories/items render.
 */
export const services: ServiceCategory[] = [
  {
    slug: 'web-apps',
    title: 'وب و اپلیکیشن',
    short: 'سایت شرکتی، فروشگاهی و اپلیکیشن موبایل',
    description:
      'طراحی و ساخت وب‌سایت و اپلیکیشن با ظاهر لوکس، سرعت بالا و تجربه کاربری درست برای موبایل و دسکتاپ.',
    icon: 'monitor',
    artwork: 'web',
    active: true,
    items: serviceItems['web-apps'],
  },
  {
    slug: 'branding',
    title: 'برندینگ و دیزاین',
    short: 'هویت بصری، لوگو و سیستم دیزاین',
    description:
      'ساخت هویت برند منسجم: لوگو، رنگ، تایپ و رابط‌هایی که کسب‌وکار شما را جدی و به‌یادماندنی نشان می‌دهد.',
    icon: 'palette',
    artwork: 'brand',
    active: true,
    items: serviceItems.branding,
  },
  {
    slug: 'marketing',
    title: 'مارکتینگ دیجیتال',
    short: 'حضور آنلاین، محتوا و رشد',
    description:
      'برنامه‌ریزی حضور دیجیتال، محتوای هدفمند و کمپین‌هایی که مشتری واقعی به سمت شما می‌آورد.',
    icon: 'megaphone',
    artwork: 'marketing',
    active: true,
    items: serviceItems.marketing,
  },
  {
    slug: 'consulting',
    title: 'مشاوره و پشتیبانی',
    short: 'همراهی فنی بعد از تحویل پروژه',
    description:
      'مشاوره محصول، بازبینی فنی و پشتیبانی مداوم تا سیستم شما پایدار بماند و رشد کند.',
    icon: 'headset',
    artwork: 'support',
    active: true,
    items: serviceItems.consulting,
  },
]

export const activeServices = () => services.filter((s) => s.active)
