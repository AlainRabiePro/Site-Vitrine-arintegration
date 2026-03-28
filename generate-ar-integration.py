#!/usr/bin/env python3
"""
AR Integration — Générateur de projet Next.js
Exécuter : python3 generate-ar-integration.py
"""

import os
import json

PROJECT = "ar-integration"

FILES = {}

# ─────────────────────────────────────────────
# package.json
# ─────────────────────────────────────────────
FILES["package.json"] = json.dumps({
    "name": "ar-integration",
    "version": "0.1.0",
    "private": True,
    "scripts": {
        "dev": "next dev",
        "build": "next build",
        "start": "next start",
        "export": "next build && next export"
    },
    "dependencies": {
        "next": "14.2.3",
        "react": "^18",
        "react-dom": "^18",
        "framer-motion": "^11.1.7",
        "lucide-react": "^0.378.0"
    },
    "devDependencies": {
        "@types/node": "^20",
        "@types/react": "^18",
        "@types/react-dom": "^18",
        "autoprefixer": "^10.0.1",
        "postcss": "^8",
        "tailwindcss": "^3.3.0",
        "typescript": "^5"
    }
}, indent=2)

# ─────────────────────────────────────────────
# next.config.js  (static export pour OVH)
# ─────────────────────────────────────────────
FILES["next.config.js"] = """\
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // génère un dossier /out statique → upload sur OVH
  images: { unoptimized: true },
  trailingSlash: true,
}

module.exports = nextConfig
"""

# ─────────────────────────────────────────────
# tailwind.config.ts
# ─────────────────────────────────────────────
FILES["tailwind.config.ts"] = """\
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        body:    ['var(--font-dm-sans)', 'sans-serif'],
        mono:    ['var(--font-dm-mono)', 'monospace'],
      },
      colors: {
        ink:   '#0a0a0a',
        chalk: '#f5f5f3',
        muted: '#6b6b69',
        border:'#2e2e2c',
      },
    },
  },
  plugins: [],
}
export default config
"""

# ─────────────────────────────────────────────
# postcss.config.js
# ─────────────────────────────────────────────
FILES["postcss.config.js"] = """\
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
"""

# ─────────────────────────────────────────────
# tsconfig.json
# ─────────────────────────────────────────────
FILES["tsconfig.json"] = json.dumps({
    "compilerOptions": {
        "target": "es5",
        "lib": ["dom", "dom.iterable", "esnext"],
        "allowJs": True,
        "skipLibCheck": True,
        "strict": True,
        "noEmit": True,
        "esModuleInterop": True,
        "module": "esnext",
        "moduleResolution": "bundler",
        "resolveJsonModule": True,
        "isolatedModules": True,
        "jsx": "preserve",
        "incremental": True,
        "plugins": [{"name": "next"}],
        "paths": {"@/*": ["./src/*"]}
    },
    "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
    "exclude": ["node_modules"]
}, indent=2)

# ─────────────────────────────────────────────
# src/app/layout.tsx
# ─────────────────────────────────────────────
FILES["src/app/layout.tsx"] = """\
import type { Metadata } from 'next'
import { Bebas_Neue, DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
})
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})
const dmMono = DM_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-dm-mono',
})

export const metadata: Metadata = {
  title: 'AR Integration — Création Web & Mobile',
  description: 'AR Integration crée des sites web et applications mobiles qui transforment votre vision en expériences digitales qui convertissent.',
  keywords: ['création site web', 'application mobile', 'développement web', 'AR Integration'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${bebas.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
"""

# ─────────────────────────────────────────────
# src/app/globals.css
# ─────────────────────────────────────────────
FILES["src/app/globals.css"] = """\
@tailwind base;
@tailwind components;
@tailwind utilities;

* { margin: 0; padding: 0; box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  font-family: var(--font-dm-sans), sans-serif;
  background: #0a0a0a;
  color: #f5f5f3;
  overflow-x: hidden;
  cursor: none;
}

/* Custom scrollbar */
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: #0a0a0a; }
::-webkit-scrollbar-thumb { background: #2e2e2c; border-radius: 2px; }

/* Noise overlay */
body::before {
  content: '';
  position: fixed; inset: 0; pointer-events: none; z-index: 9997; opacity: 0.4;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E");
}
"""

