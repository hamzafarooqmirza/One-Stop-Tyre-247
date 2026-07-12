import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema, serviceSchema, faqSchema, SITE_URL } from '@/lib/schema'

export const metadata: Metadata = {
  title: '24 Hour Emergency Tyre Fitting | One Stop Tyres 24/7',
  description:
    'Genuine 24 hour emergency tyre fitting, day or night, 365 days a year. Our technicians reach you fast for immediate tyre help wherever you are.',
  alternates: { canonical: 'https://onestoptyres247.co.uk/24-hour-emergency-tyre-fitting' },
}

const _breadcrumbSchema = breadcrumbSchema([
  { name: 'Home', item: SITE_URL },
  { name: '24 Hour Emergency Tyre Fitting', item: `${SITE_URL}/24-hour-emergency-tyre-fitting` },
])

const _serviceSchema = serviceSchema({
  slug: '24-hour-emergency-tyre-fitting',
  name: '24 Hour Emergency Tyre Fitting',
  serviceType: 'Emergency Roadside Tyre Assistance',
  description:
    'Fast 24 hour emergency mobile tyre fitting, roadside tyre replacement and puncture repair across Greater Manchester. Available day and night, 365 days a year.',
})

const faqs = [
  { q: 'Do you provide 24 hour emergency tyre fitting?', a: 'Yes. We offer emergency mobile tyre fitting services day and night, including weekends and bank holidays.' },
  { q: 'Can you replace a tyre at my home?', a: 'Yes. We provide home tyre fitting services, allowing you to have new tyres installed without visiting a garage.' },
  { q: 'Can you repair a puncture?', a: "If the puncture meets British safety guidelines and is repairable, we will carry out a professional puncture repair. Otherwise, we'll recommend a replacement tyre." },
  { q: 'Do you provide roadside tyre replacement?', a: 'Yes. Our technicians can safely replace damaged tyres at the roadside, helping you continue your journey quickly.' },
  { q: 'Do you offer same day tyre fitting?', a: 'Yes. We provide same day mobile tyre fitting whenever appointments and stock availability allow.' },
  { q: 'Can I book a late night tyre repair?', a: 'Absolutely. Our emergency tyre service operates 24 hours a day for urgent situations.' },
  { q: 'What vehicles do you cover?', a: 'We fit tyres for most cars, SUVs, vans and light commercial vehicles.' },
  { q: 'Do you supply tyres as well?', a: 'Yes. We carry a wide range of premium, mid-range and budget tyres and can source most common sizes quickly.' },
  { q: 'Can you change my tyre at work?', a: 'Yes. We regularly fit tyres at workplaces, offices, business parks, and commercial premises.' },
  { q: 'Do you offer mobile tyre fitting near me?', a: 'Our mobile service covers a wide operating area and comes directly to your location.' },
  { q: 'Can you replace a completely flat tyre?', a: 'Yes. Whether your tyre has burst, suffered sidewall damage, or cannot be repaired, we can replace it on-site.' },
  { q: 'What if my tyre blows out on the motorway?', a: 'For safety reasons, motorway repairs are not normally carried out on the live carriageway. We can attend once your vehicle is moved to a safe location.' },
  { q: 'Do you provide emergency tyre replacement?', a: 'Yes. Emergency tyre replacement is one of our most requested services and is available 24/7.' },
  { q: 'Can you fit tyres at the roadside?', a: 'Yes. Our mobile technicians regularly complete roadside tyre changes and puncture repairs safely.' },
  { q: 'Do you provide mobile tyre repair?', a: 'Yes. We offer mobile tyre repair wherever a safe repair is possible.' },
  { q: 'Do you offer tyre fitting at home?', a: 'Yes. Home tyre fitting is available for customers who want maximum convenience.' },
  { q: 'Can you help with a tyre call out?', a: "Yes. If you've experienced a flat tyre, puncture, or blowout, simply call us, and we'll dispatch a mobile technician." },
  { q: 'Do you provide emergency puncture repair?', a: 'Yes. We inspect the tyre and carry out a safe puncture repair whenever possible.' },
  { q: 'Do you fit tyres on the driveway?', a: 'Yes. Our fully equipped vans can perform tyre fitting on your driveway or outside your property.' },
  { q: 'Can I get tyres fitted today?', a: 'In most cases, yes. We offer same-day appointments and emergency call-outs throughout the day and night.' },
  { q: 'Why choose a mobile tyre fitting service?', a: 'A mobile tyre service saves time, avoids recovery costs, and allows you to stay at home or continue your day while a professional technician comes directly to you.' },
  { q: 'Do you offer emergency tyre fitting for work vehicles?', a: 'Yes. We regularly assist business vehicles, company cars, and light commercial vans requiring urgent tyre replacement.' },
  { q: 'Are your tyres covered by warranty?', a: "All new tyres supplied are sourced from reputable manufacturers and include the applicable manufacturer's warranty." },
  { q: 'Can you replace more than one tyre?', a: 'Yes. We can replace a single tyre, a pair or a complete set depending on your requirements.' },
  { q: 'How quickly can you arrive?', a: 'Response times depend on location and demand, but we always dispatch the nearest available technician to minimise waiting times.' },
  { q: 'Is mobile tyre fitting more expensive than visiting a garage?', a: 'Our pricing is competitive and includes the convenience of having a professional tyre fitter come directly to your location, saving both time and recovery costs.' },
]

