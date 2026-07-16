import { useTranslations } from 'next-intl'
import { Reveal } from './Reveal'

const STEP_KEYS = ['step1', 'step2', 'step3', 'step4'] as const
const STEP_NUMBERS = ['01', '02', '03', '04'] as const

export default function Process() {
  const t = useTranslations('process')
  return (
    <section id="process" className="border-b border-line dark:border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <span className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-line px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted dark:border-white/15 dark:text-white/65">
            {t('kicker')}
          </span>
          <h2 className="heading-section mx-auto max-w-3xl text-center text-[34px] text-ink dark:text-white md:text-[48px]">
            {t('title')}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-line dark:bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {STEP_KEYS.map((key, i) => (
            <Reveal key={key} delay={i * 0.08}>
              <article className="h-full bg-white p-7 dark:bg-[#0A0A0A] md:p-8">
                <div className="text-[12px] font-mono font-medium text-dim dark:text-white/40">{t('step')} {STEP_NUMBERS[i]}</div>
                <h3 className="mt-4 text-[19px] font-semibold tracking-tight text-ink dark:text-white">{t(`${key}.title`)}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-muted dark:text-white/65">{t(`${key}.text`)}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
