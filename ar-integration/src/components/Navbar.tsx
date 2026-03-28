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
