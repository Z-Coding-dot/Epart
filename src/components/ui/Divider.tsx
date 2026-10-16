import { cn } from '@/utils/cn'

export function SectionDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div
      className={cn('h-12 w-full bg-white', flip && 'rotate-180')}
      style={{
        clipPath: flip
          ? 'polygon(0 0, 100% 40%, 100% 100%, 0 100%)'
          : 'polygon(0 40%, 100% 0, 100% 100%, 0 100%)',
      }}
      aria-hidden
    />
  )
}
