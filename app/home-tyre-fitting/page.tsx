import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home Tyre Fitting | One Stop Tyres 24/7',
  description:
    'Professional, fast and reliable home tyre fitting available 24/7 across the UK. We bring the garage to your doorstep — no towing, no waiting rooms.',
}

const features = [
  {
    icon: 'home',
    title: 'Doorstep Service',
    desc: 'Full tyre fitting completed on your driveway or outside your home — zero hassle.',
  },
  {
    icon: 'bolt',
    title: 'Fast Response',
    desc: 'Emergency priority dispatch with an average arrival time of 20–30 minutes.',
  },
  {
    icon: 'engineering',
    title: 'Expert Technicians',
    desc: 'Certified professionals experienced with all vehicle makes and tyre types.',
  },
  {
    icon: 'build',
    title: 'Fully Equipped',
    desc: 'Our vans carry wheel balancing and fitting machinery for a garage-quality result on-site.',
  },
]

const steps = [
  { n: '1', title: 'Call Us', desc: 'Contact our 24/7 line with your vehicle details and home address.' },
  { n: '2', title: 'Confirm Tyres', desc: 'We confirm the correct tyre size and availability before dispatch.' },
  { n: '3', title: 'Tech Arrives', desc: 'Our technician arrives at your door within 20–30 minutes, fully equipped.' },
  { n: '4', title: 'Job Done', desc: 'Tyres fitted and balanced — you never had to leave the house.' },
]

const whyUs = [
  {
    icon: 'schedule',
    title: '24/7 Availability',
    desc: "Morning flat before the school run? Midnight emergency? We're always operational, including weekends and bank holidays.",
  },
  {
    icon: 'payments',
    title: 'No Hidden Charges',
    desc: 'We give you a transparent, upfront quote before we set off. The price you hear is the price you pay.',
  },
  {
    icon: 'thumb_up',
    title: 'No Travel Required',
    desc: 'Skip the tow truck and garage waiting room. Stay comfortable at home while we handle everything outside.',
  },
]

const scenarios = [
  {
    title: 'Morning Flat Before Work',
    desc: 'Woken up to a flat tyre with an important meeting ahead? We arrive fast so your day stays on track.',
  },
  {
    title: 'Working From Home',
    desc: "Don't lose productivity. We fit your tyres while you're on calls — zero downtime, zero effort from you.",
  },
  {
    title: 'Elderly or Vulnerable Drivers',
    desc: 'Not comfortable driving on a suspect tyre? Stay safe at home and let our team take care of everything.',
  },
]

const faqs = [
  {
    q: 'Do I need to be present during the fitting?',
    a: "It's ideal for you to be home so we can confirm details and use your locking wheel nut key if needed. However, we can arrange contactless service if you can leave the key securely accessible.",
  },
  {
    q: 'Can you work on my driveway?',
    a: 'Yes — as long as there is enough space for our van to park safely near your car and room to work around the wheels, your driveway is the perfect location.',
  },
  {
    q: 'What areas do you cover?',
    a: 'We provide 24/7 nationwide coverage across the UK. Our network of mobile technicians means we are never far from you.',
  },
  {
    q: 'How quickly can you arrive?',
    a: 'Our average arrival time is 20–30 minutes for most UK locations, depending on traffic and your exact postcode.',
  },
]

