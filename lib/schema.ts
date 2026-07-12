/**
 * Shared JSON-LD builders. Every page-level schema object is constructed
 * through these so the business NAP and structural shape stay identical
 * site-wide — only the homepage carries the full LocalBusiness entity;
 * everywhere else references it by @id plus a lightweight NAP block.
 */

export const SITE_URL = 'https://onestoptyres247.co.uk'
export const BUSINESS_ID = `${SITE_URL}/#business`
export const BUSINESS_PHONE = '+447759708646'
export const BUSINESS_PHONE_DISPLAY = '+44 7759 708646'

const OPENING_HOURS_SPEC = {
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  opens: '00:00',
  closes: '23:59',
} as const

/** Lightweight LocalBusiness reference — NOT the full entity (that lives only on the homepage). */
const BUSINESS_PROVIDER = {
  '@type': 'LocalBusiness',
  '@id': BUSINESS_ID,
  name: 'One Stop Tyres 24/7',
  telephone: BUSINESS_PHONE,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Alliance Mill, Willow St',
    addressLocality: 'Oldham',
    postalCode: 'OL1 3QH',
    addressCountry: 'GB',
  },
} as const

export interface BreadcrumbItem {
  name: string
  item: string
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.item,
    })),
  }
}

export interface FaqEntry {
  q: string
  a: string
}

export function faqSchema(faqs: FaqEntry[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

export interface ServiceSchemaOptions {
  /** URL slug, e.g. "mobile-tyre-fitting-manchester" (no leading slash) */
  slug: string
  name: string
  description?: string
  serviceType?: string
  /** Defaults to AdministrativeArea "Greater Manchester" for region-wide service pages. */
  areaServed?: { '@type': string; name: string }
}

export function serviceSchema({ slug, name, description, serviceType, areaServed }: ServiceSchemaOptions) {
  const url = `${SITE_URL}/${slug}`
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name,
    ...(serviceType ? { serviceType } : {}),
    ...(description ? { description } : {}),
    provider: BUSINESS_PROVIDER,
    areaServed: areaServed ?? { '@type': 'AdministrativeArea', name: 'Greater Manchester' },
    availableChannel: {
      '@type': 'ServiceChannel',
      availableLanguage: 'en-GB',
      servicePhone: BUSINESS_PHONE_DISPLAY,
    },
    url,
    openingHoursSpecification: OPENING_HOURS_SPEC,
  }
}
