'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Home', href: '/', icon: 'home' },
  { label: 'About Us', href: '/about', icon: 'info' },
  { label: 'Services', href: '/services', icon: 'build' },
  { label: 'Service Area', href: '/service-area', icon: 'map' },
  { label: 'Contact', href: '/contact', icon: 'contact_support' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

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
              Nationwide
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 lg:h-20 relative flex items-center justify-between gap-4 lg:grid lg:grid-cols-[auto_1fr_auto] lg:gap-8">

          {/* LEFT — Mobile call button | Desktop logo */}
          <div className="flex items-center lg:justify-self-start">
            <a
              href="tel:07759708646"
              aria-label="Call 07759 708 646"
              className="lg:hidden flex items-center gap-2 bg-[#b70011] hover:bg-red-700 text-white px-3 py-2 rounded-lg font-bold text-sm transition-all active:scale-95 shadow-md shadow-red-200"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              <span
                className="material-symbols-outlined text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                phone_in_talk
              </span>
            </a>
            <a href="/" className="hidden lg:block shrink-0" aria-label="One Stop Mobile Tyres 24/7 - Home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One-Stop%20Loog-airanko-Qpv1QvladNLpRhg8X3Hs6SzyydzFMq.webp"
                alt="One Stop Mobile Tyres 24/7"
                className="h-16 w-auto"
                width={200}
                height={64}
                loading="eager"
                decoding="async"
              />
            </a>
          </div>

          {/* CENTER — Mobile: Logo | Desktop: Nav */}
          <a
            href="/"
            className="lg:hidden absolute left-1/2 -translate-x-1/2 shrink-0"
            aria-label="One Stop Mobile Tyres 24/7 - Home"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One-Stop%20Loog-airanko-Qpv1QvladNLpRhg8X3Hs6SzyydzFMq.webp"
              alt="One Stop Mobile Tyres 24/7"
              className="h-14 w-auto"
              width={200}
              height={56}
              loading="eager"
              decoding="async"
            />
          </a>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex justify-self-center items-center gap-7 text-sm font-semibold whitespace-nowrap"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={
                  isActive(link.href)
                    ? 'text-[#b70011] border-b-2 border-[#b70011] pb-0.5 whitespace-nowrap'
                    : 'text-slate-700 hover:text-[#b70011] transition-colors whitespace-nowrap'
                }
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* RIGHT — Mobile: Hamburger | Desktop: Call button */}
          <div className="flex items-center gap-2 lg:justify-self-end">
            <a
              href="tel:07759708646"
              aria-label="Call 07759 708 646"
              className="hidden lg:flex items-center gap-2 bg-[#b70011] hover:bg-red-700 text-white px-4 py-2 rounded-lg font-bold text-sm transition-all active:scale-95 shadow-md shadow-red-200"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              <span
                className="material-symbols-outlined text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                phone_in_talk
              </span>
              07759 708 646
            </a>

            {/* Hamburger — mobile only */}
            <button
              className="lg:hidden relative z-[110] w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-lg hover:bg-slate-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <span
                className={`w-5 h-0.5 block transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7px] bg-white' : 'bg-slate-700'}`}
              />
              <span
                className={`w-5 h-0.5 block transition-all duration-300 ${mobileOpen ? 'opacity-0 bg-white' : 'bg-slate-700'}`}
              />
              <span
                className={`w-5 h-0.5 block transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[7px] bg-white' : 'bg-slate-700'}`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-[100] transition-all duration-300 ${mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!mobileOpen}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
          style={{ fontFamily: 'var(--font-work-sans)' }}
        >
          {/* Drawer Header */}
          <div className="bg-[#0f172a] px-5 pt-6 pb-5 shrink-0">
            {/* Close button */}
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-0.5">Navigation</p>
                <p className="text-white font-bold text-base leading-tight">One Stop Mobile Tyres</p>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors shrink-0"
              >
                <span className="material-symbols-outlined text-white text-[20px]">close</span>
              </button>
            </div>

            {/* Emergency call strip */}
            <a
              href="tel:07759708646"
              className="flex items-center gap-3 bg-[#b70011] hover:bg-red-700 transition-colors rounded-xl px-4 py-3 active:scale-[0.98]"
            >
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                <span
                  className="material-symbols-outlined text-white text-[20px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  phone_in_talk
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white/70 text-[10px] font-semibold uppercase tracking-wider">Emergency Call</p>
                <p className="text-white font-bold text-base">07759 708 646</p>
              </div>
              <span className="material-symbols-outlined text-white/50 text-[18px]">arrow_forward</span>
            </a>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 overflow-y-auto py-3">
            <p className="px-5 pt-2 pb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Menu
            </p>
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`group flex items-center gap-4 px-5 py-3.5 mx-2 rounded-xl mb-0.5 transition-all ${
                  isActive(link.href)
                    ? 'bg-red-50 text-[#b70011]'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-[#b70011]'
                }`}
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                  isActive(link.href) ? 'bg-[#b70011]/10' : 'bg-slate-100 group-hover:bg-[#b70011]/10'
                }`}>
                  <span className={`material-symbols-outlined text-[18px] transition-colors ${
                    isActive(link.href) ? 'text-[#b70011]' : 'text-slate-500 group-hover:text-[#b70011]'
                  }`}>
                    {link.icon}
                  </span>
                </div>
                <span className="font-semibold text-sm flex-1">{link.label}</span>
                {isActive(link.href) && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b70011] shrink-0" />
                )}
                {!isActive(link.href) && (
                  <span className="material-symbols-outlined text-[16px] text-slate-300 group-hover:text-[#b70011]/40 transition-colors">
                    chevron_right
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Drawer Footer */}
          <div className="shrink-0 border-t border-slate-100 px-5 py-4 space-y-3">
            <a
              href="mailto:info@onestoptyres247.co.uk"
              className="flex items-center gap-3 group"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[16px] text-slate-500">mail</span>
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Email</p>
                <p className="text-xs font-medium text-slate-700 truncate group-hover:text-[#b70011] transition-colors">
                  info@onestoptyres247.co.uk
                </p>
              </div>
            </a>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[16px] text-slate-500">schedule</span>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Availability</p>
                <p className="text-xs font-medium text-slate-700">24/7 Emergency — Nationwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
