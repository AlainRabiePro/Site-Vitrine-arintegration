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
