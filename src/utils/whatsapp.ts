import { settings } from '@/data/settings'
import type { ContactPayload } from '@/utils/validators'

const MAX_URL = 1800

export function buildWhatsAppMessage(data: ContactPayload): string {
  const lines = [
    'درخواست پروژه — ایپارت',
    `نام: ${data.name.trim()}`,
    `تلفن: ${data.phone.trim()}`,
    data.email ? `ایمیل: ${data.email.trim()}` : null,
    data.service ? `خدمت: ${data.service}` : null,
    '',
    'توضیح:',
    data.description.trim(),
  ].filter((line): line is string => line !== null)

  return lines.join('\n')
}

export function buildWhatsAppUrl(data: ContactPayload): string {
  const number = settings.whatsappNumber
  let message = buildWhatsAppMessage(data)
  let url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`

  while (url.length > MAX_URL && message.length > 80) {
    message = `${message.slice(0, Math.max(40, message.length - 80))}…`
    url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`
  }

  return url
}

export function openWhatsApp(data: ContactPayload) {
  const url = buildWhatsAppUrl(data)
  window.open(url, '_blank', 'noopener')
  return url
}
