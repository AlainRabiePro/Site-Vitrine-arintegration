import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/routing'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { routing } from '@/i18n/routing'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return {
    title: 'Mentions légales',
    description: 'Mentions légales du site arintegration.fr (éditeur AR Intégration, Alain Rabie). Texte juridique en français — droit applicable français.',
    alternates: { canonical: `/${locale}/mentions-legales/` },
    robots: { index: true, follow: true },
  }
}

function Section({ title, children, id }: { title: string; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="border-t border-line py-10 dark:border-white/10">
      <h2 className="text-[20px] font-semibold tracking-tight text-ink dark:text-white md:text-[22px]">{title}</h2>
      <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted dark:text-white/70">{children}</div>
    </section>
  )
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:gap-6">
      <span className="min-w-[180px] text-[12px] font-semibold uppercase tracking-wider text-dim dark:text-white/45">
        {label}
      </span>
      <span className="text-ink dark:text-white/90">{value}</span>
    </div>
  )
}

export default async function MentionsLegales({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Header />
      <main>
        <article className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
          <Link href="/" className="inline-block text-[13.5px] font-medium text-muted transition-colors hover:text-ink dark:text-white/65 dark:hover:text-white">
            ← Retour à l'accueil
          </Link>

          <h1
            className="heading-display mt-8 text-balance text-ink dark:text-white"
            style={{ fontSize: 'clamp(2.25rem, 4.6vw, 3.6rem)' }}
          >
            Mentions légales
          </h1>
          <p className="mt-5 text-[15.5px] leading-relaxed text-muted dark:text-white/70">
            Texte juridique en français — droit applicable français (LCEN du 21 juin 2004 et RGPD UE 2016/679).
            {locale !== 'fr' && ' This legal page is kept in French as the governing language for this French legal entity.'}
          </p>

          <div className="mt-10">
            <Section title="Éditeur du site">
              <Row label="Raison sociale" value="AR Intégration (entreprise individuelle)" />
              <Row label="Représentant légal" value="Alain Rabie" />
              <Row label="SIRET" value="102 520 624 00010" />
              <Row label="Adresse" value="Villeurbanne, Lyon, France" />
              <Row
                label="Téléphone"
                value={<a href="tel:+33667755850" className="font-medium underline-offset-4 hover:underline dark:text-white">06 67 75 58 50</a>}
              />
              <Row
                label="Email"
                value={<a href="mailto:contact@arintegration.fr" className="font-medium underline-offset-4 hover:underline dark:text-white">contact@arintegration.fr</a>}
              />
              <Row label="Directeur de la publication" value="Alain Rabie" />
              <Row label="TVA" value="Non applicable, art. 293 B du CGI" />
            </Section>

            <Section title="Hébergement">
              <Row label="Hébergeur" value="Vercel Inc. — région France (Paris, eu-west)" />
              <Row label="Adresse" value="440 N Barranca Ave #4133, Covina, CA 91723, USA" />
              <Row label="Données serveur" value="Région Europe uniquement (Vercel Edge Network)" />
            </Section>

            <Section title="Propriété intellectuelle">
              <p>
                L'ensemble des éléments présents sur le site (textes, images, mises en page, code source) est la propriété d'AR Intégration. Toute reproduction sans autorisation est interdite.
              </p>
            </Section>

            <Section title="Conditions générales de vente" id="cgv">
              <p>
                <strong className="text-ink dark:text-white">Délais :</strong> 7 à 15 jours ouvrés selon offre site vitrine. 4 à 8 semaines pour application mobile.{' '}
                <strong className="text-ink dark:text-white">Acompte :</strong> 30% à la commande, solde à la livraison.{' '}
                <strong className="text-ink dark:text-white">Paiement :</strong> CB, virement, ou prélèvement échelonné en 3 fois sans frais.{' '}
                <strong className="text-ink dark:text-white">Garantie :</strong> 3 mois de support inclus minimum, 6 mois pour offres Premium.
              </p>
            </Section>

            <Section title="Droit applicable">
              <p>
                Les présentes mentions sont soumises au droit français. Tout litige relatif à l'interprétation ou l'exécution sera de la compétence exclusive des tribunaux français du ressort de Lyon.
              </p>
            </Section>

            <Section title="Contact">
              <p>
                Pour toute question :{' '}
                <a href="mailto:contact@arintegration.fr" className="font-medium text-ink underline-offset-4 hover:underline dark:text-white">
                  contact@arintegration.fr
                </a>{' '}
                ou{' '}
                <a href="tel:+33667755850" className="font-medium text-ink underline-offset-4 hover:underline dark:text-white">
                  06 67 75 58 50
                </a>.
              </p>
            </Section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
