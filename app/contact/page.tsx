'use client'

import { useState } from 'react'
export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqs = [
    {
      q: 'What is your average response time?',
      a: 'We aim to reach most locations across the UK within 30 to 60 minutes. Our dispatch system identifies the nearest technician to your location to ensure the fastest possible arrival.',
    },
    {
      q: 'Do you really operate 24 hours a day?',
      a: 'Yes, One Stop Tyres 24/7 provides true round-the-clock emergency assistance. This includes weekends, public holidays, and late-night call-outs.',
    },
    {
      q: 'Which areas do you cover?',
      a: "We provide nationwide coverage across the UK. Whether you're on a motorway, in a city center, or a remote rural area, we can dispatch a mobile technician to assist you.",
    },
    {
      q: 'What is the best way to contact you?',
      a: 'For emergencies, always call us directly on 07759 708 646 for immediate dispatch. For general quotes or bookings, you can use our contact form or email us at info@onestoptyres247.co.uk.',
    },
  ]

  return (
    <>
      <main className="bg-[#fcf9f8] text-[#1c1b1b]" style={{ fontFamily: 'Inter, sans-serif' }}>

        {/* HERO */}
        <section className="relative bg-[#1c1b1b] py-16 sm:py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBE6E8ZSe8sAyHmlhWi5LEjdJXHUJ0VkiT0-ha65SLRuF248HpKZtM0qXH7uIPuyZqfIl0ZkJlMBNAyvp0-dCmxuhbDEDSecKcGt1C3IVejRr8B-VQCE4XDxgjjZLregKEOOvA_qAkWk8CWlz8heNogWtjsCQEHp5uXM_VBK1IP7F68OymsVri34Xske2_PEQmjQiY9ML20r3g7SR8Va4mZQmd9DRg3YgjL4HJ4L6NyeccIOJjM6jQY-x6saRocoCbxMVABTmPpBqc"
              alt="Emergency tyre service van on UK motorway"
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
            <h1
              className="text-white mb-4 sm:mb-6 uppercase tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-bold"
              style={{ fontFamily: 'Work Sans, sans-serif' }}
            >
              Contact Us
            </h1>
            <p
              className="text-white/90 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Get in touch with our team for fast and reliable roadside assistance across the UK. We
              operate round the clock to keep you moving.
            </p>
          </div>
        </section>

        {/* CONTACT DETAILS & FORM BENTO GRID */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">

            {/* LEFT: Contact details */}
            <div className="lg:col-span-5 space-y-6 sm:space-y-8">
              <div
                className="bg-white p-6 sm:p-10 rounded-xl border border-slate-100"
                style={{ boxShadow: '0px 4px 20px rgba(0,45,98,0.05)' }}
              >
                <h2
                  className="text-[#1c1b1b] mb-6 sm:mb-8 text-2xl sm:text-3xl lg:text-[32px] leading-tight font-bold"
                  style={{
                    fontFamily: 'Work Sans, sans-serif',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Get In Touch
                </h2>
                <div className="space-y-5 sm:space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-[#ffdad6] p-2.5 sm:p-3 rounded-lg text-[#b70011] shrink-0">
                      <span
                        className="material-symbols-outlined text-xl sm:text-2xl"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        phone_in_talk
                      </span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[#5c403c] mb-1 text-sm font-semibold">
                        Emergency Phone
                      </p>
                      <p
                        className="text-[#b70011] text-lg sm:text-xl lg:text-2xl font-semibold break-all"
                        style={{ fontFamily: 'Work Sans, sans-serif' }}
                      >
                        07759 708 646
                      </p>
                      <p className="text-xs sm:text-sm text-[#5c403c]">Available 24/7 for urgent calls</p>
                    </div>
                  </div>
                  {/* Email */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-[#c8e6ff] p-2.5 sm:p-3 rounded-lg text-[#005f88] shrink-0">
                      <span
                        className="material-symbols-outlined text-xl sm:text-2xl"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        mail
                      </span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[#5c403c] mb-1 text-sm font-semibold">
                        Email Support
                      </p>
                      <p
                        className="text-[#1c1b1b] text-sm sm:text-base lg:text-lg font-semibold break-all"
                        style={{ fontFamily: 'Work Sans, sans-serif' }}
                      >
                        info@onestoptyres247.co.uk
                      </p>
                      <p className="text-xs sm:text-sm text-[#5c403c]">General inquiries and quotes</p>
                    </div>
                  </div>
                  {/* Coverage */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-[#d7e2ff] p-2.5 sm:p-3 rounded-lg text-[#3e5e95] shrink-0">
                      <span
                        className="material-symbols-outlined text-xl sm:text-2xl"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        location_on
                      </span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[#5c403c] mb-1 text-sm font-semibold">
                        Our Coverage
                      </p>
                      <p
                        className="text-[#1c1b1b] text-lg sm:text-xl lg:text-2xl font-semibold"
                        style={{ fontFamily: 'Work Sans, sans-serif' }}
                      >
                        Nationwide UK
                      </p>
                      <p className="text-xs sm:text-sm text-[#5c403c]">Strategic locations for 20-30m response</p>
                    </div>
                  </div>
                </div>

                {/* 24/7 note */}
                <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-[#f6f3f2] rounded-lg" style={{ borderLeft: '4px solid #b70011' }}>
                  <h3 className="text-[#b70011] mb-2 flex items-center gap-2 text-sm font-semibold">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    24/7 EMERGENCY ASSISTANCE
                  </h3>
                  <p className="text-xs sm:text-sm text-[#1c1b1b]">
                    We are fully operational on weekends, bank holidays, and late nights. Don&apos;t
                    hesitate to call anytime.
                  </p>
                </div>
              </div>

              {/* Map image */}
              <div
                className="h-48 sm:h-64 rounded-xl overflow-hidden border border-slate-100 grayscale hover:grayscale-0 transition-all duration-500"
                style={{ boxShadow: '0px 4px 20px rgba(0,45,98,0.05)' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkfLn-iAVLGBNe_5-oKdPZLR8JV8CZKL-QDb9kGdHPrGnbOXvBwlWw0dTLQmckhlC_CWL9JMUa15Kr-LX4bHOR3YgxsUi5DrKwgbrQYw1-RtD5IgLbUelvfg9m0Q4BCLzqV5NXuDetOZqn9Au0pu9U8f6gJZy3igbwvc-uy2x79yd23MiSkt67T2RHIP_EuNU4QVgqSb1VLWYpnKltA-NjNEsFK1VcHfgQMjSnFTTPPv_hvnMxypMZpECmWQ8_xjCFIi4d9wWf2ts"
                  alt="UK coverage map"
                />
              </div>
            </div>

            {/* RIGHT: Contact form */}
            <div className="lg:col-span-7">
              <div
                className="bg-white p-6 sm:p-10 rounded-xl border border-slate-100"
                style={{ boxShadow: '0px 4px 20px rgba(0,45,98,0.05)' }}
              >
                <h2
                  className="text-[#1c1b1b] mb-3 sm:mb-4 text-2xl sm:text-3xl lg:text-[32px] leading-tight font-bold"
                  style={{
                    fontFamily: 'Work Sans, sans-serif',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Send Us a Message
                </h2>
                <p className="text-[#5c403c] mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
                  For non-urgent inquiries, booking requests, or detailed quotes, please fill out the
                  form below.
                </p>
                <form className="space-y-4 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-[#5c403c] mb-2 text-sm font-semibold">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full p-3 sm:p-4 bg-[#f6f3f2] border border-[#e6bdb8] rounded-lg focus:outline-none focus:border-[#3e5e95] transition-all text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-[#5c403c] mb-2 text-sm font-semibold">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="07123 456 789"
                        className="w-full p-3 sm:p-4 bg-[#f6f3f2] border border-[#e6bdb8] rounded-lg focus:outline-none focus:border-[#3e5e95] transition-all text-sm sm:text-base"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-[#5c403c] mb-2 text-sm font-semibold">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full p-3 sm:p-4 bg-[#f6f3f2] border border-[#e6bdb8] rounded-lg focus:outline-none focus:border-[#3e5e95] transition-all text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-[#5c403c] mb-2 text-sm font-semibold">
                        Location / Postcode
                      </label>
                      <input
                        type="text"
                        placeholder="E.g. SW1A 1AA"
                        className="w-full p-3 sm:p-4 bg-[#f6f3f2] border border-[#e6bdb8] rounded-lg focus:outline-none focus:border-[#3e5e95] transition-all text-sm sm:text-base"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#5c403c] mb-2 text-sm font-semibold">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please describe your service requirements..."
                      className="w-full p-3 sm:p-4 bg-[#f6f3f2] border border-[#e6bdb8] rounded-lg focus:outline-none focus:border-[#3e5e95] transition-all text-sm sm:text-base"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#dc2626] text-white px-6 sm:px-10 py-3 sm:py-4 rounded-lg active:opacity-80 active:scale-95 transition-all text-base sm:text-xl font-bold"
                    style={{
                      fontFamily: 'Work Sans, sans-serif',
                      letterSpacing: '0.02em',
                    }}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* QUICK CONTACT */}
        <section className="bg-[#a2c1ff] py-10 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 text-center sm:text-left">
            <div>
              <h2
                className="text-[#2d4e85] mb-2 text-2xl sm:text-3xl lg:text-[32px] leading-tight font-bold"
                style={{
                  fontFamily: 'Work Sans, sans-serif',
                  letterSpacing: '-0.01em',
                }}
              >
                Need Immediate Assistance?
              </h2>
              <p className="text-[#2d4e85]/80 text-base sm:text-lg leading-relaxed">
                Call us now for fast response and emergency support. Our average response time is 20-30
                minutes.
              </p>
            </div>
            <a
              href="tel:07759708646"
              className="flex items-center gap-2 sm:gap-3 bg-[#dc2626] text-white px-6 sm:px-12 py-4 sm:py-5 rounded-full shadow-xl hover:bg-[#93000b] transition-colors whitespace-nowrap text-base sm:text-xl font-bold shrink-0"
              style={{
                fontFamily: 'Work Sans, sans-serif',
                letterSpacing: '0.02em',
              }}
            >
              <span
                className="material-symbols-outlined text-xl sm:text-2xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                phone_in_talk
              </span>
              Call Now
            </a>
          </div>
        </section>

        {/* WHY CONTACT US */}
        <section className="py-12 sm:py-16 bg-[#fcf9f8] px-4 sm:px-6">
          <div className="max-w-7xl mx-auto text-center mb-10 sm:mb-16">
            <h2
              className="text-[#1c1b1b] mb-4 text-2xl sm:text-3xl lg:text-[32px] leading-tight font-bold"
              style={{
                fontFamily: 'Work Sans, sans-serif',
                letterSpacing: '-0.01em',
              }}
            >
              Why Contact One Stop Tyres 24/7
            </h2>
            <div className="h-1 w-24 bg-[#b70011] mx-auto rounded-full" />
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { icon: 'emergency_home', title: '24/7 Support', desc: 'Around the clock emergency support, 365 days a year.' },
              { icon: 'speed', title: 'Fast Response', desc: 'Rapid nationwide coverage with 20-30 min arrival times.' },
              { icon: 'engineering', title: 'Professional', desc: 'Expert technicians equipped with modern diagnostic tools.' },
              { icon: 'verified', title: 'Reliable', desc: 'Consistent, high-quality service you can trust every time.' },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 sm:p-8 rounded-xl border-t-4 border-[#b70011]"
                style={{ boxShadow: '0px 4px 20px rgba(0,45,98,0.05)' }}
              >
                <div className="text-[#b70011] mb-3 sm:mb-4">
                  <span className="material-symbols-outlined text-3xl sm:text-4xl">
                    {item.icon}
                  </span>
                </div>
                <h3
                  className="mb-2 text-[#1c1b1b] text-xl sm:text-2xl leading-tight font-semibold"
                  style={{ fontFamily: 'Work Sans, sans-serif' }}
                >
                  {item.title}
                </h3>
                <p className="text-[#5c403c] text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#f6f3f2]">
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-[#1c1b1b] text-center mb-8 sm:mb-12 text-2xl sm:text-3xl lg:text-[32px] leading-tight font-bold"
              style={{
                fontFamily: 'Work Sans, sans-serif',
                letterSpacing: '-0.01em',
              }}
            >
              Frequently Asked Questions
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden"
                >
                  <button
                    type="button"
                    className="flex justify-between items-center w-full p-4 sm:p-6 text-left text-sm sm:text-base font-semibold gap-3"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span className="text-[#1c1b1b]">{faq.q}</span>
                    <span
                      className="material-symbols-outlined shrink-0 transition-transform text-xl sm:text-2xl"
                      style={{ transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    >
                      expand_more
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-[#5c403c] border-t border-slate-50 pt-3 sm:pt-4 text-sm sm:text-base leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>


      </main>
    </>
  )
}
