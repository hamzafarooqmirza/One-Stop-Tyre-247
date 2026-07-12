import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mobile Tyre Fitting | 24/7 Emergency Callout UK',
  description:
    'Fully equipped mobile tyre fitting vans provide emergency tyre repair, replacement and same day fitting at your home, workplace or roadside location, 24/7.',
  alternates: { canonical: 'https://onestoptyres247.co.uk/mobile-tyre-fitting' },
}

const _breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://onestoptyres247.co.uk' },
    { '@type': 'ListItem', position: 2, name: 'Mobile Tyre Fitting', item: 'https://onestoptyres247.co.uk/mobile-tyre-fitting' },
  ],
}

const _serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://onestoptyres247.co.uk/mobile-tyre-fitting#service',
  name: 'Mobile Tyre Fitting',
  description:
    'Professional mobile tyre fitting service across Greater Manchester. We supply and fit premium, mid-range and budget tyres at your home, workplace or roadside location. Same day and emergency appointments available.',
  provider: {
    '@type': 'LocalBusiness',
    '@id': 'https://onestoptyres247.co.uk/#business',
    name: 'One Stop Mobile Tyres 24/7',
  },
  areaServed: { '@type': 'AdministrativeArea', name: 'Greater Manchester' },
  url: 'https://onestoptyres247.co.uk/mobile-tyre-fitting',
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
    { '@type': 'Question', name: 'What is mobile tyre fitting?', acceptedAnswer: { '@type': 'Answer', text: 'Mobile tyre fitting is a convenient service where professional tyre technicians travel to your home, workplace or roadside location to supply and fit new tyres.' } },
    { '@type': 'Question', name: 'Do you fit tyres at home?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Home tyre fitting is one of our most popular services and allows you to have tyres replaced without visiting a garage.' } },
    { '@type': 'Question', name: 'Do you offer same day mobile tyre fitting?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We provide same day appointments whenever tyre stock and technician availability allow.' } },
    { '@type': 'Question', name: 'Do you provide emergency mobile tyre fitting?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our emergency tyre fitting service is available for punctures, blowouts and unexpected tyre failures.' } },
    { '@type': 'Question', name: 'Can you repair a puncture instead of replacing the tyre?', acceptedAnswer: { '@type': 'Answer', text: 'If the tyre is safe to repair and meets British Standards, we will always recommend a puncture repair before replacement.' } },
    { '@type': 'Question', name: 'How long does mobile tyre fitting take?', acceptedAnswer: { '@type': 'Answer', text: 'Most tyre fitting appointments take between 20 and 45 minutes depending on the vehicle and number of tyres being replaced.' } },
    { '@type': 'Question', name: 'What types of tyres do you supply?', acceptedAnswer: { '@type': 'Answer', text: 'We stock budget, mid-range and premium tyres from leading manufacturers for most cars and vans.' } },
    { '@type': 'Question', name: 'Why choose mobile tyre fitting instead of a tyre shop?', acceptedAnswer: { '@type': 'Answer', text: 'Mobile tyre fitting saves time, avoids waiting rooms, eliminates recovery costs and allows your tyres to be professionally fitted wherever it\'s most convenient for you.' } },
  ],
}

