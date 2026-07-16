import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-[12px] font-semibold uppercase tracking-wider text-white/45">{title}</h3>
      <ul className="mt-5 space-y-3">{children}</ul>
    </div>
  )
}

function FooterLink({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) {
  if (external || href.startsWith('mailto:') || href.startsWith('http')) {
    return (
      <li>
        <a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className="text-[14px] text-white/70 transition-colors hover:text-white"
        >
          {children}
        </a>
      </li>
    )
  }
  return (
    <li>
      <Link href={href} className="text-[14px] text-white/70 transition-colors hover:text-white">
        {children}
      </Link>
    </li>
  )
}

export default function Footer() {
  const t = useTranslations('footer')

  const COL_NAVIGATION = [
    { label: t('navigation.services'), href: '/#services' },
    { label: t('navigation.realisations'), href: '/#realisations' },
    { label: t('navigation.tarification'), href: '/#tarifs' },
    { label: t('navigation.faq'), href: '/#faq' },
    { label: t('navigation.contact'), href: '/#contact' },
  ]

  const COL_SERVICES = [
    { label: t('services.mobile'), href: '/#services' },
    { label: t('services.web'), href: '/#services' },
    { label: t('services.agences'), href: '/#services' },
    { label: t('services.reprise'), href: '/#services' },
  ]

  const COL_RESSOURCES = [
    { label: t('ressources.process'), href: '/#process' },
    { label: t('ressources.apropos'), href: '/#apropos' },
  ]

  const COL_LEGAL = [
    { label: t('legal.mentions'), href: '/mentions-legales' },
    { label: t('legal.privacy'), href: '/politique-confidentialite' },
    { label: t('legal.cgv'), href: '/mentions-legales#cgv' },
    { label: t('legal.rgpd'), href: 'mailto:contact@arintegration.fr' },
  ]

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="text-[18px] font-bold tracking-tight">
              AR Intégration
            </Link>
            <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-white/70">
              {t('tagline')}
            </p>
            <div className="mt-6 space-y-1.5 text-[13px] text-white/55">
              <div>Villeurbanne, Lyon — Auvergne-Rhône-Alpes</div>
              <a href="tel:+33667755850" className="block transition-colors hover:text-white">
                06 67 75 58 50
              </a>
              <a href="mailto:contact@arintegration.fr" className="block transition-colors hover:text-white">
                contact@arintegration.fr
              </a>
            </div>
          </div>

          <Column title={t('navigation.title')}>
            {COL_NAVIGATION.map((item) => (
              <FooterLink key={item.label} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </Column>

          <Column title={t('services.title')}>
            {COL_SERVICES.map((item) => (
              <FooterLink key={item.label} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </Column>

          <Column title={t('ressources.title')}>
            {COL_RESSOURCES.map((item) => (
              <FooterLink key={item.label} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </Column>
        </div>

        <div className="mt-12 grid gap-6 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex flex-wrap gap-6">
            {COL_LEGAL.map((item) => (
              item.href.startsWith('mailto:')
                ? <a key={item.label} href={item.href} className="text-[12.5px] text-white/55 transition-colors hover:text-white">{item.label}</a>
                : <Link key={item.label} href={item.href} className="text-[12.5px] text-white/55 transition-colors hover:text-white">{item.label}</Link>
            ))}
          </div>
          <div className="text-[12.5px] text-white/45">
            {t('copyright')}
          </div>
        </div>
      </div>
    </footer>
  )
}
