import {
  ArrowUp,
  Headset,
  Menu,
  Megaphone,
  Monitor,
  Palette,
  X,
  type LucideIcon,
} from 'lucide-react'
import { cn } from '@/utils/cn'

const icons = {
  monitor: Monitor,
  palette: Palette,
  megaphone: Megaphone,
  headset: Headset,
  menu: Menu,
  x: X,
  'arrow-up': ArrowUp,
} satisfies Record<string, LucideIcon>

export type IconName = keyof typeof icons

type IconProps = {
  name: IconName
  className?: string
  strokeWidth?: number
}

export function Icon({ name, className, strokeWidth = 1.75 }: IconProps) {
  const Cmp = icons[name]
  return <Cmp className={cn('h-5 w-5', className)} strokeWidth={strokeWidth} aria-hidden />
}
