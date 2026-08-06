import ContactPageClient from '@/components/ContactPageClient'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema, contactPageSchema, SITE_URL } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Contact Us | One Stop Tyres 24/7',
  description:
    'Contact One Stop Tyres 24/7 — call, WhatsApp or send a quote request.',
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
