'use client'

import { useState } from 'react'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-[#0f172a] text-white py-2 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[13px] font-medium gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">mail</span>
              info@onestoptyres247.co.uk
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">alarm</span>
              24/7 Emergency Service
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">location_on</span>
              Greater Manchester
            </span>
          </div>
          <div className="flex items-center gap-1 font-bold text-red-500">
            <span className="material-symbols-outlined text-sm">call</span>
            07759 708 646
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            className="text-2xl font-black text-[#b70011] tracking-tighter uppercase flex items-center gap-2"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            <span className="material-symbols-outlined text-3xl">tire_repair</span>
            <span>
              One Stop Tyres{' '}
              <span className="text-[#0f172a]">24/7</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-tight"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            <a href="#" className="text-[#b70011] border-b-2 border-[#b70011] pb-1">
              Home
            </a>
            <a href="#" className="text-slate-700 hover:text-[#b70011] transition-colors">
              About Us
            </a>
            <a href="#" className="text-slate-700 hover:text-[#b70011] transition-colors">
              Services
            </a>
            <a href="#" className="text-slate-700 hover:text-[#b70011] transition-colors">
              Service Area
            </a>
            <a href="#" className="text-slate-700 hover:text-[#b70011] transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="tel:07759708646"
              className="bg-[#b70011] hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold transition-all active:scale-95 flex items-center gap-2 shadow-lg shadow-red-200 text-sm"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              <span
                className="material-symbols-outlined text-xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                phone_in_talk
              </span>
              <span className="hidden sm:inline">07759 708 646</span>
            </a>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span className="w-6 h-0.5 bg-slate-700 block" />
              <span className="w-6 h-0.5 bg-slate-700 block" />
              <span className="w-6 h-0.5 bg-slate-700 block" />
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav
            className="lg:hidden px-6 py-4 border-t border-slate-100 flex flex-col gap-4 text-sm font-semibold bg-white"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            <a href="#" className="text-[#b70011]">Home</a>
            <a href="#" className="text-slate-700 hover:text-[#b70011]">About Us</a>
            <a href="#" className="text-slate-700 hover:text-[#b70011]">Services</a>
            <a href="#" className="text-slate-700 hover:text-[#b70011]">Service Area</a>
            <a href="#" className="text-slate-700 hover:text-[#b70011]">Contact</a>
          </nav>
        )}
      </header>
    </>
  )
}
