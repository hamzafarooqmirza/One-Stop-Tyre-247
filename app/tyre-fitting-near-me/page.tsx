import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tyre Fitting Near Me | Mobile Tyre Replacement at Your Location | One Stop Tyres 24/7',
  description:
    'Looking for tyre fitting near me? Our mobile tyre fitting service comes to your home, workplace or roadside across Greater Manchester. Same day & emergency appointments available.',
  alternates: { canonical: 'https://onestoptyres247.co.uk/tyre-fitting-near-me' },
}

const _breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://onestoptyres247.co.uk' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Tyre Fitting Near Me',
      item: 'https://onestoptyres247.co.uk/tyre-fitting-near-me',
    },
  ],
}

const _serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://onestoptyres247.co.uk/tyre-fitting-near-me#service',
  name: 'Tyre Fitting Near Me',
  description:
    'Mobile tyre fitting service that comes directly to your home, workplace or roadside location across Greater Manchester. Same day, emergency and 24 hour appointments available.',
  provider: {
    '@type': 'LocalBusiness',
    '@id': 'https://onestoptyres247.co.uk/#business',
    name: 'One Stop Mobile Tyres 24/7',
  },
  areaServed: { '@type': 'AdministrativeArea', name: 'Greater Manchester' },
  url: 'https://onestoptyres247.co.uk/tyre-fitting-near-me',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
}

const _faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Do you provide tyre fitting near me?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our mobile tyre fitting service comes directly to your home, workplace or roadside location, making tyre replacement simple and convenient.' } },
    { '@type': 'Question', name: 'Can you fit tyres at my home?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Our home tyre fitting service allows you to have new tyres professionally installed without visiting a garage.' } },
    { '@type': 'Question', name: 'Do you offer same day tyre fitting?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We provide same day tyre fitting appointments whenever availability and tyre stock allow.' } },
    { '@type': 'Question', name: 'Do you provide roadside tyre fitting?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. If your vehicle has suffered a puncture or damaged tyre, we can replace it safely at the roadside where conditions allow.' } },
    { '@type': 'Question', name: 'Do you offer emergency tyre fitting?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our emergency mobile tyre fitting service is available for urgent tyre replacements and puncture repairs.' } },
    { '@type': 'Question', name: 'Can you repair a puncture instead of replacing the tyre?', acceptedAnswer: { '@type': 'Answer', text: "If the puncture meets British safety standards and can be repaired safely, we'll always recommend a repair before replacement." } },
    { '@type': 'Question', name: 'Why choose mobile tyre fitting instead of a garage?', acceptedAnswer: { '@type': 'Answer', text: "Mobile tyre fitting saves time, avoids unnecessary travel, eliminates waiting rooms and provides a professional service at a location that's convenient for you." } },
    { '@type': 'Question', name: 'How long does mobile tyre fitting take?', acceptedAnswer: { '@type': 'Answer', text: 'Most tyre fitting appointments take between 20 and 45 minutes depending on the vehicle and number of tyres being replaced.' } },
  ],
}

