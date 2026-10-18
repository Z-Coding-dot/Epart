import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from '@/components/layout/MainLayout'
import { Home } from '@/pages/Home'

const About = lazy(() => import('@/pages/About').then((m) => ({ default: m.About })))
const Services = lazy(() => import('@/pages/Services').then((m) => ({ default: m.Services })))
const ServiceDetails = lazy(() =>
  import('@/pages/ServiceDetails').then((m) => ({ default: m.ServiceDetails })),
)
const Portfolio = lazy(() => import('@/pages/Portfolio').then((m) => ({ default: m.Portfolio })))
const ProjectDetails = lazy(() =>
  import('@/pages/ProjectDetails').then((m) => ({ default: m.ProjectDetails })),
)
const Contact = lazy(() => import('@/pages/Contact').then((m) => ({ default: m.Contact })))
const Privacy = lazy(() => import('@/pages/Privacy').then((m) => ({ default: m.Privacy })))
const NotFound = lazy(() => import('@/pages/NotFound').then((m) => ({ default: m.NotFound })))

function PageFallback() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center text-brand-dark/70">در حال بارگذاری…</div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="services/:slug" element={<ServiceDetails />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="portfolio/:slug" element={<ProjectDetails />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
