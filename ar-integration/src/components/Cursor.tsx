'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot  = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  const pos  = useRef({ x: 0, y: 0 })
  const ring_pos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dot.current) {
        dot.current.style.left = e.clientX + 'px'
        dot.current.style.top  = e.clientY + 'px'
      }
    }
    document.addEventListener('mousemove', move)

    let raf: number
    const animate = () => {
      ring_pos.current.x += (pos.current.x - ring_pos.current.x) * 0.12
      ring_pos.current.y += (pos.current.y - ring_pos.current.y) * 0.12
      if (ring.current) {
        ring.current.style.left = ring_pos.current.x + 'px'
        ring.current.style.top  = ring_pos.current.y + 'px'
      }
      raf = requestAnimationFrame(animate)
    }
    animate()

    const grow = () => { dot.current && (dot.current.style.transform = 'translate(-50%,-50%) scale(2.5)') }
    const shrink = () => { dot.current && (dot.current.style.transform = 'translate(-50%,-50%) scale(1)') }
    document.querySelectorAll('a,button').forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      document.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dot} style={{
        position:'fixed', width:10, height:10, background:'#f5f5f3',
        borderRadius:'50%', pointerEvents:'none', zIndex:9999,
        transform:'translate(-50%,-50%)', transition:'transform .15s ease',
        top:0, left:0,
      }}/>
      <div ref={ring} style={{
        position:'fixed', width:36, height:36, border:'1px solid rgba(245,245,243,.35)',
        borderRadius:'50%', pointerEvents:'none', zIndex:9998,
        transform:'translate(-50%,-50%)', top:0, left:0,
      }}/>
    </>
  )
}
