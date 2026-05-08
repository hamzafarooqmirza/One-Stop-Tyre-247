import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jump Start Service | One Stop Tyres 24/7',
  description:
    "Professional, fast and reliable jump start available 24/7 across the UK. Dead battery? We arrive within 30 minutes and get you moving safely.",
}

const features = [
  {
    icon: 'location_on',
    title: 'On-site Service',
    desc: 'We come directly to your location — home, work, car park, or the roadside.',
  },
  {
    icon: 'bolt',
    title: 'Fast Response',
    desc: 'Average arrival within 20–30 minutes, with emergency priority dispatch.',
  },
  {
    icon: 'electric_car',
    title: 'ECU-Safe Equipment',
    desc: 'Professional power packs with surge protection — safe for modern vehicle electronics.',
  },
  {
    icon: 'battery_charging_full',
    title: 'Battery Health Test',
    desc: 'We test your battery health on-site and advise if a replacement is needed.',
  },
]

const steps = [
  { n: '1', title: 'Call Us', desc: 'Ring our 24/7 emergency line and tell us your location and vehicle.' },
  { n: '2', title: 'Share Location', desc: 'Give your address or drop a WhatsApp pin for fast routing.' },
  { n: '3', title: 'Tech Dispatched', desc: 'Our nearest mobile specialist is sent to you immediately.' },
  { n: '4', title: 'Car Started', desc: 'Vehicle jump-started safely, battery tested, and you are on your way.' },
]

const whyUs = [
  {
    icon: 'schedule',
    title: '24/7 Availability',
    desc: "Dead batteries happen at the worst times. We are operational around the clock, every day of the year.",
  },
  {
    icon: 'security',
    title: 'ECU & Electronics Safe',
    desc: 'Unlike domestic jump leads, our professional power packs protect your vehicle ECU and sensitive electronics from power surges.',
  },
  {
    icon: 'payments',
    title: 'No Hidden Charges',
    desc: 'Transparent, upfront pricing before we dispatch. No nasty surprises when the technician arrives.',
  },
]

const scenarios = [
  {
    title: 'Cold Morning Start Failure',
    desc: "Cold weather drains batteries fast. Can't start your car on a winter morning? We are on our way.",
  },
  {
    title: 'Left Lights On Overnight',
    desc: "It happens to everyone. Left the headlights or interior light on and now you're flat? One call fixes it.",
  },
  {
    title: 'Long-Term Parking Drain',
    desc: 'A car parked for several weeks will often have a dead battery. We get you started without towing or waiting.',
  },
]

const faqs = [
  {
    q: 'Is it safe for modern car electronics?',
    a: "Yes. We use professional-grade power packs with anti-surge technology specifically designed to protect the ECUs and sensitive digital components of modern vehicles, unlike standard consumer jump leads.",
  },
  {
    q: 'What if my battery needs replacing?',
    a: "Our technicians carry diagnostic equipment to test battery health. If the battery is dead and won't hold a charge, we can often supply and fit a replacement on the spot.",
  },
  {
    q: 'How long does it take to arrive?',
    a: 'We aim to reach most urban UK locations within 20–30 minutes. Our dispatch system routes the closest available technician to your real-time location.',
  },
  {
    q: 'Can you jump start any vehicle?',
    a: 'Yes — we can jump start cars, vans, SUVs, and light commercial vehicles. Our equipment handles both standard 12V and heavier 24V systems.',
  },
]