# ─────────────────────────────────────────────
# src/app/page.tsx  (page principale)
# ─────────────────────────────────────────────
FILES["src/app/page.tsx"] = """\
'use client'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Stats from '@/components/Stats'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Cursor from '@/components/Cursor'

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Process />
        <Stats />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
"""

# ─────────────────────────────────────────────
# src/components/Cursor.tsx
# ─────────────────────────────────────────────
FILES["src/components/Cursor.tsx"] = """\
'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot  = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  const pos  = useRef({ x: 0, y: 0 })
  const ring_pos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dot.current) {
        dot.current.style.left = e.clientX + 'px'
        dot.current.style.top  = e.clientY + 'px'
      }
    }
    document.addEventListener('mousemove', move)

    let raf: number
    const animate = () => {
      ring_pos.current.x += (pos.current.x - ring_pos.current.x) * 0.12
      ring_pos.current.y += (pos.current.y - ring_pos.current.y) * 0.12
      if (ring.current) {
        ring.current.style.left = ring_pos.current.x + 'px'
        ring.current.style.top  = ring_pos.current.y + 'px'
      }
      raf = requestAnimationFrame(animate)
    }
    animate()

    const grow = () => { dot.current && (dot.current.style.transform = 'translate(-50%,-50%) scale(2.5)') }
    const shrink = () => { dot.current && (dot.current.style.transform = 'translate(-50%,-50%) scale(1)') }
    document.querySelectorAll('a,button').forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      document.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dot} style={{
        position:'fixed', width:10, height:10, background:'#f5f5f3',
        borderRadius:'50%', pointerEvents:'none', zIndex:9999,
        transform:'translate(-50%,-50%)', transition:'transform .15s ease',
        top:0, left:0,
      }}/>
      <div ref={ring} style={{
        position:'fixed', width:36, height:36, border:'1px solid rgba(245,245,243,.35)',
        borderRadius:'50%', pointerEvents:'none', zIndex:9998,
        transform:'translate(-50%,-50%)', top:0, left:0,
      }}/>
    </>
  )
}
"""

# ─────────────────────────────────────────────
# src/components/Navbar.tsx
# ─────────────────────────────────────────────
FILES["src/components/Navbar.tsx"] = """\
'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position:'fixed', top:0, left:0, right:0,
      padding:'24px 48px',
      display:'flex', alignItems:'center', justifyContent:'space-between',
      zIndex:100,
      borderBottom: scrolled ? '1px solid rgba(245,245,243,.08)' : '1px solid transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      background: scrolled ? 'rgba(10,10,10,.7)' : 'transparent',
      transition:'all .3s',
    }}>
      <Link href="/" style={{
        fontFamily:'var(--font-bebas)', fontSize:22, letterSpacing:3,
        color:'#f5f5f3', textDecoration:'none',
      }}>
        AR<span style={{color:'#6b6b69'}}>.</span>INTEGRATION
      </Link>

      <ul style={{ display:'flex', gap:40, listStyle:'none' }}>
        {[['#services','Services'],['#portfolio','Portfolio'],['#tarifs','Tarifs']].map(([href,label]) => (
          <li key={href}>
            <a href={href} style={{
              color:'#b0b0ae', textDecoration:'none', fontSize:13,
              letterSpacing:'1.5px', textTransform:'uppercase', fontWeight:500,
              transition:'color .2s',
            }}
            onMouseEnter={e=>(e.currentTarget.style.color='#f5f5f3')}
            onMouseLeave={e=>(e.currentTarget.style.color='#b0b0ae')}
            >{label}</a>
          </li>
        ))}
      </ul>

      <a href="#contact" style={{
        background:'#f5f5f3', color:'#0a0a0a',
        padding:'10px 22px', fontSize:12, letterSpacing:2,
        textTransform:'uppercase', fontWeight:500, textDecoration:'none',
        transition:'background .2s',
      }}
      onMouseEnter={e=>(e.currentTarget.style.background='#b0b0ae')}
      onMouseLeave={e=>(e.currentTarget.style.background='#f5f5f3')}
      >
        Démarrer un projet
      </a>
    </nav>
  )
}
"""

