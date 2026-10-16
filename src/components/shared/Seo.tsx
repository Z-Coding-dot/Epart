import { Helmet } from 'react-helmet-async'
import { settings } from '@/data/settings'

export function Seo({
  title,
  description,
  path = '/',
}: {
  title: string
  description: string
  path?: string
}) {
  const full = `${title} | ${settings.brandFa}`
  return (
    <Helmet>
      <html lang="fa-AF" dir="rtl" />
      <title>{full}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={full} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <link rel="canonical" href={path} />
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'ایپارت',
          alternateName: 'Epart',
          url: path,
        })}
      </script>
    </Helmet>
  )
}
