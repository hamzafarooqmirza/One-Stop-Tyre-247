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

export interface ArticleSchemaOptions {
  /** URL slug including any parent path, e.g. "guides/how-to-tell-if-your-tyre-can-be-repaired-or-needs-replacing" */
  slug: string
  headline: string
  description: string
  image: string
  datePublished: string
  dateModified?: string
}

const AREA_SERVED = [
  { '@type': 'City', name: 'Manchester' },
  { '@type': 'City', name: 'Bolton' },
  { '@type': 'City', name: 'Bury' },
  { '@type': 'City', name: 'Oldham' },
  { '@type': 'City', name: 'Rochdale' },
  { '@type': 'City', name: 'Stockport' },
  { '@type': 'City', name: 'Tameside' },
  { '@type': 'City', name: 'Trafford' },
  { '@type': 'City', name: 'Wigan' },
] as const

/** Full LocalBusiness entity — injected once, site-wide, via the root layout. */
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'AutoRepair'],
    '@id': BUSINESS_ID,
    name: 'One Stop Tyres 24/7',
    url: SITE_URL,
    telephone: BUSINESS_PHONE,
    email: 'info@onestoptyres247.co.uk',
    image: `${SITE_URL}/og-image.webp`,
    logo: `${SITE_URL}/icon.webp`,
    description:
      '24/7 emergency mobile tyre fitting across Greater Manchester. Professional technicians reach you at home, work, or roadside within 20–30 minutes.',
    priceRange: '££',
    address: BUSINESS_PROVIDER.address,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 53.5454538598072,
      longitude: -2.1049285233703974,
    },
    areaServed: AREA_SERVED,
    openingHoursSpecification: OPENING_HOURS_SPEC,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      bestRating: '5',
      worstRating: '1',
      reviewCount: '1200',
    },
    hasMap: 'https://maps.app.goo.gl/tqGMogzsNNn8EXjH8',
  }
}

export interface ItemListEntry {
  name: string
  url: string
}

export function itemListSchema(items: ItemListEntry[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      url: it.url,
    })),
  }
}

export function aboutPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${SITE_URL}/about#aboutpage`,
    url: `${SITE_URL}/about`,
    name: 'About One Stop Tyres 24/7',
    mainEntity: { '@id': BUSINESS_ID },
  }
}

export function articleSchema({ slug, headline, description, image, datePublished, dateModified }: ArticleSchemaOptions) {
  const url = `${SITE_URL}/${slug}`
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline,
    description,
    image,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      '@type': 'Organization',
      name: 'One Stop Tyres 24/7',
      '@id': BUSINESS_ID,
    },
    publisher: {
      '@type': 'Organization',
      name: 'One Stop Tyres 24/7',
      '@id': BUSINESS_ID,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/icon.webp`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    url,
  }
}