const faqs = [
  { q: 'What is mobile tyre fitting?', a: 'Mobile tyre fitting is a convenient service where professional tyre technicians travel to your home, workplace or roadside location to supply and fit new tyres.' },
  { q: 'Do you fit tyres at home?', a: 'Yes. Home tyre fitting is one of our most popular services and allows you to have tyres replaced without visiting a garage.' },
  { q: 'Can you fit tyres at my workplace?', a: 'Absolutely. We regularly fit tyres at offices, business parks, warehouses and commercial premises.' },
  { q: 'Do you provide roadside tyre fitting?', a: 'Yes. Our mobile tyre technicians can replace damaged tyres at the roadside where it is safe to do so.' },
  { q: 'Do you offer same day mobile tyre fitting?', a: 'Yes. We provide same day appointments whenever tyre stock and technician availability allow.' },
  { q: 'Do you provide emergency mobile tyre fitting?', a: 'Yes. Our emergency tyre fitting service is available for punctures, blowouts and unexpected tyre failures.' },
  { q: 'Can you replace one tyre or do I need a pair?', a: 'We can replace a single tyre, a pair or a complete set depending on your vehicle and tyre condition.' },
  { q: 'What types of tyres do you supply?', a: 'We stock budget, mid-range and premium tyres from leading manufacturers for most cars and vans.' },
  { q: 'Can you repair a puncture instead of replacing the tyre?', a: 'If the tyre is safe to repair and meets British Standards, we will always recommend a puncture repair before replacement.' },
  { q: 'How long does mobile tyre fitting take?', a: 'Most tyre fitting appointments take between 20 and 45 minutes depending on the vehicle and number of tyres being replaced.' },
  { q: 'Do you balance the wheels?', a: 'Yes. Every tyre is professionally fitted and balanced using industry-standard equipment.' },
  { q: 'Can you fit tyres on my driveway?', a: 'Yes. Our mobile fitting vans are fully equipped to carry out tyre replacement on driveways, car parks and roadside locations.' },
  { q: 'Do you provide mobile tyre fitting near me?', a: 'Our mobile tyre service comes directly to your location, making it unnecessary to search for the nearest tyre garage.' },
  { q: 'Can I book tyres fitted today?', a: 'Yes. We offer same day tyre fitting for many locations and common tyre sizes.' },
  { q: 'Do you fit tyres on weekends?', a: 'Yes. Weekend appointments are available subject to availability.' },
  { q: 'Do you offer cheap mobile tyre fitting?', a: 'Yes. We provide affordable tyre fitting with budget, mid-range and premium options to suit every budget.' },
  { q: 'Can you fit tyres for vans?', a: 'Yes. We provide mobile tyre fitting for cars, SUVs, vans and light commercial vehicles.' },
  { q: 'Do I need to visit a tyre garage?', a: 'No. Our mobile tyre fitting service eliminates the need to travel or wait at a tyre shop.' },
  { q: 'Can you replace tyres at the roadside after a puncture?', a: 'Yes. Our technicians regularly carry out roadside tyre replacements and emergency tyre fitting services.' },
  { q: "Can you fit tyres while I'm at work?", a: 'Yes. Many customers choose workplace tyre fitting because it saves valuable time and avoids unnecessary trips to a garage.' },
  { q: "What if I don't know my tyre size?", a: 'No problem. Simply provide your vehicle registration and our team will identify the correct tyre specification.' },
  { q: 'Do you offer mobile tyre replacement?', a: 'Yes. We specialise in fast mobile tyre replacement for damaged, worn or punctured tyres.' },
  { q: 'Can I book through WhatsApp?', a: "Yes. Send us your vehicle details, location and tyre requirements via WhatsApp and we'll arrange your appointment." },
  { q: 'Why choose mobile tyre fitting instead of a tyre shop?', a: "Mobile tyre fitting saves time, avoids waiting rooms, eliminates recovery costs and allows your tyres to be professionally fitted wherever it's most convenient for you." },
  { q: 'Do you cover emergency tyre call-outs?', a: 'Yes. We provide emergency mobile tyre fitting for drivers who need urgent tyre replacement at home, work or the roadside.' },
  { q: 'Are your prices transparent?', a: 'Yes. We provide clear quotations with no hidden charges, allowing you to choose the right tyres for your vehicle and budget.' },
  { q: 'Do you provide same day mobile tyre replacement?', a: 'Yes. Same day mobile tyre replacement is available for most popular tyre sizes and locations.' },
  { q: 'Why choose our mobile tyre fitting service?', a: 'We combine experienced technicians, fast response times, quality tyres, competitive prices and exceptional customer service to deliver a convenient mobile tyre fitting experience wherever you need us.' },
]

