import type { Metadata } from 'next'
import ContactPageClient from '@/components/ContactPageClient'

export const metadata: Metadata = {
  title: 'Contact Us | One Stop Tyres 24/7',
  description:
    'Get in touch with One Stop Tyres 24/7. Call our 24/7 emergency hotline for immediate assistance, or fill in our form for a non-urgent quote.',
  alternates: { canonical: 'https://onestoptyres247.co.uk/contact' },
}

const _breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://onestoptyres247.co.uk' },
    { '@type': 'ListItem', position: 2, name: 'Contact Us', item: 'https://onestoptyres247.co.uk/contact' },
  ],
}

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_breadcrumbSchema) }} />
      <ContactPageClient />
    </>
  )
}
