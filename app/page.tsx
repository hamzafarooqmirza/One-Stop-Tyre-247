import Header from '@/components/Header'
import Footer from '@/components/Footer'

/* ─── Reusable star row ─────────────────────────────────── */
function Stars() {
  return (
    <div className="flex text-yellow-400 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="material-symbols-outlined fill-1">
          star
        </span>
      ))}
    </div>
  )
}

/* ─── Why-choose feature list item ─────────────────────── */
function FeatureItem({
  icon,
  title,
  desc,
}: {
  icon: string
  title: string
  desc: string
}) {
  return (
    <li className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border-l-4 border-[#b70011]">
      <span className="material-symbols-outlined text-[#b70011] bg-[#b70011]/10 p-2 rounded-lg font-bold">
        {icon}
      </span>
      <div>
        <span className="font-bold text-[#0f172a] block">{title}</span>
        <p className="text-sm text-slate-500">{desc}</p>
      </div>
    </li>
  )
}

/* ─── FAQ Item ──────────────────────────────────────────── */
function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
      <button className="w-full flex justify-between items-center text-left font-bold text-lg text-[#0f172a] group">
        {q}
        <span className="material-symbols-outlined group-hover:text-[#b70011] transition-colors">
          expand_more
        </span>
      </button>
      <div className="mt-4 text-slate-600 leading-relaxed text-sm">{a}</div>
    </div>
  )
}

