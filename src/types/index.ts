export type ServiceCategory = {
  slug: string
  title: string
  short: string
  description: string
  icon: string
  artwork: string
  active: boolean
  items: ServiceItem[]
}

export type ServiceItem = {
  slug: string
  title: string
  subtitle: string
  summary: string
  artwork: string
  active: boolean
}

export type Project = {
  slug: string
  title: string
  category: string
  summary: string
  placeholder: boolean
}

export type NavItem = {
  to: string
  label: string
  children?: { to: string; label: string }[]
}
