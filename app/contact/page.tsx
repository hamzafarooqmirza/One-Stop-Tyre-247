import type { Metadata } from 'next'
import ContactPageClient from '@/components/ContactPageClient'

export const metadata: Metadata = {
  alternates: { canonical: 'https://onestoptyres247.co.uk/contact' },
}

export default function ContactPage() {
  return <ContactPageClient />
}