const faqs = [
  { q: 'Do you provide tyre fitting near me?', a: 'Yes. Our mobile tyre fitting service comes directly to your home, workplace or roadside location, making tyre replacement simple and convenient.' },
  { q: 'Can you fit tyres at my home?', a: 'Absolutely. Our home tyre fitting service allows you to have new tyres professionally installed without visiting a garage.' },
  { q: 'Do you offer same day tyre fitting?', a: 'Yes. We provide same day tyre fitting appointments whenever availability and tyre stock allow.' },
  { q: 'Can you fit tyres at my workplace?', a: 'Yes. We regularly fit tyres at offices, business parks and commercial premises.' },
  { q: 'Do you provide roadside tyre fitting?', a: 'Yes. If your vehicle has suffered a puncture or damaged tyre, we can replace it safely at the roadside where conditions allow.' },
  { q: 'Do you offer emergency tyre fitting?', a: 'Yes. Our emergency mobile tyre fitting service is available for urgent tyre replacements and puncture repairs.' },
  { q: 'What types of tyres do you supply?', a: 'We stock budget, mid-range and premium tyres from leading manufacturers for most cars and vans.' },
  { q: 'Can you repair a puncture instead of replacing the tyre?', a: "If the puncture meets British safety standards and can be repaired safely, we'll always recommend a repair before replacement." },
  { q: 'Do you balance the wheels?', a: 'Yes. Every tyre is professionally fitted using industry-standard equipment to ensure safe performance.' },
  { q: 'How long does mobile tyre fitting take?', a: 'Most tyre fitting appointments take between 20 and 45 minutes depending on the vehicle and number of tyres being replaced.' },
  { q: 'Can you fit one tyre or do I need to replace two?', a: 'We can replace a single tyre, a pair of tyres or a complete set depending on your vehicle and requirements.' },
  { q: 'Do I need to visit a tyre garage?', a: 'No. Our mobile tyre fitting service eliminates the need to travel or wait at a garage.' },
  { q: 'Can you fit tyres today?', a: 'Yes. We offer same day tyre fitting for many locations and tyre sizes.' },
  { q: 'Do you offer tyre replacement near me?', a: 'Yes. Our mobile technicians provide tyre replacement at homes, workplaces and roadside locations.' },
  { q: 'What if I have a completely flat tyre?', a: 'Our team can replace flat or damaged tyres on-site, helping you get back on the road quickly.' },
  { q: 'Do you provide mobile tyre fitting for vans?', a: 'Yes. We fit tyres for cars, SUVs, vans and many light commercial vehicles.' },
  { q: 'Can I book by phone or WhatsApp?', a: "Yes. Simply call or send us a WhatsApp message and we'll arrange your mobile tyre fitting appointment." },
  { q: 'Are your prices competitive?', a: 'Yes. We offer transparent pricing with affordable options across budget, mid-range and premium tyre ranges.' },
  { q: 'Why choose mobile tyre fitting instead of a garage?', a: "Mobile tyre fitting saves time, avoids unnecessary travel, eliminates waiting rooms and provides a professional service at a location that's convenient for you." },
  { q: 'Do you offer tyre fitting on the driveway?', a: 'Yes. Many customers choose driveway tyre fitting because it\'s quick, safe and hassle-free.' },
  { q: 'Can you replace tyres at the roadside?', a: 'Yes. Our mobile technicians regularly carry out roadside tyre replacements and emergency tyre changes.' },
  { q: 'Do you provide tyre fitting on weekends?', a: 'Yes. We offer flexible appointments, including weekends, subject to availability.' },
  { q: 'What tyre brands do you supply?', a: 'We supply a wide range of trusted tyre brands, including budget, mid-range and premium options to suit every driving style and budget.' },
  { q: "Can you help if I'm searching for \"nearest tyre fitting\"?", a: "Yes. Our mobile tyre fitting service comes directly to your location, so you don't need to find the nearest tyre garage; we bring the service to you." },
]

const whyChooseUs = [
  {
    icon: '🚐',
    title: 'We Come To You',
    desc: 'Forget visiting a tyre shop. Our mobile tyre fitters provide professional tyre replacement wherever your vehicle is parked.',
  },
  {
    icon: '⚡',
    title: 'Fast Response & Same Day Service',
    desc: 'Need tyres fitted today? We offer same-day appointments and emergency call-outs to minimise delays.',
  },
  {
    icon: '💷',
    title: 'Competitive Prices',
    desc: 'We provide affordable tyre fitting with a choice of budget, mid-range, and premium tyres to suit every budget.',
  },
  {
    icon: '⭐',
    title: 'Experienced Mobile Technicians',
    desc: 'Our trained tyre specialists use professional equipment to ensure every tyre is fitted safely and correctly.',
  },
]

const steps = [
  {
    n: '1',
    title: 'Call Us',
    desc: 'Contact our team with your vehicle registration or tyre size and tell us your location.',
  },
  {
    n: '2',
    title: 'Dispatch',
    desc: 'We assign the nearest available mobile tyre technician and prepare the correct tyres for your vehicle.',
  },
  {
    n: '3',
    title: 'Arrival',
    desc: 'Our technician arrives fully equipped to remove your old tyre and professionally fit the replacement.',
  },
  {
    n: '4',
    title: 'Back On The Road',
    desc: "After completing safety checks and ensuring the correct tyre pressure, you're ready to continue your journey with confidence.",
  },
]

