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
        {/* Material Symbols */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased overflow-x-hidden">{children}</body>
    </html>
  )
}
