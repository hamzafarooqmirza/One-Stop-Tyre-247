import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema, serviceSchema, faqSchema, SITE_URL } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Emergency Puncture Repair | 24/7 Mobile Repair',
  description:
    "Certified, BS AU 159 compliant plug-and-patch puncture repair fitted on-site. Fast, professional puncture repair wherever you're stranded, 24/7.",
  alternates: { canonical: 'https://onestoptyres247.co.uk/emergency-puncture-repair' },
}

const _breadcrumbSchema = breadcrumbSchema([
  { name: 'Home', item: SITE_URL },
  { name: 'Emergency Puncture Repair', item: `${SITE_URL}/emergency-puncture-repair` },
])

const _serviceSchema = serviceSchema({
  slug: 'emergency-puncture-repair',
  name: 'Emergency Mobile Puncture Repair',
  serviceType: 'Emergency Puncture Repair',
  description:
    'Fast emergency mobile puncture repair service across Greater Manchester. Professional tyre repairs and replacements at your home, workplace or roadside location. Same day and 24 hour assistance available.',
})

const faqs = [
  { q: 'What is emergency mobile puncture repair?', a: 'Emergency mobile puncture repair is a service where a professional tyre technician comes directly to your location to repair or replace a punctured tyre.' },
  { q: 'Can you repair my puncture at home?', a: "Yes. We provide home puncture repair services so you don't need to drive on a damaged tyre or visit a garage." },
  { q: 'Do you offer roadside puncture repair?', a: 'Yes. We attend roadside breakdowns and repair or replace tyres where it is safe to do so.' },
  { q: 'Can every puncture be repaired?', a: 'No. Repairs are only carried out if the puncture meets British Standard safety guidelines and the tyre structure has not been compromised.' },
  { q: 'What if my tyre cannot be repaired?', a: 'If the damage is too severe, we can supply and fit a new tyre on-site, allowing you to continue your journey immediately.' },
  { q: 'Do you provide same day puncture repair?', a: 'Yes. We offer same day appointments and emergency call-outs whenever possible.' },
  { q: 'Do you offer 24 hour puncture repair?', a: 'Yes. Our emergency mobile puncture repair service is available for urgent situations day and night.' },
  { q: 'Can you repair a tyre with a nail in it?', a: 'In many cases, yes. Our technician will inspect the tyre and carry out a professional repair if it is safe to do so.' },
  { q: 'How long does a puncture repair take?', a: 'Most puncture repairs are completed within 20 to 40 minutes, depending on the damage and vehicle type.' },
  { q: 'Is it cheaper to repair a puncture than replace the tyre?', a: 'Yes. Whenever a safe repair is possible, it is usually the most economical option.' },
  { q: 'Can you repair a slow puncture?', a: 'Yes. We regularly repair slow punctures caused by nails, screws or minor tread damage.' },
  { q: 'Do you repair tyres at the workplace?', a: 'Yes. Our mobile technicians can repair or replace tyres while your vehicle is parked at work.' },
  { q: 'Do you provide mobile puncture repair near me?', a: 'Our mobile service comes directly to your location, making it unnecessary to search for a nearby tyre garage.' },
  { q: 'What should I do if I have a flat tyre?', a: "Avoid driving on the flat tyre if possible. Contact our emergency mobile puncture repair team and we'll come to your location." },
  { q: 'Can you repair run-flat tyres?', a: 'Some run-flat tyres can be repaired depending on the damage and manufacturer guidelines. Our technician will advise after inspection.' },
  { q: 'Do you repair tyres on weekends?', a: 'Yes. Weekend and out-of-hours appointments are available subject to availability.' },
  { q: 'Do you replace tyres as well?', a: 'Yes. If your tyre cannot be repaired safely, we can supply and fit a replacement tyre immediately.' },
  { q: 'Can you repair van tyres?', a: 'Yes. We provide puncture repairs and tyre replacement for cars, SUVs and light commercial vehicles.' },
  { q: 'Do you offer emergency puncture repair for roadside breakdowns?', a: 'Yes. Our emergency call-out service is designed for drivers who need immediate tyre assistance.' },
  { q: 'Can I book through WhatsApp?', a: "Yes. Simply send us your location and vehicle details on WhatsApp, and we'll dispatch a mobile tyre technician." },
  { q: 'Why choose mobile puncture repair instead of a garage?', a: 'Mobile puncture repair saves time, avoids recovery costs and allows your tyre to be repaired or replaced wherever your vehicle is located.' },
  { q: 'How do I know if my tyre is beyond repair?', a: 'Our experienced technicians inspect the tyre according to British safety standards and will always recommend the safest solution.' },
  { q: 'Do you cover emergency tyre puncture repairs near me?', a: 'Yes. Our goal is to provide fast, reliable and professional emergency puncture repairs wherever you need assistance.' },
  { q: 'Can you repair my tyre today?', a: 'In most cases, yes. We offer same day emergency mobile puncture repair appointments to get you safely back on the road as quickly as possible.' },
]

const _faqSchema = faqSchema(faqs)

