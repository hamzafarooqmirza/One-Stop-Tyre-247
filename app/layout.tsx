import type { Metadata } from 'next'
import { Work_Sans, Inter } from 'next/font/google'
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
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${workSans.variable} ${inter.variable} bg-[#fcf9f8]`}>
      <head>
        {/* Preconnect to third-party origins to eliminate DNS + TLS latency */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://lh3.googleusercontent.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://maps.google.com" />

        {/* Material Symbols — non-blocking load to eliminate render-blocking */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          media="print"
          // @ts-expect-error onload is valid for font-swapping technique
          onLoad="this.media='all'"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          />
        </noscript>
      </head>
      <body className="antialiased overflow-x-hidden">{children}</body>
    </html>
  )
}
