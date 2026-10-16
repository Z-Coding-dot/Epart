import { Link } from 'react-router-dom'
import { Accordion } from '@/components/ui/Accordion'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Sheet } from '@/components/ui/Modal'
import { navItems } from '@/data/nav'

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  return (
    <Sheet open={open} onClose={onClose}>
      <div className="flex items-center justify-between">
        <p className="text-lg font-bold">منو</p>
        <button type="button" className="inline-flex min-h-11 min-w-11 items-center justify-center" onClick={onClose} aria-label="بستن منو">
          <Icon name="x" />
        </button>
      </div>
      <nav className="mt-8 space-y-2">
        {navItems.map((item) =>
          item.children ? (
            <Accordion
              key={item.to}
              items={[
                {
                  title: item.label,
                  content: (
                    <div className="flex flex-col gap-2">
                      <Link to={item.to} onClick={onClose} className="min-h-11 py-2">
                        همه خدمات
                      </Link>
                      {item.children.map((child) => (
                        <Link key={child.to} to={child.to} onClick={onClose} className="min-h-11 py-2">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ),
                },
              ]}
            />
          ) : (
            <Link
              key={item.to}
              to={item.to}
              onClick={onClose}
              className="block min-h-11 rounded-2xl px-4 py-3 text-lg"
            >
              {item.label}
            </Link>
          ),
        )}
      </nav>
      <Button to="/contact" className="mt-8 w-full" onClick={onClose}>
        درخواست پروژه
      </Button>
    </Sheet>
  )
}
