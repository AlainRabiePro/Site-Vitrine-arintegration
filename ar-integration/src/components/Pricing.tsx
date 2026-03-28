const plans = [
  {
    name:'Essentiel', price:'990', featured:false,
    desc:"Idéal pour les entrepreneurs et petites entreprises qui souhaitent établir leur présence en ligne.",
    features:["Site vitrine jusqu'à 5 pages","Design responsive & mobile","Optimisation SEO de base","Formulaire de contact","Livraison en 2 semaines"],
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
