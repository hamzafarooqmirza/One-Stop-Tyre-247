import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Service Area | One Stop Tyres 24/7 — Greater Manchester',
  description:
    'One Stop Tyres 24/7 covers all of Greater Manchester and key motorways including M60, M61, M62, M66, M67, M602, A627 and more. Find out if we cover your area.',
}

// ── Town / district cards ─────────────────────────────────────────────────────
const townAreas = [
  {
    name: 'Manchester City',
    href: '/mobile-tyre-fitting-manchester',
    icon: 'location_city',
    postcodes: 'M1 – M16, M40, M60',
    desc: '24/7 mobile tyre fitting across the city centre, Salford, Ancoats, Deansgate and all inner districts.',
  },
  {
    name: 'Bolton',
    href: '/mobile-tyre-fitting-bolton',
    icon: 'location_on',
    postcodes: 'BL1 – BL7',
    desc: 'Full coverage across Bolton, Horwich, Farnworth, Westhoughton and surrounding villages.',
  },
  {
    name: 'Bury',
    href: '/mobile-tyre-fitting-bury',
    icon: 'location_on',
    postcodes: 'BL8, BL9, M26',
    desc: 'Rapid response throughout Bury, Radcliffe, Ramsbottom, Tottington and Whitefield.',
  },
  {
    name: 'Oldham',
    href: '/mobile-tyre-fitting-oldham',
    icon: 'location_on',
    postcodes: 'OL1 – OL9',
    desc: 'Covering Oldham, Chadderton, Failsworth, Lees, Royton and Saddleworth.',
  },
  {
    name: 'Rochdale',
    href: '/mobile-tyre-fitting-rochdale',
    icon: 'location_on',
    postcodes: 'OL10 – OL16',
    desc: 'Serving Rochdale, Heywood, Middleton, Milnrow and the surrounding Pennine areas.',
  },
  {
    name: 'Stockport',
    href: '/mobile-tyre-fitting-stockport',
    icon: 'location_on',
    postcodes: 'SK1 – SK8, SK12',
    desc: 'Mobile tyre fitting in Stockport, Hazel Grove, Cheadle, Bramhall and Marple.',
  },
  {
    name: 'Tameside',
    href: '/mobile-tyre-fitting-tameside',
    icon: 'location_on',
    postcodes: 'OL5 – OL7, SK14 – SK16',
    desc: 'Full coverage of Ashton-under-Lyne, Denton, Droylsden, Hyde, Mossley and Stalybridge.',
  },
  {
    name: 'Trafford',
    href: '/mobile-tyre-fitting-trafford',
    icon: 'location_on',
    postcodes: 'M16, M17, M32, M33, WA14 – WA15',
    desc: 'Serving Altrincham, Sale, Stretford, Urmston, Partington and all of Trafford borough.',
  },
  {
    name: 'Wigan',
    href: '/mobile-tyre-fitting-wigan',
    icon: 'location_on',
    postcodes: 'WN1 – WN6',
    desc: 'Rapid call-out across Wigan, Leigh, Atherton, Hindley and Skelmersdale.',
  },
]

// ── Motorway / road cards ─────────────────────────────────────────────────────
const motorwayAreas = [
  {
    name: 'M60 Orbital',
    href: '/mobile-tyre-fitting-m60',
    junctions: 'J1 – J27 (full ring)',
    desc: 'Complete coverage of the Greater Manchester orbital motorway — all 27 junctions, 24/7.',
  },
  {
    name: 'M61 Motorway',
    href: '/mobile-tyre-fitting-m61',
    junctions: 'J1 – J9',
    desc: 'Manchester to Preston corridor covered from J1 Worsley through to J9 at Clayton Brook.',
  },
  {
    name: 'M62 Motorway',
    href: '/mobile-tyre-fitting-m62',
    junctions: 'J12 – J21 (GM stretch)',
    desc: 'Trans-Pennine motorway serviced across the Greater Manchester section including Eccles and Birch.',
  },
  {
    name: 'M66 Motorway',
    href: '/mobile-tyre-fitting-m66',
    junctions: 'J1 – J5',
    desc: 'Manchester to Ramsbottom — emergency tyre cover on the M66 north–south corridor.',
  },
  {
    name: 'M67 Motorway',
    href: '/mobile-tyre-fitting-m67',
    junctions: 'J1 – J4',
    desc: 'Hyde bypass and Tameside connector fully covered from Denton interchange to Mottram.',
  },
  {
    name: 'M602 Motorway',
    href: '/mobile-tyre-fitting-m602',
    junctions: 'J1 – J3',
    desc: 'Salford inner relief route — fast response on the M602 between Eccles and Regent Road.',
  },
  {
    name: 'A627(M)',
    href: '/mobile-tyre-fitting-a627',
    junctions: 'Oldham – Chadderton',
    desc: 'A627(M) spur road and approaches covered — connecting Oldham town centre to the M60.',
  },
]

