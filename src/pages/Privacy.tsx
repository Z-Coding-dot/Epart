import { Seo } from '@/components/shared/Seo'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { Section } from '@/components/ui/Section'
import { SectionTitle } from '@/components/ui/SectionTitle'

export function Privacy() {
  return (
    <Section>
      <Seo title="حریم خصوصی" description="سیاست حریم خصوصی ایپارت." path="/privacy" />
      <Breadcrumb items={[{ to: '/', label: 'خانه' }, { label: 'حریم خصوصی' }]} />
      <SectionTitle as="h1"
        title="حریم خصوصی"
        subtitle="اطلاعات فرم تماس فقط برای باز کردن گفتگو در واتساپ استفاده می‌شود و روی سرور ایپارت ذخیره نمی‌گردد."
      />
    </Section>
  )
}
