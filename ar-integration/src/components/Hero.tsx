'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const t = useTranslations('hero')
  return (
    <section className="relative overflow-hidden border-b border-line dark:border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-14 text-center md:px-8 md:py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 text-[12px] font-medium text-muted dark:border-white/15 dark:bg-white/[0.04] dark:text-white/70"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          {t('badgeStatus')}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="heading-display mx-auto max-w-5xl text-pretty text-ink dark:text-white"
          style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}
        >
          {t('h1')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-muted dark:text-white/70 md:text-[18px]"
        >
          {t('subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a href="#contact" className="btn-primary">
            {t('ctaPrimary')}
            <ArrowRight size={16} />
          </a>
          <a href="#realisations" className="btn-outline">
            {t('ctaSecondary')}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-muted dark:text-white/60"
        >
          <span>{t('trustHosting')}</span>
          <span className="hidden h-1 w-1 rounded-full bg-line-strong dark:bg-white/20 sm:block" />
          <span>{t('trustRgpd')}</span>
          <span className="hidden h-1 w-1 rounded-full bg-line-strong dark:bg-white/20 sm:block" />
          <span>{t('trustDelivery')}</span>
          <span className="hidden h-1 w-1 rounded-full bg-line-strong dark:bg-white/20 sm:block" />
          <span>{t('trustAvailable')}</span>
        </motion.div>
      </div>
    </section>
  )
}
