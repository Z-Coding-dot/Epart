import { Link } from 'react-router-dom'
import { cn } from '@/utils/cn'

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn('brand-logo', className)} aria-label="ایپارت — خانه">
      <img
        src="/images/logo/epart-wordmark-transparent.webp"
        alt="Epart"
        width={180}
        height={68}
        className="brand-logo__image"
      />
    </Link>
  )
}
