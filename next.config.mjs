/** @type {import('next').NextConfig} */

// Content-Security-Policy directive breakdown:
//   default-src 'self'                     — block everything not explicitly listed
//   script-src  'self' 'unsafe-inline'     — inline GTM bootstrap + Material Symbols loader
//               googletagmanager.com       — GTM JS bundle
//   style-src   'self' 'unsafe-inline'     — Tailwind inline styles + React style attrs
//               fonts.googleapis.com       — Google Fonts / Material Symbols CSS
//   font-src    'self' fonts.gstatic.com   — actual woff2 font files
//   img-src     'self' data: blob:         — local images + data URIs
//               vercel-storage.com         — Vercel Blob images (logo, service photos)
//               googletagmanager.com       — GTM tracking pixels
//               google-analytics.com       — GA tracking pixels
//   frame-src   googletagmanager.com       — GTM noscript <iframe>
//   connect-src 'self' google-analytics.com analytics.google.com
//               region1.google-analytics.com googletagmanager.com
//                                          — GA4 beacon endpoints hit by GTM at runtime
//   object-src  'none'                     — block Flash / plugins entirely
//   base-uri    'self'                     — prevent <base> injection attacks
//   form-action 'self'                     — form submissions stay on-site
//   upgrade-insecure-requests             — auto-upgrade any http:// sub-resource to https://
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://ssl.google-analytics.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: blob: https://hebbkx1anhila5yf.public.blob.vercel-storage.com https://www.googletagmanager.com https://www.google-analytics.com",
  "frame-src https://www.googletagmanager.com https://www.google.com",
  "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com https://www.googletagmanager.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ")

const SECURITY_HEADERS = [
  // Prevents XSS, data injection, and other content injection attacks
  { key: "Content-Security-Policy", value: CSP },
  // Blocks the page from being embedded in iframes on other origins (clickjacking protection)
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Stops browsers from MIME-sniffing a response away from the declared Content-Type
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Sends full URL as referrer to same-origin; only the origin to cross-origin HTTPS sites; nothing to HTTP
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Force HTTPS for 1 year, across all subdomains; submit-eligible for browser preload lists
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
]

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // www → non-www (permanent 301)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.onestoptyres247.co.uk' }],
        destination: 'https://onestoptyres247.co.uk/:path*',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      // Next.js build output — content-hashed filenames, safe to cache forever
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // Public images — fingerprinted by filename; 1-year cache
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // Site icons and OG image — rarely change; 30-day cache
      {
        source: '/:file((?:icon|og-image|apple-icon).*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' },
        ],
      },
      // Sitemap + robots — refresh daily
      {
        source: '/sitemap.xml',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=3600' },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=3600' },
        ],
      },
      // HTML pages — revalidate in background; stale page served instantly
      {
        source: '/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400' },
        ],
      },
      // Security headers — applied to every response
      {
        source: '/(.*)',
        headers: SECURITY_HEADERS,
      },
      // CORS — API routes are private blob endpoints; restrict to own origin only
      {
        source: '/api/(.*)',
        headers: [
          { key: 'Access-Control-Allow-Origin',  value: 'https://onestoptyres247.co.uk' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST, OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type' },
        ],
      },
    ]
  },
}

export default nextConfig