export default function JumpStartPage() {
  return (
    <div className="bg-surface font-body-md text-on-surface">

      {/* ── 1. HERO ──────────────────────────────────────────────── */}
      <section className="relative bg-white pt-12 pb-10 sm:pt-16 sm:pb-14 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          <div className="z-10 order-2 lg:order-1">
            <span className="inline-block bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full text-xs font-semibold tracking-wide mb-4">
              Available UK Wide 24/7
            </span>
            <h1 className="font-h1 text-2xl sm:text-3xl lg:text-[40px] font-bold text-on-surface mb-4 leading-tight">
              Jump Start Service
            </h1>
            <p className="text-base sm:text-lg text-on-surface-variant mb-6 leading-relaxed">
              Professional, fast and reliable jump start available 24/7 across the UK. Dead battery? Our specialist technicians arrive within 30 minutes and get you moving safely.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:07759708646"
                className="bg-primary-container text-white font-semibold text-base py-3.5 px-6 rounded-lg flex items-center justify-center gap-2 hover:brightness-110 transition-all w-full sm:w-auto"
              >
                <span className="material-symbols-outlined text-[20px]">call</span>
                Call Now
              </a>
              <a
                href="https://wa.me/447759708646"
                className="border-2 border-secondary text-secondary font-semibold text-base py-3.5 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-secondary hover:text-white transition-all w-full sm:w-auto"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa2c2K92nCe9G_NTaEBkP_ApvFcAKwsUYKu1mIZmPX38tBU7g_bb_jWcAC4K2AV0u_p8NS991tW4AohXQ5ig65fjIJflr6gEoPWGHqWoLFXuSYwU17-erVxrfFNedQKv5yVpP2KVuYXd7AO2NhWfUNnDOE90-fwKtJP7ca0ma5rRwhNVGvC4yea8Q_xGpQo4TCbGicSXXFCw4OGIB8Ph3ZdRT9Hu2yZp2ZIf-2gtEX5MCZ1R0zazfGy8a_ArdwSRcHtpkJbTr4JME"
              alt="Professional jump start battery clamps"
              className="rounded-xl shadow-2xl relative z-10 w-full h-[240px] sm:h-[360px] lg:h-[420px] object-cover"
              width={800}
              height={420}
              loading="eager"
            />
          </div>

        </div>
      </section>

      {/* ── 2. INTRODUCTION ──────────────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

            <div className="w-full lg:w-1/2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzMbcyExgFAgRYbmX3DACIudXBRMC0HW-2hzfb7Dr19K7-zylsUvN4xgxUWikDB_gHUAyL-xXKXFwZJxiHPEYi5D5Cd1i91CWKOOHRpGkOzjWz4gVbs1JShDyTVWhvxKYxQg38uh0eBaba3vkUKvgziK-RxlM16OaSLnh33LHSSpE8daSqZ3wYFJo46JP7WBS3SFVbkIZyudtNu9M0oHLTdZSME4Fqg2TYuOsr1RzA7sRAmOCGu-FMGlIb3uM9ZSQFodfVWWcM2mg"
                alt="Technician jump starting a vehicle"
                className="rounded-xl shadow-lg w-full h-[260px] sm:h-[400px] lg:h-[480px] object-cover"
                width={800}
                height={480}
                loading="lazy"
              />
            </div>

            <div className="w-full lg:w-1/2">
              <h2 className="font-h2 text-xl sm:text-2xl lg:text-[32px] font-bold text-on-surface mb-4 leading-snug">
                Reliable Jump Start Service
              </h2>
              <p className="text-sm sm:text-base text-on-surface-variant mb-3 leading-relaxed">
                Modern vehicle batteries are sensitive and prone to failure — particularly in cold weather, after extended parking, or when lights are accidentally left on. Long inactivity alone can drain a battery completely.
              </p>
              <p className="text-sm sm:text-base text-on-surface-variant mb-6 leading-relaxed">
                At One Stop Tyres 24/7 we use industrial-grade power packs to provide a clean, surge-protected boost. Unlike standard consumer jump leads, our equipment ensures your vehicle starts without risking damage to its ECU or sensitive electronics.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {['ECU-Safe Equipment', 'All Vehicle Types', 'Battery Health Test', 'No Hidden Charges'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span
                      className="material-symbols-outlined text-primary text-[20px] shrink-0"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                    <span className="text-sm font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. WHAT'S INCLUDED ───────────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-h2 text-xl sm:text-2xl lg:text-[32px] font-bold text-on-surface mb-2">What&apos;s Included</h2>
            <p className="text-sm sm:text-base text-on-surface-variant">
              Everything needed to get your vehicle started safely, wherever you are.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((card) => (
              <div
                key={card.title}
                className="bg-surface p-5 sm:p-6 rounded-xl border border-outline-variant flex flex-col items-center text-center hover:shadow-lg transition-shadow group"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined text-primary group-hover:text-white text-2xl">
                    {card.icon}
                  </span>
                </div>
                <h3 className="font-semibold text-base sm:text-lg mb-2 text-on-surface">{card.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. HOW IT WORKS ──────────────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-h2 text-xl sm:text-2xl lg:text-[32px] font-bold text-center mb-8 sm:mb-12">
            How Our Service Works
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {steps.map((step) => (
              <div key={step.n} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white text-secondary flex items-center justify-center text-xl sm:text-2xl font-bold mb-3 sm:mb-4 shrink-0">
                  {step.n}
                </div>
                <h4 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">{step.title}</h4>
                <p className="text-xs sm:text-sm text-secondary-container leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. WHY CHOOSE US ─────────────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            <div>
              <h2 className="font-h2 text-xl sm:text-2xl lg:text-[32px] font-bold text-on-surface mb-6 leading-snug">
                Why Choose One Stop Tyres 24/7?
              </h2>
              <div className="space-y-5 sm:space-y-6">
                {whyUs.map((item) => (
                  <div key={item.icon} className="flex gap-4">
                    <div className="shrink-0 w-11 h-11 bg-primary-container rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-xl">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-base sm:text-lg mb-1">{item.title}</h4>
                      <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-surface-container-high rounded-2xl p-5 sm:p-6 border border-outline-variant">
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-white p-4 rounded-xl text-center shadow-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">30m</div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant mt-1">Avg Arrival</p>
                </div>
                <div className="bg-white p-4 rounded-xl text-center shadow-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">24/7</div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant mt-1">Always Open</p>
                </div>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuiRV2dXXdLEKPH99wXq1YYxwYM08qzD109rXzT26oyQMtbaraqptatalq5Ytyd53RCm3I407q6X78sa4cPNp5zwPLyOCQy5_2amYgGF1js6GRoj7sc7IjceoXfTlweFiVzLLt6aghIwJm4rQZk6UZdIFeb9PTUSXnUu9y6QFcYpC0-TeW55bfgUuFOVPdFOFFuD2QthW5luwiOp8JPiWbjLtZK5xEdY2Cs9-0Q4c0LDJHVYQI1d7pXtTbnRyttr5Kjx7T2XAKE08"
                alt="Mobile service van"
                className="w-full h-[200px] sm:h-[240px] object-cover rounded-xl"
                width={600}
                height={240}
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── 6. SCENARIOS ─────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-h2 text-xl sm:text-2xl lg:text-[32px] font-bold text-center mb-8 sm:mb-12">
            When You Might Need a Jump Start
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {scenarios.map((s) => (
              <div key={s.title} className="p-5 sm:p-6 border-l-4 border-primary bg-surface shadow-sm rounded-r-lg">
                <h4 className="font-semibold text-base sm:text-lg mb-2">{s.title}</h4>
                <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FAQ ───────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-surface-container-low">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-h2 text-xl sm:text-2xl lg:text-[32px] font-bold text-center mb-8 sm:mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white border border-outline-variant rounded-lg overflow-hidden">
                <div className="px-5 py-4 border-b border-outline-variant">
                  <h3 className="font-semibold text-sm sm:text-base text-on-surface">{faq.q}</h3>
                </div>
                <div className="px-5 py-4 text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. FINAL CTA ─────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-primary-container rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h2 className="font-h1 text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-bold text-white mb-3 sm:mb-4 leading-tight">
                Battery Dead Right Now?
              </h2>
              <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 opacity-90 max-w-xl mx-auto leading-relaxed">
                Call us and we will dispatch a technician to your exact location within minutes. Available 24 hours, 7 days a week.
              </p>
              <a
                href="tel:07759708646"
                className="inline-flex items-center gap-2 sm:gap-3 bg-white text-primary font-bold text-base sm:text-xl md:text-2xl py-3 sm:py-4 px-6 sm:px-10 rounded-full hover:opacity-90 transition-all shadow-xl"
              >
                <span
                  className="material-symbols-outlined text-xl sm:text-2xl md:text-3xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  phone_in_talk
                </span>
                07759 708 646
              </a>
            </div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-black/10 rounded-full blur-2xl pointer-events-none" />
          </div>
        </div>
      </section>

    </div>
  )
}
