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