/* ─── Page ──────────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="text-[#1c1b1b]" style={{ fontFamily: 'var(--font-inter)' }}>
      <Header />

      {/* ── 1. HERO ───────────────────────────────────────── */}
      <section className="relative bg-[#0f172a] overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[600px]">
          {/* Content */}
          <div className="w-full lg:w-1/2 flex items-center px-6 py-16 lg:py-24 z-10">
            <div className="max-w-xl mx-auto lg:ml-auto lg:mr-12">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-4 py-1.5 rounded-full mb-6 text-xs uppercase tracking-widest border border-red-600/30">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                </span>
                Rapid Response: 30-60 Mins
              </div>

              <h1
                className="text-4xl lg:text-5xl xl:text-6xl text-white mb-6 leading-[1.1] font-black"
                style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.02em' }}
              >
                24/7 Emergency <br />
                <span className="text-[#b70011]">Mobile Tyre Fitting</span> Manchester
              </h1>

              <p className="text-lg lg:text-xl text-slate-300 mb-10 leading-relaxed">
                Stranded with a puncture? Our professional technicians reach you fast at home,
                work, or roadside to get you moving safely.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="tel:07759708646"
                  className="bg-[#b70011] text-white font-black px-10 py-5 rounded-xl shadow-2xl shadow-red-900/40 flex items-center justify-center gap-3 hover:bg-red-700 transition-all text-xl"
                  style={{ fontFamily: 'var(--font-work-sans)' }}
                >
                  <span
                    className="material-symbols-outlined text-2xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    call
                  </span>
                  CALL NOW
                </a>
                <a
                  href="https://wa.me/447759708646"
                  className="bg-white/10 border-2 border-white/20 text-white font-black px-10 py-5 rounded-xl flex items-center justify-center gap-3 hover:bg-white/20 transition-all text-xl"
                  style={{ fontFamily: 'var(--font-work-sans)' }}
                >
                  {/* WhatsApp SVG icon */}
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WHATSAPP
                </a>
              </div>

              {/* Trust grid */}
              <div className="grid grid-cols-2 gap-4 text-white/80">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#b70011]">verified</span>
                  <span className="text-sm font-medium">Fully Insured</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#b70011]">payments</span>
                  <span className="text-sm font-medium">Card/Cash Accepted</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 relative h-[400px] lg:h-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkBG0IJpjzs6EM4TcrUQ9-IgBuRIkBVo4K4Lg_QKXWzno2bUx-whraVhCQ5t6JSKjnlUORG5H6CRTNO6qYSFJiCAa3y-BS3r25dIuJaOSP_NftKPP1QAI4vKpA4a7wxlTA3Wr9UdRUyNkmcfEOVwoaIcwfFgUCB0GfcitYmd18gDVZIcKNJdm9FONQY8_0603sMLSECmHs4VhpGOveTt3zFUwX3vh_OT3kO9gJ_ZW2aO9zmEyELgFYFRJqaHNUuRzlsYp7R2z5Ouc"
              alt="Emergency mobile tyre fitting van in Manchester"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/20 to-transparent hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent block lg:hidden" />
          </div>
        </div>
      </section>

      {/* ── 2. SERVICES ───────────────────────────────────── */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-2 block">
              What We Do
            </span>
            <h2
              className="text-[32px] font-bold text-slate-900 mb-4 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
            >
              Professional Roadside Assistance
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Comprehensive mobile vehicle support available every day of the year across Greater
              Manchester.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mobile%20Tyre%20fitting-airanko-mB2PlClNhJqqD09qARja8bLAbTDtoE.webp',
                title: 'Mobile Tyre Fitting',
                desc: 'Emergency replacement at your location within 30-60 minutes.',
                badge: 'FAST RESPONSE',
              },
              {
                img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Tyre%20Fitting-airanko-NAQrFhRm9UilkOOWhZBEd5lhxc7eEz.webp',
                title: 'Home Tyre Fitting',
                desc: 'Convenient tyre replacement on your driveway while you work or relax.',
                badge: 'AT YOUR DOOR',
              },
              {
                img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emeregency%20Puncture%20Repair-airanko-K3cI9fjWlcirkZkEwDEvdtRtKQg3B7.webp',
                title: 'Emergency Puncture Repair',
                desc: 'Professional plug and patch repair to save your tyre when possible.',
                badge: 'BS AU 159',
              },
              {
                img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jumpstart-onestop-airanko-bUQeSwSrfEEeS2vgU2IuyrDFFak87m.webp',
                title: 'JumpStart',
                desc: 'Fast battery jump-start service to get your vehicle running again without delay.',
                badge: '24/7 SERVICE',
              },
              {
                img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TPMS%20Reset-airanko-LEqPbQFsdbmM1ZLc5m0aoAUKGG4haJ.webp',
                title: 'TPMS Reset',
                desc: 'Tyre pressure monitoring system reset after every tyre change or repair.',
                badge: 'ALL VEHICLES',
              },
              {
                img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Locking%20Nut%20Removal-airanko-MV4iwDQaMKuuoUnbMrRrQW5QIDJQbV.webp',
                title: 'Locking Nut Removal',
                desc: 'Specialist damage-free removal of lost or broken locking wheel nuts.',
                badge: 'DAMAGE FREE',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden border-b-4 border-[#b70011]"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute top-3 left-3 text-xs font-bold text-white bg-[#b70011] px-3 py-1 rounded-full">
                    {card.badge}
                  </span>
                </div>
                {/* Body */}
                <div className="p-6">
                  <h3
                    className="text-lg font-semibold mb-2 text-[#0f172a]"
                    style={{ fontFamily: 'var(--font-work-sans)' }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{card.desc}</p>
                  <div className="flex items-center justify-end">
                    <span className="material-symbols-outlined text-slate-400 group-hover:text-[#b70011] group-hover:translate-x-1 transition-all">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA strip */}
          <div className="mt-12 bg-[#0f172a] rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Need Immediate Assistance?</h3>
              <p className="text-slate-400">
                Speak directly to a technician for an instant quote and arrival time.
              </p>
            </div>
            <a
              href="tel:07759708646"
              className="bg-[#b70011] text-white font-black px-10 py-5 rounded-xl text-2xl hover:scale-105 transition-transform shadow-lg shadow-red-900/20"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              07759 708 646
            </a>
          </div>
        </div>
      </section>

      {/* ── 3. WHY CHOOSE US ──────────────────────────────── */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          {/* Image col */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#b70011]/5 rounded-full blur-3xl" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="relative z-10 rounded-3xl shadow-2xl border-8 border-slate-50 w-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWrU29eU8IJezmfmnrskc3wJDaLWg_9f-9oulrYPvvMLrAtPIbD7MfljbG2nb4GtGVpm4Xd2xH9iOhv4ft0CmSx6OUFyoqz9fcN1GG4JKzJDDXCcomeefkmfZVUtTcytILQDHwXHb25A0IUEqXBLS7SQnna9qTKeitWyokBom48GllVdlW95s0NinEvX4eb7-L3pxPJb89dLW99ya18kgAin3kOmZcBLDK5AkCq55nsg1l3Jfgfv4TcsOdl-MCI8RArS2GV-90g3g"
              alt="Technician changing a tyre professionally"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#0f172a] p-6 rounded-2xl shadow-2xl z-20 max-w-[200px]">
              <div className="text-[#b70011] font-black text-4xl mb-1">30m</div>
              <div className="text-white text-sm font-bold uppercase tracking-tight">
                Average Response Arrival Time
              </div>
            </div>
          </div>

          {/* Content col */}
          <div className="w-full lg:w-1/2">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-4 block">
              The Best Choice
            </span>
            <h2
              className="text-4xl lg:text-5xl text-[#0f172a] mb-8 leading-tight font-bold"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Elite Mobile Tyre Fitting Service in Manchester
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              We understand that a flat tyre isn&apos;t just an inconvenience—it&apos;s a
              disruption to your schedule and safety. We&apos;ve built our service to be the most
              reliable in the region.
            </p>
            <ul className="space-y-5 mb-10">
              <FeatureItem
                icon="bolt"
                title="Rapid Response Units"
                desc="Strategically placed across Manchester for speed."
              />
              <FeatureItem
                icon="engineering"
                title="Licensed & Insured"
                desc="Industry-certified experts with the latest tools."
              />
              <FeatureItem
                icon="sell"
                title="Transparent Pricing"
                desc="No hidden fees, no roadside surprises."
              />
            </ul>
          </div>
        </div>
      </section>

      {/* ── 4. HOW IT WORKS ───────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0f172a] text-white relative overflow-hidden">
        {/* Dot pattern */}
        <div
          className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2
            className="text-[32px] font-bold mb-16"
            style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
          >
            4 Steps To Get You Back On The Road
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {[
              { n: 1, title: 'Call Us', desc: 'Tell us your location and tyre size for an instant quote.', rot: 'rotate-3' },
              { n: 2, title: 'Dispatch', desc: 'We send our nearest expert unit to your exact location.', rot: '-rotate-3' },
              { n: 3, title: 'Fitting', desc: 'Our tech replaces your tyre while you wait in safety.', rot: 'rotate-3' },
              { n: 4, title: 'Drive Away', desc: 'Pay via card or cash and continue your journey!', rot: '-rotate-3' },
            ].map((step, idx) => (
              <div key={step.n} className="relative">
                <div
                  className={`w-20 h-20 bg-[#b70011] rounded-2xl flex items-center justify-center text-3xl font-black mx-auto mb-8 shadow-xl ${step.rot}`}
                  style={{ fontFamily: 'var(--font-work-sans)' }}
                >
                  {step.n}
                </div>
                <h3
                  className="text-xl font-semibold mb-4 text-white"
                  style={{ fontFamily: 'var(--font-work-sans)' }}
                >
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm">{step.desc}</p>
                {idx < 3 && (
                  <span className="hidden md:block absolute top-10 -right-6 text-[#b70011] material-symbols-outlined text-3xl">
                    trending_flat
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. BRAND LOGOS ────────────────────────────────── */}
      <section className="py-16 px-6 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-slate-400 font-bold uppercase tracking-widest text-xs mb-12">
            Authorized Dealer of All Premium Brands
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 grayscale opacity-60 hover:grayscale-0 transition-all items-center">
            {['MICHELIN', 'PIRELLI', 'CONTINENTAL', 'GOODYEAR', 'BRIDGESTONE', 'DUNLOP'].map(
              (brand) => (
                <div
                  key={brand}
                  className="flex items-center justify-center font-black text-xl italic text-slate-800"
                >
                  {brand}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ── 6. REVIEWS ────────────────────────────────────── */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="text-left">
              <div className="flex items-center gap-2 mb-4">
                {/* Google G icon */}
                <svg className="w-6 h-6" viewBox="0 0 24 24" aria-label="Google">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <div className="flex text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="material-symbols-outlined fill-1">star</span>
                  ))}
                </div>
                <span className="font-bold text-[#0f172a]">4.9/5 Rating</span>
              </div>
              <h2
                className="text-[32px] font-bold text-[#0f172a]"
                style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
              >
                What Our Customers Say
              </h2>
            </div>
            <div className="hidden md:block">
              <a href="#" className="text-[#b70011] font-bold flex items-center gap-2 hover:underline">
                View all Google reviews{' '}
                <span className="material-symbols-outlined">open_in_new</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                initials: 'JD',
                name: 'James D.',
                when: '2 days ago',
                review:
                  '"Brilliant service! Had a puncture on the M60 at 2 AM. The guy arrived in 35 minutes and had me back on the road in no time. Highly recommend One Stop Tyres."',
              },
              {
                initials: 'SC',
                name: 'Sarah C.',
                when: '1 week ago',
                review:
                  '"So convenient having them come to my workplace. Very professional technician, fair price, and no mess. Will definitely use them again for regular tyre changes."',
              },
              {
                initials: 'MR',
                name: 'Mark R.',
                when: '3 days ago',
                review:
                  '"Locked wheel nut was a nightmare until these guys came. No damage to the alloy and sorted it quickly. Friendly service and decent prices."',
              },
            ].map((r) => (
              <div
                key={r.name}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">
                    {r.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0f172a]">{r.name}</h4>
                    <p className="text-xs text-slate-400">{r.when}</p>
                  </div>
                </div>
                <Stars />
                <p className="text-slate-600 text-sm leading-relaxed italic">{r.review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CONTACT FORM ───────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          {/* Left */}
          <div className="w-full lg:w-1/3">
            <h2
              className="text-4xl text-[#0f172a] mb-6 leading-tight font-bold"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Get a Non-Urgent Quote
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              For emergency call-outs, please phone us directly. For general queries or to book a
              fitting at home later this week, fill in the form.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#b70011]">location_on</span>
                </div>
                <div>
                  <p className="font-bold text-[#0f172a]">Service Area</p>
                  <p className="text-sm text-slate-500">
                    Manchester, Oldham, Bolton, Bury, Stockport &amp; surrounds.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#b70011]">schedule</span>
                </div>
                <div>
                  <p className="font-bold text-[#0f172a]">Hours</p>
                  <p className="text-sm text-slate-500">Open 24/7 for Emergencies</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="w-full lg:w-2/3">
            <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-1">
                  <label className="block text-sm font-bold text-[#0f172a] mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="e.g. John Doe"
                    className="w-full border border-slate-200 rounded-xl p-4 bg-white focus:outline-none focus:ring-2 focus:ring-[#b70011] focus:border-[#b70011] transition"
                  />
                </div>
                <div className="md:col-span-1">
                  <label className="block text-sm font-bold text-[#0f172a] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="07XXX XXXXXX"
                    className="w-full border border-slate-200 rounded-xl p-4 bg-white focus:outline-none focus:ring-2 focus:ring-[#b70011] focus:border-[#b70011] transition"
                  />
                </div>
                <div className="md:col-span-1">
                  <label className="block text-sm font-bold text-[#0f172a] mb-2">
                    Vehicle Registration
                  </label>
                  <input
                    type="text"
                    placeholder="AB12 CDE"
                    className="w-full border border-slate-200 rounded-xl p-4 bg-white focus:outline-none focus:ring-2 focus:ring-[#b70011] focus:border-[#b70011] transition"
                  />
                </div>
                <div className="md:col-span-1">
                  <label className="block text-sm font-bold text-[#0f172a] mb-2">Postcode</label>
                  <input
                    type="text"
                    placeholder="M1 1AA"
                    className="w-full border border-slate-200 rounded-xl p-4 bg-white focus:outline-none focus:ring-2 focus:ring-[#b70011] focus:border-[#b70011] transition"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-[#0f172a] mb-2">
                    Message / Tyre Size
                  </label>
                  <textarea
                    placeholder="Tell us what you need..."
                    className="w-full border border-slate-200 rounded-xl p-4 h-32 bg-white focus:outline-none focus:ring-2 focus:ring-[#b70011] focus:border-[#b70011] transition"
                  />
                </div>
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-[#0f172a] text-white py-5 rounded-xl hover:bg-slate-800 shadow-lg transition-all uppercase tracking-wider text-sm font-bold"
                    style={{ fontFamily: 'var(--font-work-sans)' }}
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. MAP ────────────────────────────────────────── */}
      <section className="relative h-[450px] w-full border-t border-slate-200">
        <iframe
          className="w-full h-full grayscale-[0.2]"
          src="https://maps.google.com/maps?q=Oldham,%20Manchester&t=&z=12&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          title="Service area map"
          aria-label="Google map showing Oldham, Manchester service area"
        />
        <div className="absolute top-10 left-10 z-10 hidden md:block">
          <div className="bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 max-w-xs">
            <h4 className="font-bold text-[#0f172a] mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#b70011]">my_location</span>
              Local Coverage
            </h4>
            <p className="text-sm text-slate-600 mb-4">
              We are based in Oldham and cover the entire Greater Manchester area within 30-60
              minutes.
            </p>
            <div className="flex flex-wrap gap-2">
              {['MANCHESTER', 'OLDHAM', 'STOCKPORT', 'BOLTON'].map((tag) => (
                <span
                  key={tag}
                  className="bg-slate-100 px-2 py-1 rounded text-[10px] font-bold text-slate-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. FAQ ────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-2 block">
              Common Questions
            </span>
            <h2
              className="text-[32px] font-bold text-[#0f172a]"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
            >
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            <FaqItem
              q="How fast can you reach me?"
              a="Our average response time across Greater Manchester is between 30 to 60 minutes, depending on traffic conditions and your exact location."
            />
            <FaqItem
              q="Are you really available 24/7?"
              a="Yes, we operate 24 hours a day, 365 days a year—including Christmas Day, New Year's Eve, and all Bank Holidays. We are always on call."
            />
            <FaqItem
              q="Do you stock my tyre size?"
              a="We carry a wide range of common tyre sizes in our mobile units. For specialist or less common sizes, we have access to local hubs with instant availability."
            />
            <FaqItem
              q="What payment methods do you accept?"
              a="We accept all major debit and credit cards (Visa, Mastercard, etc.), as well as contactless payments and cash."
            />
          </div>
        </div>
      </section>

      <Footer />

      {/* ── FLOATING ACTION BUTTONS ───────────────────────── */}
      <div className="fixed bottom-6 right-5 z-[60] flex flex-col gap-3">

        {/* WhatsApp */}
        <a
          href="https://wa.me/447759708646"
          aria-label="Chat on WhatsApp"
          className="w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5d] rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        >
          <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>

        {/* Call */}
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
