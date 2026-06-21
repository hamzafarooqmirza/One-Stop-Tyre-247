import type { Metadata } from 'next'
import ContactPageClient from '@/components/ContactPageClient'

export const metadata: Metadata = {
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
