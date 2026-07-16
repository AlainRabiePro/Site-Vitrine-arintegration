// src/app/not-found.tsx
// 404 globale. Le root layout est un passthrough (le html/body vit dans [locale]/layout.tsx),
// cette page rend donc sa propre structure html/body.
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import { routing } from '@/i18n/routing'
import './globals.css'

const inter = Inter({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  // Cette route vit hors de [locale], qui porte le metadataBase du reste du site.
  metadataBase: new URL('https://arintegration.fr'),
  title: 'Page introuvable — AR Intégration',
  description: 'Cette page n’existe pas ou a été déplacée.',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <html lang={routing.defaultLocale} className={inter.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <main className="flex min-h-screen flex-col items-center justify-center bg-white px-5 text-center dark:bg-[#0A0A0A]">
            <span className="text-[13px] font-semibold uppercase tracking-wider text-dim dark:text-white/45">
              Erreur 404
            </span>
            <h1
              className="heading-display mt-4 max-w-2xl text-balance text-ink dark:text-white"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              Cette page n’existe pas.
            </h1>
            <p className="mt-5 max-w-md text-[16px] leading-relaxed text-muted dark:text-white/70">
              Le lien est peut-être obsolète ou l’adresse mal saisie.
            </p>
            <a href={`/${routing.defaultLocale}/`} className="btn-primary mt-8">
              Retour à l’accueil
            </a>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
