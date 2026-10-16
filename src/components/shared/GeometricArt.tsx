import { useId } from 'react'
import { cn } from '@/utils/cn'

export type ArtVariant = 'orbit' | 'cube' | 'spiral' | 'wave'

/** Small, deterministic SVG illustrations; no GPU or animation loop required. */
export function GeometricArt({ variant = 'orbit', className }: { variant?: ArtVariant; className?: string }) {
  const id = useId().replace(/:/g, '')
  return (
    <svg viewBox="0 0 240 200" fill="none" className={cn('geometric-art', className)} aria-hidden="true">
      <defs>
        <radialGradient id={id}>
          <stop stopColor="currentColor" stopOpacity=".14" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="120" cy="100" r="95" fill={`url(#${id})`} />
      <g stroke="currentColor" strokeWidth=".7">
        {variant === 'orbit' && <>
          <circle cx="120" cy="100" r="73" />
          {Array.from({ length: 11 }, (_, i) => <ellipse key={i} cx="120" cy="100" rx={12 + i * 6.1} ry="73" transform={`rotate(-28 120 100)`} opacity={.3 + i * .05} />)}
          {Array.from({ length: 9 }, (_, i) => <ellipse key={i} cx="120" cy={43 + i * 14.3} rx={Math.sqrt(73 ** 2 - (57 - i * 14.3) ** 2)} ry="12" opacity=".4" />)}
        </>}
        {variant === 'cube' && <g transform="translate(120 100)">
          {[0, 60, 120].map(angle => <g key={angle} transform={`rotate(${angle})`}>
            <path d="M0-78 68-39 68 39 0 78-68 39-68-39Z M0-78V0L68 39 M0 0-68 39 M0 0 68-39 M0 0V78 M0 0-68-39" />
            <path d="M0-49 43-24 43 24 0 49-43 24-43-24Z" opacity=".45" />
          </g>)}
        </g>}
        {variant === 'spiral' && Array.from({ length: 17 }, (_, i) => <polygon key={i} points="120,22 194,76 166,163 74,163 46,76" transform={`translate(120 100) rotate(${i * 14}) scale(${.91 ** i}) translate(-120 -100)`} opacity={1 - i * .035} />)}
        {variant === 'wave' && Array.from({ length: 25 }, (_, i) => <ellipse key={i} cx="120" cy="100" rx={42 + i * 1.8} ry={48 + Math.sin(i * .5) * 14} transform={`rotate(${i * 14.4} 120 100)`} opacity={.25 + i * .022} />)}
      </g>
    </svg>
  )
}