# ─────────────────────────────────────────────
# src/components/Hero.tsx
# ─────────────────────────────────────────────
FILES["src/components/Hero.tsx"] = """\
'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section style={{
      minHeight:'100vh', display:'flex', flexDirection:'column',
      justifyContent:'flex-end', padding:'0 48px 80px', position:'relative', overflow:'hidden',
    }}>
      {/* Grid overlay */}
      <div style={{
        position:'absolute', inset:0, pointerEvents:'none',
        backgroundImage:'linear-gradient(rgba(245,245,243,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(245,245,243,.03) 1px,transparent 1px)',
        backgroundSize:'80px 80px',
      }}/>

      {/* Badge */}
      <motion.div
        initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:.3 }}
        style={{
          display:'inline-flex', alignItems:'center', gap:10,
          border:'1px solid #2e2e2c', padding:'8px 16px',
          marginBottom:48, width:'fit-content',
        }}
      >
        <span style={{
          width:6, height:6, background:'#f5f5f3', borderRadius:'50%',
          animation:'pulse 2s infinite',
        }}/>
        <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:.3}}`}</style>
        <span style={{ fontFamily:'var(--font-dm-mono)', fontSize:11, letterSpacing:2, color:'#b0b0ae', textTransform:'uppercase' }}>
          Disponible pour nouveaux projets
        </span>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ delay:.2, duration:.9 }}
        style={{
          fontFamily:'var(--font-bebas)', fontSize:'clamp(72px,11vw,160px)',
          lineHeight:.9, letterSpacing:-1, marginBottom:48,
        }}
      >
        Votre présence<br/>
        <span style={{ color:'#6b6b69' }}>digitale,</span><br/>
        réinventée.
      </motion.h1>

      {/* Bottom */}
      <motion.div
        initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:.5 }}
        style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', flexWrap:'wrap', gap:32 }}
      >
        <p style={{ maxWidth:360, fontSize:15, lineHeight:1.7, color:'#b0b0ae', fontWeight:300 }}>
          AR Integration crée des <strong style={{ color:'#f5f5f3', fontWeight:500 }}>sites web</strong> et des{' '}
          <strong style={{ color:'#f5f5f3', fontWeight:500 }}>applications mobiles</strong> qui transforment
          votre vision en expériences digitales qui convertissent.
        </p>
        <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-end', gap:16 }}>
          <a href="#contact" style={{
            background:'#f5f5f3', color:'#0a0a0a', padding:'18px 40px',
            fontFamily:'var(--font-dm-mono)', fontSize:12, letterSpacing:3,
            textTransform:'uppercase', textDecoration:'none', fontWeight:500,
            transition:'transform .2s',
          }}
          onMouseEnter={e=>(e.currentTarget.style.transform='translateY(-2px)')}
          onMouseLeave={e=>(e.currentTarget.style.transform='translateY(0)')}
          >
            Lancer mon projet
          </a>
          <a href="#services" style={{
            color:'#6b6b69', fontFamily:'var(--font-dm-mono)', fontSize:11,
            letterSpacing:2, textTransform:'uppercase', textDecoration:'none',
          }}>↓ Découvrir nos services</a>
        </div>
      </motion.div>
    </section>
  )
}
"""

