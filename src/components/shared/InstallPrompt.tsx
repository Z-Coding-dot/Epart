import { Button } from '@/components/ui/Button'
import { useInstallPrompt } from '@/hooks/useInstallPrompt'

export function InstallPrompt() {
  const { supported, install } = useInstallPrompt()
  if (!supported) return null
  return (
    <div className="fixed bottom-[calc(5.5rem+var(--safe-bottom))] left-4 z-30 hidden sm:block">
      <Button variant="secondary" size="sm" onClick={() => void install()}>
        نصب اپلیکیشن
      </Button>
    </div>
  )
}
