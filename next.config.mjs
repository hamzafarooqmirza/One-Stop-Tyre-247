/** @type {import('next').NextConfig} */
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
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Public images — fingerprinted by filename; 1-year cache
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Site icons and OG image — rarely change; 30-day cache
      {
        source: '/:file((?:icon|og-image|apple-icon).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, stale-while-revalidate=86400',
          },
        ],
      },
      // Sitemap + robots — refresh daily
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=3600',
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=3600',
          },
        ],
      },
      // HTML pages — revalidate in background; stale page served instantly
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
    ]
  },
}

export default nextConfig