# ─────────────────────────────────────────────
# src/components/Marquee.tsx
# ─────────────────────────────────────────────
FILES["src/components/Marquee.tsx"] = """\
export default function Marquee() {
  const items = ['Sites Web','Applications Mobile','UI/UX Design','E-Commerce','React Native','Next.js','WordPress','Shopify']
  const doubled = [...items, ...items]
  return (
    <div style={{
      borderTop:'1px solid #2e2e2c', borderBottom:'1px solid #2e2e2c',
      overflow:'hidden', padding:'20px 0', background:'#1a1a18',
    }}>
      <style>{`
        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        .marquee-track { animation: marquee 22s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }
      `}</style>
      <div className="marquee-track" style={{ display:'flex', gap:60, width:'max-content' }}>
        {doubled.map((item, i) => (
          <span key={i} style={{
            fontFamily:'var(--font-dm-mono)', fontSize:11, letterSpacing:3,
            textTransform:'uppercase', color:'#6b6b69', whiteSpace:'nowrap',
          }}>
            {item} <span style={{ color:'#2e2e2c', marginLeft:60 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
"""

# ─────────────────────────────────────────────
# src/components/Services.tsx
# ─────────────────────────────────────────────
FILES["src/components/Services.tsx"] = """\
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
"""

# ─────────────────────────────────────────────
# src/components/Process.tsx
# ─────────────────────────────────────────────
FILES["src/components/Process.tsx"] = """\
const steps = [
  { num:'01', title:'Découverte', desc:"Analyse de vos objectifs, de votre marché et de vos utilisateurs cibles. On pose les bases du succès." },
  { num:'02', title:'Design',     desc:"Conception de l'interface et de l'expérience utilisateur. Maquettes validées avant tout développement." },
  { num:'03', title:'Développement', desc:"Code propre, performant et scalable. Développement agile avec points réguliers et livraisons continues." },
  { num:'04', title:'Lancement',  desc:"Mise en ligne, tests finaux et suivi post-lancement. On vous accompagne au-delà de la livraison." },
]

export default function Process() {
  return (
    <section id="process" style={{ padding:'120px 48px', background:'#1a1a18' }}>
      <div style={{
        fontFamily:'var(--font-dm-mono)', fontSize:11, letterSpacing:3,
        textTransform:'uppercase', color:'#6b6b69', marginBottom:64,
        display:'flex', alignItems:'center', gap:16,
      }}>
        <span style={{ display:'block', width:32, height:1, background:'#2e2e2c' }}/>
        Notre méthode
      </div>
      <h2 style={{ fontFamily:'var(--font-bebas)', fontSize:'clamp(48px,6vw,80px)', marginBottom:64, lineHeight:1 }}>
        De l'idée au lancement
      </h2>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', borderTop:'1px solid #2e2e2c' }}>
        {steps.map((s, i) => (
          <div key={i} style={{
            padding:'48px 32px',
            borderRight: i < 3 ? '1px solid #2e2e2c' : 'none',
            borderBottom:'1px solid #2e2e2c',
          }}>
            <span style={{
              fontFamily:'var(--font-bebas)', fontSize:80, lineHeight:1,
              color:'#2e2e2c', display:'block', marginBottom:24,
            }}>{s.num}</span>
            <h3 style={{ fontFamily:'var(--font-bebas)', fontSize:24, letterSpacing:1, marginBottom:12, color:'#f5f5f3' }}>{s.title}</h3>
            <p style={{ fontSize:13, color:'#6b6b69', lineHeight:1.7, fontWeight:300 }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
"""

# ─────────────────────────────────────────────
# src/components/Stats.tsx
# ─────────────────────────────────────────────
FILES["src/components/Stats.tsx"] = """\
const stats = [
  { num:'98%', label:'Clients satisfaits' },
  { num:'48H', label:'Délai de réponse' },
  { num:'50+', label:'Projets livrés' },
  { num:'3×',  label:'ROI moyen client' },
]

export default function Stats() {
  return (
    <div style={{ background:'#f5f5f3', padding:'80px 48px' }}>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', border:'1px solid #e8e8e6' }}>
        {stats.map((s, i) => (
          <div key={i} style={{
            padding:'48px 40px', textAlign:'center',
            borderRight: i < 3 ? '1px solid #e8e8e6' : 'none',
          }}>
            <span style={{ fontFamily:'var(--font-bebas)', fontSize:80, lineHeight:1, color:'#0a0a0a', display:'block', marginBottom:8 }}>{s.num}</span>
            <span style={{ fontFamily:'var(--font-dm-mono)', fontSize:11, letterSpacing:2, textTransform:'uppercase', color:'#6b6b69' }}>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
"""