const _faqSchema = faqSchema(faqs)

const whyChooseUs = [
  {
    icon: '🚗',
    title: 'Available 24 Hours',
    desc: 'Day or night, weekdays or weekends, our emergency tyre fitters are ready to respond quickly whenever you need assistance.',
  },
  {
    icon: '⚡',
    title: 'Fast Response Times',
    desc: 'We aim to reach your location as quickly as possible, reducing waiting time and helping you continue your journey safely.',
  },
  {
    icon: '🔧',
    title: 'Fully Mobile Service',
    desc: 'No recovery truck or garage visit required. We bring professional tyre fitting equipment directly to your home, workplace or roadside location.',
  },
  {
    icon: '⭐',
    title: 'Honest Prices & Professional Service',
    desc: 'Transparent pricing, experienced technicians and quality tyres ensure you receive outstanding value and dependable workmanship every time.',
  },
]

const steps = [
  {
    n: '1',
    title: 'Call Us',
    desc: 'Contact our emergency team and tell us your location, vehicle details, and tyre size if available.',
  },
  {
    n: '2',
    title: 'Dispatch',
    desc: 'We locate the nearest available mobile tyre technician and dispatch them immediately with the appropriate equipment and replacement tyres.',
  },
  {
    n: '3',
    title: 'Arrival',
    desc: 'Our technician arrives at your location, inspects the damaged tyre and recommends the safest repair or replacement solution.',
  },
  {
    n: '4',
    title: 'Back On The Road',
    desc: 'Your new tyre is professionally fitted, balanced where required, and safety checked, allowing you to continue your journey with confidence.',
  },
]

