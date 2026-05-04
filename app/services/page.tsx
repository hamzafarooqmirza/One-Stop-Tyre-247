import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Our Services | One Stop Tyres 24/7',
  description:
    'Explore all mobile tyre and roadside assistance services from One Stop Tyres 24/7 — available nationwide, around the clock.',
}

const services = [
  {
    href: '/mobile-tyre-fitting',
    img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mobile%20Tyre%20fitting-airanko-mB2PlClNhJqqD09qARja8bLAbTDtoE.webp',
    title: 'Mobile Tyre Fitting',
    desc: 'Emergency tyre replacement at your exact location within 30–60 minutes, day or night.',
    badge: 'FAST RESPONSE',
  },
  {
    href: '/home-tyre-fitting',
    img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Tyre%20Fitting-airanko-NAQrFhRm9UilkOOWhZBEd5lhxc7eEz.webp',
    title: 'Home Tyre Fitting',
    desc: 'Convenient tyre replacement on your driveway while you relax or carry on with your day.',
    badge: 'AT YOUR DOOR',
  },
  {
    href: '/jump-start',
    img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jumpstart-onestop-airanko-bUQeSwSrfEEeS2vgU2IuyrDFFak87m.webp',
    title: 'Jump Start',
    desc: 'Fast battery jump-start service to get your vehicle running again without any delay.',
    badge: '24/7 SERVICE',
  },
  {
    href: '/emergency-puncture-repair',
    img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emeregency%20Puncture%20Repair-airanko-K3cI9fjWlcirkZkEwDEvdtRtKQg3B7.webp',
    title: 'Emergency Puncture Repair',
    desc: 'Professional plug and patch repair to save your tyre and get you back on the road.',
    badge: 'BS AU 159',
  },
  {
    href: '/tpms-reset',
    img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TPMS%20Reset-airanko-LEqPbQFsdbmM1ZLc5m0aoAUKGG4haJ.webp',
    title: 'TPMS Reset',
    desc: 'Tyre pressure monitoring system reset after every tyre change or repair, all vehicles.',
    badge: 'ALL VEHICLES',
  },
  {
    href: '/locking-nut-removal',
    img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Locking%20Nut%20Removal-airanko-MV4iwDQaMKuuoUnbMrRrQW5QIDJQbV.webp',
    title: 'Locking Nut Removal',
    desc: 'Specialist damage-free removal of lost or broken locking wheel nuts, on-site.',
    badge: 'DAMAGE FREE',
  },
]

export default function ServicesPage() {
  return (
    <div className="text-[#1c1b1b]" style={{ fontFamily: 'var(--font-inter)' }}>
      <Header />

      {/* ── PAGE HEADER ──────────────────────────────────── */}
      <section className="bg-[#0f172a] py-16 sm:py-24 px-4 sm:px-6 text-white text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
            What We Offer
          </span>
          <h1
            className="text-3xl sm:text-5xl font-black text-white mb-5 leading-tight text-balance"
            style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.02em' }}
          >
            Our Services
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            One Stop Tyres 24/7 provides a full range of professional mobile tyre and roadside
            assistance services across the UK. Whether you have a blowout on the motorway, a flat
            at home, a dead battery, or a tricky locking nut — we have the tools and expertise to
            help, fast.
          </p>
        </div>
      </section>

      {/* ── SERVICE CARDS ────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden border-b-4 border-[#b70011]"
              >
                <div className="relative h-44 sm:h-52 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    width={600}
                    height={400}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute top-3 left-3 text-xs font-bold text-white bg-[#b70011] px-3 py-1 rounded-full">
                    {card.badge}
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <h2
                    className="text-base sm:text-lg font-semibold mb-2 text-[#0f172a]"
                    style={{ fontFamily: 'var(--font-work-sans)' }}
                  >
                    {card.title}
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">{card.desc}</p>
                  <div className="flex items-center justify-end">
                    <span className="material-symbols-outlined text-slate-400 group-hover:text-[#b70011] group-hover:translate-x-1 transition-all">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA strip */}
          <div className="mt-10 sm:mt-12 bg-[#0f172a] rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-2xl text-center sm:text-left">
            <div>
              <h3
                className="text-xl sm:text-2xl font-bold text-white mb-1"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                Need Immediate Assistance?
              </h3>
              <p className="text-slate-400 text-sm sm:text-base">
                Speak directly to a technician for an instant quote and arrival time.
              </p>
            </div>
            <a
              href="tel:07759708646"
              className="bg-[#b70011] text-white font-black px-8 py-4 rounded-xl text-xl sm:text-2xl hover:scale-105 transition-transform shadow-lg shadow-red-900/20 whitespace-nowrap"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              07759 708 646
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* ── FLOATING ACTION BUTTONS ─────────────────────── */}
      <div className="fixed bottom-6 right-5 z-[60] flex flex-col gap-3">
        <a
          href="https://wa.me/447759708646"
          aria-label="Chat on WhatsApp"
          className="w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5d] rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        >
          <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
        <a
          href="tel:07759708646"
          aria-label="Call us now"
          className="w-14 h-14 bg-[#b70011] hover:bg-red-700 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        >
          <span
            className="material-symbols-outlined text-white text-[26px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            phone_in_talk
          </span>
        </a>
      </div>
    </div>
  )
}
