import { BlogCard } from '@/components/shared/BlogCard'
import { Seo } from '@/components/shared/Seo'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { Section } from '@/components/ui/Section'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { articles } from '@/data/articles'

export function Blog() {
  return (
    <Section>
      <Seo title="مقالات" description="یادداشت‌های ایپارت درباره وب، موبایل و برند." path="/blog" />
      <Breadcrumb items={[{ to: '/', label: 'خانه' }, { label: 'مقالات' }]} />
      <SectionTitle as="h1" title="مقالات" subtitle="محتوای واقعی بعد از تأیید برنامه سایت جایگزین می‌شود." />
      <div className="grid gap-4 sm:grid-cols-2">
        {articles.map((article) => (
          <BlogCard key={article.slug} article={article} />
        ))}
      </div>
    </Section>
  )
}