const whyChooseUs = [
  {
    icon: '🚐',
    title: 'We Bring The Tyre Shop To You',
    desc: 'No waiting rooms, no recovery trucks and no unnecessary travel. We fit your tyres wherever your vehicle is parked.',
  },
  {
    icon: '⚡',
    title: 'Same Day & Emergency Service',
    desc: 'Need tyres fitted today? Our mobile tyre fitters offer fast response times and same day appointments whenever possible.',
  },
  {
    icon: '💷',
    title: 'Affordable Prices',
    desc: 'Choose from budget, mid-range and premium tyres with transparent pricing and no hidden charges.',
  },
  {
    icon: '⭐',
    title: 'Expert Mobile Tyre Technicians',
    desc: 'Every tyre is fitted by experienced professionals using specialist equipment to ensure maximum safety and performance.',
  },
]

const steps = [
  {
    n: '1',
    title: 'Call Us',
    desc: 'Contact our team with your vehicle registration or tyre size and tell us where you need the tyres fitted.',
  },
  {
    n: '2',
    title: 'Dispatch',
    desc: 'We locate the nearest available mobile tyre fitter and prepare the correct tyres for your vehicle.',
  },
  {
    n: '3',
    title: 'Arrival',
    desc: 'Our technician arrives fully equipped, removes the old tyre and professionally fits the replacement at your location.',
  },
  {
    n: '4',
    title: 'Back On The Road',
    desc: "After completing tyre fitting, pressure checks and safety inspections, you're ready to continue your journey with confidence.",
  },
]

export default function MobileTyreFittingPage() {
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
          alt="Mobile tyre fitting service"
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
              Mobile Tyre Fitting — Greater Manchester
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white font-black mb-5 leading-[1.1]"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.02em' }}
            >
              Mobile Tyre Fitting, Professional Tyre Replacement at Your Home, Work or Roadside
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
              Need new tyres but don&apos;t have time to visit a garage? Our mobile tyre fitting
              service brings expert tyre replacement directly to your home, workplace or roadside
              location. Whether you have a flat tyre, worn tyres that need replacing, or simply want
              the convenience of tyres fitted while you carry on with your day, our fully equipped
              mobile technicians are ready to help.
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              We supply and fit premium, mid-range and budget tyres for cars, SUVs, vans and light
              commercial vehicles. With same day appointments, emergency call-outs and competitive
              prices, we make tyre replacement fast, convenient and completely hassle-free.
            </p>

            <ul className="space-y-2 mb-8">
              {[
                'Mobile Tyre Fitting at Home, Work & Roadside',
                'Same Day & Emergency Appointments Available',
                'Premium, Mid-Range & Budget Tyres',
                'Professional Mobile Tyre Technicians',
                'Fast Response & Competitive Prices',
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
              alt="Mobile tyre fitters that come to you"
              className="w-full rounded-2xl sm:rounded-3xl shadow-2xl object-cover"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
              Professional Mobile Tyre Service
            </span>
            <h2
              className="text-2xl sm:text-4xl font-bold text-[#0f172a] mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Mobile Tyre Fitters That Come To You
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              Why spend hours waiting at a tyre garage when our mobile tyre fitting service can come
              directly to your location? Our experienced technicians arrive with professional
              equipment and a wide range of tyres, allowing us to replace your tyres quickly and
              safely without disrupting your day.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              Whether you need a single tyre replacement, a complete set of new tyres, a roadside
              tyre change or a home tyre fitting appointment, we provide a reliable service designed
              around your convenience. From emergency tyre fitting to scheduled appointments,
              we&apos;re committed to getting you back on the road with minimal downtime.
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
              alt="Professional mobile tyre replacement"
              className="w-full rounded-2xl sm:rounded-3xl shadow-2xl object-cover"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
              Any Location, Any Time
            </span>
            <h2
              className="text-2xl sm:text-4xl font-bold text-[#0f172a] mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Fast, Reliable Tyre Fitting Wherever You Need It
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-6">
              From a scheduled appointment at your home to an emergency call-out at the roadside,
              our mobile tyre fitters are equipped to handle every situation. We carry a wide range
              of tyre brands and sizes to ensure we can complete your job quickly and professionally
              without a second visit.
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
          Need Mobile Tyre Fitting Today?
        </h2>
        <p className="text-slate-400 text-base mb-8 max-w-lg mx-auto">
          Call or WhatsApp us with your location and tyre details and we&apos;ll dispatch a
          technician directly to you.
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