# ─────────────────────────────────────────────
# src/components/Portfolio.tsx
# ─────────────────────────────────────────────
FILES["src/components/Portfolio.tsx"] = """\
const projects = [
  { cat:'Site Vitrine',      name:'Cabinet Conseil',  span: true  },
  { cat:'Application Mobile',name:'Startup Fintech',  span: false },
  { cat:'E-Commerce',        name:'Boutique Mode',    span: false },
]

export default function Portfolio() {
  return (
    <section id="portfolio" style={{ padding:'120px 48px', background:'#0a0a0a' }}>
      <div style={{
        fontFamily:'var(--font-dm-mono)', fontSize:11, letterSpacing:3,
        textTransform:'uppercase', color:'#6b6b69', marginBottom:64,
        display:'flex', alignItems:'center', gap:16,
      }}>
        <span style={{ display:'block', width:32, height:1, background:'#2e2e2c' }}/>
        Portfolio
      </div>
      <h2 style={{ fontFamily:'var(--font-bebas)', fontSize:'clamp(48px,6vw,80px)', marginBottom:64, lineHeight:1 }}>
        Nos réalisations
      </h2>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:2 }}>
        {projects.map((p, i) => (
          <div key={i} style={{
            position:'relative', background:'#1a1a18', overflow:'hidden',
            gridRow: p.span ? 'span 2' : 'auto',
            minHeight: p.span ? 'auto' : 240,
            aspectRatio: p.span ? 'auto' : '16/10',
            cursor:'pointer',
          }}
          onMouseEnter={e => { const info = e.currentTarget.querySelector('.info') as HTMLElement; if(info) info.style.transform = 'translateY(0)' }}
          onMouseLeave={e => { const info = e.currentTarget.querySelector('.info') as HTMLElement; if(info) info.style.transform = 'translateY(8px)' }}
          >
            {/* Mock UI */}
            <div style={{
              position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center',
            }}>
              <div style={{
                border:'1px solid #2e2e2c', padding:20, width:'55%',
                fontFamily:'var(--font-dm-mono)', fontSize:10, color:'#6b6b69',
              }}>
                <div style={{ display:'flex', gap:6, marginBottom:16 }}>
                  {[1,2,3].map(d=><div key={d} style={{ width:8, height:8, borderRadius:'50%', background:'#2e2e2c' }}/>)}
                </div>
                {[1,.8,.9,.7].map((w,j)=><div key={j} style={{ height:1, background:'#2e2e2c', width:`${w*100}%`, marginBottom:8 }}/>)}
              </div>
            </div>
            {/* Info overlay */}
            <div className="info" style={{
              position:'absolute', bottom:0, left:0, right:0, padding:32,
              background:'linear-gradient(to top, rgba(10,10,10,.9), transparent)',
              transform:'translateY(8px)', transition:'transform .3s',
            }}>
              <div style={{ fontFamily:'var(--font-dm-mono)', fontSize:10, letterSpacing:2, textTransform:'uppercase', color:'#6b6b69', marginBottom:8 }}>{p.cat}</div>
              <div style={{ fontFamily:'var(--font-bebas)', fontSize:28, letterSpacing:1 }}>{p.name}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
"""

