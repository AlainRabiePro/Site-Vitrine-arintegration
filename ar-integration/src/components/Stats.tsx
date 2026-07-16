// src/components/Stats.tsx
import { useTranslations } from 'next-intl'
import { Reveal } from './Reveal'

// Preuves vérifiables uniquement — aucune statistique non sourçable.
const PROOFS = ['proof1', 'proof2', 'proof3'] as const

export default function Stats() {
  const t = useTranslations('stats')
  return (
    <section className="bg-ink-soft text-white">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <Reveal>
          <span className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/70">
            {t('kicker')}
          </span>
          <h2 className="heading-section mx-auto max-w-3xl text-center text-[30px] text-white md:text-[42px]">
            {t('title')}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {PROOFS.map((key, i) => (
            <Reveal key={key} delay={i * 0.08}>
              <div className="h-full bg-ink-soft p-8">
                <p className="text-[22px] font-semibold leading-snug tracking-tight text-white md:text-[24px]">
                  {t(key)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
