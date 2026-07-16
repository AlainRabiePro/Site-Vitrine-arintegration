'use client'

import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { countries } from '@/data/countries'

const SITE_SOURCE = 'arintegration.fr (site marque)'

const EMAILJS_SERVICE_ID = 'service_8ml6h64'
const EMAILJS_TEMPLATE_ID = 'template_w4kjqcl'
const EMAILJS_PUBLIC_KEY = 'MLPRubrisJiF2a_lW'

const TYPE_KEYS = ['mobile', 'web', 'agence', 'reprise', 'autre'] as const
const BUDGET_KEYS = ['b1', 'b2', 'b3', 'b4', 'b5', 'b6'] as const
const CRENEAU_KEYS = ['c1', 'c2', 'c3', 'c4'] as const

type Status = 'idle' | 'loading' | 'success' | 'error'

function buildFormattedMessage(d: FormData, fullPhone: string, locale: string): string {
  const userMessage = String(d.get('message') || '').trim()
  const lines: string[] = []
  if (userMessage) {
    lines.push('Message du visiteur :', userMessage, '')
  }
  lines.push('— Détails du contact —')
  const push = (label: string, value: string) => {
    if (value) lines.push(`${label} : ${value}`)
  }
  push('Nom', String(d.get('nom') || '').trim())
  push('Email', String(d.get('email') || '').trim())
  push('Téléphone', fullPhone)
  push('Entreprise', String(d.get('entreprise') || '').trim())
  push('Type de projet', String(d.get('type') || '').trim())
  push('Budget', String(d.get('budget') || '').trim())
  push('Créneau préféré', String(d.get('creneau') || '').trim())
  lines.push(`Langue visiteur : ${locale}`)
  lines.push(`Source : ${SITE_SOURCE}`)
  return lines.join('\n')
}

export default function ContactForm() {
  const t = useTranslations('contact.form')
  const locale = useLocale()
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    const form = e.currentTarget
    const data = new FormData(form)
    const indicatif = String(data.get('indicatif') || '+33').trim()
    const rawTel = String(data.get('telephone') || '').trim()
    const fullPhone = rawTel ? `${indicatif} ${rawTel}` : ''

    try {
      const { default: emailjs } = await import('@emailjs/browser')
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: String(data.get('nom') || ''),
          reply_to: String(data.get('email') || ''),
          project_type: String(data.get('type') || 'Non précisé'),
          message: buildFormattedMessage(data, fullPhone, locale),
          telephone: fullPhone,
          entreprise: String(data.get('entreprise') || ''),
          budget: String(data.get('budget') || ''),
          creneau: String(data.get('creneau') || ''),
          locale,
          site_source: SITE_SOURCE,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
      const detail = err instanceof Error ? err.message : t('errorFallback')
      setErrorMessage(detail)
    }
  }

  if (status === 'success') {
    return (
      <div className="card-bordered p-8 md:p-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400">
          <CheckCircle2 size={24} />
        </div>
        <h2 className="mt-5 text-[24px] font-bold tracking-tight text-ink dark:text-white">{t('successTitle')}</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-muted dark:text-white/65">
          {t('successText')}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="card-bordered space-y-5 p-6 md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="nom" className="label-field">{t('labelNom')}</label>
          <input id="nom" name="nom" type="text" required className="input-field" autoComplete="name" />
        </div>
        <div>
          <label htmlFor="email" className="label-field">{t('labelEmail')}</label>
          <input id="email" name="email" type="email" required className="input-field" autoComplete="email" />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="telephone" className="label-field">{t('labelTelephone')}</label>
          <div className="grid grid-cols-[140px_1fr] gap-2">
            <select
              id="indicatif"
              name="indicatif"
              required
              defaultValue="+33"
              className="input-field !px-2 text-[14px]"
              aria-label={t('labelIndicatif')}
            >
              {countries.map((c) => (
                <option key={c.code} value={c.dial}>
                  {c.flag} {c.dial} {c.name}
                </option>
              ))}
            </select>
            <input
              id="telephone"
              name="telephone"
              type="tel"
              required
              className="input-field"
              autoComplete="tel-national"
              placeholder={t('phonePlaceholder')}
            />
          </div>
        </div>
        <div>
          <label htmlFor="entreprise" className="label-field">{t('labelEntreprise')}</label>
          <input id="entreprise" name="entreprise" type="text" className="input-field" autoComplete="organization" />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="type" className="label-field">{t('labelType')}</label>
          <select id="type" name="type" required defaultValue="" className="input-field">
            <option value="" disabled>{t('choose')}</option>
            {TYPE_KEYS.map((k) => (
              <option key={k} value={t(`types.${k}`)}>{t(`types.${k}`)}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="label-field">{t('labelBudget')}</label>
          <select id="budget" name="budget" required defaultValue="" className="input-field">
            <option value="" disabled>{t('choose')}</option>
            {BUDGET_KEYS.map((k) => (
              <option key={k} value={t(`budgets.${k}`)}>{t(`budgets.${k}`)}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="creneau" className="label-field">{t('labelCreneau')}</label>
        <select id="creneau" name="creneau" required defaultValue="" className="input-field">
          <option value="" disabled>{t('choose')}</option>
          {CRENEAU_KEYS.map((k) => (
            <option key={k} value={t(`creneaux.${k}`)}>{t(`creneaux.${k}`)}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="label-field">{t('labelMessage')}</label>
        <textarea id="message" name="message" rows={4} className="textarea-field" placeholder={t('messagePlaceholder')} />
      </div>

      <label className="flex items-start gap-3 text-[13.5px] leading-relaxed text-muted dark:text-white/60">
        <input type="checkbox" name="rgpd" required className="mt-1 h-4 w-4 flex-shrink-0 accent-black dark:accent-white" />
        <span>
          {t('rgpd')}{' '}
          <a href="mailto:contact@arintegration.fr" className="font-medium text-ink underline-offset-4 hover:underline dark:text-white">
            contact@arintegration.fr
          </a>.
        </span>
      </label>

      {status === 'error' && (
        <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-[14px] text-red-700 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-300">
          <AlertCircle size={18} className="mt-0.5 flex-shrink-0" />
          <p>{errorMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full disabled:opacity-60"
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            {t('submitting')}
          </>
        ) : (
          t('submit')
        )}
      </button>

      <p className="text-center text-[12.5px] text-dim dark:text-white/45">
        {t('phoneAlt')}{' '}
        <a href="tel:+33667755850" className="font-medium text-ink underline-offset-4 hover:underline dark:text-white">
          06 67 75 58 50
        </a>
      </p>
    </form>
  )
}
