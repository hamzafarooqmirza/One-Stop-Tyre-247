export const metadata = {
  title: 'Mobile Tyre Fitting Wigan | Emergency Roadside Assistance | One Stop Tyres 24/7',
  description: 'Stranded on the A49 or M6? Expert mobile technicians provide 24/7 rapid roadside tyre replacement and puncture repair throughout Wigan. 20-30 min arrival.',
}

export default function WiganPage() {
  return (
    <div className="bg-[#fcf9f8] text-[#1c1b1b] overflow-x-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[100svh] lg:min-h-[600px] flex items-center bg-[#313030] text-white overflow-hidden">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover opacity-40"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4rpTHiSRhm3EprGSlH6Cbc4wwHu6Drw_CEY746MO5une5waMm6EONnDOOKTtMrDxrR1QiLry6mgBRm606uA_VcFNGwPqBTGkApWekES7JWd4zLNyse0Txsd8nrjxYMZOzqd7Zpifh7UW98h5SNokAFxNH07JADa8DjHizKJP9Ku48b0GEazKgAvmiEV3agrQOyisol566Yd2SDaDqUATkSykBDrEF_hP2JLVfmfOcQG_w28ziDNuP4lkeLL3IPZ8LJl4s_HqRmGY"
              alt="Professional roadside assistance technician working on a modern SUV at night"
            />
            <div className="absolute inset-0 bg-[#313030]/60"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            <div>
              <div className="inline-flex items-center bg-[#dc2626] text-white px-4 py-2 rounded-full mb-4 text-sm font-bold gap-2">
                <span className="material-symbols-outlined text-sm">bolt</span>
                20-30 MINUTE ARRIVAL IN WIGAN
              </div>
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 leading-[1.1] font-black text-balance"
                style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.02em' }}
              >
                Emergency Mobile Tyre Fitting in{' '}
                <span className="text-[#b70011]">Wigan</span>
              </h1>
              <p className="text-lg mb-8 opacity-90 leading-relaxed">Stranded on the A49 or M6? Our expert mobile technicians provide 24/7 rapid roadside tyre replacement and puncture repair throughout Wigan and the surrounding Greater Manchester area.</p>
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <a
                  href="tel:07759708646"
                  className="bg-[#b70011] text-white font-black px-8 py-4 rounded-xl shadow-2xl shadow-red-900/40 flex items-center justify-center gap-2.5 hover:bg-red-700 transition-all text-base sm:text-lg"
                  style={{ fontFamily: 'var(--font-work-sans)' }}
                >
                  <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                  CALL NOW
                </a>
                <a
                  href="https://wa.me/447759708646"
                  className="bg-white/10 border border-white/20 text-white font-black px-8 py-4 rounded-xl flex items-center justify-center gap-2.5 hover:bg-white/20 transition-all text-base sm:text-lg"
                  style={{ fontFamily: 'var(--font-work-sans)' }}
                >
                  <svg className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  WHATSAPP
                </a>
              </div>
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
            <div className="hidden lg:block bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20">
              <h3 className="work-sans text-2xl font-semibold mb-4">Why Wigan Drivers Trust Us:</h3>
              <ul className="space-y-4">
                {[
                  'Rapid Response to M6, A49, and A580 East Lancs',
                  'All Tyre Sizes & Brands in Stock 24/7',
                  'Certified Techs for Luxury & Electric Vehicles',
                  'No Hidden Call-out Fees – Fixed Pricing',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#ffb4ab]">check_circle</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50" id="services">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-16">
              <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-2 block">
                What We Do
              </span>
              <h2
                className="text-2xl sm:text-[32px] font-bold text-slate-900 mb-3 leading-tight"
                style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
              >
                Professional Roadside Assistance in Wigan
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
                Comprehensive mobile vehicle support available every day of the year across Wigan and surrounding areas.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mobile%20Tyre%20fitting-airanko-mB2PlClNhJqqD09qARja8bLAbTDtoE.webp',
                  title: 'Mobile Tyre Fitting',
                  desc: 'Emergency replacement at your location within 20-30 minutes.',
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
                  badge: 'CERTIFIED REPAIR',
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

        {/* Coverage Bento */}
        <section className="py-12 sm:py-16 bg-[#f0edec]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-8">
                <div className="bg-white p-8 sm:p-10 rounded-2xl h-full shadow-sm">
                  <h2 className="work-sans text-2xl sm:text-3xl font-bold mb-5">Serving the Entire Wigan Borough</h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">Our dispatch centre is strategically located to provide the fastest response times in Wigan. We don&apos;t just stay in the town centre; we cover every outlying district with 24-hour availability.</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-slate-700 font-semibold">
                    {['Standish', 'Ashton-in-Makerfield', 'Hindley', 'Orrell', 'Pemberton', 'Ince-in-Makerfield', 'Platt Bridge', 'Abram'].map((area) => (
                      <div key={area} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#b70011] rounded-full flex-shrink-0"></span>
                        <span className="text-sm">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4">
                <div className="bg-[#3e5e95] text-white p-10 rounded-2xl h-full flex flex-col justify-center relative overflow-hidden">
                  <img
                    className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5-CWOo-B8qx2Tz_xxoLpvvwIyWf20RrVLYDqRGQiarK5-gbjaYvrKs8cpEuczfJ73pgFoZbp--bxQubG820yvq4IibVTdQmm_I_erG9_ERyMNyjie4TAOctBBPQLkswCRHlmt3gj6aOrTEpp0mEfmvUSzA0wt04wbXn_M2agAlyUkPpXUYkiJBzFumXWOcOm9WKtVQeTk0mW0CAHR3fRTC-JswPz6nc2qbVku71tv8nmauGhwT52u8zzP3_i_Xz0ogbGUCi9ZF8g"
                    alt="Map of Wigan area"
                  />
                  <h3 className="work-sans text-2xl font-semibold mb-4 relative z-10">Local Map Coverage</h3>
                  <p className="text-sm mb-6 relative z-10 leading-relaxed">We prioritize emergency calls on major arterial routes including the M6 Junctions 25-27 and the A580 East Lancashire Road.</p>
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg relative z-10 border border-white/30">
                    <div className="flex items-center gap-3 text-sm">
                      <span className="material-symbols-outlined text-[#ffb4ab]">location_on</span>
                      <span>Centrally Dispatched from Wigan</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-10 bg-[#313030] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {[
              { stat: '30', label: 'Min Avg Arrival' },
              { stat: '5k+', label: 'Wigan Drivers Assisted' },
              { stat: '24/7', label: 'Availability' },
              { stat: '100%', label: 'Fully Insured' },
            ].map((item) => (
              <div key={item.label}>
                <div className="work-sans text-4xl font-bold text-[#ffb4ab]">{item.stat}</div>
                <p className="text-xs uppercase tracking-widest font-bold opacity-70 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="work-sans text-2xl sm:text-3xl font-bold mb-10 sm:mb-12 text-center">Wigan Mobile Tyre Fitting FAQs</h2>
            <div className="space-y-6">
              {[
                { q: 'How fast can you get to Wigan Town Centre?', a: 'Typically, our nearest technician can be with you in Wigan town centre within 30 to 45 minutes, depending on traffic levels on the A49.' },
                { q: 'Do you stock tyres for commercial vans?', a: 'Yes, we carry a full range of heavy-duty commercial van tyres for popular models like Transit, Sprinter, and Vivaro in our mobile service vans.' },
                { q: 'Can you fit tyres on the M6 shoulder?', a: 'Absolutely. Our vehicles are equipped with high-intensity safety lighting to perform safe roadside changes on high-speed roads and motorways.' },
              ].map((faq) => (
                <div key={faq.q} className="border-b border-slate-100 pb-6">
                  <h4 className="work-sans text-lg font-semibold mb-2 flex justify-between items-center cursor-pointer">
                    {faq.q}
                    <span className="material-symbols-outlined text-[#b70011]">expand_more</span>
                  </h4>
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
