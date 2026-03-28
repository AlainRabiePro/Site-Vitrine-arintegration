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
