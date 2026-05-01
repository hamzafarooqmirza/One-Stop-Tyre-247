import type { Metadata } from 'next'
import { Work_Sans, Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-work-sans',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'One Stop Tyres 24/7 | Emergency Mobile Tyre Fitting Manchester',
  description:
    'Stranded with a puncture? Our professional technicians reach you fast at home, work, or roadside across Greater Manchester. 24/7 emergency mobile tyre fitting from £45.',
  keywords: 'mobile tyre fitting, emergency tyre Manchester, puncture repair, 24/7 tyres',
  icons: {
    icon: [
      { url: '/icon.webp', type: 'image/webp' },
    ],
    apple: '/icon.webp',
    shortcut: '/icon.webp',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${workSans.variable} ${inter.variable} bg-[#fcf9f8]`}>
      <head>
        {/* Site icon */}
        <link rel="icon" href="/icon.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/icon.webp" />
        {/* Preload the hero image — tells the browser to fetch it as early as possible */}
        <link
          rel="preload"
          as="image"
          href="/images/hero-tyre-fitting.webp"
          type="image/webp"
        />
        {/* Preconnect to third-party origins to eliminate DNS + TLS latency */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://maps.google.com" />

      </head>
      <body className="antialiased overflow-x-hidden">
        {children}
        {/* Material Symbols — loaded after page is interactive so it never blocks rendering */}
        <Script
          id="material-symbols"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap';
                document.head.appendChild(link);
              })();
            `,
          }}
        />
      </body>
    </html>
  )
}
