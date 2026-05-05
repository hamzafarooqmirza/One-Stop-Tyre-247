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
        <section className="py-12 sm:py-16 bg-[#fcf9f8]" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="work-sans text-2xl sm:text-3xl font-bold mb-4">Roadside Assistance Services in Wigan</h2>
              <p className="text-lg max-w-2xl mx-auto text-slate-600 leading-relaxed">Professional, high-urgency solutions to get you back on the road safely and swiftly.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: 'tire_repair', title: 'Mobile Tyre Fitting', desc: "Whether at home, work, or the roadside, we bring the tyre shop to you. Rapid fitting for cars, vans, and 4x4s.", badge: 'From £45', color: 'bg-[#ffdad6]', iconColor: 'text-[#b70011]' },
                { icon: 'build', title: 'Puncture Repair', desc: "Safe, BS AU 159 compliant repairs on the spot. If it can be fixed, we'll save you the cost of a new tyre.", badge: 'Fast Repair', color: 'bg-[#d7e2ff]', iconColor: 'text-[#3e5e95]' },
                { icon: 'bolt', title: 'Jump Starts', desc: "Flat battery in the cold? Our technicians carry heavy-duty jump packs to get any engine started instantly.", badge: '24/7 Service', color: 'bg-[#c8e6ff]', iconColor: 'text-[#005f88]' },
              ].map((service) => (
                <div key={service.title} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-[#3e5e95] transition-all group flex flex-col">
                  <div className={`w-14 h-14 ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <span className={`material-symbols-outlined text-3xl ${service.iconColor}`}>{service.icon}</span>
                  </div>
                  <h3 className="work-sans text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-6 flex-1 leading-relaxed">{service.desc}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="bg-[#005f88]/10 text-[#004c6d] px-3 py-1 rounded font-bold text-sm">{service.badge}</span>
                    <a className="text-[#b70011] font-bold flex items-center hover:underline text-sm" href="#">
                      Details <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                    </a>
                  </div>
                </div>
              ))}
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
