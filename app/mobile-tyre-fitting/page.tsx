import type { Metadata } from 'next'
import BrandCarousel from '@/components/BrandCarousel'

export const metadata: Metadata = {
  title: 'Mobile Tyre Fitting | One Stop Tyres 24/7',
  description:
    'Professional, fast and reliable mobile tyre fitting available 24/7 across the UK. We come to you — wherever you are.',
}

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

const included = [
  'On-site tyre fitting at your exact location',
  'Full tyre balance and pressure check after fitting',
  'Wheel nut torque check to manufacturer specification',
  'Old tyre removal and responsible disposal',
  'TPMS sensor reset where required',
  'Safe and certified process from start to finish',
]

const whyChooseUs = [
  '24/7 availability — we never close',
  'Fast nationwide response time',
  'Transparent, upfront pricing with no hidden fees',
  'Experienced, certified technicians',
  'Fully equipped mobile vans',
  'Trusted by thousands of drivers across the UK',
]

const benefits = [
  'No need to visit a garage or wait in line',
  'Saves time — we work around your schedule',
  'Immediate roadside assistance wherever you are stranded',
  'Covers cars, vans, 4x4s and small commercial vehicles',
  'Available on driveways, car parks, motorways and more',
]

const faqs = [
  {
    q: 'How quickly can you arrive?',
    a: 'Our average response time is between 30 to 60 minutes, depending on your exact location and traffic conditions. We aim to reach you as fast as possible.',
  },
  {
    q: 'Are you really available 24/7?',
    a: 'Yes — we operate 24 hours a day, 365 days a year, including bank holidays and weekends across the entire UK.',
  },
  {
    q: 'What vehicles do you cover?',
    a: 'We provide mobile tyre fitting for cars, vans, 4x4s, and small commercial vehicles of all makes and models.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit and debit cards, Apple Pay, Google Pay, and cash — paid directly at the point of service.',
  },
  {
    q: 'Do you carry tyres with you?',
    a: 'Yes. Our fully stocked mobile vans carry a wide range of tyre sizes and brands. We will confirm availability when you call.',
  },
]

