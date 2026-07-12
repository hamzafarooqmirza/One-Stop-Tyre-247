import type { Metadata } from 'next'
import ContactPageClient from '@/components/ContactPageClient'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema, SITE_URL } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Contact Us | One Stop Tyres 24/7',
  description:
    'Get in touch with One Stop Tyres 24/7. Call our 24/7 emergency hotline for immediate assistance, or fill in our form for a non-urgent quote.',
  alternates: { canonical: 'https://onestoptyres247.co.uk/contact' },
}

const _breadcrumbSchema = breadcrumbSchema([
  { name: 'Home', item: SITE_URL },
  { name: 'Contact Us', item: `${SITE_URL}/contact` },
])

export default function ContactPage() {
  return (
    <>
      <JsonLd data={_breadcrumbSchema} />
      <ContactPageClient />
    </>
  )
}