# ─────────────────────────────────────────────
# src/components/Testimonials.tsx
# ─────────────────────────────────────────────
FILES["src/components/Testimonials.tsx"] = """\
const testimonials = [
  { text:"AR Integration a transformé notre présence en ligne. Le site est magnifique, rapide et nos leads ont augmenté de 40% dès le premier mois.", name:'Sophie Laurent', role:'CEO, Agence Conseil', initials:'SL' },
  { text:"L'application mobile développée est exactement ce dont nous avions besoin. Livraison dans les délais, code impeccable et suivi excellent.", name:'Thomas Mercier', role:'Fondateur, Startup Tech', initials:'TM' },
  { text:"Professionnalisme, créativité et réactivité. AR Integration est devenu notre partenaire digital de confiance. Je recommande vivement.", name:'Amélie Chen', role:'Directrice Marketing, PME', initials:'AC' },
]

export default function Testimonials() {
  return (
    <section style={{ padding:'120px 48px', background:'#1a1a18' }}>
      <div style={{
        fontFamily:'var(--font-dm-mono)', fontSize:11, letterSpacing:3,
        textTransform:'uppercase', color:'#6b6b69', marginBottom:64,
        display:'flex', alignItems:'center', gap:16,
      }}>
        <span style={{ display:'block', width:32, height:1, background:'#2e2e2c' }}/>
        Témoignages
      </div>
      <h2 style={{ fontFamily:'var(--font-bebas)', fontSize:'clamp(48px,6vw,80px)', marginBottom:64, lineHeight:1 }}>
        Ce qu'ils disent
      </h2>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:2 }}>
        {testimonials.map((t, i) => (
          <div key={i} style={{ background:'#0a0a0a', padding:'48px 40px', border:'1px solid #2e2e2c', transition:'border-color .3s' }}
            onMouseEnter={e=>(e.currentTarget.style.borderColor='#6b6b69')}
            onMouseLeave={e=>(e.currentTarget.style.borderColor='#2e2e2c')}
          >
            <div style={{ fontFamily:'var(--font-bebas)', fontSize:60, color:'#2e2e2c', lineHeight:1, marginBottom:16 }}>"</div>
            <p style={{ fontSize:15, color:'#b0b0ae', lineHeight:1.75, fontWeight:300, marginBottom:32, fontStyle:'italic' }}>{t.text}</p>
            <div style={{ display:'flex', alignItems:'center', gap:16 }}>
              <div style={{
                width:40, height:40, background:'#2e2e2c', borderRadius:'50%',
                display:'flex', alignItems:'center', justifyContent:'center',
                fontFamily:'var(--font-bebas)', fontSize:18, color:'#b0b0ae',
              }}>{t.initials}</div>
              <div>
                <span style={{ fontFamily:'var(--font-dm-mono)', fontSize:12, letterSpacing:1, color:'#f5f5f3', display:'block', marginBottom:2 }}>{t.name}</span>
                <span style={{ fontSize:12, color:'#6b6b69' }}>{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
"""