export default function MobileTyreFittingPage() {
  return (
    <div className="text-[#1c1b1b]" style={{ fontFamily: 'var(--font-inter)' }}>

      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-[#0f172a] overflow-hidden min-h-[480px] lg:min-h-[540px] flex flex-col lg:flex-row">
        <div className="absolute inset-0 lg:left-1/2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full h-full object-cover object-center"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVjuF71bae3s_0VDWK8tncPM5vEjXjnQNzID9DL64w6TIvYq7tzleMfzXYk4bpGyf78COYQ3qb8oagSYbYCN5nZ1ohYMg0pOUnp3UypVIoXB59Kri1-hLmxuP0KRCmkqpXdjcN0MhwEuEaa9OQeYBh6kVI10bvL3ch-mJWh5r-BPvK5k7YX41jUl0_lKhJSx7Beibvl0TsCPZ7CCSgnFBVMHwBJVefj9I0_S5pgwCmZ7wJflRR9UmEaShtu8hvImZXtr7QpoB7VWo"
            alt="Mobile tyre fitting technician at work"
            width={1920}
            height={1080}
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-[#0f172a]/80 lg:bg-gradient-to-r lg:from-[#0f172a] lg:via-[#0f172a]/50 lg:to-transparent" />
        </div>

        <div className="relative z-10 w-full lg:w-1/2 flex items-center px-5 sm:px-8 py-20 lg:py-28">
          <div className="w-full max-w-lg mx-auto lg:ml-auto lg:mr-10">
            <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-3.5 py-1.5 rounded-full mb-5 text-[11px] uppercase tracking-widest border border-red-600/30">
              <span className="inline-flex rounded-full h-2 w-2 bg-red-500" />
              Available 24/7 Nationwide
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] text-white mb-4 leading-[1.1] font-black"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.02em' }}
            >
              Mobile Tyre Fitting
            </h1>

            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
              Professional, fast and reliable mobile tyre fitting available 24/7 across the UK. We come to you — at home, work, or roadside.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href="tel:07759708646"
                className="bg-[#b70011] text-white font-black px-8 py-4 rounded-xl shadow-lg flex items-center justify-center gap-2.5 hover:bg-red-700 transition-colors text-base sm:text-lg"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                CALL NOW
              </a>
              <a
                href="https://wa.me/447759708646"
                className="bg-white/10 border border-white/20 text-white font-black px-8 py-4 rounded-xl flex items-center justify-center gap-2.5 hover:bg-white/20 transition-colors text-base sm:text-lg"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                <WhatsAppIcon />
                WHATSAPP US
              </a>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-white/70">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#b70011] text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <span className="text-sm font-medium">Fully Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#b70011] text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
                <span className="text-sm font-medium">Card &amp; Cash Accepted</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#b70011] text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>timer</span>
                <span className="text-sm font-medium">30–60 Min Response</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. INTRO ────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-xs sm:text-sm mb-2 block">
              Our Service
            </span>
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
            >
              Reliable Mobile Tyre Fitting Service
            </h2>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-4">
              Getting a flat tyre or needing a replacement shouldn&apos;t derail your entire day. Our professional mobile tyre fitting service brings the expertise of a traditional garage directly to your doorstep — whether you are relaxing at home, busy at work, or stranded roadside.
            </p>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              We eliminate the stress of towing your vehicle or searching for an open garage. With coverage across the UK, premium service is always just one phone call away, 24 hours a day, 7 days a week.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden aspect-square">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi04esex3q98x5n2R7YfJU5MizuWLVJcXXXtABd6nouaMK3dfrnyICzE8lfbNnk5hwGlkVW2vWzp5pG-v0fnqAzzVfjIA-oW-YNPVZ08GGdfYVLaFW-VGAp4eAn3hTEkGL2mjspGiJfN34OyTp8b_U3CpSiOETQI7Gtt5GyM7gimoiuSWJlzOKTDGDwyRlt2N6wWtYBcdfd3wwHuMREdK7TmUCH5ucLWLLZuHTGHfLAjyjnp11y8APtpgWpPuEO6UMT92PKOxZuVw"
                alt="Tyre fitting technician at work"
                width={400}
                height={400}
                loading="lazy"
              />
            </div>
            <div className="rounded-xl overflow-hidden aspect-square mt-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfkFNTuQezALDGwMAcID4tDsojtMjGMtZkj_lxtV0kPATjKEZPEBIVYEgnTpilKcD_j1GA1fDB5BfCRs1ldDd1waRgrN8z0nNX26Qywl0193b3gFNaWi6pDHWZd_y5F-TBXIPiUULzbEdfa_yOWB9RnxPG3ijAaROSCM_iBvJ94lV74apcDtatHttdmmr5PMnLq3tMu1YXQ1bOp-QMfQXdFw4MrEtj4m-bdzHSWEDn7fMenEKN7D0yOCS71XtpcaD0CRL1FY0Bk5Y"
                alt="One Stop Tyres service van"
                width={400}
                height={400}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. WHAT'S INCLUDED + WHY CHOOSE US ─────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* What's Included */}
          <div>
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-xs sm:text-sm mb-2 block">
              What You Get
            </span>
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
            >
              What&apos;s Included in Our Mobile Tyre Fitting
            </h2>
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="material-symbols-outlined text-[#b70011] text-[18px] mt-0.5 shrink-0"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <span className="text-slate-600 text-sm sm:text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Why Choose Us */}
          <div>
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-xs sm:text-sm mb-2 block">
              The Best Choice
            </span>
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
            >
              Why Choose One Stop Tyres 24/7
            </h2>
            <ul className="space-y-3">
              {whyChooseUs.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="material-symbols-outlined text-[#b70011] text-[18px] mt-0.5 shrink-0"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <span className="text-slate-600 text-sm sm:text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* ── 4. HOW IT WORKS ─────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-xs sm:text-sm mb-2 block">
              Simple Process
            </span>
            <h2
              className="text-2xl sm:text-[32px] font-bold text-[#0f172a] leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
            >
              How Our Service Works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: 1, icon: 'phone_iphone', title: 'Contact Us', desc: 'Call or WhatsApp us with your tyre requirements and vehicle details.' },
              { n: 2, icon: 'my_location', title: 'Share Your Location', desc: 'Give us your address or GPS coordinates anywhere across the UK.' },
              { n: 3, icon: 'local_shipping', title: 'Technician Dispatched', desc: 'Our nearest mobile unit is sent directly to your location immediately.' },
              { n: 4, icon: 'verified', title: 'Job Completed', desc: 'Tyres fitted, balanced and checked — you are ready to drive safely.' },
            ].map((step) => (
              <div key={step.n} className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <div
                  className="w-9 h-9 bg-[#b70011] rounded-xl flex items-center justify-center text-white font-black text-sm mb-4"
                  style={{ fontFamily: 'var(--font-work-sans)' }}
                >
                  {step.n}
                </div>
                <div className="w-10 h-10 bg-[#b70011]/10 text-[#b70011] rounded-full flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[20px]">{step.icon}</span>
                </div>
                <h3
                  className="font-bold text-[#0f172a] text-base sm:text-lg mb-2"
                  style={{ fontFamily: 'var(--font-work-sans)' }}
                >
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Brand Carousel ──────────────────────────────────────── */}
      <BrandCarousel />

      {/* ── 5. BENEFITS ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Benefits */}
          <div>
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-xs sm:text-sm mb-2 block">
              Key Advantages
            </span>
            <h2
              className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
            >
              Benefits of Our Mobile Tyre Fitting
            </h2>
            <ul className="space-y-4">
              {[
                { icon: 'schedule', title: 'Saves time and effort', desc: 'Avoid disrupting your day — our technician comes to you at a time that suits.' },
                { icon: 'no_transfer', title: 'No garage visit needed', desc: 'The mobile garage comes to your home, workplace, or roadside location.' },
                { icon: 'sos', title: 'Immediate roadside assistance', desc: 'Emergency support wherever you are stranded, available across the UK.' },
              ].map((b) => (
                <li key={b.icon} className="flex gap-4">
                  <div className="w-10 h-10 bg-[#b70011]/20 text-[#b70011] rounded-lg flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">{b.icon}</span>
                  </div>
                  <div>
                    <span className="font-bold text-white block text-sm sm:text-base mb-1">{b.title}</span>
                    <p className="text-slate-400 text-sm leading-relaxed">{b.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* When You Need Us */}
          <div className="bg-[#1e293b] rounded-xl p-7 sm:p-8 border border-slate-700">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-xs sm:text-sm mb-2 block">
              Real Scenarios
            </span>
            <h2
              className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
            >
              When You Might Need Us
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-6">
              Tyre emergencies don&apos;t follow a schedule. You might need our mobile service during:
            </p>
            <ul className="space-y-3">
              {[
                'An unexpected puncture on a busy motorway or A-road',
                'Worn-out treads noticed during your morning commute',
                'A tyre sidewall damaged while parking or kerbing',
                'Needing new tyres fitted without the hassle of a garage trip',
                'A blowout late at night or over a bank holiday weekend',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base">
                  <span className="w-1.5 h-1.5 bg-[#b70011] rounded-full mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* ── 6. FAQ ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-xs sm:text-sm mb-2 block">
              Common Questions
            </span>
            <h2
              className="text-2xl sm:text-[32px] font-bold text-[#0f172a]"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <span
                    className="material-symbols-outlined text-[#b70011] text-[18px] mt-0.5 shrink-0"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    help
                  </span>
                  <div>
                    <h3
                      className="font-bold text-[#0f172a] text-base sm:text-lg mb-2"
                      style={{ fontFamily: 'var(--font-work-sans)' }}
                    >
                      {faq.q}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FINAL CTA ────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 bg-white">
        <div className="max-w-3xl mx-auto bg-[#0f172a] rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center shadow-xl">
          <h2
            className="text-2xl sm:text-3xl font-bold text-white mb-3"
            style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
          >
            Need Immediate Assistance?
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed text-sm sm:text-base">
            Call now and our team will reach you quickly anywhere across the UK. Our lines are open 24 hours a day, 7 days a week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:07759708646"
              className="bg-[#b70011] text-white font-black px-10 py-4 rounded-xl shadow-lg flex items-center justify-center gap-2.5 hover:bg-red-700 transition-colors text-base sm:text-lg"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
              CALL NOW — 07759 708 646
            </a>
            <a
              href="https://wa.me/447759708646"
              className="bg-white/10 border border-white/20 text-white font-black px-8 py-4 rounded-xl flex items-center justify-center gap-2.5 hover:bg-white/20 transition-colors text-base sm:text-lg"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              <WhatsAppIcon />
              WHATSAPP
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
