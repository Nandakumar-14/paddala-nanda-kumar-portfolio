import { useEffect, useRef } from 'react'

export default function SplashCursor({
  COLOR = '#ffffff',
  SPLAT_FORCE = 3500,
  VELOCITY_DISSIPATION = 3,
}) {
  const canvasRef = useRef(null)
  const animFrameRef = useRef(null)
  const pointsRef = useRef([])

  useEffect(() => {
    // Disable on touch devices
    if (
      typeof window === 'undefined' ||
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0
    ) {
      return
    }

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      // Add a cluster of glowing fluid trail particles
      const count = Math.min(6, Math.max(2, Math.round(SPLAT_FORCE / 800)))
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2
        const speed = Math.random() * 2 + 1
        pointsRef.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed + (e.movementX || 0) * 0.15,
          vy: Math.sin(angle) * speed + (e.movementY || 0) * 0.15,
          size: Math.random() * 18 + 12,
          alpha: 0.85,
          maxLife: 1.0,
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    const decay = 0.015 * (VELOCITY_DISSIPATION / 2)

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const points = pointsRef.current

      for (let i = points.length - 1; i >= 0; i--) {
        const p = points[i]
        p.x += p.vx
        p.y += p.vy
        p.vx *= 0.95
        p.vy *= 0.95
        p.alpha -= decay
        p.size *= 0.97

        if (p.alpha <= 0.01 || p.size <= 0.5) {
          points.splice(i, 1)
          continue
        }

        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.size
        )
        gradient.addColorStop(0, `rgba(255, 255, 255, ${p.alpha * 0.9})`)
        gradient.addColorStop(0.3, `rgba(255, 42, 42, ${p.alpha * 0.6})`)
        gradient.addColorStop(0.8, `rgba(255, 42, 42, ${p.alpha * 0.2})`)
        gradient.addColorStop(1, 'rgba(255, 42, 42, 0)')

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      }

      animFrameRef.current = requestAnimationFrame(render)
    }

    animFrameRef.current = requestAnimationFrame(render)

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current)
      }
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [COLOR, SPLAT_FORCE, VELOCITY_DISSIPATION])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 50,
        width: '100vw',
        height: '100vh',
        display: 'block',
      }}
    />
  )
}
