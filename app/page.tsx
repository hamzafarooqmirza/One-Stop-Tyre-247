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
      {/* ── 1. HERO ───────────────────────────────────────── */}
      <section className="relative bg-[#0f172a] overflow-hidden min-h-[100svh] lg:min-h-[600px] flex flex-col lg:flex-row">

        {/* Background image — full bleed on mobile, right half on desktop */}
        <div className="absolute inset-0 lg:left-1/2">
          <picture>
            <source srcSet="/images/hero-tyre-fitting.webp" type="image/webp" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover object-center"
              src="https://ss5vlswhqmiddtca.public.blob.vercel-storage.com/Hero%20section%20image%20for%20one%20stop-airanko-GThUaVjbwZmY4iQO0czB2NrcyiFDuj.webp"
              alt="One Stop Mobile Tyres 24/7 branded van ready for emergency tyre fitting in Manchester"
              width={1600}
              height={1067}
              fetchPriority="high"
              decoding="async"
            />
          </picture>
          {/* Overlay: strong dark on mobile for legibility, fade from left on desktop */}
          <div className="absolute inset-0 bg-[#0f172a]/75 lg:bg-gradient-to-r lg:from-[#0f172a] lg:via-[#0f172a]/30 lg:to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full lg:w-1/2 flex items-center px-5 sm:px-8 py-24 lg:py-28">
          <div className="w-full max-w-lg mx-auto lg:ml-auto lg:mr-10">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-3.5 py-1.5 rounded-full mb-5 text-[11px] uppercase tracking-widest border border-red-600/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              Rapid Response: 20-30 Mins
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 leading-[1.1] font-black text-balance"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.02em' }}
            >
              24/7 Emergency{' '}
              <span className="text-[#b70011]">Mobile Tyre Fitting</span>{' '}
              Nationwide
            </h1>

            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
              Stranded with a puncture anywhere in the UK? Our professional technicians reach you fast at home,
              work, or roadside to get you moving safely.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href="tel:07759708646"
                className="bg-[#b70011] text-white font-black px-8 py-4 rounded-xl shadow-2xl shadow-red-900/40 flex items-center justify-center gap-2.5 hover:bg-red-700 transition-all text-base sm:text-lg"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                <span
                  className="material-symbols-outlined text-xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  call
                </span>
                CALL NOW
              </a>
              <a
                href="https://wa.me/447759708646"
                className="bg-white/10 border border-white/20 text-white font-black px-8 py-4 rounded-xl flex items-center justify-center gap-2.5 hover:bg-white/20 transition-all text-base sm:text-lg"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                <svg className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WHATSAPP
              </a>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-white/70">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#b70011] text-[18px]">verified</span>
                <span className="text-sm font-medium">Fully Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#b70011] text-[18px]">payments</span>
                <span className="text-sm font-medium">Card/Cash Accepted</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. SERVICES ───────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-2 block">
              What We Do
            </span>
            <h2
              className="text-2xl sm:text-[32px] font-bold text-slate-900 mb-3 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
            >
              Professional Roadside Assistance
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
              Comprehensive mobile vehicle support available every day of the year across the UK.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emergency%20Tyre%20Fitting%20one%20Stop-airanko-gsjvsGamoet8drKwCMHYr6LH5Ni6ZI.webp',
                title: 'Mobile Tyre Fitting',
                desc: 'Emergency replacement at your location within 20-30 minutes.',
                badge: 'FAST RESPONSE',
              },
              {
                img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Tyre%20Fitting%20One%20Stop-airanko-kPAsyn08SjxXwLwCVhxre5zM9jWBTs.webp',
                title: 'Home Tyre Fitting',
                desc: 'Convenient tyre replacement on your driveway while you work or relax.',
                badge: 'AT YOUR DOOR',
              },
              {
                img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Puncture%20Repair%20One%20Stop-airanko-sfmhLvDbSYmhoMprTVOHCcIWEgJvHf.webp',
                title: 'Emergency Puncture Repair',
                desc: 'Professional plug and patch repair to save your tyre when possible.',
                badge: 'BS AU 159',
              },
              {
                img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One%20Stop%20Jumpstart%20image-airanko-cXmOrXcdtaIBMNQOMCIOiPj1C290RG.webp',
                title: 'JumpStart',
                desc: 'Fast battery jump-start service to get your vehicle running again without delay.',
                badge: '24/7 SERVICE',
              },
              {
                img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tyre%20pressure%20monitor-airanko-sjz7PL2Pv4N9jlPWtz5Wa1q8XO0FgP.webp',
                title: 'TPMS Reset',
                desc: 'Tyre pressure monitoring system reset after every tyre change or repair.',
                badge: 'ALL VEHICLES',
              },
              {
                img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Locking%20nut%20removal-airanko%20%281%29-ONBmqaZHMozU0jjrxbPe5J7C4zRQkS.webp',
                title: 'Locking Nut Removal',
                desc: 'Specialist damage-free removal of lost or broken locking wheel nuts.',
                badge: 'DAMAGE FREE',
              },
            ].map((card) => (
              <div
                key={card.title}
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
                  <h3
                    className="text-base sm:text-lg font-semibold mb-2 text-[#0f172a]"
                    style={{ fontFamily: 'var(--font-work-sans)' }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">{card.desc}</p>
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
          <div className="mt-10 sm:mt-12 bg-[#0f172a] rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-2xl text-center sm:text-left">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Need Immediate Assistance?</h3>
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

      {/* ── 3. WHY CHOOSE US ──────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Image col */}
          <div className="w-full lg:w-1/2 relative pb-8 sm:pb-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="relative z-10 rounded-2xl sm:rounded-3xl shadow-2xl border-4 sm:border-8 border-slate-50 w-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWrU29eU8IJezmfmnrskc3wJDaLWg_9f-9oulrYPvvMLrAtPIbD7MfljbG2nb4GtGVpm4Xd2xH9iOhv4ft0CmSx6OUFyoqz9fcN1GG4JKzJDDXCcomeefkmfZVUtTcytILQDHwXHb25A0IUEqXBLS7SQnna9qTKeitWyokBom48GllVdlW95s0NinEvX4eb7-L3pxPJb89dLW99ya18kgAin3kOmZcBLDK5AkCq55nsg1l3Jfgfv4TcsOdl-MCI8RArS2GV-90g3g"
              alt="Technician changing a tyre professionally"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
            {/* Floating badge */}
            <div className="absolute bottom-2 right-2 sm:-bottom-2 sm:-right-2 bg-[#0f172a] p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-2xl z-20 max-w-[160px] sm:max-w-[200px]">
              <div className="text-[#b70011] font-black text-3xl sm:text-4xl mb-1">30m</div>
              <div className="text-white text-xs sm:text-sm font-bold uppercase tracking-tight">
                Average Response Arrival Time
              </div>
            </div>
          </div>

          {/* Content col */}
          <div className="w-full lg:w-1/2">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
              The Best Choice
            </span>
            <h2
              className="text-2xl sm:text-4xl lg:text-5xl text-[#0f172a] mb-5 sm:mb-8 leading-tight font-bold"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Elite Mobile Tyre Fitting Service Nationwide
            </h2>
            <p className="text-slate-600 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
              We understand that a flat tyre isn&apos;t just an inconvenience—it&apos;s a
              disruption to your schedule and safety. We&apos;ve built our service to be the most
              reliable across the UK.
            </p>
            <ul className="space-y-4 sm:space-y-5">
              <FeatureItem
                icon="bolt"
                title="Rapid Response Units"
                desc="Strategically placed across the UK for speed."
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
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#0f172a] text-white relative overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2
            className="text-2xl sm:text-[32px] font-bold mb-10 sm:mb-16"
            style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
          >
            4 Steps To Get You Back On The Road
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-12 relative">
            {[
              { n: 1, title: 'Call Us', desc: 'Tell us your location and tyre size for an instant quote.', rot: 'rotate-3' },
              { n: 2, title: 'Dispatch', desc: 'We send our nearest expert unit to your exact location.', rot: '-rotate-3' },
              { n: 3, title: 'Fitting', desc: 'Our tech replaces your tyre while you wait in safety.', rot: 'rotate-3' },
              { n: 4, title: 'Drive Away', desc: 'Pay via card or cash and continue your journey!', rot: '-rotate-3' },
            ].map((step, idx) => (
              <div key={step.n} className="relative">
                <div
                  className={`w-14 h-14 sm:w-20 sm:h-20 bg-[#b70011] rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl font-black mx-auto mb-4 sm:mb-8 shadow-xl ${step.rot}`}
                  style={{ fontFamily: 'var(--font-work-sans)' }}
                >
                  {step.n}
                </div>
                <h3
                  className="text-base sm:text-xl font-semibold mb-2 sm:mb-4 text-white"
                  style={{ fontFamily: 'var(--font-work-sans)' }}
                >
                  {step.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm">{step.desc}</p>
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
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-slate-400 font-bold uppercase tracking-widest text-xs mb-8 sm:mb-12">
            Authorized Dealer of All Premium Brands
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 sm:gap-8 grayscale opacity-60 hover:grayscale-0 transition-all items-center">
            {['MICHELIN', 'PIRELLI', 'CONTINENTAL', 'GOODYEAR', 'BRIDGESTONE', 'DUNLOP'].map(
              (brand) => (
                <div
                  key={brand}
                  className="flex items-center justify-center font-black text-sm sm:text-xl italic text-slate-800 text-center"
                >
                  {brand}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ── 6. REVIEWS ────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
              Google Reviews
            </span>
            <h2
              className="text-2xl sm:text-[32px] font-bold text-[#0f172a] mb-4"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
            >
              What Our Customers Say
            </h2>
            {/* Rating badge */}
            <div className="inline-flex items-center gap-3 bg-white border border-slate-200 shadow-sm rounded-full px-5 py-2.5">
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" aria-label="Google">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <div className="flex text-yellow-400 gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <span className="text-sm font-bold text-[#0f172a]">4.9 / 5</span>
              <span className="text-xs text-slate-400 font-medium hidden sm:inline">Based on Google Reviews</span>
            </div>
          </div>

          {/* Review cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                initials: 'JD',
                name: 'James D.',
                when: '2 days ago',
                review:
                  'Brilliant service! Had a puncture on the M60 at 2 AM. The guy arrived in 35 minutes and had me back on the road in no time. Highly recommend One Stop Tyres.',
              },
              {
                initials: 'SC',
                name: 'Sarah C.',
                when: '1 week ago',
                review:
                  'So convenient having them come to my workplace. Very professional technician, fair price, and no mess. Will definitely use them again for regular tyre changes.',
              },
              {
                initials: 'MR',
                name: 'Mark R.',
                when: '3 days ago',
                review:
                  'Locked wheel nut was a nightmare until these guys came. No damage to the alloy and sorted it quickly. Friendly service and decent prices.',
              },
            ].map((r) => (
              <div
                key={r.name}
                className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-4"
              >
                {/* Stars row */}
                <div className="flex items-center justify-between">
                  <div className="flex text-yellow-400 gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                  <svg className="w-4 h-4 shrink-0 opacity-60" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>

                {/* Review text */}
                <p className="text-slate-600 text-sm leading-relaxed flex-1">&ldquo;{r.review}&rdquo;</p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                  <div className="w-9 h-9 bg-[#0f172a] rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0">
                    {r.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0f172a]">{r.name}</p>
                    <p className="text-xs text-slate-400">{r.when}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View all link */}
          <div className="text-center mt-8">
            <a href="#" className="inline-flex items-center gap-1.5 text-[#b70011] font-bold text-sm hover:underline">
              View all Google reviews
              <span className="material-symbols-outlined text-[16px]">open_in_new</span>
            </a>
          </div>

        </div>
      </section>

      {/* ── 7. CONTACT FORM ───────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Left */}
          <div className="w-full lg:w-1/3">
            <h2
              className="text-2xl sm:text-4xl text-[#0f172a] mb-4 sm:mb-6 leading-tight font-bold"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Get a Non-Urgent Quote
            </h2>
            <p className="text-slate-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              For emergency call-outs, please phone us directly. For general queries or to book a
              fitting at home later this week, fill in the form.
            </p>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#b70011]">location_on</span>
                </div>
                <div>
                  <p className="font-bold text-[#0f172a] text-sm sm:text-base">Service Area</p>
                  <p className="text-sm text-slate-500">
                    Nationwide coverage across England, Scotland, Wales &amp; N. Ireland.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#b70011]">schedule</span>
                </div>
                <div>
                  <p className="font-bold text-[#0f172a] text-sm sm:text-base">Hours</p>
                  <p className="text-sm text-slate-500">Open 24/7 for Emergencies</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="w-full lg:w-2/3">
            <div className="bg-slate-50 p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl border border-slate-100 shadow-sm">
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#0f172a] mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="e.g. John Doe"
                    className="w-full border border-slate-200 rounded-xl p-3 sm:p-4 bg-white focus:outline-none focus:ring-2 focus:ring-[#b70011] focus:border-[#b70011] transition text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#0f172a] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="07XXX XXXXXX"
                    className="w-full border border-slate-200 rounded-xl p-3 sm:p-4 bg-white focus:outline-none focus:ring-2 focus:ring-[#b70011] focus:border-[#b70011] transition text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#0f172a] mb-2">
                    Vehicle Registration
                  </label>
                  <input
                    type="text"
                    placeholder="AB12 CDE"
                    className="w-full border border-slate-200 rounded-xl p-3 sm:p-4 bg-white focus:outline-none focus:ring-2 focus:ring-[#b70011] focus:border-[#b70011] transition text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#0f172a] mb-2">Postcode</label>
                  <input
                    type="text"
                    placeholder="M1 1AA"
                    className="w-full border border-slate-200 rounded-xl p-3 sm:p-4 bg-white focus:outline-none focus:ring-2 focus:ring-[#b70011] focus:border-[#b70011] transition text-sm"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-bold text-[#0f172a] mb-2">
                    Message / Tyre Size
                  </label>
                  <textarea
                    placeholder="Tell us what you need..."
                    className="w-full border border-slate-200 rounded-xl p-3 sm:p-4 h-28 sm:h-32 bg-white focus:outline-none focus:ring-2 focus:ring-[#b70011] focus:border-[#b70011] transition text-sm"
                  />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-[#0f172a] text-white py-4 sm:py-5 rounded-xl hover:bg-slate-800 shadow-lg transition-all uppercase tracking-wider text-sm font-bold"
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
      <section className="relative h-[300px] sm:h-[450px] w-full border-t border-slate-200">
        <iframe
          className="w-full h-full grayscale-[0.2]"
          src="https://maps.google.com/maps?q=United+Kingdom&t=&z=6&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          title="Service area map"
          aria-label="Google map showing UK nationwide service area"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 sm:top-10 sm:left-10 z-10">
          <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-2xl border border-slate-100 max-w-[200px] sm:max-w-xs">
            <h4 className="font-bold text-[#0f172a] mb-1 sm:mb-2 flex items-center gap-2 text-sm sm:text-base">
              <span className="material-symbols-outlined text-[#b70011] text-[18px]">my_location</span>
              Nationwide Coverage
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4 hidden sm:block">
              We cover the entire UK with rapid response units reaching you within 20-30 minutes.
            </p>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {['ENGLAND', 'SCOTLAND', 'WALES', 'N.IRELAND'].map((tag) => (
                <span
                  key={tag}
                  className="bg-slate-100 px-2 py-1 rounded text-[9px] sm:text-[10px] font-bold text-slate-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. FAQ ────────────────────────────────────────── */}
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
          <div className="space-y-4">
            <FaqItem
              q="How fast can you reach me?"
              a="Our average response time across the UK is between 20 to 30 minutes, depending on traffic conditions and your exact location."
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

    </div>
  )
}
