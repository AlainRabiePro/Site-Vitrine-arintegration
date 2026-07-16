// src/components/Tarifs.tsx
import { useTranslations } from 'next-intl'
import { Check } from 'lucide-react'
import { Reveal } from './Reveal'

const POINTS = ['point1', 'point2', 'point3'] as const

export default function Tarifs() {
  const t = useTranslations('tarifs')
  return (
    <section id="tarifs" className="border-b border-line dark:border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <span className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-line px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted dark:border-white/15 dark:text-white/65">
            {t('kicker')}
          </span>
          <h2 className="heading-section mx-auto max-w-3xl text-center text-[34px] text-ink dark:text-white md:text-[48px]">
            {t('title')}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-center text-[16.5px] leading-relaxed text-muted dark:text-white/70">
            {t('intro')}
          </p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-3">
          {POINTS.map((key, i) => (
            <Reveal key={key} delay={i * 0.08}>
              <article className="card-bordered flex h-full gap-3 p-6">
                <Check
                  size={16}
                  strokeWidth={2.2}
                  className="mt-1 flex-shrink-0 text-ink dark:text-white"
                />
                <p className="text-[14.5px] leading-relaxed text-muted dark:text-white/70">
                  {t(key)}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
