import { ImageResponse } from 'next/og'

export const alt = 'AR Intégration — Développeur freelance React Native & Next.js à Lyon'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#000000',
          color: '#FFFFFF',
          display: 'flex',
          flexDirection: 'column',
          padding: 80,
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 'auto' }}>
          <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: -0.6, color: '#FFFFFF', display: 'flex' }}>
            AR Intégration
          </div>
          <div style={{ borderRadius: 999, border: '1px solid rgba(255,255,255,0.2)', padding: '4px 10px', fontSize: 13, color: 'rgba(255,255,255,0.7)', display: 'flex' }}>
            Lyon · Villeurbanne
          </div>
        </div>

        <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.04, letterSpacing: -3, display: 'flex', flexDirection: 'column', color: '#FFFFFF', marginBottom: 56 }}>
          <span style={{ display: 'flex' }}>Développeur freelance</span>
          <span style={{ display: 'flex' }}>React Native &amp; Next.js</span>
          <span style={{ display: 'flex', color: 'rgba(255,255,255,0.55)' }}>à Lyon.</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 28, paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.15)', fontSize: 20, color: 'rgba(255,255,255,0.7)' }}>
          <span style={{ display: 'flex' }}>React Native / Expo</span>
          <span style={{ display: 'flex' }}>·</span>
          <span style={{ display: 'flex' }}>Next.js / TypeScript</span>
          <span style={{ display: 'flex' }}>·</span>
          <span style={{ display: 'flex' }}>Supabase</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
