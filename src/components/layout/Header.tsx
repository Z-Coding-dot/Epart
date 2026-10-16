import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import { Logo } from '@/components/shared/Logo'
import { MobileMenu } from '@/components/layout/MobileMenu'
import { navItems } from '@/data/nav'
import { cn } from '@/utils/cn'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <Container>
      <div className="navbar-shell">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="منوی اصلی">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn('nav-link', isActive && 'nav-link--active')
              }
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button to="/contact" size="sm" className="hidden sm:inline-flex">
            درخواست پروژه
          </Button>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-brand-dark/15 lg:hidden"
            aria-label="باز کردن منو"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <Icon name="menu" />
          </button>
        </div>
      </div>
      </Container>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  )
}
