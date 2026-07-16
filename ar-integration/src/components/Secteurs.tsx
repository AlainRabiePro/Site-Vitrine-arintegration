// src/components/Secteurs.tsx
import { useTranslations } from 'next-intl'
import { HardHat, Sparkles, Briefcase } from 'lucide-react'
import { Reveal } from './Reveal'

// Secteurs adossés à des applications réellement livrées — aucune promesse de délai.
const SECTORS = [
  { key: 'btp', icon: HardHat },
  { key: 'sante', icon: Sparkles },
  { key: 'gestion', icon: Briefcase },
] as const

export default function Secteurs() {
  const t = useTranslations('secteurs')
  return (
    <section id="secteurs" className="border-b border-line dark:border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <span className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-line px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted dark:border-white/15 dark:text-white/65">
            {t('kicker')}
          </span>
          <h2 className="heading-section mx-auto max-w-3xl text-center text-[34px] text-ink dark:text-white md:text-[48px]">
            {t('title')}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-[16px] leading-relaxed text-muted dark:text-white/70">
            {t('subtitle')}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SECTORS.map((sector, i) => {
            const Icon = sector.icon
            return (
              <Reveal key={sector.key} delay={(i % 3) * 0.08}>
                <article className="card-bordered flex h-full flex-col p-7">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line text-ink dark:border-white/15 dark:text-white">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>
                  <h3 className="text-[17px] font-semibold tracking-tight text-ink dark:text-white">
                    {t(`${sector.key}.name`)}
                  </h3>
                  <p className="mt-2 flex-1 text-[14px] leading-relaxed text-muted dark:text-white/65">
                    {t(`${sector.key}.tagline`)}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
