import { useRegisterSW } from 'virtual:pwa-register/react'
import { Button } from '@/components/ui/Button'

export function UpdateToast() {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW()

  if (!needRefresh) return null

  return (
    <div className="fixed start-4 top-[calc(1rem+var(--safe-top))] z-50 max-w-sm rounded-2xl border border-brand-dark/15 bg-white p-4 shadow-lift">
      <p className="text-sm">نسخه جدید آماده است.</p>
      <div className="mt-3 flex gap-2">
        <Button size="sm" onClick={() => void updateServiceWorker(true)}>
          به‌روزرسانی
        </Button>
        <Button size="sm" variant="ghost" onClick={() => setNeedRefresh(false)}>
          بعداً
        </Button>
      </div>
    </div>
  )
}
