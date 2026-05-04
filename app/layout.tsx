import type { Metadata } from 'next'
import { Work_Sans, Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
    icon: [{ url: '/icon.webp', type: 'image/webp' }],
    apple: '/icon.webp',
    shortcut: '/icon.webp',
  },
  openGraph: {
    title: 'One Stop Tyres 24/7 | Emergency Mobile Tyre Fitting Manchester',
    description:
      'Stranded with a puncture? Our professional technicians reach you fast at home, work, or roadside across Greater Manchester. 24/7 emergency mobile tyre fitting from £45.',
    url: 'https://onestoptyres247.co.uk',
    siteName: 'One Stop Mobile Tyres 24/7',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: '24/7 Mobile Tyre Fitting across Manchester & Greater Manchester — One Stop Mobile Tyres',
        type: 'image/webp',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'One Stop Tyres 24/7 | Emergency Mobile Tyre Fitting Manchester',
    description:
      'Stranded with a puncture? Our professional technicians reach you fast at home, work, or roadside across Greater Manchester. 24/7 emergency mobile tyre fitting from £45.',
    images: ['/og-image.webp'],
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
        <Header />
        <main>
          {children}
        </main>
        <Footer />

        {/* Floating action buttons — visible on every page */}
        <div className="fixed bottom-6 right-5 z-[60] flex flex-col gap-3">
          <a
            href="https://wa.me/447759708646"
            aria-label="Chat on WhatsApp"
            className="w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5d] rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95"
          >
            <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
          <a
            href="tel:07759708646"
            aria-label="Call us now"
            className="w-14 h-14 bg-[#b70011] hover:bg-red-700 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95"
          >
            <span
              className="material-symbols-outlined text-white text-[26px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              phone_in_talk
            </span>
          </a>
        </div>

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
