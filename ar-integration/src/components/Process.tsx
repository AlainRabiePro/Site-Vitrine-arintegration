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
