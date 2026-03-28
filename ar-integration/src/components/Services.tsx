'use client'
import { useState } from 'react'

const services = [
  {
    num:'01', icon:'◻', name:'Site Web Vitrine',
    desc:"Un site professionnel qui reflète votre image de marque et capte l'attention de vos clients dès les premières secondes.",
    tags:['Design','SEO','Responsive','Performance'],
  },
  {
    num:'02', icon:'◈', name:'E-Commerce',
    desc:"Une boutique en ligne optimisée pour convertir vos visiteurs en clients, avec une expérience d'achat fluide et intuitive.",
    tags:['Shopify','WooCommerce','Paiement sécurisé'],
  },
  {
    num:'03', icon:'◉', name:'Application Mobile',
    desc:"Une app iOS & Android native ou cross-platform qui engage vos utilisateurs et développe votre business sur mobile.",
    tags:['iOS','Android','React Native'],
  },
]

export default function Services() {
  const [hovered, setHovered] = useState<number|null>(null)
  return (
    <section id="services" style={{ padding:'120px 48px', background:'#0a0a0a' }}>
      <div style={{
        fontFamily:'var(--font-dm-mono)', fontSize:11, letterSpacing:3,
        textTransform:'uppercase', color:'#6b6b69', marginBottom:64,
        display:'flex', alignItems:'center', gap:16,
      }}>
        <span style={{ display:'block', width:32, height:1, background:'#2e2e2c' }}/>
        Services
      </div>

      <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginBottom:80, flexWrap:'wrap', gap:24 }}>
        <h2 style={{ fontFamily:'var(--font-bebas)', fontSize:'clamp(48px,6vw,80px)', lineHeight:1 }}>
          Ce que nous <span style={{ color:'#6b6b69' }}>créons</span> pour vous
        </h2>
        <p style={{ maxWidth:280, fontSize:14, color:'#b0b0ae', lineHeight:1.7, fontWeight:300 }}>
          Des solutions sur-mesure, pensées pour votre croissance et l'expérience de vos utilisateurs.
        </p>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', border:'1px solid #2e2e2c' }}>
        {services.map((s, i) => (
          <div key={i}
            onMouseEnter={()=>setHovered(i)}
            onMouseLeave={()=>setHovered(null)}
            style={{
              padding:'48px 40px',
              borderRight: i < 2 ? '1px solid #2e2e2c' : 'none',
              background: hovered === i ? '#1a1a18' : 'transparent',
              transition:'background .3s',
              position:'relative', overflow:'hidden',
            }}
          >
            <span style={{ fontFamily:'var(--font-dm-mono)', fontSize:11, color:'#2e2e2c', letterSpacing:2, display:'block', marginBottom:32 }}>{s.num}</span>
            <span style={{ fontSize:28, display:'block', marginBottom:24 }}>{s.icon}</span>
            <h3 style={{ fontFamily:'var(--font-bebas)', fontSize:32, letterSpacing:1, marginBottom:16, lineHeight:1 }}>{s.name}</h3>
            <p style={{ fontSize:14, color:'#b0b0ae', lineHeight:1.7, fontWeight:300, marginBottom:32 }}>{s.desc}</p>
            <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
              {s.tags.map(t => (
                <span key={t} style={{
                  fontFamily:'var(--font-dm-mono)', fontSize:10, letterSpacing:'1.5px',
                  textTransform:'uppercase', padding:'4px 10px',
                  border:'1px solid #2e2e2c', color:'#6b6b69',
                }}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
