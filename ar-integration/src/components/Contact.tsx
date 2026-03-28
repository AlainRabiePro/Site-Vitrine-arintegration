'use client'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    emailjs.sendForm(
      'service_8ml6h64', // Service ID
      'template_w4kjqcl', // Template ID (à personnaliser dans EmailJS)
      form,
      'MLPRubrisJiF2a_lW' // Remplacez par votre clé publique EmailJS
    )
    .then(() => {
      setSent(true)
      setTimeout(() => setSent(false), 3000)
      form.reset()
    })
    .catch(() => {
      alert('Erreur lors de l\'envoi du message.')
    })
  }

  return (
    <section id="contact" style={{ background:'#f5f5f3', color:'#0a0a0a', padding:'120px 48px', position:'relative', overflow:'hidden' }}>
      {/* BG text */}
      <div style={{
        position:'absolute', fontFamily:'var(--font-bebas)', fontSize:'22vw',
        color:'rgba(0,0,0,.04)', bottom:'-4vw', right:'-2vw',
        lineHeight:1, pointerEvents:'none', userSelect:'none',
      }}>AR</div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'start', position:'relative' }}>
        {/* Left */}
        <div>
          <div style={{
            fontFamily:'var(--font-dm-mono)', fontSize:11, letterSpacing:3,
            textTransform:'uppercase', color:'#6b6b69', marginBottom:64,
            display:'flex', alignItems:'center', gap:16,
          }}>
            <span style={{ display:'block', width:32, height:1, background:'#b0b0ae' }}/>
            Contact
          </div>
          <h2 style={{ fontFamily:'var(--font-bebas)', fontSize:'clamp(56px,7vw,100px)', lineHeight:.9, color:'#0a0a0a', marginBottom:32 }}>
            Parlons de votre projet
          </h2>
          <p style={{ fontSize:15, color:'#6b6b69', lineHeight:1.7, fontWeight:300, marginBottom:48 }}>
            Chaque grand projet commence par une conversation. Dites-nous ce que vous imaginez, on s'occupe du reste.
          </p>
          <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
            {[
              ['Email',   'contact@ar-integration.fr'],
              ['Réponse', 'Sous 24h ouvrées'],
              ['Basé',    'France — Télétravail'],
            ].map(([label, value]) => (
              <div key={label} style={{ display:'flex', alignItems:'center', gap:16 }}>
                <span style={{ fontFamily:'var(--font-dm-mono)', fontSize:10, letterSpacing:2, textTransform:'uppercase', color:'#6b6b69', width:80 }}>{label}</span>
                <span style={{ fontSize:14, color:'#0a0a0a', fontWeight:500 }}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:24 }}>
          {[
            { label:'Votre nom',      type:'text',  placeholder:'Marie Dupont' },
            { label:'Email',          type:'email', placeholder:'marie@entreprise.fr' },
            { label:'Type de projet', type:'text',  placeholder:'Site vitrine, App mobile...' },
          ].map(f => (
            <div key={f.label} style={{ display:'flex', flexDirection:'column', gap:8 }}>
              <label style={{ fontFamily:'var(--font-dm-mono)', fontSize:10, letterSpacing:2, textTransform:'uppercase', color:'#6b6b69' }}>{f.label}</label>
              <input type={f.type} placeholder={f.placeholder} required={f.type !== 'text' || f.label !== 'Type de projet'} style={{
                background:'transparent', border:'none', borderBottom:'1px solid #b0b0ae',
                padding:'12px 0', fontFamily:'var(--font-dm-sans)', fontSize:15, color:'#0a0a0a',
                outline:'none', width:'100%',
              }}/>
            </div>
          ))}
          <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
            <label style={{ fontFamily:'var(--font-dm-mono)', fontSize:10, letterSpacing:2, textTransform:'uppercase', color:'#6b6b69' }}>Message</label>
            <textarea placeholder="Décrivez votre projet..." rows={4} style={{
              background:'transparent', border:'none', borderBottom:'1px solid #b0b0ae',
              padding:'12px 0', fontFamily:'var(--font-dm-sans)', fontSize:15, color:'#0a0a0a',
              outline:'none', resize:'none', width:'100%',
            }}/>
          </div>
          <button type="submit" style={{
            background:'#0a0a0a', color:'#f5f5f3', border:'none',
            padding:'18px 40px', fontFamily:'var(--font-dm-mono)', fontSize:12,
            letterSpacing:3, textTransform:'uppercase', cursor:'pointer',
            alignSelf:'flex-start', transition:'opacity .2s',
          }}>
            {sent ? 'Envoyé ✓' : 'Envoyer →'}
          </button>
        </form>
      </div>
    </section>
  )
}
