import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mobile Tyre Fitting | One Stop Tyres 24/7',
  description:
    "Professional, fast and reliable mobile tyre fitting available 24/7 nationwide. We bring the garage to you, whether you're at home, work, or stranded on the roadside.",
}

const features = [
  {
    icon: 'home_repair_service',
    title: 'On-site Service',
    desc: 'Full tyre replacement or repair performed exactly where you are located.',
  },
  {
    icon: 'bolt',
    title: 'Fast Response',
    desc: 'Emergency priority dispatch with an average arrival time of 30–60 minutes.',
  },
  {
    icon: 'engineering',
    title: 'Expert Technicians',
    desc: 'Highly trained professionals specialised in all types of roadside tyre work.',
  },
  {
    icon: 'verified_user',
    title: 'Safe Process',
    desc: 'Strict safety protocols followed to ensure your vehicle and passengers stay safe.',
  },
]

const steps = [
  { n: '1', title: 'Call Us', desc: 'Contact our 24/7 hotline with your location and tyre size.' },
  { n: '2', title: 'Dispatch', desc: 'We assign the nearest expert technician to your exact location.' },
  { n: '3', title: 'Arrival', desc: 'Our tech arrives with all tools and the correct tyres within 60 mins.' },
  { n: '4', title: 'Back to Road', desc: 'The work is completed safely and you continue your journey.' },
]

const whyUs = [
  {
    icon: 'schedule',
    title: '24/7 Availability',
    desc: 'Rain or shine, day or night — we never close. Our team is ready on weekends and bank holidays too.',
  },
  {
    icon: 'payments',
    title: 'No Hidden Charges',
    desc: 'We provide upfront quotes with all costs included. The price you are quoted is the price you pay.',
  },
  {
    icon: 'thumb_up',
    title: 'Expert Technicians',
    desc: 'Our mobile fitters are highly experienced professionals using industry-leading machinery.',
  },
]

const scenarios = [
  {
    title: 'Motorway Blowouts',
    desc: 'If your tyre fails at high speed on the motorway, we provide emergency priority response to get you to safety immediately.',
  },
  {
    title: 'Punctures at Home',
    desc: "Woke up to a flat tyre in your driveway? No need to call a tow truck — we'll come to you and fix it while you have your morning coffee.",
  },
  {
    title: 'Workplace Emergencies',
    desc: "Don't let a tyre issue delay your return from work. We can fit new tyres in your office car park while you finish your shift.",
  },
]

const faqs = [
  {
    q: 'How quickly can you arrive?',
    a: 'Our average response time nationwide is 30 to 60 minutes, depending on your exact location and current traffic conditions.',
  },
  {
    q: 'What tyres do you stock?',
    a: 'We carry a comprehensive range of premium, mid-range, and budget tyres covering all major makes and models. If you need a specific tyre, let us know when you call and we will confirm availability.',
  },
  {
    q: 'Do you cover all of the UK?',
    a: 'Yes — we provide nationwide coverage across the UK, 24 hours a day, 7 days a week, including bank holidays and weekends.',
  },
  {
    q: 'Can you fix a puncture instead of replacing it?',
    a: 'In many cases yes — if the puncture is in the central tread area and within repairable limits, our technicians can carry out a professional plug and patch repair on-site.',
  },
]

