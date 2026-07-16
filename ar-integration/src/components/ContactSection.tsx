import { Suspense } from 'react'
import { useTranslations } from 'next-intl'
import ContactForm from './ContactForm'
import { Reveal } from './Reveal'

export default function ContactSection() {
  const t = useTranslations('contact.section')
  return (
    <section id="contact" className="bg-ink-soft text-white">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/70">
                {t('kicker')}
              </span>
              <h2
                className="heading-display mt-6 text-balance text-white"
                style={{ fontSize: 'clamp(2rem, 4.6vw, 3.6rem)' }}
              >
                {t('h2')}
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-[17px] leading-relaxed text-white/70">
                {t('subtitle')}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 space-y-5 border-t border-white/10 pt-8">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-white/40">{t('phoneLabel')}</div>
                  <a href="tel:+33667755850" className="mt-1 block text-[18px] font-semibold tracking-tight text-white transition-colors hover:text-white/80">
                    06 67 75 58 50
                  </a>
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-white/40">{t('emailLabel')}</div>
                  <a href="mailto:contact@arintegration.fr" className="mt-1 block text-[18px] font-semibold tracking-tight text-white transition-colors hover:text-white/80">
                    contact@arintegration.fr
                  </a>
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-white/40">{t('addressLabel')}</div>
                  <div className="mt-1 text-[15px] text-white/85">
                    {t('addressValue')}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <Suspense fallback={<div className="h-[640px] animate-pulse rounded-2xl border border-line bg-white" />}>
              <ContactForm />
            </Suspense>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
