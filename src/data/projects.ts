import type { Project } from '@/types'

/** Schema is ready. Entries are flagged placeholders — hide or replace with real work. */
export const projects: Project[] = [
  {
    slug: 'corporate-site',
    title: 'سایت شرکتی نمونه',
    category: 'وب',
    summary: 'الگوی نمایش کارت پروژه. پروژه واقعی هنوز اضافه نشده است.',
    placeholder: true,
  },
  {
    slug: 'brand-system',
    title: 'سیستم برند نمونه',
    category: 'برندینگ',
    summary: 'جای خالی برای هویت بصری واقعی مشتری.',
    placeholder: true,
  },
  {
    slug: 'storefront',
    title: 'فروشگاه نمونه',
    category: 'وب',
    summary: 'جای خالی برای یک فروشگاه تکمیل‌شده.',
    placeholder: true,
  },
]
