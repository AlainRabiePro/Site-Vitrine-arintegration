import emailjs from '@emailjs/browser';

const projects = [
  { cat:'E-Commerce',      name:'Loenora',  span: true  },
  { cat:'Application Mobile',name:'Nutrimotion',  span: false },
  { cat:'Site Vitrine',        name:'AR-Integration',    span: false },
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
