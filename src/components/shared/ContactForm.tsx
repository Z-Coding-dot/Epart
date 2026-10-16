import { useEffect, useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { FormField } from '@/components/ui/FormField'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { Textarea } from '@/components/ui/Textarea'
import { activeServices } from '@/data/services'
import { uiCopy } from '@/data/ui'
import { validateContact, type ContactPayload, type FieldErrors } from '@/utils/validators'
import { openWhatsApp } from '@/utils/whatsapp'

export function ContactForm({ prefillService, prefillDescription = '', layout = 'stacked' }: {
  prefillService?: string
  prefillDescription?: string
  layout?: 'stacked' | 'grid'
}) {
  const [values, setValues] = useState<ContactPayload>({
    name: '',
    phone: '',
    email: '',
    service: prefillService ?? '',
    description: prefillDescription,
  })
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<'idle' | 'redirect'>('idle')
  const [fallback, setFallback] = useState('')
  const [online, setOnline] = useState(() => navigator.onLine)
  useEffect(() => {
    const update = () => setOnline(navigator.onLine)
    window.addEventListener('online', update)
    window.addEventListener('offline', update)
    update()
    return () => { window.removeEventListener('online', update); window.removeEventListener('offline', update) }
  }, [])

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!navigator.onLine) { setOnline(false); return }
    const nextErrors = validateContact(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return
    const url = openWhatsApp(values)
    setFallback(url)
    setStatus('redirect')
  }

  if (status === 'redirect') {
    return (
      <div className="rounded-3xl border border-brand-dark/10 p-6">
        <p>در حال انتقال به واتساپ… اگر باز نشد، روی دکمه زیر کلیک کنید</p>
        <Button href={fallback || '#'} className="mt-4">
          باز کردن واتساپ
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className={`contact-form${layout === 'grid' ? ' contact-form--grid' : ''}`} noValidate>
      <FormField label="نام" htmlFor="name" error={errors.name}>
        <Input
          id="name"
          name="name"
          autoComplete="name"
          maxLength={100}
          required
          aria-invalid={Boolean(errors.name)}
          value={values.name}
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
        />
      </FormField>
      <FormField label="شماره تماس" htmlFor="phone" error={errors.phone}>
        <Input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          dir="ltr"
          maxLength={25}
          required
          aria-invalid={Boolean(errors.phone)}
          value={values.phone}
          onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
        />
      </FormField>
      <FormField label="ایمیل (اختیاری)" htmlFor="email" error={errors.email}>
        <Input
          id="email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          dir="ltr"
          maxLength={254}
          aria-invalid={Boolean(errors.email)}
          value={values.email}
          onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
        />
      </FormField>
      <FormField label="خدمت" htmlFor="service">
        <Select
          id="service"
          name="service"
          value={values.service ?? ''}
          onChange={(service) => setValues((v) => ({ ...v, service }))}
          placeholder={uiCopy.select.placeholder}
          options={activeServices().map((service) => ({ value: service.title, label: service.title, description: service.short }))}
        />
      </FormField>
      <FormField label="توضیح پروژه" htmlFor="description" error={errors.description} className="contact-form-wide">
        <Textarea
          id="description"
          name="description"
          maxLength={2000}
          required
          aria-invalid={Boolean(errors.description)}
          value={values.description}
          onChange={(e) => setValues((v) => ({ ...v, description: e.target.value }))}
        />
      </FormField>
      <p className="contact-form-wide text-sm opacity-70">فایل‌ها را بعد از باز شدن واتساپ ارسال کنید.</p>
      {!online && <p role="status" className="contact-form-wide text-brand-ink">برای ارسال درخواست از طریق واتساپ، اتصال اینترنت لازم است.</p>}
      <Button type="submit" size="lg" className="contact-form-wide w-full" disabled={!online}>
        ارسال از طریق واتساپ
      </Button>
    </form>
  )
}
