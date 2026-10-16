import { Link } from 'react-router-dom'

export function Breadcrumb({
  items,
}: {
  items: { to?: string; label: string }[]
}) {
  return (
    <nav aria-label="مسیر صفحه" className="mb-6 text-sm opacity-80">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {item.to ? <Link to={item.to}>{item.label}</Link> : <span>{item.label}</span>}
            {i < items.length - 1 ? <span aria-hidden>/</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  )
}