export default function MobileTyreFittingPage() {
  return (
    <div className="bg-surface font-body-md text-on-surface">

      {/* ── 1. HERO ──────────────────────────────────────────────── */}
      <section className="relative bg-white pt-16 pb-10 sm:pt-20 sm:pb-14 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-lg items-center">

          <div className="z-10 order-2 lg:order-1">
            <span className="inline-block bg-tertiary-fixed text-on-tertiary-fixed px-sm py-xs rounded-full font-label-bold mb-md">
              Available Nationwide 24/7
            </span>
            <h1 className="font-h1 text-h1 text-on-surface mb-md">Mobile Tyre Fitting</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg max-w-xl leading-relaxed">
              Professional, fast and reliable service available 24/7 nationwide. We bring the garage to you, whether you&apos;re at home, work, or stranded on the roadside.
            </p>
            <div className="flex flex-col sm:flex-row gap-sm">
              <a
                href="tel:07759708646"
                className="bg-primary-container text-on-primary font-call-to-action text-call-to-action py-4 px-lg rounded-lg flex items-center justify-center gap-sm hover:brightness-110 transition-all"
              >
                <span className="material-symbols-outlined">call</span>
                Call Now
              </a>
              <a
                href="https://wa.me/447759708646"
                className="border-2 border-secondary text-secondary font-call-to-action text-call-to-action py-4 px-lg rounded-lg flex items-center justify-center gap-sm hover:bg-secondary hover:text-white transition-all"
              >
                <span className="material-symbols-outlined">chat</span>
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzMbcyExgFAgRYbmX3DACIudXBRMC0HW-2hzfb7Dr19K7-zylsUvN4xgxUWikDB_gHUAyL-xXKXFwZJxiHPEYi5D5Cd1i91CWKOOHRpGkOzjWz4gVbs1JShDyTVWhvxKYxQg38uh0eBaba3vkUKvgziK-RxlM16OaSLnh33LHSSpE8daSqZ3wYFJo46JP7WBS3SFVbkIZyudtNu9M0oHLTdZSME4Fqg2TYuOsr1RzA7sRAmOCGu-FMGlIb3uM9ZSQFodfVWWcM2mg"
              alt="Emergency Tyre Service"
              className="rounded-xl shadow-2xl relative z-10 w-full h-[320px] sm:h-[400px] object-cover"
              width={800}
              height={400}
              loading="eager"
            />
          </div>

        </div>
      </section>

      {/* ── 2. INTRODUCTION ──────────────────────────────────────── */}
      <section className="py-xl bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-xl">

            <div className="w-full lg:w-1/2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN8pUda0_0qMKZg1fjuZCe5Nh2uDxOg_1vR69g7xIUJapAn0GLFaCnTz87v0R2pF7e5JaxJiJy1Lp9p9OhzbC2fwkCNdZcY-JAi3-0yJvch3M2G39C0F9NvgS0bakcAITYXGNxX3FIHqrdyMbijuUV9lBtsFzhLFHQvQBQJHTe3cnWfveEU5KUC5GsAnojR2vY9AIwL_19gH16Xt08nZK49QiMtmMy6AFaRaBccpn5g2TCCDmynyar5JKnbcseWoL_ExDZ59LLFyo"
                alt="Technician at work"
                className="rounded-xl shadow-lg w-full h-[320px] sm:h-[500px] object-cover"
                width={800}
                height={500}
                loading="lazy"
              />
            </div>

            <div className="w-full lg:w-1/2">
              <h2 className="font-h2 text-h2 text-on-surface mb-md">Reliable Mobile Tyre Fitting Service</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-md leading-relaxed">
                Don&apos;t let a puncture ruin your day. Our nationwide network of expert technicians is equipped with the latest technology to handle any tyre emergency. We stock a comprehensive range of premium, mid-range, and budget tyres for all vehicle makes and models.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant mb-lg leading-relaxed">
                With our 24/7 rapid response, we typically arrive within 30–60 minutes, ensuring you&apos;re back on the road safely and swiftly. Our commitment to excellence means no hidden charges and transparent pricing from the moment you call.
              </p>
              <div className="grid grid-cols-2 gap-md">
                {['UK Wide Coverage', 'Fully Insured', 'Certified Techs', 'Modern Vans'].map((item) => (
                  <div key={item} className="flex items-center gap-sm">
                    <span
                      className="material-symbols-outlined text-primary"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                    <span className="font-label-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. WHAT'S INCLUDED ───────────────────────────────────── */}
      <section className="py-xl bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="text-center mb-xl">
            <h2 className="font-h2 text-h2 text-on-surface mb-sm">What&apos;s Included</h2>
            <p className="font-body-md text-on-surface-variant">
              Comprehensive roadside support as standard with every call-out.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((card) => (
              <div
                key={card.title}
                className="bg-surface p-lg rounded-xl border border-outline-variant flex flex-col items-center text-center hover:shadow-lg transition-shadow group"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-md group-hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">
                    {card.icon}
                  </span>
                </div>
                <h3 className="font-h3 text-h3 mb-xs text-on-surface">{card.title}</h3>
                <p className="font-body-md text-on-surface-variant">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. HOW IT WORKS ──────────────────────────────────────── */}
      <section className="py-xl bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <h2 className="font-h2 text-h2 text-center mb-xl">How Our Service Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg">
            {steps.map((step) => (
              <div key={step.n} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white text-secondary flex items-center justify-center font-h1 text-h2 mb-md shrink-0">
                  {step.n}
                </div>
                <h4 className="font-h3 text-h3 mb-xs">{step.title}</h4>
                <p className="font-body-md text-secondary-container">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. WHY CHOOSE US ─────────────────────────────────────── */}
      <section className="py-xl bg-surface">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">

            <div>
              <h2 className="font-h2 text-h2 text-on-surface mb-md">Why Choose One Stop Tyres 24/7?</h2>
              <div className="space-y-8">
                {whyUs.map((item) => (
                  <div key={item.icon} className="flex gap-md">
                    <div className="shrink-0 w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined text-white">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-h3 text-xl mb-xs">{item.title}</h4>
                      <p className="font-body-md text-on-surface-variant">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-surface-container-high rounded-2xl p-lg border border-outline-variant">
              <div className="grid grid-cols-2 gap-sm mb-md">
                <div className="bg-white p-md rounded-xl text-center shadow-sm">
                  <div className="font-h2 text-h2 text-primary">30m</div>
                  <p className="text-xs font-label-bold uppercase tracking-widest text-on-surface-variant mt-1">Avg Arrival</p>
                </div>
                <div className="bg-white p-md rounded-xl text-center shadow-sm">
                  <div className="font-h2 text-h2 text-primary">15k+</div>
                  <p className="text-xs font-label-bold uppercase tracking-widest text-on-surface-variant mt-1">Tyres Fitted</p>
                </div>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuiRV2dXXdLEKPH99wXq1YYxwYM08qzD109rXzT26oyQMtbaraqptatalq5Ytyd53RCm3I407q6X78sa4cPNp5zwPLyOCQy5_2amYgGF1js6GRoj7sc7IjceoXfTlweFiVzLLt6aghIwJm4rQZk6UZdIFeb9PTUSXnUu9y6QFcYpC0-TeW55bfgUuFOVPdFOFFuD2QthW5luwiOp8JPiWbjLtZK5xEdY2Cs9-0Q4c0LDJHVYQI1d7pXtTbnRyttr5Kjx7T2XAKE08"
                alt="Professional Service Van"
                className="w-full h-[220px] sm:h-[250px] object-cover rounded-xl"
                width={600}
                height={250}
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── 6. SCENARIOS ─────────────────────────────────────────── */}
      <section className="py-xl bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <h2 className="font-h2 text-h2 text-center mb-xl">When You Might Need This Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            {scenarios.map((s) => (
              <div key={s.title} className="p-lg border-l-4 border-primary bg-surface shadow-sm rounded-r-lg">
                <h4 className="font-h3 text-h3 mb-xs">{s.title}</h4>
                <p className="font-body-md text-on-surface-variant">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FAQ ───────────────────────────────────────────────── */}
      <section className="py-xl bg-surface-container-low">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <h2 className="font-h2 text-h2 text-center mb-xl">Frequently Asked Questions</h2>
          <div className="space-y-sm">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white border border-outline-variant rounded-lg overflow-hidden">
                <div className="p-md border-b border-outline-variant">
                  <h3 className="font-h3 text-lg text-on-surface">{faq.q}</h3>
                </div>
                <div className="p-md font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. FINAL CTA ─────────────────────────────────────────── */}
      <section className="py-xl bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="bg-primary-container rounded-3xl p-lg md:p-xl text-center text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h2 className="font-h1 text-h1 text-white mb-md">Need Immediate Assistance?</h2>
              <p className="font-body-lg text-body-lg mb-lg opacity-90 max-w-2xl mx-auto">
                Our dispatchers are standing by right now. Get a professional technician to your location within the hour.
              </p>
              <a
                href="tel:07759708646"
                className="inline-flex items-center gap-md bg-white text-primary font-call-to-action text-h2 py-lg px-xl rounded-full hover:opacity-90 transition-all shadow-xl"
              >
                <span
                  className="material-symbols-outlined text-4xl"
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
