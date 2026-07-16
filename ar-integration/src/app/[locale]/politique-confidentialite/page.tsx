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
    title: 'Politique de confidentialité',
    description: 'Politique de confidentialité du site arintegration.fr. Conforme RGPD UE 2016/679.',
    alternates: { canonical: `/${locale}/politique-confidentialite/` },
    robots: { index: true, follow: true },
  }
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-line py-10 dark:border-white/10">
      <h2 className="text-[20px] font-semibold tracking-tight text-ink dark:text-white md:text-[22px]">{title}</h2>
      <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted dark:text-white/70">{children}</div>
    </section>
  )
}

export default async function PolitiqueConfidentialite({
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
            Politique de confidentialité
          </h1>
          <p className="mt-5 text-[15.5px] leading-relaxed text-muted dark:text-white/70">
            En vigueur au 10 mai 2026. Conforme au RGPD (UE 2016/679) et à la loi Informatique et Libertés modifiée.
            {locale !== 'fr' && ' This privacy policy is kept in French as the governing language for this French legal entity.'}
          </p>

          <div className="mt-10">
            <Section title="Responsable de traitement">
              <p>
                AR Intégration — Alain Rabie, développeur freelance indépendant. SIRET 102 520 624 00010, Villeurbanne, Lyon, France. Contact : <a href="mailto:contact@arintegration.fr" className="font-medium text-ink underline-offset-4 hover:underline dark:text-white">contact@arintegration.fr</a>.
              </p>
            </Section>

            <Section title="Données collectées">
              <p>
                <strong className="text-ink dark:text-white">Formulaire de contact :</strong> nom, email, téléphone, entreprise, type de projet, budget, offre intéressée, créneau préféré, message libre, langue du visiteur.
              </p>
              <p>
                <strong className="text-ink dark:text-white">Logs techniques :</strong> adresse IP, user-agent, horodatage.
              </p>
            </Section>

            <Section title="Durées de conservation">
              <p>
                <strong className="text-ink dark:text-white">Demandes non abouties :</strong> 12 mois maximum après le dernier échange.
              </p>
              <p>
                <strong className="text-ink dark:text-white">Clients :</strong> 3 ans après la fin du contrat (durée légale comptable et commerciale).
              </p>
              <p>
                <strong className="text-ink dark:text-white">Logs techniques :</strong> 6 mois maximum.
              </p>
            </Section>

            <Section title="Destinataires">
              <p>
                Vos données ne sont jamais vendues, louées ni cédées à des tiers. Sous-traitants techniques : Vercel (hébergement), EmailJS (routage des formulaires).
              </p>
              <p>
                <strong className="text-ink dark:text-white">Aucun transfert hors Union Européenne</strong> n'est effectué pour les données collectées via ce site, sauf consentement explicite et préalable.
              </p>
            </Section>

            <Section title="Vos droits">
              <p>
                Conformément aux articles 15 à 22 du RGPD, vous disposez des droits suivants : accès, rectification, effacement, limitation, portabilité, opposition, et droit de retirer votre consentement à tout moment.
              </p>
              <p>
                Pour exercer ces droits, écrivez à{' '}
                <a href="mailto:contact@arintegration.fr" className="font-medium text-ink underline-offset-4 hover:underline dark:text-white">
                  contact@arintegration.fr
                </a>. Réponse sous 30 jours maximum.
              </p>
              <p>
                En cas de désaccord, vous pouvez introduire une réclamation auprès de la{' '}
                <a href="https://www.cnil.fr/" target="_blank" rel="noopener noreferrer" className="font-medium text-ink underline-offset-4 hover:underline dark:text-white">
                  CNIL
                </a>{' '}
                (Commission Nationale Informatique et Libertés).
              </p>
            </Section>

            <Section title="Cookies">
              <p>
                Ce site utilise uniquement des cookies techniques (session, préférences de thème, langue). Aucun service américain (Google Analytics, Facebook Pixel) n'est intégré.
              </p>
            </Section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
