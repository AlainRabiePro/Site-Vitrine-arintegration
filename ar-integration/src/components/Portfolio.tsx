'use client'

const projects = [
  {
    cat: 'E-Commerce',
    name: 'Loenora',
    span: true,
    browser: false,
    comingSoon: true,
    accent: '#c8a96e',
    screen: (
      <div style={{ width:'100%', height:'100%', background:'#f5f0ea', display:'flex', flexDirection:'column', overflow:'hidden' }}>
        {/* Status bar */}
        <div style={{ display:'flex', justifyContent:'space-between', padding:'8px 12px 4px', fontSize:8, color:'#333', fontFamily:'sans-serif' }}>
          <span>9:41</span><span>●●●</span>
        </div>
        {/* Header */}
        <div style={{ padding:'6px 12px 8px', borderBottom:'1px solid #e0d9d0' }}>
          <div style={{ fontFamily:'Georgia,serif', fontSize:13, color:'#2a1f14', letterSpacing:2, textAlign:'center' }}>LOENORA</div>
        </div>
        {/* Hero image placeholder */}
        <div style={{ margin:'8px', background:'#e5ddd4', height:70, display:'flex', alignItems:'center', justifyContent:'center', position:'relative', overflow:'hidden' }}>
          <div style={{ width:32, height:32, borderRadius:'50%', background:'#c8a96e', opacity:.5 }}/>
          <div style={{ position:'absolute', bottom:6, left:8, fontFamily:'Georgia,serif', fontSize:8, color:'#5a4a3a' }}>Nouvelle collection</div>
        </div>
        {/* Products grid */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:4, padding:'0 8px' }}>
          {[1,2,3,4].map(i => (
            <div key={i} style={{ background:'#ede8e1', height:44, display:'flex', flexDirection:'column', justifyContent:'flex-end', padding:4 }}>
              <div style={{ height:1, background:'#c8a96e', width:'40%', marginBottom:2 }}/>
              <div style={{ height:5, background:'#bbb', width:'70%', borderRadius:1, marginBottom:2 }}/>
              <div style={{ height:4, background:'#c8a96e', width:'40%', borderRadius:1 }}/>
            </div>
          ))}
        </div>
        {/* Bottom nav */}
        <div style={{ marginTop:'auto', display:'flex', justifyContent:'space-around', padding:'6px 0', borderTop:'1px solid #e0d9d0' }}>
          {['⌂','♡','◫','◉'].map((ic,i) => (
            <span key={i} style={{ fontSize:10, color: i===0 ? '#c8a96e' : '#999' }}>{ic}</span>
          ))}
        </div>
      </div>
    ),
  },
  {
    cat: 'Application Mobile',
    name: 'Galiya',
    span: false,
    browser: false,
    comingSoon: true,
    accent: '#4ade80',
    screen: (
      <div style={{ width:'100%', height:'100%', background:'#0f1a0f', display:'flex', flexDirection:'column', overflow:'hidden' }}>
        <div style={{ display:'flex', justifyContent:'space-between', padding:'8px 12px 4px', fontSize:8, color:'#aaa', fontFamily:'sans-serif' }}>
          <span>9:41</span><span>●●●</span>
        </div>
        <div style={{ padding:'4px 12px 8px' }}>
          <div style={{ fontSize:9, color:'#4ade80', fontFamily:'sans-serif', fontWeight:600, letterSpacing:1 }}>GALIYA</div>
          <div style={{ fontSize:7, color:'#555', fontFamily:'sans-serif' }}>Bonjour, Alain 👋</div>
        </div>
        {/* Macro ring */}
        <div style={{ display:'flex', justifyContent:'center', marginBottom:6 }}>
          <div style={{ width:48, height:48, borderRadius:'50%', border:'3px solid #1a2e1a', display:'flex', alignItems:'center', justifyContent:'center', position:'relative' }}>
            <div style={{ position:'absolute', inset:0, borderRadius:'50%', border:'3px solid transparent', borderTopColor:'#4ade80', borderRightColor:'#facc15', transform:'rotate(-30deg)' }}/>
            <span style={{ fontSize:8, color:'#fff', fontFamily:'sans-serif', fontWeight:700 }}>74%</span>
          </div>
        </div>
        {/* Stats row */}
        <div style={{ display:'flex', gap:4, padding:'0 8px', marginBottom:6 }}>
          {[['Kcal','1840','#4ade80'],['Protéines','92g','#60a5fa'],['Glucides','210g','#facc15']].map(([l,v,c],i) => (
            <div key={i} style={{ flex:1, background:'#1a2a1a', borderRadius:4, padding:4, textAlign:'center' }}>
              <div style={{ fontSize:8, color:c as string, fontFamily:'sans-serif', fontWeight:700 }}>{v}</div>
              <div style={{ fontSize:6, color:'#555', fontFamily:'sans-serif' }}>{l}</div>
            </div>
          ))}
        </div>
        {/* Meals */}
        {['Petit-déj','Déjeuner','Dîner'].map((m,i) => (
          <div key={i} style={{ margin:'0 8px 4px', background:'#1a2a1a', borderRadius:4, padding:'4px 6px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
            <span style={{ fontSize:7, color:'#ccc', fontFamily:'sans-serif' }}>{m}</span>
            <div style={{ height:3, background:'#4ade80', width:`${[60,80,40][i]}%`, borderRadius:2, opacity:.7 }}/>
          </div>
        ))}
      </div>
    ),
  },
  {
    cat: 'Site Vitrine',
    name: 'AR-Integration',
    span: false,
    browser: true,
    accent: '#3b82f6',
    screen: (
      <div style={{ width:'100%', height:'100%', background:'#0d0d0d', display:'flex', flexDirection:'column', overflow:'hidden', position:'relative' }}>
        {/* Grid background */}
        <div style={{
          position:'absolute', inset:0, opacity:.15,
          backgroundImage:'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
          backgroundSize:'12px 12px',
          pointerEvents:'none',
        }}/>
        {/* Status bar */}
        <div style={{ display:'flex', justifyContent:'space-between', padding:'8px 12px 4px', fontSize:7, color:'#555', fontFamily:'sans-serif', position:'relative', zIndex:1 }}>
          <span>9:41</span><span>●●●</span>
        </div>
        {/* Navbar */}
        <div style={{ padding:'4px 10px 6px', display:'flex', justifyContent:'space-between', alignItems:'center', position:'relative', zIndex:1 }}>
          <span style={{ fontSize:8, color:'#fff', fontFamily:'sans-serif', fontWeight:900, letterSpacing:.5 }}>AR.INTEGRATION</span>
          <div style={{ border:'1px solid #fff', padding:'2px 5px', borderRadius:1 }}>
            <span style={{ fontSize:6, color:'#fff', fontFamily:'sans-serif', letterSpacing:.5 }}>PROJET</span>
          </div>
        </div>
        {/* Badge disponible */}
        <div style={{ margin:'6px 10px 0', border:'1px solid #2e2e2c', padding:'3px 6px', display:'inline-flex', alignItems:'center', gap:4, width:'fit-content', position:'relative', zIndex:1 }}>
          <div style={{ width:4, height:4, borderRadius:'50%', background:'#fff' }}/>
          <span style={{ fontSize:6, color:'#999', fontFamily:'var(--font-dm-mono, monospace)', letterSpacing:1 }}>DISPONIBLE POUR NOUVEAUX PROJETS</span>
        </div>
        {/* Hero heading */}
        <div style={{ padding:'8px 10px 0', position:'relative', zIndex:1 }}>
          <div style={{ fontFamily:'var(--font-bebas, sans-serif)', fontSize:18, color:'#fff', lineHeight:1, fontWeight:900, letterSpacing:.5 }}>VOTRE PRÉSENCE</div>
          <div style={{ fontFamily:'var(--font-bebas, sans-serif)', fontSize:18, color:'#444', lineHeight:1, fontWeight:900, letterSpacing:.5 }}>DIGITALE,</div>
          <div style={{ fontFamily:'var(--font-bebas, sans-serif)', fontSize:18, color:'#fff', lineHeight:1, fontWeight:900, letterSpacing:.5 }}>RÉINVENTÉE.</div>
        </div>
        {/* Description */}
        <div style={{ padding:'6px 10px 0', position:'relative', zIndex:1 }}>
          <span style={{ fontSize:6, color:'#666', fontFamily:'sans-serif', lineHeight:1.4 }}>AR Integration crée des <strong style={{ color:'#ccc' }}>sites web</strong> et des <strong style={{ color:'#ccc' }}>applications mobiles</strong> qui transforment votre vision.</span>
        </div>
        {/* CTA */}
        <div style={{ padding:'8px 10px 0', display:'flex', gap:6, position:'relative', zIndex:1 }}>
          <div style={{ background:'#fff', padding:'3px 8px', borderRadius:1 }}>
            <span style={{ fontSize:6, color:'#000', fontFamily:'sans-serif', fontWeight:700, letterSpacing:.5 }}>LANCER MON PROJET</span>
          </div>
        </div>
        <div style={{ padding:'6px 10px 0', position:'relative', zIndex:1 }}>
          <span style={{ fontSize:6, color:'#444', fontFamily:'sans-serif', letterSpacing:.5 }}>↓ DÉCOUVRIR NOS SERVICES</span>
        </div>
      </div>
    ),
  },
]

function BrowserMockup({ screen, accent }: { screen: React.ReactNode; accent: string }) {
  return (
    <div style={{
      position: 'relative',
      width: 260,
      background: '#1e1e1e',
      borderRadius: 10,
      boxShadow: `0 0 0 1px #2a2a2a, 0 32px 64px rgba(0,0,0,.7), 0 0 60px ${accent}18`,
      overflow: 'hidden',
      flexShrink: 0,
    }}>
      {/* Browser chrome */}
      <div style={{ background:'#1e1e1e', padding:'8px 12px', display:'flex', alignItems:'center', gap:8, borderBottom:'1px solid #2a2a2a' }}>
        {/* Traffic lights */}
        <div style={{ display:'flex', gap:5 }}>
          {['#ff5f56','#ffbd2e','#27c93f'].map((c,i) => (
            <div key={i} style={{ width:8, height:8, borderRadius:'50%', background:c }}/>
          ))}
        </div>
        {/* URL bar */}
        <div style={{ flex:1, background:'#2a2a2a', borderRadius:4, padding:'3px 8px', display:'flex', alignItems:'center', gap:4 }}>
          <div style={{ width:6, height:6, borderRadius:'50%', border:'1px solid #555' }}/>
          <span style={{ fontSize:7, color:'#666', fontFamily:'sans-serif' }}>ar-integration.fr</span>
        </div>
      </div>
      {/* Page content */}
      <div style={{ height: 160, overflow:'hidden' }}>
        {screen}
      </div>
    </div>
  )
}

function PhoneMockup({ screen, accent }: { screen: React.ReactNode; accent: string }) {
  return (
    <div style={{
      position: 'relative',
      width: 140,
      height: 280,
      background: '#1a1a1a',
      borderRadius: 28,
      boxShadow: `0 0 0 2px #2a2a2a, 0 0 0 4px #111, 0 32px 64px rgba(0,0,0,.6), 0 0 40px ${accent}22`,
      flexShrink: 0,
    }}>
      {/* Side buttons */}
      <div style={{ position:'absolute', right:-3, top:60, width:3, height:24, background:'#222', borderRadius:'0 2px 2px 0' }}/>
      <div style={{ position:'absolute', left:-3, top:50, width:3, height:16, background:'#222', borderRadius:'2px 0 0 2px' }}/>
      <div style={{ position:'absolute', left:-3, top:74, width:3, height:28, background:'#222', borderRadius:'2px 0 0 2px' }}/>
      {/* Screen bezel */}
      <div style={{
        position: 'absolute',
        inset: 6,
        borderRadius: 22,
        background: '#000',
        overflow: 'hidden',
      }}>
        {/* Notch */}
        <div style={{
          position: 'absolute', top:0, left:'50%', transform:'translateX(-50%)',
          width: 50, height: 14, background: '#1a1a1a',
          borderRadius: '0 0 12px 12px', zIndex: 10,
        }}/>
        {/* Screen content */}
        <div style={{ position:'absolute', inset:0 }}>
          {screen}
        </div>
      </div>
    </div>
  )
}

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
            cursor:'default',
            display:'flex', alignItems:'center', justifyContent:'center',
          }}>
            {/* Ambient glow */}
            <div style={{
              position:'absolute', inset:0,
              background:`radial-gradient(ellipse at center, ${p.accent}12 0%, transparent 70%)`,
              pointerEvents:'none',
            }}/>
            {/* Mockup */}
            <div style={{
              display:'flex', alignItems:'center', justifyContent:'center',
              padding: p.span ? '48px 0' : '24px 0',
              transform: p.span ? 'rotate(-4deg)' : 'rotate(3deg)',
              transition:'transform .4s ease',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'rotate(0deg) scale(1.04)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = p.span ? 'rotate(-4deg)' : 'rotate(3deg)' }}
            >
              {p.browser
                ? <BrowserMockup screen={p.screen} accent={p.accent} />
                : <PhoneMockup screen={p.screen} accent={p.accent} />
              }
            </div>
            {/* Info overlay */}
            <div style={{
              position:'absolute', bottom:0, left:0, right:0, padding:32,
              background:'linear-gradient(to top, rgba(10,10,10,.95) 0%, transparent 100%)',
            }}>
              <div style={{ fontFamily:'var(--font-dm-mono)', fontSize:10, letterSpacing:2, textTransform:'uppercase', color:'#6b6b69', marginBottom:8 }}>{p.cat}</div>
              <div style={{ display:'flex', alignItems:'center', gap:12 }}>
                <div style={{ fontFamily:'var(--font-bebas)', fontSize:28, letterSpacing:1 }}>{p.name}</div>
                {p.comingSoon && (
                  <div style={{ fontFamily:'var(--font-dm-mono)', fontSize:8, letterSpacing:2, textTransform:'uppercase', color:'#4ade80', border:'1px solid #4ade8044', padding:'2px 6px' }}>
                    Bientôt
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
