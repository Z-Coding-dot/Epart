import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { HexagonalBackground } from '@/components/reactbits/HexagonalBackground'
import { BackToTop } from '@/components/layout/BackToTop'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { MobileCTABar } from '@/components/layout/MobileCTABar'
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat'
import { UpdateToast } from '@/components/shared/UpdateToast'

export function MainLayout() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [pathname])
  return (
    <div className="site-layout relative isolate flex min-h-svh flex-col">
      <HexagonalBackground />
      <svg className="card-definitions" aria-hidden="true" width="0" height="0">
        <defs>
          <clipPath id="card-notch" clipPathUnits="objectBoundingBox">
            <path d="M.08 0 H.92 Q1 0 1 .08 V.77 Q1 .85 .92 .85 H.89 Q.81 .85 .81 .93 V.92 Q.81 1 .73 1 H.08 Q0 1 0 .92 V.08 Q0 0 .08 0 Z" />
          </clipPath>
          <clipPath id="card-notch-small" clipPathUnits="objectBoundingBox">
            <path d="M.1 0 H.9 Q1 0 1 .1 V.65 Q1 .76 .9 .76 H.88 Q.76 .76 .76 .88 V.9 Q.76 1 .66 1 H.1 Q0 1 0 .9 V.1 Q0 0 .1 0 Z" />
          </clipPath>
        </defs>
      </svg>
      <a href="#main-content" className="skip-link">رفتن به محتوای اصلی</a>
      <Header />
      <main id="main-content" className="relative min-w-0 flex-1" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
      <BackToTop />
      <MobileCTABar />
      <UpdateToast />
    </div>
  )
}
