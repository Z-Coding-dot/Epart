import { Seo } from '@/components/shared/Seo'
import { Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'
import { SectionTitle } from '@/components/ui/SectionTitle'

export function NotFound() {
  return (
    <Section>
      <Seo title="صفحه پیدا نشد" description="این مسیر در ایپارت وجود ندارد." path="/404" />
      <SectionTitle as="h1" title="صفحه پیدا نشد" subtitle="این آدرس در سایت نیست." />
      <Button to="/">بازگشت به خانه</Button>
    </Section>
  )
}
