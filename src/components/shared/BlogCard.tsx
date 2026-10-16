import { Card } from '@/components/ui/Card'
import { toFaDigits } from '@/utils/format'
import type { Article } from '@/types'
import { CardArtwork } from '@/components/shared/CardArtwork'

export function BlogCard({ article }: { article: Article }) {
  return (
    <Card corner to={`/blog/${article.slug}`} linkLabel={article.title} description={article.excerpt}
      artwork={<CardArtwork kind={article.slug === 'rtl-web' ? 'rtl' : 'mobile'} />}
      subtitle={<>{toFaDigits(article.date)}{article.placeholder && ' · مقاله نمونه'}</>} className="blog-card h-full">
      <h3 className="text-lg font-bold">{article.title}</h3>
    </Card>
  )
}