const whyChooseUs = [
  {
    icon: '🚗',
    title: 'Rapid Emergency Response',
    desc: 'We understand that a puncture can happen anywhere and at any time, which is why we aim to reach you quickly and minimise your waiting time.',
  },
  {
    icon: '🔧',
    title: 'Repair Before Replacement',
    desc: "If your tyre meets safety guidelines, we'll professionally repair it rather than selling you a replacement you don't need.",
  },
  {
    icon: '📍',
    title: 'We Come To Your Location',
    desc: 'Whether you\'re at home, at work, or stranded at the roadside, our mobile tyre technicians bring the workshop directly to you.',
  },
  {
    icon: '⭐',
    title: 'Honest Pricing & Expert Service',
    desc: 'No hidden costs, experienced technicians, quality workmanship and reliable advice every time you call.',
  },
]

const steps = [
  {
    n: '1',
    title: 'Call Us',
    desc: 'Call our team and tell us your location, vehicle details and what has happened.',
  },
  {
    n: '2',
    title: 'Dispatch',
    desc: 'We send the nearest available mobile puncture repair technician with the equipment and tyres required.',
  },
  {
    n: '3',
    title: 'Arrival',
    desc: 'Our technician inspects the damaged tyre and determines whether it can be safely repaired or needs replacing.',
  },
  {
    n: '4',
    title: 'Back On The Road',
    desc: 'Once the repair or replacement is complete and all safety checks have been carried out, you\'re ready to continue your journey with confidence.',
  },
]

export default function EmergencyPunctureRepairPage() {
  return (
    <div className="text-[#1c1b1b]" style={{ fontFamily: 'var(--font-inter)' }}>
      <JsonLd data={_breadcrumbSchema} />
      <JsonLd data={_serviceSchema} />
      <JsonLd data={_faqSchema} />

      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/tyres-fitting-anywhere.webp"
          alt="Emergency mobile puncture repair service"
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
              Emergency Puncture Repair — Greater Manchester
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white font-black mb-5 leading-[1.1]"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.02em' }}
            >
              Emergency Mobile Puncture Repair, Fast Roadside &amp; Home Tyre Repair
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
              Got a flat tyre or sudden puncture? Our emergency mobile puncture repair service comes
              directly to your location, providing fast, professional tyre repairs and replacements
              without the need to visit a garage. Whether you&apos;re stranded at home, work, or on
              the roadside, our experienced technicians will get you moving again as quickly and
              safely as possible.
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              If your tyre can be safely repaired, we&apos;ll carry out a professional puncture
              repair to British Standards. If the damage is beyond repair, we can supply and fit a
              replacement tyre on the spot, ensuring you get the safest and most cost-effective
              solution.
            </p>

            <ul className="space-y-2 mb-8">
              {[
                'Fast Emergency Mobile Puncture Repair',
                'Home, Workplace & Roadside Call Outs',
                'Same Day & 24 Hour Assistance',
                'Professional Tyre Repairs & Replacements',
                'Affordable Prices & Rapid Response',
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
              src="/images/mobile-tyre-fitting-one-stop-tyres-24-7.webp"
              alt="Fast mobile puncture repairs"
              className="w-full rounded-2xl sm:rounded-3xl shadow-2xl object-cover"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
              Mobile Puncture Repair Specialists
            </span>
            <h2
              className="text-2xl sm:text-4xl font-bold text-[#0f172a] mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Fast Mobile Puncture Repairs Wherever You Are
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              A puncture doesn&apos;t have to ruin your day. Our mobile puncture repair specialists
              arrive fully equipped to inspect your tyre, repair it when possible, or replace it
              immediately if necessary. We eliminate the inconvenience of waiting for recovery
              services or driving on a damaged tyre.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              Whether you&apos;ve picked up a nail, suffered a slow puncture, or experienced a
              sudden flat tyre, our mobile technicians provide a convenient solution that gets you
              back on the road safely with minimal disruption.
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
              src="/images/tyre-fitting-in-emergency.webp"
              alt="Emergency puncture repair at roadside"
              className="w-full rounded-2xl sm:rounded-3xl shadow-2xl object-cover"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
              Always Ready
            </span>
            <h2
              className="text-2xl sm:text-4xl font-bold text-[#0f172a] mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Puncture Repair or Replacement — We Decide What&apos;s Best For You
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-6">
              Our technicians always assess your tyre honestly and recommend the most cost-effective
              solution. If a professional repair is possible to British Standards, we&apos;ll repair
              it. If it&apos;s beyond safe repair, we carry a wide range of replacement tyres to get
              you back on the road immediately.
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

      {/* ── HELPFUL GUIDE ────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <a
            href="/guides/how-to-tell-if-your-tyre-can-be-repaired-or-needs-replacing"
            className="group flex items-center justify-between gap-4 bg-slate-50 border border-slate-100 rounded-2xl p-5 sm:p-6 mb-2 hover:border-[#b70011]/30 hover:shadow-md transition-all"
          >
            <div>
              <span className="text-xs font-bold text-[#b70011] uppercase tracking-widest mb-1 block">Not sure yet?</span>
              <p className="font-bold text-[#0f172a]">How to Tell If Your Tyre Can Be Repaired or Needs Replacing</p>
              <p className="text-sm text-slate-500">Our quick, expert checklist for puncture location, size and tread depth.</p>
            </div>
            <span className="material-symbols-outlined text-slate-400 group-hover:text-[#b70011] group-hover:translate-x-1 transition-all shrink-0">arrow_forward</span>
          </a>
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
          Got a Puncture Right Now?
        </h2>
        <p className="text-slate-400 text-base mb-8 max-w-lg mx-auto">
          Stay safe, stay where you are, and call us. We dispatch immediately and aim to reach you
          as quickly as possible.
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
