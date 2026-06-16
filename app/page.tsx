import BrandCarousel from '@/components/BrandCarousel'
import QuoteForm from '@/components/QuoteForm'
import ReviewsCarousel from '@/components/ReviewsCarousel'

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
      <section className="relative bg-[#0f172a] overflow-hidden min-h-[80svh] lg:min-h-[600px] flex flex-col lg:flex-row">

        {/* Background image — full bleed on mobile, right half on desktop */}
        <div className="absolute inset-0 lg:left-1/2">
          <picture>
            <source srcSet="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Tyre%20Fitting%20One%20Stop-airanko%20%281%29-2niHlhcLFs37TFtkZ5lIBe0UubGjUQ.webp" type="image/webp" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover object-center"
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Tyre%20Fitting%20One%20Stop-airanko%20%281%29-2niHlhcLFs37TFtkZ5lIBe0UubGjUQ.webp"
              alt="One Stop Mobile Tyres 24/7 branded van at a residential home tyre fitting in Manchester"
              width={1600}
              height={1067}
              fetchPriority="high"
              decoding="async"
            />
          </picture>
          {/* Overlay: strong dark on mobile for legibility, fade from left on desktop */}
          <div className="absolute inset-0 bg-[#0f172a]/85 lg:bg-gradient-to-r lg:from-[#0f172a] lg:via-[#0f172a]/60 lg:to-[#0f172a]/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full lg:w-1/2 flex items-center px-5 sm:px-8 pt-12 pb-10 sm:py-16 lg:py-20">
          <div className="w-full max-w-lg mx-auto lg:ml-auto lg:mr-10">

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 leading-[1.1] font-black text-balance"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.02em' }}
            >
              24/7 Emergency Mobile Tyre Fitting Near You
            </h1>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6">
              Mobile Tyres Fitting, Emergency Tyres Replacement &amp; Mobile Puncture Repair Across Greater Manchester. We Come To Your Home, Workplace Or Roadside Location.
            </p>

            {/* Trust benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2.5 mb-8">
              {[
                '20 Minute Emergency Response',
                'Mobile Tyre Fitting At Home, Work Or Roadside',
                'Mobile Puncture Repair & Tyre Replacement',
                'Covering Greater Manchester 24/7',
                'Card, Cash & Contactless Payments Accepted',
                'Fully Insured Professional Tyre Technicians',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-white/90">
                  <span
                    className="material-symbols-outlined text-green-400 shrink-0"
                    style={{ fontSize: '22px', fontVariationSettings: "'FILL' 1" }}
                  >check_circle</span>
                  <span className="text-base font-semibold leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* Google Rating Badge */}
            <a href="https://maps.app.goo.gl/tqGMogzsNNn8EXjH8" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full px-4 py-2 mb-4">
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <div className="flex text-yellow-400 gap-px">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <span className="font-bold text-sm">5.0</span>
              <span className="text-white/60 text-xs font-medium">Rated By Local Drivers Across Greater Manchester</span>
            </a>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:07759708646"
                className="bg-[#FF4444] text-[#121212] font-black px-8 py-4 rounded-xl shadow-2xl shadow-red-900/40 flex items-center justify-center gap-2.5 hover:bg-red-700 hover:text-white transition-all text-base sm:text-lg"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                <span
                  className="material-symbols-outlined text-xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  call
                </span>
                07759 708 646
              </a>
              <a
                href="https://wa.me/447759708646"
                className="bg-[#25D366] hover:bg-[#1ebe5d] text-white font-black px-8 py-4 rounded-xl flex items-center justify-center gap-2.5 transition-all text-base sm:text-lg shadow-lg shadow-green-900/20"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                <svg className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WHATSAPP
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. REVIEWS ────────────────────────────────────── */}
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
            <a href="https://maps.app.goo.gl/tqGMogzsNNn8EXjH8" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white border border-slate-200 shadow-sm rounded-full px-5 py-2.5">
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
              <span className="text-sm font-bold text-[#0f172a]">5 / 5</span>
              <span className="text-xs text-slate-400 font-medium hidden sm:inline">Based on Google Reviews</span>
            </a>
          </div>

          {/* Review cards carousel */}
          <ReviewsCarousel />

          {/* View all link */}
          <div className="text-center mt-8">
            <a
              href="https://share.google/bejdYHzU10lFRVv4E"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#b70011] font-bold text-sm hover:underline"
            >
              View all Google reviews
              <span className="material-symbols-outlined text-[16px]">open_in_new</span>
            </a>
          </div>

        </div>
      </section>

      {/* ── 3. SERVICES ───────────────────────────────────── */}
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
              24/7 Mobile Tyre Fitting &amp; Emergency Tyre Repair
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
              Mobile tyre fitting, puncture repair and emergency tyre replacement across Greater Manchester. We come to your home, workplace or roadside location 24/7.
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
                href: '/mobile-tyre-fitting',
              },
              {
                img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Tyre%20Fitting%20One%20Stop-airanko-kPAsyn08SjxXwLwCVhxre5zM9jWBTs.webp',
                title: 'Emergency Tyre Replacement',
                desc: 'Fast emergency tyre replacement service with 20-30 minute response times.',
                badge: 'AT YOUR DOOR',
                href: '/home-tyre-fitting',
              },
              {
                img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Puncture%20Repair%20One%20Stop-airanko-sfmhLvDbSYmhoMprTVOHCcIWEgJvHf.webp',
                title: 'Emergency Puncture Repair',
                desc: 'Professional mobile puncture repair to get you safely back on the road.',
                badge: 'CERTIFIED REPAIR',
                href: '/emergency-puncture-repair',
              },
              {
                img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One%20Stop%20Jumpstart%20image-airanko-cXmOrXcdtaIBMNQOMCIOiPj1C290RG.webp',
                title: 'JumpStart',
                desc: 'Fast battery jump-start service to get your vehicle running again without delay.',
                badge: '24/7 SERVICE',
                href: '/jump-start',
              },
              {
                img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tyre%20pressure%20monitor-airanko-sjz7PL2Pv4N9jlPWtz5Wa1q8XO0FgP.webp',
                title: 'TPMS Reset',
                desc: 'Tyre pressure monitoring system reset after every tyre change or repair.',
                badge: 'ALL VEHICLES',
                href: '/tpms-reset',
              },
              {
                img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Locking%20nut%20removal-airanko%20%281%29-ONBmqaZHMozU0jjrxbPe5J7C4zRQkS.webp',
                title: 'Locking Nut Removal',
                desc: 'Specialist damage-free removal of lost or broken locking wheel nuts.',
                badge: 'DAMAGE FREE',
                href: '/locking-nut-removal',
              },
            ].map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden border-b-4 border-[#b70011] cursor-pointer"
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
              </a>
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
              className="bg-[#FF4444] text-[#121212] font-black px-8 py-4 rounded-xl text-xl sm:text-2xl hover:scale-105 transition-transform shadow-lg shadow-red-900/20 whitespace-nowrap"
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
            {/* Floating trust badge */}
            <div className="absolute bottom-2 right-2 sm:-bottom-2 sm:-right-2 bg-white p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-2xl z-20 max-w-[165px] sm:max-w-[195px] border border-slate-100">
              <div className="flex text-yellow-400 gap-0.5 mb-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="material-symbols-outlined" style={{ fontSize: '16px', fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <div className="text-[#0f172a] font-black text-2xl sm:text-3xl leading-none mb-1">5.0 / 5.0</div>
              <div className="text-slate-500 text-[11px] font-semibold uppercase tracking-wide">1,161 Customer Reviews</div>
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
              Elite Mobile Tyre Fitting Service Across Greater Manchester
            </h2>
            <p className="text-slate-600 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
              Our 24/7 mobile tyre fitting service covers Greater Manchester, providing emergency tyre replacement, mobile puncture repair and roadside tyre assistance wherever you are. Whether you have a flat tyre at home, work or on the roadside, our mobile tyre technicians come directly to your location with a range of premium and budget tyres ready to fit.
              If you&apos;re searching for mobile tyre fitting near me, emergency tyre repair or mobile puncture repair, we provide a fast response service to get you safely back on the road.
            </p>
            <ul className="space-y-4 sm:space-y-5">
              <FeatureItem
                icon="bolt"
                title="24/7 Mobile Tyre Fitting"
                desc="Tyres fitted at your home, workplace or roadside location."
              />
              <FeatureItem
                icon="engineering"
                title="Emergency Tyre Replacement"
                desc="Fast replacement of damaged or unsafe tyres across Greater Manchester."
              />
              <FeatureItem
                icon="sell"
                title="Mobile Puncture Repair"
                desc="Professional puncture repairs where safe and suitable."
              />
            </ul>
          </div>
        </div>
      </section>

      {/* ── 5. HOW IT WORKS ───────────────────────────────── */}
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
              { icon: 'tire_repair',    title: 'Confirm Your Tyre Size',            desc: 'Tell us your vehicle and tyre size for an instant match and quote.',  rot: 'rotate-3' },
              { icon: 'pin_drop',       title: 'Send Us Your Location',             desc: 'Share your exact location via call or WhatsApp pin for fast routing.', rot: '-rotate-3' },
              { icon: 'local_car_wash', title: 'Choose Branded or Economy Tyres',  desc: 'Pick from premium brands or budget options — all quality guaranteed.',  rot: 'rotate-3' },
              { icon: 'directions_car', title: 'Get Back On The Road',              desc: 'Our tech fits your tyre on-site. Pay and drive away safely.',           rot: '-rotate-3' },
            ].map((step, idx) => (
              <div key={step.icon} className="relative">
                <div
                  className={`w-14 h-14 sm:w-20 sm:h-20 bg-[#FF4444] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-8 shadow-xl ${step.rot}`}
                >
                  <span
                    className="material-symbols-outlined text-white text-[28px] sm:text-[36px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >{step.icon}</span>
                </div>
                <h3
                  className="text-base sm:text-xl font-semibold mb-2 sm:mb-4 text-white"
                  style={{ fontFamily: 'var(--font-work-sans)' }}
                >
                  {step.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm">{step.desc}</p>
                {idx < 3 && (
                  <span className="hidden md:block absolute top-10 -right-6 text-[#FF4444] material-symbols-outlined text-3xl">
                    trending_flat
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. BRAND LOGOS ────────────────────────────────── */}
      <BrandCarousel />

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
                    Coverage across Greater Manchester and surrounding areas.
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
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. MAP ────────────────────────────────��───────── */}
      {/* ── 8. MAP + LOCATIONS ───────────────────────────── */}
      <section className="border-t border-slate-200 flex flex-col lg:flex-row" style={{ minHeight: '520px' }}>
        {/* Left — map */}
        <div className="w-full lg:w-1/2 h-[300px] lg:h-auto">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4741.379474172151!2d-2.1049285233703974!3d53.5454538598072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb920bfb7fecd%3A0x4edbef2355697975!2sOne%20Stop%20Mobile%20Tyres%2024%2F7!5e0!3m2!1sen!2s!4v1781464116347!5m2!1sen!2s"
            frameBorder="0"
            scrolling="no"
            title="Service area map"
            aria-label="Google map showing Greater Manchester service area"
            loading="lazy"
          />
        </div>

        {/* Right — locations */}
        <div className="w-full lg:w-1/2 bg-[#0f172a] px-6 sm:px-10 py-10 sm:py-14 flex flex-col justify-center">
          <span className="text-[#FF4444] font-bold uppercase tracking-widest text-xs mb-3 block">
            Our Service Areas
          </span>
          <h2
            className="text-white text-2xl sm:text-3xl font-bold mb-2 leading-tight text-balance"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            Mobile Tyre Fitting Across Greater Manchester
          </h2>
          <p className="text-slate-400 text-sm mb-8 leading-relaxed">
            24/7 Mobile Tyre Fitting, Emergency Tyre Replacement and Mobile Puncture Repair Across Greater Manchester. We cover Manchester, Oldham, Stockport, Bolton, Rochdale, Bury, Wigan, Trafford and surrounding areas.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1.5">
            {[
              { name: 'Manchester',    href: '/mobile-tyre-fitting-manchester' },
              { name: 'Bolton',        href: '/mobile-tyre-fitting-bolton' },
              { name: 'Bury',          href: '/mobile-tyre-fitting-bury' },
              { name: 'Oldham',        href: '/mobile-tyre-fitting-oldham' },
              { name: 'Rochdale',      href: '/mobile-tyre-fitting-rochdale' },
              { name: 'Stockport',     href: '/mobile-tyre-fitting-stockport' },
              { name: 'Tameside',      href: '/mobile-tyre-fitting-tameside' },
              { name: 'Trafford',      href: '/mobile-tyre-fitting-trafford' },
              { name: 'Wigan',         href: '/mobile-tyre-fitting-wigan' },
              { name: 'M60 Motorway',  href: '/mobile-tyre-fitting-m60' },
              { name: 'M602 Motorway', href: '/mobile-tyre-fitting-m602' },
              { name: 'M61 Motorway',  href: '/mobile-tyre-fitting-m61' },
              { name: 'M62 Motorway',  href: '/mobile-tyre-fitting-m62' },
              { name: 'M56 Motorway',  href: '/mobile-tyre-fitting-m56' },
              { name: 'M66 Motorway',  href: '/mobile-tyre-fitting-m66' },
              { name: 'M67 Motorway',  href: '/mobile-tyre-fitting-m67' },
              { name: 'A627 Road',     href: '/mobile-tyre-fitting-a627' },
            ].map((loc) => (
              <a
                key={loc.href}
                href={loc.href}
                className="flex items-center gap-2 text-slate-300 hover:text-white text-sm font-medium py-1.5 group transition-colors"
              >
                <span
                  className="material-symbols-outlined text-[#FF4444] shrink-0 group-hover:scale-110 transition-transform"
                  style={{ fontSize: '14px' }}
                >
                  location_on
                </span>
                {loc.name}
              </a>
            ))}
          </div>

          <a
            href="/service-area"
            className="mt-8 self-start inline-flex items-center gap-2 bg-[#FF4444] text-[#121212] text-sm font-bold px-5 py-3 rounded-xl hover:bg-red-700 hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>map</span>
            View Full Service Area
          </a>
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