# ─────────────────────────────────────────────
# src/components/Pricing.tsx
# ─────────────────────────────────────────────
FILES["src/components/Pricing.tsx"] = """\
const plans = [
  {
    name:'Essentiel', price:'990', featured:false,
    desc:"Idéal pour les entrepreneurs et petites entreprises qui souhaitent établir leur présence en ligne.",
    features:['Site vitrine jusqu'à 5 pages','Design responsive & mobile','Optimisation SEO de base','Formulaire de contact','Livraison en 2 semaines'],
  },
  {
    name:'Business', price:'2 490', featured:true,
    desc:"Pour les entreprises qui veulent se démarquer et générer de la croissance avec un site performant.",
    features:["Site jusqu'à 15 pages",'Design premium sur-mesure','SEO avancé & analytics','Blog / Espace client','Intégrations CRM','Livraison en 4 semaines'],
  },
  {
    name:'Mobile App', price:'4 900', featured:false,
    desc:"Application mobile iOS & Android complète, de la conception au déploiement sur les stores.",
    features:['App iOS & Android','Design UI/UX complet','Backend & API inclus','Publication sur les stores','3 mois de support','Livraison en 8 semaines'],
  },
]

export default function Pricing() {
  return (
    <section id="tarifs" style={{ padding:'120px 48px', background:'#0a0a0a' }}>
      <div style={{
        fontFamily:'var(--font-dm-mono)', fontSize:11, letterSpacing:3,
        textTransform:'uppercase', color:'#6b6b69', marginBottom:64,
        display:'flex', alignItems:'center', gap:16,
      }}>
        <span style={{ display:'block', width:32, height:1, background:'#2e2e2c' }}/>
        Tarifs
      </div>
      <h2 style={{ fontFamily:'var(--font-bebas)', fontSize:'clamp(48px,6vw,80px)', marginBottom:16, lineHeight:1 }}>
        Investissez dans votre croissance
      </h2>
      <p style={{ fontSize:15, color:'#b0b0ae', marginBottom:64, fontWeight:300 }}>Des forfaits transparents, sans surprise.</p>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', border:'1px solid #2e2e2c' }}>
        {plans.map((p, i) => (
          <div key={i} style={{
            padding:'48px 40px', position:'relative',
            borderRight: i < 2 ? '1px solid #2e2e2c' : 'none',
            background: p.featured ? '#f5f5f3' : 'transparent',
            color: p.featured ? '#0a0a0a' : '#f5f5f3',
          }}>
            {p.featured && (
              <div style={{
                position:'absolute', top:-12, left:'50%', transform:'translateX(-50%)',
                background:'#0a0a0a', border:'1px solid #2e2e2c',
                padding:'4px 14px', fontFamily:'var(--font-dm-mono)',
                fontSize:10, letterSpacing:2, textTransform:'uppercase', color:'#f5f5f3', whiteSpace:'nowrap',
              }}>Le plus populaire</div>
            )}
            <span style={{
              fontFamily:'var(--font-dm-mono)', fontSize:11, letterSpacing:3,
              textTransform:'uppercase', color: p.featured ? '#6b6b69' : '#6b6b69',
              marginBottom:32, display:'block',
            }}>{p.name}</span>
            <div style={{ fontFamily:'var(--font-bebas)', fontSize:64, lineHeight:1, marginBottom:4 }}>
              <span style={{ fontFamily:'var(--font-dm-sans)', fontSize:18, fontWeight:300, verticalAlign:'super' }}>€</span>
              {p.price}
            </div>
            <p style={{ fontSize:13, color: p.featured ? '#6b6b69' : '#6b6b69', marginBottom:32, lineHeight:1.6 }}>{p.desc}</p>
            <div style={{ height:1, background: p.featured ? '#e8e8e6' : '#2e2e2c', marginBottom:32 }}/>
            <ul style={{ listStyle:'none', marginBottom:40 }}>
              {p.features.map(f => (
                <li key={f} style={{
                  fontSize:13, color: p.featured ? '#6b6b69' : '#b0b0ae',
                  padding:'8px 0', display:'flex', alignItems:'center', gap:12,
                }}>
                  <span style={{ color: p.featured ? '#0a0a0a' : '#2e2e2c', fontSize:12 }}>→</span>
                  {f}
                </li>
              ))}
            </ul>
            <a href="#contact" style={{
              display:'block', textAlign:'center', padding:'14px 24px',
              fontFamily:'var(--font-dm-mono)', fontSize:11, letterSpacing:2,
              textTransform:'uppercase', textDecoration:'none',
              background: p.featured ? '#0a0a0a' : 'transparent',
              color: p.featured ? '#f5f5f3' : '#f5f5f3',
              border: p.featured ? 'none' : '1px solid #2e2e2c',
              transition:'opacity .2s',
            }}
            onMouseEnter={e=>(e.currentTarget.style.opacity='.7')}
            onMouseLeave={e=>(e.currentTarget.style.opacity='1')}
            >Démarrer</a>
          </div>
        ))}
      </div>
    </section>
  )
}
"""

# ─────────────────────────────────────────────
# src/components/Contact.tsx
# ─────────────────────────────────────────────
FILES["src/components/Contact.tsx"] = """\
'use client'
import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
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
"""

