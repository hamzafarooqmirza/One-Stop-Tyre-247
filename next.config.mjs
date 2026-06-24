/** @type {import('next').NextConfig} */

// Content-Security-Policy directive breakdown:
//   script-src  — GTM bootstrap (inline), GTM bundle, GA scripts, Microsoft Clarity
//   style-src   — Tailwind inline styles, Google Fonts / Material Symbols CSS
//   font-src    — woff2 files from gstatic
//   img-src     — local images, Vercel Blob, GTM/GA pixels, DoubleClick signals, Clarity
//   frame-src   — GTM noscript iframe, Google Maps embeds
//   connect-src — GA4 beacon endpoints (including DoubleClick), Clarity data collection
//   object-src  — blocked entirely (no Flash/plugins)
//   base-uri / form-action — locked to self to prevent injection attacks
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://ssl.google-analytics.com https://www.clarity.ms",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: blob: https://hebbkx1anhila5yf.public.blob.vercel-storage.com https://www.googletagmanager.com https://www.google-analytics.com https://stats.g.doubleclick.net https://www.clarity.ms",
  "frame-src https://www.googletagmanager.com https://www.google.com",
  "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com https://www.googletagmanager.com https://stats.g.doubleclick.net https://www.clarity.ms https://*.clarity.ms",
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
