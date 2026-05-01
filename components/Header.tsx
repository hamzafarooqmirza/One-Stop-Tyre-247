'use client'

import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#' },
  { label: 'Services', href: '#' },
  { label: 'Service Area', href: '#' },
  { label: 'Contact', href: '#' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Top Contact Bar — hidden on small screens */}
      <div className="hidden md:block bg-[#0f172a] text-white py-2 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[12px] font-medium">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">mail</span>
              info@onestoptyres247.co.uk
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">alarm</span>
              24/7 Emergency Service
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">location_on</span>
              Greater Manchester
            </span>
          </div>
          <span className="flex items-center gap-1.5 font-bold text-red-400">
            <span className="material-symbols-outlined text-sm">call</span>
            07759 708 646
          </span>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">

          {/* Logo */}
          <a href="#" className="shrink-0" aria-label="One Stop Mobile Tyres 24/7 - Home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One-Stop%20Loog-airanko-Qpv1QvladNLpRhg8X3Hs6SzyydzFMq.webp"
              alt="One Stop Mobile Tyres 24/7"
              className="h-14 sm:h-14 w-auto"
            />
          </a>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-7 text-sm font-semibold"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={
                  link.label === 'Home'
                    ? 'text-[#b70011] border-b-2 border-[#b70011] pb-0.5'
                    : 'text-slate-700 hover:text-[#b70011] transition-colors'
                }
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Call CTA */}
            <a
              href="tel:07759708646"
              aria-label="Call 07759 708 646"
              className="flex items-center gap-2 bg-[#b70011] hover:bg-red-700 text-white px-4 py-2 rounded-lg font-bold text-sm transition-all active:scale-95 shadow-md shadow-red-200"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              <span
                className="material-symbols-outlined text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                phone_in_talk
              </span>
              <span className="hidden sm:inline">07759 708 646</span>
            </a>

            {/* Hamburger */}
            <button
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-lg hover:bg-slate-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <span
                className={`w-5 h-0.5 bg-slate-700 block transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
              />
              <span
                className={`w-5 h-0.5 bg-slate-700 block transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`w-5 h-0.5 bg-slate-700 block transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? 'max-h-96' : 'max-h-0'}`}
        >
          <nav
            className="flex flex-col border-t border-slate-100 bg-white"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-6 py-4 text-sm font-semibold border-b border-slate-50 flex items-center justify-between ${
                  link.label === 'Home'
                    ? 'text-[#b70011] bg-red-50'
                    : 'text-slate-700 hover:text-[#b70011] hover:bg-slate-50'
                } transition-colors`}
              >
                {link.label}
                <span className="material-symbols-outlined text-base text-slate-400">chevron_right</span>
              </a>
            ))}

            {/* Mobile contact info */}
            <div className="px-6 py-4 bg-[#0f172a] flex flex-col gap-2 text-[12px] text-white/70">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-red-400">call</span>
                07759 708 646
              </span>
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">mail</span>
                info@onestoptyres247.co.uk
              </span>
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">alarm</span>
                24/7 Emergency Service — Greater Manchester
              </span>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
