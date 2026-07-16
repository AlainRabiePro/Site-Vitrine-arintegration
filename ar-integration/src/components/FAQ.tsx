'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { Reveal } from './Reveal'

const QA_KEYS = ['1', '2', '3', '4', '5', '6'] as const

export default function FAQ() {
  const t = useTranslations('faq')
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="border-b border-line dark:border-white/10">
      <div className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <span className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-line px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted dark:border-white/15 dark:text-white/65">
            {t('kicker')}
          </span>
          <h2 className="heading-section text-center text-[34px] text-ink dark:text-white md:text-[48px]">
            {t('title')}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 divide-y divide-line border-y border-line dark:divide-white/10 dark:border-white/10">
            {QA_KEYS.map((n, i) => {
              const isOpen = openIndex === i
              return (
                <div key={n}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left text-ink dark:text-white"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[16px] font-semibold tracking-tight md:text-[17px]">
                      {t(`q${n}`)}
                    </span>
                    <Plus
                      size={20}
                      strokeWidth={1.7}
                      className={`flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 text-[15px] leading-relaxed text-muted dark:text-white/65">
                          {t(`a${n}`)}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