# ─────────────────────────────────────────────
# src/components/Footer.tsx
# ─────────────────────────────────────────────
FILES["src/components/Footer.tsx"] = """\
export default function Footer() {
  return (
    <footer style={{
      background:'#0a0a0a', borderTop:'1px solid #2e2e2c',
      padding:'48px', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:24,
    }}>
      <div style={{ fontFamily:'var(--font-bebas)', fontSize:20, letterSpacing:3 }}>
        AR<span style={{ color:'#2e2e2c' }}>.</span>INTEGRATION
      </div>
      <div style={{ fontFamily:'var(--font-dm-mono)', fontSize:11, letterSpacing:'1.5px', color:'#6b6b69' }}>
        © {new Date().getFullYear()} AR Integration. Tous droits réservés.
      </div>
      <div style={{ display:'flex', gap:32 }}>
        {[['#services','Services'],['#portfolio','Portfolio'],['#contact','Contact']].map(([href,label]) => (
          <a key={href} href={href} style={{
            fontFamily:'var(--font-dm-mono)', fontSize:11, letterSpacing:'1.5px',
            textTransform:'uppercase', color:'#6b6b69', textDecoration:'none',
            transition:'color .2s',
          }}
          onMouseEnter={e=>(e.currentTarget.style.color='#f5f5f3')}
          onMouseLeave={e=>(e.currentTarget.style.color='#6b6b69')}
          >{label}</a>
        ))}
      </div>
    </footer>
  )
}
"""

# ─────────────────────────────────────────────
# README.md
# ─────────────────────────────────────────────
FILES["README.md"] = """\
# AR Integration — Site Vitrine Next.js

## 🚀 Installation

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer en développement
npm run dev
# → Ouvrir http://localhost:3000

# 3. Build pour la production (OVH)
npm run build
# → Génère le dossier /out à uploader sur OVH
```

## 📁 Structure du projet

```
src/
├── app/
│   ├── layout.tsx       # Layout principal + polices
│   ├── page.tsx         # Page d'accueil
│   └── globals.css      # Styles globaux
└── components/
    ├── Cursor.tsx        # Curseur personnalisé
    ├── Navbar.tsx        # Navigation fixe
    ├── Hero.tsx          # Section hero
    ├── Marquee.tsx       # Bandeau défilant
    ├── Services.tsx      # Nos services
    ├── Process.tsx       # Notre méthode
    ├── Stats.tsx         # Chiffres clés
    ├── Portfolio.tsx     # Réalisations
    ├── Testimonials.tsx  # Avis clients
    ├── Pricing.tsx       # Tarifs
    ├── Contact.tsx       # Formulaire contact
    └── Footer.tsx        # Pied de page
```

## 🌐 Déploiement sur OVH

1. Exécuter `npm run build`
2. Le dossier `/out` est généré
3. Uploader le contenu de `/out` via FTP sur votre hébergement OVH
4. C'est tout ! Le site est statique, aucun serveur Node.js requis.

## ✏️ Personnalisation

- **Tarifs** → `src/components/Pricing.tsx`
- **Services** → `src/components/Services.tsx`
- **Portfolio** → `src/components/Portfolio.tsx`
- **Contact** → `src/components/Contact.tsx` (email)
- **Témoignages** → `src/components/Testimonials.tsx`
"""

# ─────────────────────────────────────────────
# GÉNÉRATION
# ─────────────────────────────────────────────
def create_file(path: str, content: str):
    full = os.path.join(PROJECT, path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"  ✓  {path}")

def main():
    print(f"\n🚀 Génération du projet Next.js : {PROJECT}/\n")
    os.makedirs(PROJECT, exist_ok=True)

    for path, content in FILES.items():
        create_file(path, content)

    print(f"\n✅  {len(FILES)} fichiers créés dans ./{PROJECT}/\n")
    print("─" * 50)
    print("📦 Prochaines étapes :\n")
    print(f"   cd {PROJECT}")
    print("   npm install")
    print("   npm run dev          # → http://localhost:3000")
    print("   npm run build        # → génère /out pour OVH")
    print("─" * 50)
    print("\n📤 Déploiement OVH :")
    print("   Upload le contenu du dossier /out via FTP\n")

if __name__ == "__main__":
    main()