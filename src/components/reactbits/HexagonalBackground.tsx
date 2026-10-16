import { useEffect, useRef } from 'react'

/** Original reference-inspired fallback. This is not the licensed React Bits Pro component. */
export function HexagonalBackground() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    const interactive = window.matchMedia('(min-width: 768px) and (pointer: fine) and (prefers-reduced-motion: no-preference)')
    let width = 0
    let height = 0
    let frame = 0
    let pointer = { x: -1, y: -1 }
    const styles = getComputedStyle(document.documentElement)
    const orange = styles.getPropertyValue('--color-primary').trim()
    const gold = styles.getPropertyValue('--color-secondary').trim()

    const draw = () => {
      frame = 0
      ctx.clearRect(0, 0, width, height)
      const radius = width < 768 ? 42 : 68
      const rowHeight = Math.sqrt(3) * radius
      const hot = pointer.x < 0 ? { x: width * .19, y: height * .3 } : pointer
      for (let col = -1; col < width / (radius * 1.5) + 1; col++) {
        for (let row = -1; row < height / rowHeight + 1; row++) {
          const x = col * radius * 1.5
          const y = row * rowHeight + (col % 2) * rowHeight / 2
          const distance = Math.hypot(x - hot.x, y - hot.y)
          const strength = Math.max(0, 1 - distance / 310)
          ctx.beginPath()
          for (let point = 0; point <= 6; point++) {
            const angle = point * Math.PI / 3
            const px = x + Math.cos(angle) * radius
            const py = y + Math.sin(angle) * radius
            if (point === 0) ctx.moveTo(px, py)
            else ctx.lineTo(px, py)
          }
          ctx.globalAlpha = .025 + strength * .22
          ctx.strokeStyle = strength > .65 ? gold : orange
          ctx.lineWidth = .65 + strength * .65
          ctx.shadowColor = orange
          ctx.shadowBlur = strength > .15 ? strength * 16 : 0
          ctx.stroke()
        }
      }
      ctx.shadowBlur = 0
      ctx.globalAlpha = 1
    }
    const schedule = () => { if (!frame) frame = requestAnimationFrame(draw) }
    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      schedule()
    }
    const move = (event: PointerEvent) => {
      if (!interactive.matches) return
      pointer = { x: event.clientX, y: event.clientY }
      schedule()
    }
    const reset = () => { pointer = { x: -1, y: -1 }; schedule() }
    resize()
    window.addEventListener('resize', resize, { passive: true })
    window.addEventListener('pointermove', move, { passive: true })
    document.documentElement.addEventListener('pointerleave', reset)
    interactive.addEventListener('change', reset)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', move)
      document.documentElement.removeEventListener('pointerleave', reset)
      interactive.removeEventListener('change', reset)
    }
  }, [])

  return <div className="hexagonal-background" aria-hidden="true"><canvas ref={ref} /></div>
}
