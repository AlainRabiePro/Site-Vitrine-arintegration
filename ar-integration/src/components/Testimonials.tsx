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