export default function TyreFittingNearMePage() {
  return (
    <div className="text-[#1c1b1b]" style={{ fontFamily: 'var(--font-inter)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_faqSchema) }} />

      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/Mobile Tyre Fitting One Stop Tyres 24 7.webp"
          alt="Tyre fitting near me mobile service"
          className="absolute inset-0 w-full h-full object-cover object-center"
          width={1600}
          height={900}
          decoding="async"
        />
        <div className="absolute inset-0 bg-[#0f172a]/80" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 py-20 lg:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-3.5 py-1.5 rounded-full mb-6 text-[11px] uppercase tracking-widest border border-red-600/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              Mobile Tyre Service — Greater Manchester
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white font-black mb-5 leading-[1.1]"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.02em' }}
            >
              Tyre Fitting Near Me, Fast Mobile Tyre Replacement at Your Location
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
              Searching for &ldquo;tyre fitting near me&rdquo;? Our mobile tyre fitting service
              brings professional tyre replacement and puncture repair directly to your home,
              workplace, or roadside location. No waiting in queues or driving on a damaged tyre,
              we come to you with everything needed to get you safely back on the road.
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              Whether you need a same day tyre fitting, emergency tyre replacement, home tyre
              fitting, or a roadside tyre change, our experienced mobile technicians provide a fast,
              reliable and affordable service. We supply and fit premium, mid-range and budget tyres
              for cars, SUVs, vans and light commercial vehicles.
            </p>

            <ul className="space-y-2 mb-8">
              {[
                'Same Day Tyre Fitting Available',
                'Home, Work & Roadside Service',
                'Premium, Mid-Range & Budget Tyres',
                'Emergency & 24 Hour Call Outs',
                'Professional Mobile Tyre Technicians',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/90 text-sm sm:text-base font-medium">
                  <span className="text-green-400 text-lg">✓</span>
                  {item}
                </li>
              ))}
            </ul>

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
          <div className="w-full lg:w-1/2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/Tyre fitting at home-airanko (1).webp"
              alt="Local mobile tyre fitting service"
              className="w-full rounded-2xl sm:rounded-3xl shadow-2xl object-cover"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
              Your Local Mobile Tyre Service
            </span>
            <h2
              className="text-2xl sm:text-4xl font-bold text-[#0f172a] mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Your Local Mobile Tyre Fitting Service
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              Finding a reliable tyre fitter nearby shouldn&apos;t mean taking time off work or
              waiting at a busy tyre garage. Our fully equipped mobile tyre fitting vans travel
              directly to your location, providing a convenient service that saves time and
              eliminates unnecessary stress.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              From replacing worn tyres and repairing punctures to emergency roadside tyre changes,
              we deliver professional tyre fitting wherever you need us. We stock a wide range of
              tyre brands and sizes, allowing us to complete most jobs quickly and efficiently.
            </p>

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
              src="/images/tyre fitting in emergergency-airanko (1).webp"
              alt="Mobile tyre fitter near me"
              className="w-full rounded-2xl sm:rounded-3xl shadow-2xl object-cover"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
              Always Nearby
            </span>
            <h2
              className="text-2xl sm:text-4xl font-bold text-[#0f172a] mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Professional Tyre Fitting Wherever You Are
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-6">
              Stop searching for the nearest tyre garage. Our mobile tyre fitting service comes
              directly to you, saving time and removing the inconvenience of driving on a damaged
              tyre. Whether you&apos;re at home, work, or stranded at the roadside, we have you
              covered with fast, professional service.
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
          Need a Tyre Fitter Near You Right Now?
        </h2>
        <p className="text-slate-400 text-base mb-8 max-w-lg mx-auto">
          Call or WhatsApp us and we&apos;ll dispatch a mobile tyre technician directly to your
          location.
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
