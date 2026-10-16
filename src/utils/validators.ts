export type ContactPayload = {
  name: string
  phone: string
  email?: string
  service?: string
  description: string
}

export type FieldErrors = Partial<Record<keyof ContactPayload, string>>

const PHONE_RE = /^(\+?\d[\d\s-]{7,16}\d)$/

export function validateContact(data: ContactPayload): FieldErrors {
  const errors: FieldErrors = {}
  if (!data.name.trim()) errors.name = 'نام الزامی است.'
  if (!data.phone.trim()) errors.phone = 'شماره تماس الزامی است.'
  else if (!PHONE_RE.test(data.phone.trim())) errors.phone = 'شماره تماس معتبر نیست.'
  if (!data.description.trim()) errors.description = 'توضیح پروژه الزامی است.'
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'ایمیل معتبر نیست.'
  }
  return errors
}
