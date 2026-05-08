import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Emergency Puncture Repair | One Stop Tyres 24/7',
  description:
    'Professional, fast and reliable emergency puncture repair available 24/7 across the UK. We get you back on the road safely and swiftly.',
}

const features = [
  {
    icon: 'home_repair_service',
    title: 'Roadside Service',
    desc: 'We come to you — motorway, car park, driveway, or workplace. No towing required.',
  },
  {
    icon: 'bolt',
    title: 'Fast Response',
    desc: 'Average arrival within 20–30 minutes with emergency priority dispatch.',
  },
  {
    icon: 'verified',
    title: 'BS Standard Repair',
    desc: 'All repairs meet British Standard BS AU 159 — safe, permanent plug-patch method.',
  },
  {
    icon: 'verified_user',
    title: 'Safe Process',
    desc: 'Your safety is our priority. We assess repairability before proceeding every time.',
  },
]

const steps = [
  { n: '1', title: 'Call Us', desc: 'Contact our 24/7 emergency line and describe your situation.' },
  { n: '2', title: 'Share Location', desc: 'Give us your exact location or drop a pin via WhatsApp.' },
  { n: '3', title: 'Tech Dispatched', desc: 'The nearest mobile unit is routed to you immediately.' },
  { n: '4', title: 'Back on Road', desc: 'Tyre repaired or replaced on-site — pressure checked and safe to drive.' },
]

const whyUs = [
  {
    icon: 'schedule',
    title: '24/7 Availability',
    desc: 'Punctures do not keep office hours. Neither do we. We respond any time, day or night, weekends included.',
  },
  {
    icon: 'payments',
    title: 'No Hidden Charges',
    desc: 'You get a clear, upfront price before we dispatch. No call-out surprises, no garage markups.',
  },
  {
    icon: 'build',
    title: 'Repair Over Replace',
    desc: 'We always assess whether a safe repair is possible, saving you the cost of a full replacement wherever viable.',
  },
]

const scenarios = [
  {
    title: 'Stranded on the Motorway',
    desc: 'A blowout at high speed is dangerous. Pull over safely behind the barrier and call us — we prioritise motorway emergencies.',
  },
  {
    title: 'Flat in a Car Park',
    desc: "Returned to your car to find a flat? Don't risk driving on it and damaging the rim. We come to wherever you are parked.",
  },
  {
    title: 'Slow Leak or Hissing Sound',
    desc: 'Caught it early? Good. We can fix a slow puncture before it becomes a dangerous blowout on a busy road.',
  },
]

const faqs = [
  {
    q: 'Can all punctures be repaired?',
    a: "Repairs are only safe if the damage is within the central 75% of the tread area and has not affected the sidewall or inner lining. Our technician will assess this on arrival and advise honestly.",
  },
  {
    q: 'How long does a repair take?',
    a: 'A professional plug-patch repair typically takes 20 to 30 minutes once the technician arrives. If a replacement is needed, we carry a wide range of tyres on the van.',
  },
  {
    q: 'Is the repair permanent?',
    a: 'Yes — we use the plug-patch method which seals both the hole and the inner lining, making it a permanent repair for the remaining life of the tyre.',
  },
  {
    q: 'What if my tyre cannot be repaired?',
    a: 'If the damage is beyond a safe repair, our technician will recommend a replacement. We carry a wide range of tyres and can fit one on the spot.',
  },
]

