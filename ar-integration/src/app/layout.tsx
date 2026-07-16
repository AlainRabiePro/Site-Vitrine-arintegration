import type { Metadata } from 'next'
import type { ReactNode } from 'react'

// metadataBase au niveau racine : couvre les routes hors [locale] (404, opengraph-image)
// qui résolvent des URLs d'images absolues. [locale]/layout.tsx le redéfinit pour le site.
export const metadata: Metadata = {
  metadataBase: new URL('https://arintegration.fr'),
}

// Root layout : passthrough. Le vrai layout (html/body) est dans app/[locale]/layout.tsx.
// Next 14 exige un app/layout.tsx mais autorise qu'il soit délégué au layout enfant.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children
}
