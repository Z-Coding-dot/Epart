import { useCallback, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Modal } from '@/components/ui/Modal'
import { useInstallPrompt } from '@/hooks/useInstallPrompt'
import { Download } from 'lucide-react'
import { uiCopy } from '@/data/ui'

export function InstallPrompt() {
  const { supported, installed, install } = useInstallPrompt()
  const [helpOpen, setHelpOpen] = useState(false)
  const [installing, setInstalling] = useState(false)
  const closeHelp = useCallback(() => setHelpOpen(false), [])

  const handleInstall = async () => {
    if (!supported) {
      setHelpOpen(true)
      return
    }
    setInstalling(true)
    try {
      await install()
    } catch {
      setHelpOpen(true)
    } finally {
      setInstalling(false)
    }
  }

  return (
    <div className="mt-4">
      <Button size="sm" disabled={installed || installing} onClick={() => void handleInstall()}>
        <Download size={18} aria-hidden="true" />
        {installed ? uiCopy.install.installed : uiCopy.installApp}
      </Button>
      <Modal open={helpOpen} onClose={closeHelp} label={uiCopy.installApp}>
        <h2 className="text-xl font-bold">{uiCopy.installApp}</h2>
        <p className="mt-3 text-brand-dark/80">{uiCopy.install.intro}</p>
        <ul className="mt-4 list-disc space-y-3 ps-5 text-sm text-brand-dark/80">
          <li>{uiCopy.install.ios}</li>
          <li>{uiCopy.install.other}</li>
        </ul>
        <p className="mt-4 text-sm text-brand-dark/70">{uiCopy.install.unavailable}</p>
        <Button className="mt-6" onClick={closeHelp}>{uiCopy.install.close}</Button>
      </Modal>
    </div>
  )
}