export default function EmergencyPunctureRepairPage() {
  return (
    <div className="bg-surface font-body-md text-on-surface">

      {/* ── 1. HERO ──────────────────────────────────────────────── */}
      <section className="relative bg-white pt-12 pb-10 sm:pt-16 sm:pb-14 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          <div className="z-10 order-2 lg:order-1">
            <span className="inline-block bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full text-xs font-semibold tracking-wide mb-4">
              Emergency Assistance 24/7
            </span>
            <h1 className="font-h1 text-2xl sm:text-3xl lg:text-[40px] font-bold text-on-surface mb-4 leading-tight">
              Emergency Puncture Repair
            </h1>
            <p className="text-base sm:text-lg text-on-surface-variant mb-6 leading-relaxed">
              Professional, fast and reliable puncture repair available 24/7 across the UK. We reach you at the roadside, car park, or home and get you moving again safely.
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
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfQqM7NgTUMbNljd91CfCszX2iLqY72iEpUmLbcBY0uU6XXQ4limf2ozhF6ddSlXmcTXXuUSgzgq92F7ueeRWrcq9SaPU2c8EQFB1vx9D_sS65EyZuAsURvUo03HKohRXLkgP6KxB9QJk163xlbPDfJC46Vx21pqFvJvv2WO5y1_BZP_YTKyhFI05nTlw5Ps2X9HNEPQPgEnRnUtlsgURwsWKrQAPd3QfAIALrL0IMOwT0-yMUuJtgS-kgcYFdRPGyR_T5j_AyQPs"
              alt="Emergency puncture repair technician"
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDE1Y5FoXPVWQM6sSru75ZeVtHX8a-OQBdHih-pBWwp6YaTo-gf8ayksm7WSLTPEsgY8KVuNReeTMSFsUOHRKWVn553th6flT0OJqAaTvBChfu2RcPTCEW7Mg4Yu24Bt1HuEuyt_gPcbOGw7EJpROflefma_xqiBobS2tq0xwVaPF4QIU26lSOAeAakhkfj5k57JHgcOxO8qzJ75G-a5U_7Ov4amGKw-FGJI510ULQDD9tFAXFxTvHiWCaTVFToU0xYIQFGO6fKek0"
                alt="Puncture repair on the roadside"
                className="rounded-xl shadow-lg w-full h-[260px] sm:h-[400px] lg:h-[480px] object-cover"
                width={800}
                height={480}
                loading="lazy"
              />
            </div>

            <div className="w-full lg:w-1/2">
              <h2 className="font-h2 text-xl sm:text-2xl lg:text-[32px] font-bold text-on-surface mb-4 leading-snug">
                Reliable Emergency Puncture Repair Service
              </h2>
              <p className="text-sm sm:text-base text-on-surface-variant mb-3 leading-relaxed">
                When a nail, shard of glass, or road debris interrupts your journey, One Stop Tyres 24/7 is here immediately. A flat tyre isn&apos;t just an inconvenience — on a motorway or dark country road, it can be a genuine safety hazard.
              </p>
              <p className="text-sm sm:text-base text-on-surface-variant mb-6 leading-relaxed">
                We specialise in roadside repairs meeting strict British Standard BS AU 159, prioritising repair over replacement wherever it is safe to do so. Our technicians carry the latest tools to deliver a permanent, high-quality fix on-site.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {['UK Wide Coverage', 'BS Standard Repairs', 'No Hidden Charges', 'All Tyre Types'].map((item) => (
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
              Comprehensive roadside puncture repair as standard with every call-out.
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
                  <p className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant mt-1">Jobs Done</p>
                </div>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtbWRvdq_nEHmgLxgVsr9yrdbMm-jZJVzc0U33SRR5JWiAeKuOGR-EdzOR-Uu-GEKMybocqtCO4C046UclWXHBLkqFzIRTfn421-OnLRk1BfM0ZTPaJKtFy3dJRrPGtDxojY1UDOZbaCIsZGI_oEjdSzWA7Brlf1LsfFwb2MzthI2SeAvtknDlWbuB5Q9W9b9JnxUq_K6cfk_Xnolg3YOoCWBRyPb8ywdJBQdKkkigoNHt5l-_w3UDFf6IPtFbwOE16dLKvHy0i9c"
                alt="Slow puncture being checked"
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
            When You Might Need Us
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
                Got a Puncture Right Now?
              </h2>
              <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 opacity-90 max-w-xl mx-auto leading-relaxed">
                Stay safe, stay where you are, and call us. We dispatch immediately and aim to reach you within 30 minutes.
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