// ── Trust badges ──────────────────────────────────────────────────────────────
const trustBadges = [
  { icon: 'schedule', label: '24/7 Emergency', sub: 'Always on call' },
  { icon: 'bolt', label: '30–60 Min', sub: 'Average arrival' },
  { icon: 'public', label: '9 Districts', sub: 'Greater Manchester' },
  { icon: 'route', label: '7 Motorways', sub: 'Full roadside cover' },
]

export default function ServiceAreaPage() {
  return (
    <div className="bg-surface font-body-md text-on-background antialiased">
      {/* ── Hero ── */}
      <section className="relative h-[500px] min-h-[380px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-secondary/85 z-10" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://ss5vlswhqmiddtca.public.blob.vercel-storage.com/Hero%20section%20image%20for%20one%20stop-airanko-GThUaVjbwZmY4iQO0czB2NrcyiFDuj.webp"
          alt="One Stop Tyres 24/7 mobile tyre fitting van on the road"
          width={1920}
          height={500}
          loading="eager"
        />
        <div className="relative z-20 text-center px-5 max-w-3xl mx-auto">
          <span className="inline-block bg-primary/20 border border-primary/40 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Greater Manchester
          </span>
          <h1 className="font-h1 text-h1 text-white mb-5 text-balance">
            Our Service Area
          </h1>
          <p className="font-body-lg text-body-lg text-white/90 max-w-2xl mx-auto mb-8 text-pretty">
            We cover all 9 Greater Manchester districts and 7 major motorways — wherever you
            are, we&apos;ll come to you, 24 hours a day, 7 days a week.
          </p>
          <a
            href="tel:07759708646"
            className="inline-flex items-center gap-2 bg-primary text-white font-call-to-action text-call-to-action px-8 py-4 rounded-xl hover:bg-primary/90 transition-all shadow-lg uppercase"
          >
            <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              phone_in_talk
            </span>
            07759 708 646
          </a>
        </div>
      </section>

      {/* ── Trust badges ── */}
      <section className="bg-white border-b border-slate-100 py-6 px-5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {trustBadges.map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-low"
            >
              <div className="bg-primary/10 p-2.5 rounded-lg shrink-0">
                <span className="material-symbols-outlined text-primary text-xl">{b.icon}</span>
              </div>
              <div>
                <p className="font-label-bold text-label-bold text-secondary leading-tight">{b.label}</p>
                <p className="text-xs text-on-surface-variant">{b.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Town & District areas ── */}
      <section className="py-xl px-5 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-h2 text-h2 text-secondary mb-3 text-balance">
            Towns &amp; Districts We Cover
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto text-pretty">
            Click on any area below to see our dedicated coverage page, including local junction
            details, postcodes and service information.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {townAreas.map((area) => (
            <a
              key={area.name}
              href={area.href}
              className="group flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-primary/30 transition-all overflow-hidden"
            >
              <div className="flex items-center gap-4 px-5 pt-5 pb-3">
                <div className="bg-primary/10 p-3 rounded-xl shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-primary group-hover:text-white text-2xl transition-colors">
                    {area.icon}
                  </span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-h3 text-secondary text-lg leading-snug">{area.name}</h3>
                  <span className="text-xs font-semibold text-primary/80 bg-primary/5 px-2 py-0.5 rounded-full">
                    {area.postcodes}
                  </span>
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant px-5 pb-5 flex-1 text-sm leading-relaxed">
                {area.desc}
              </p>
              <div className="border-t border-slate-50 px-5 py-3 flex items-center justify-between">
                <span className="text-xs font-bold text-primary uppercase tracking-wide">View area</span>
                <span className="material-symbols-outlined text-primary text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── Motorway / road coverage ── */}
      <section className="bg-surface-container py-xl px-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-h2 text-h2 text-secondary mb-3 text-balance">
              Motorway &amp; Road Coverage
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto text-pretty">
              Broken down on a motorway? Our rapid response team covers every major road
              in and around Greater Manchester, 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {motorwayAreas.map((road) => (
              <a
                key={road.name}
                href={road.href}
                className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-primary/30 transition-all p-5 flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <span className="bg-secondary text-white font-black text-base px-3 py-1 rounded-lg tracking-wide">
                    {road.name}
                  </span>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-0.5 transition-transform">
                    arrow_forward
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-on-surface-variant font-semibold">
                  <span className="material-symbols-outlined text-sm text-primary">route</span>
                  {road.junctions}
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed flex-1">{road.desc}</p>
                <span className="text-xs font-bold text-primary uppercase tracking-wide">
                  View coverage
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── "Not sure?" coverage checker CTA ── */}
      <section className="py-xl px-5">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="bg-secondary p-8 md:p-10 flex flex-col justify-center md:w-2/5 shrink-0">
              <span className="material-symbols-outlined text-white/30 text-[80px] mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
                help
              </span>
              <h3 className="font-h2 text-2xl text-white mb-2 text-balance">Not sure if we cover your area?</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Simply give us a call and we&apos;ll let you know instantly. We&apos;re constantly expanding our coverage.
              </p>
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center gap-5">
              <p className="font-body-lg text-body-lg text-on-surface-variant text-pretty">
                Our dispatch team can confirm coverage for your exact postcode and give you an
                estimated arrival time in under 60 seconds.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:07759708646"
                  className="flex items-center justify-center gap-2 bg-primary text-white font-bold text-sm px-6 py-3.5 rounded-xl hover:bg-primary/90 transition-all shadow-md"
                >
                  <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                    phone_in_talk
                  </span>
                  Call 07759 708 646
                </a>
                <a
                  href="mailto:info@onestoptyres247.co.uk"
                  className="flex items-center justify-center gap-2 border-2 border-secondary text-secondary font-bold text-sm px-6 py-3.5 rounded-xl hover:bg-secondary hover:text-white transition-all"
                >
                  <span className="material-symbols-outlined text-lg">mail</span>
                  Email Us
                </a>
              </div>
              <p className="text-xs text-on-surface-variant flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-green-500" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                Typical response: 30–60 minutes anywhere in Greater Manchester
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Emergency CTA banner ── */}
      <section className="px-5 mb-xl">
        <div className="max-w-7xl mx-auto bg-primary rounded-2xl overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[200px]">tire_repair</span>
          </div>
          <div className="p-8 md:px-14 md:py-12 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
            <div className="text-white text-center md:text-left">
              <h2 className="font-h1 text-h1 mb-2 text-balance">Broken Down Right Now?</h2>
              <p className="font-body-lg text-body-lg text-white/90">
                Call immediately — our team is standing by 24/7 across Greater Manchester.
              </p>
              <div className="mt-5 flex items-center justify-center md:justify-start gap-4">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                <span className="text-3xl md:text-4xl font-black font-h1">07759 708 646</span>
              </div>
            </div>
            <a
              className="bg-white text-primary font-h2 text-h2 px-10 py-5 rounded-xl hover:bg-gray-100 transition-all uppercase shadow-lg text-center min-w-[200px] shrink-0"
              href="tel:07759708646"
            >
              CALL NOW
            </a>
          </div>
        </div>
      </section>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2 bg-white border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,45,98,0.05)] rounded-t-2xl">
        <a className="flex flex-col items-center justify-center text-gray-500" href="/">
          <span className="material-symbols-outlined">home</span>
          <span className="text-[10px] font-semibold font-h3">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-500" href="/services">
          <span className="material-symbols-outlined">tire_repair</span>
          <span className="text-[10px] font-semibold font-h3">Services</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-500" href="tel:07759708646">
          <span className="material-symbols-outlined">emergency</span>
          <span className="text-[10px] font-semibold font-h3">Emergency</span>
        </a>
        <a className="flex flex-col items-center justify-center bg-red-50 text-red-600 rounded-xl px-3 py-1.5" href="/service-area">
          <span className="material-symbols-outlined">map</span>
          <span className="text-[10px] font-semibold font-h3">Area</span>
        </a>
      </nav>


    </div>
  )
}