export default function HomeTyreFittingPage() {
  return (
    <div className="bg-surface font-body-md text-on-surface">

      {/* ── 1. HERO ──────────────────────────────────────────────── */}
      <section className="relative bg-white pt-12 pb-10 sm:pt-16 sm:pb-14 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          <div className="z-10 order-2 lg:order-1">
            <span className="inline-block bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full text-xs font-semibold tracking-wide mb-4">
              Available Nationwide 24/7
            </span>
            <h1 className="font-h1 text-2xl sm:text-3xl lg:text-[40px] font-bold text-on-surface mb-4 leading-tight">
              Home Tyre Fitting
            </h1>
            <p className="text-base sm:text-lg text-on-surface-variant mb-6 leading-relaxed">
              Professional, fast and reliable tyre fitting at your front door, available 24/7 across the UK. No tow truck, no waiting rooms — we bring the garage to you.
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
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBY2JiBB4iWEo-JXcj4AZLD2m7PufwzApHZYLCT5BTBtSv9thvaIAaxOG0pBI7-rK4LruCo0qt-bOfclAb4qtv1dtf8g2jyZAzNmE8bKGZw_i9IV77jH364SRk-IPjADMxPGTMwS3uSNXL267hNbH11h5kSArtmEO3uXuM4qsbBsG3Eno8f20Tg1oWWjoidwIP-s0b7eMa_ZxsPdO7fexXbEaqNc-zw-1pX5orSctxkU6YiV2PF4omRPKbgo3IpxJqDT8Vh0kK6ni8"
              alt="Home tyre fitting technician at doorstep"
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh9UaduYOcqugNFvii14mqbkKS26l_CEILPQo8zi22TtpcLKSh-miEyClatv1ZrfgrTLStqQ1-TUwUNEfoxsF84VwfUhW729PP4DRtBRfDISG8_HGtOmuo5G_aWu7-rw5eXFqd19J78cWffSST-6k4HGO36MwQqliseaC8hurg-sYiuF79hNUba4eDYjPibAxjsIjQgKnldUzB84pagMU4lpIeRs9r47G39W4eOk72OWQ6GNKhan3XKB40nko7iPvJYJIi1BHMYOI"
                alt="Technician fitting a tyre on a driveway"
                className="rounded-xl shadow-lg w-full h-[260px] sm:h-[400px] lg:h-[480px] object-cover"
                width={800}
                height={480}
                loading="lazy"
              />
            </div>

            <div className="w-full lg:w-1/2">
              <h2 className="font-h2 text-xl sm:text-2xl lg:text-[32px] font-bold text-on-surface mb-4 leading-snug">
                Reliable Home Tyre Fitting Service
              </h2>
              <p className="text-sm sm:text-base text-on-surface-variant mb-3 leading-relaxed">
                Experience the ultimate convenience with our door-to-door tyre fitting. Whether you&apos;ve woken up to a flat on your driveway or you&apos;re simply too busy to visit a garage, our fully equipped mobile units come to you with everything needed for a professional fitting.
              </p>
              <p className="text-sm sm:text-base text-on-surface-variant mb-6 leading-relaxed">
                We stock a wide range of premium, mid-range, and budget tyres for all makes and models. Call us and we&apos;ll confirm availability upfront — no surprises, no delays.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {['UK Wide Coverage', 'Fully Insured', 'Certified Techs', 'Wheel Balancing Included'].map((item) => (
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
              Everything you need for a professional tyre fitting without leaving home.
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
                  <div className="text-2xl sm:text-3xl font-bold text-primary">20m</div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant mt-1">Avg Arrival</p>
                </div>
                <div className="bg-white p-4 rounded-xl text-center shadow-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">15k+</div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant mt-1">Tyres Fitted</p>
                </div>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuiRV2dXXdLEKPH99wXq1YYxwYM08qzD109rXzT26oyQMtbaraqptatalq5Ytyd53RCm3I407q6X78sa4cPNp5zwPLyOCQy5_2amYgGF1js6GRoj7sc7IjceoXfTlweFiVzLLt6aghIwJm4rQZk6UZdIFeb9PTUSXnUu9y6QFcYpC0-TeW55bfgUuFOVPdFOFFuD2QthW5luwiOp8JPiWbjLtZK5xEdY2Cs9-0Q4c0LDJHVYQI1d7pXtTbnRyttr5Kjx7T2XAKE08"
                alt="Professional mobile tyre van"
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
            When You Might Need Home Tyre Fitting
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
                Need a Tyre Fitted at Home?
              </h2>
              <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 opacity-90 max-w-xl mx-auto leading-relaxed">
                Call now and we&apos;ll have a technician at your door within the hour. No tow trucks, no garage trips.
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
