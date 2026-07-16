// src/components/Realisations.tsx
import { useTranslations } from 'next-intl'
import { Reveal } from './Reveal'

type Project = {
  key: 'cordea' | 'sistel' | 'subflow'
  stack: readonly string[]
}

const PROJECTS: readonly Project[] = [
  { key: 'cordea', stack: ['React Native', 'Expo', 'Supabase', 'RevenueCat'] },
  { key: 'sistel', stack: ['React Native', 'Expo', 'iOS', 'Offline-first'] },
  { key: 'subflow', stack: ['Next.js', 'Supabase', 'Stripe', 'Factur-X'] },
] as const

export default function Realisations() {
  const t = useTranslations('realisations')
  return (
    <section id="realisations" className="border-b border-line dark:border-white/10">
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

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.key} delay={(i % 3) * 0.08}>
              <article className="card-bordered flex h-full flex-col p-6">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-dim dark:text-white/45">
                  {t(`${project.key}.cat`)}
                </div>
                <h3 className="mt-2 text-[18px] font-semibold tracking-tight text-ink dark:text-white">
                  {t(`${project.key}.name`)}
                </h3>
                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-muted dark:text-white/65">
                  {t(`${project.key}.desc1`)} {t(`${project.key}.desc2`)}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-line px-2.5 py-1 text-[11px] font-medium text-muted dark:border-white/15 dark:text-white/65"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
