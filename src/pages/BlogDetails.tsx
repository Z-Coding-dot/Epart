import { Navigate, useParams } from 'react-router-dom'
import { Seo } from '@/components/shared/Seo'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { Section } from '@/components/ui/Section'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { articles } from '@/data/articles'

export function BlogDetails() {
  const { slug } = useParams()
  const article = articles.find((a) => a.slug === slug)
  if (!article) return <Navigate to="/blog" replace />

  return (
    <Section>
      <Seo title={article.title} description={article.excerpt} path={`/blog/${article.slug}`} />
      <Breadcrumb
        items={[
          { to: '/', label: 'خانه' },
          { to: '/blog', label: 'مقالات' },
          { label: article.title },
        ]}
      />
      <SectionTitle as="h1" title={article.title} subtitle={article.excerpt} />
    </Section>
  )
}
