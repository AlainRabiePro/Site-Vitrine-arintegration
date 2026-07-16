import type { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'

// trailingSlash: true dans next.config → les URLs canoniques se terminent toutes par '/'.
const ROUTES = ['/', '/contact/', '/mentions-legales/', '/politique-confidentialite/']

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://arintegration.fr'
  const now = new Date()
  const entries: MetadataRoute.Sitemap = []

  for (const route of ROUTES) {
    const altLanguages = Object.fromEntries(
      routing.locales.map((l) => [l, `${base}/${l}${route}`])
    )
    for (const locale of routing.locales) {
      const priority = route === '/' ? 1 : route === '/contact/' ? 0.8 : 0.3
      const changeFrequency = route === '/' ? 'monthly' as const : 'yearly' as const
      entries.push({
        url: `${base}/${locale}${route}`,
        lastModified: now,
        changeFrequency,
        priority,
        alternates: { languages: altLanguages },
      })
    }
  }

  return entries
}
