import ContactPageClient from '@/components/ContactPageClient'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema, contactPageSchema, SITE_URL } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Contact Us | One Stop Tyres 24/7 — Call or WhatsApp Anytime',
  description:
    'Contact One Stop Tyres 24/7 — 24/7 phone & WhatsApp for emergencies, plus a form for quotes and bookings across Greater Manchester. Avg response 20–30 min.',
  path: '/contact',
})

const _breadcrumbSchema = breadcrumbSchema([
  { name: 'Home', item: SITE_URL },
  { name: 'Contact Us', item: `${SITE_URL}/contact` },
])

export default function ContactPage() {
  return (
    <>
      <JsonLd data={_breadcrumbSchema} />
      <JsonLd data={contactPageSchema()} />
      <ContactPageClient />
    </>
  )
}
