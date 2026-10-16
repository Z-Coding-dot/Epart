import { cva, type VariantProps } from 'class-variance-authority'
import { Link } from 'react-router-dom'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils/cn'

const buttonStyles = cva(
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-base font-medium transition active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-brand-gradient text-brand-dark shadow-lift hover:brightness-110',
        secondary:
          'bg-white text-brand-dark ring-1 ring-brand-dark/15 hover:bg-brand-light',
        ghost: 'bg-transparent text-brand-dark ring-1 ring-brand-dark/20 hover:bg-white',
      },
      size: {
        sm: 'min-h-11 px-4 text-sm',
        md: 'min-h-11 px-5',
        lg: 'min-h-12 px-7 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

type Common = VariantProps<typeof buttonStyles> & {
  className?: string
  children: ReactNode
}

type ButtonAsButton = Common &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
    to?: undefined
  }

type ButtonAsLink = Common & {
  to: string
  href?: undefined
  onClick?: () => void
}

type ButtonAsAnchor = Common & {
  href: string
  to?: undefined
}

export type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor

export function Button(props: ButtonProps) {
  const { variant, size, className, children } = props
  const classes = cn(buttonStyles({ variant, size }), className)

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes} onClick={props.onClick}>
        {children}
      </Link>
    )
  }

  if ('href' in props && props.href) {
    return (
      <a href={props.href} className={classes} rel="noopener">
        {children}
      </a>
    )
  }

  const { type = 'button', variant: _variant, size: _size, className: _className, children: _children, ...rest } = props as ButtonAsButton
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  )
}