export default function EmergencyTyreFitting24HourPage() {
  return (
    <div className="text-[#1c1b1b]" style={{ fontFamily: 'var(--font-inter)' }}>
      <JsonLd data={_breadcrumbSchema} />
      <JsonLd data={_serviceSchema} />
      <JsonLd data={_faqSchema} />

      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden">
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/tyre fitting in emergergency-airanko (1).webp"
          alt="24 hour emergency tyre fitting"
          className="absolute inset-0 w-full h-full object-cover object-center"
          width={1600}
          height={900}
          decoding="async"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0f172a]/80" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 py-20 lg:py-28">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-3.5 py-1.5 rounded-full mb-6 text-[11px] uppercase tracking-widest border border-red-600/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              Available 24/7 — Greater Manchester
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white font-black mb-5 leading-[1.1]"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.02em' }}
            >
              24 Hour Emergency Tyre Fitting, Fast Mobile Tyre Replacement &amp; Repair
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
              A flat tyre can happen at any time, leaving you stranded at home, work, or on the
              roadside. Our 24 hour emergency tyre fitting service brings professional tyre
              replacement and puncture repair directly to your location, helping you get back on the
              road quickly and safely without the need for recovery or towing.
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              Whether you need an emergency tyre fitter late at night, an urgent roadside tyre
              replacement, or a same day mobile tyre fitting service, our experienced technicians
              arrive fully equipped with quality tyres, specialist tools, and everything needed to
              complete the job on-site. We cover cars, vans, SUVs, and light commercial vehicles
              with a fast, reliable and affordable call-out service.
            </p>

            {/* Checklist */}
            <ul className="space-y-2 mb-8">
              {[
                '24 Hour Emergency Mobile Tyre Fitting',
                'Fast Roadside Tyre Repair & Replacement',
                'Home, Workplace & Roadside Call Outs',
                'Same Day & Late Night Emergency Service',
                'Professional Technicians & Quality Tyres',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/90 text-sm sm:text-base font-medium">
                  <span className="text-green-400 text-lg">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Desktop CTAs only */}
            <div className="hidden sm:flex flex-row gap-3">
              <a
                href="tel:07759708646"
                className="bg-[#FF4444] text-[#121212] font-black px-8 py-4 rounded-xl shadow-2xl shadow-red-900/40 flex items-center gap-2.5 hover:bg-red-700 hover:text-white transition-all text-base sm:text-lg"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                Call Now
              </a>
              <a
                href="https://wa.me/447759708646"
                className="bg-[#25D366] hover:bg-[#1ebe5d] text-white font-black px-8 py-4 rounded-xl flex items-center gap-2.5 transition-all text-base sm:text-lg shadow-lg"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                <svg className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. IMAGE + TEXT ──────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/Mobile Tyre Fitting One Stop Tyres 24 7.webp"
              alt="24 hour mobile tyre experts"
              className="w-full rounded-2xl sm:rounded-3xl shadow-2xl object-cover"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
              Trusted Mobile Tyre Service
            </span>
            <h2
              className="text-2xl sm:text-4xl font-bold text-[#0f172a] mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              24 Hour Mobile Tyre Experts You Can Trust
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              When your tyre fails unexpectedly, waiting for a garage to open isn&apos;t always an
              option. Our mobile tyre fitting service is designed for drivers who need immediate
              assistance wherever they are.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              From emergency puncture repairs and flat tyre replacements to complete tyre changes at
              home or on the roadside, we provide a convenient service that saves you time and gets
              you moving again. Our mobile units carry a wide range of tyre sizes and can supply
              premium, mid-range and budget tyres to suit your requirements and budget.
            </p>

            {/* Why Choose Us grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyChooseUs.map((item) => (
                <div key={item.title} className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className="font-bold text-[#0f172a] text-base mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. HOW IT WORKS ──────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#0f172a] text-white relative overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-[#FF4444] font-bold uppercase tracking-widest text-sm mb-3 block">
              Simple Process
            </span>
            <h2
              className="text-2xl sm:text-[32px] font-bold"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
            >
              How It Works
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
            {steps.map((step, idx) => (
              <div key={step.n} className="relative text-center lg:text-left">
                <div className="w-14 h-14 bg-[#FF4444] rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-5 shadow-xl">
                  <span
                    className="text-white font-black text-xl"
                    style={{ fontFamily: 'var(--font-work-sans)' }}
                  >
                    {step.n}
                  </span>
                </div>
                <h3
                  className="text-lg sm:text-xl font-bold text-white mb-3"
                  style={{ fontFamily: 'var(--font-work-sans)' }}
                >
                  {step.title}
                </h3>
                <p className="text-slate-400 text-base leading-relaxed">{step.desc}</p>
                {idx < 3 && (
                  <span className="hidden lg:block absolute top-7 -right-3 text-[#FF4444] material-symbols-outlined text-3xl">
                    trending_flat
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. SECOND IMAGE STRIP ────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center">
          <div className="w-full lg:w-1/2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/Tyre fitting at home-airanko (1).webp"
              alt="Mobile tyre fitting at home"
              className="w-full rounded-2xl sm:rounded-3xl shadow-2xl object-cover"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
              Ready To Help
            </span>
            <h2
              className="text-2xl sm:text-4xl font-bold text-[#0f172a] mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Emergency Tyre Assistance Whenever You Need It
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-6">
              Don&apos;t let a flat tyre disrupt your day or leave you stranded overnight. Our
              around-the-clock emergency tyre service means a qualified mobile technician is always
              on standby, ready to come to you with the right tyres and tools to get you moving
              again safely.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:07759708646"
                className="bg-[#FF4444] text-[#121212] font-black px-8 py-4 rounded-xl shadow-2xl shadow-red-900/40 flex items-center justify-center gap-2.5 hover:bg-red-700 hover:text-white transition-all text-base sm:text-lg"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                07759 708 646
              </a>
              <a
                href="https://wa.me/447759708646"
                className="bg-[#25D366] hover:bg-[#1ebe5d] text-white font-black px-8 py-4 rounded-xl flex items-center justify-center gap-2.5 transition-all text-base sm:text-lg shadow-lg"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                <svg className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. FAQ ───────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-2 block">
              Common Questions
            </span>
            <h2
              className="text-2xl sm:text-[32px] font-bold text-[#0f172a]"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
            >
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-white p-4 sm:p-6 rounded-xl border border-slate-200 shadow-sm open:shadow-md transition-all"
              >
                <summary className="list-none flex justify-between items-center cursor-pointer font-bold text-base sm:text-lg text-[#0f172a] gap-3">
                  {faq.q}
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-[#b70011] flex-shrink-0 text-xl sm:text-2xl">
                    expand_more
                  </span>
                </summary>
                <p className="mt-3 sm:mt-4 text-slate-600 leading-relaxed text-base">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. FINAL CTA ─────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-[#0f172a] text-white text-center">
        <h2
          className="text-2xl sm:text-3xl font-bold mb-3"
          style={{ fontFamily: 'var(--font-work-sans)' }}
        >
          Need an Emergency Tyre Fitter Right Now?
        </h2>
        <p className="text-slate-400 text-base mb-8 max-w-lg mx-auto">
          Call or WhatsApp us and a technician will be dispatched to your location immediately.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:07759708646"
            className="bg-[#FF4444] text-[#121212] font-black px-10 py-4 rounded-xl shadow-2xl shadow-red-900/40 flex items-center gap-2.5 hover:bg-red-700 hover:text-white transition-all text-lg sm:text-xl"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
            07759 708 646
          </a>
          <a
            href="https://wa.me/447759708646"
            className="bg-[#25D366] hover:bg-[#1ebe5d] text-white font-black px-10 py-4 rounded-xl flex items-center gap-2.5 transition-all text-lg sm:text-xl shadow-lg"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            <svg className="w-6 h-6 fill-current flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </a>
        </div>
      </section>
    </div>
  )
}
