export const metadata = {
  title: 'Mobile Tyre Fitting Wigan | Emergency Roadside Assistance | One Stop Tyres 24/7',
  description: 'Stranded on the A49 or M6? Expert mobile technicians provide 24/7 rapid roadside tyre replacement and puncture repair throughout Wigan. 20-30 min arrival.',
}

export default function WiganPage() {
  return (
    <div className="bg-[#fcf9f8] text-[#1c1b1b] overflow-x-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600;700;800;900&family=Inter:wght@400;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48; }
        .work-sans { font-family: 'Work Sans', sans-serif; }
      `}</style>

      {/* Header */}
      <header className="bg-white top-0 sticky z-50 border-b border-slate-200 shadow-md">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <div className="text-2xl font-black text-red-600 tracking-tighter uppercase work-sans">One Stop Tyres 24/7</div>
          <nav className="hidden md:flex gap-6 items-center work-sans text-base font-semibold tracking-tight">
            <a className="text-slate-700 hover:text-red-700 transition-colors" href="#">Home</a>
            <a className="text-slate-700 hover:text-red-700 transition-colors" href="#">Services</a>
            <a className="text-red-600 border-b-2 border-red-600 pb-1" href="#">Coverage Area</a>
            <a className="text-slate-700 hover:text-red-700 transition-colors" href="#">About Us</a>
            <a className="text-slate-700 hover:text-red-700 transition-colors" href="#">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <a className="hidden sm:flex items-center bg-[#dc2626] text-white px-6 py-3 rounded-lg work-sans font-bold hover:opacity-90 active:scale-95 transition-all text-sm gap-2" href="tel:08000000000">
              <span className="material-symbols-outlined">phone_in_talk</span>
              CALL NOW
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative bg-[#313030] text-white py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-40">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4rpTHiSRhm3EprGSlH6Cbc4wwHu6Drw_CEY746MO5une5waMm6EONnDOOKTtMrDxrR1QiLry6mgBRm606uA_VcFNGwPqBTGkApWekES7JWd4zLNyse0Txsd8nrjxYMZOzqd7Zpifh7UW98h5SNokAFxNH07JADa8DjHizKJP9Ku48b0GEazKgAvmiEV3agrQOyisol566Yd2SDaDqUATkSykBDrEF_hP2JLVfmfOcQG_w28ziDNuP4lkeLL3IPZ8LJl4s_HqRmGY"
              alt="Professional roadside assistance technician working on a modern SUV at night"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-[#dc2626] text-white px-4 py-2 rounded-full mb-6 text-sm font-bold gap-2">
                <span className="material-symbols-outlined text-sm">bolt</span>
                20-30 MINUTE ARRIVAL IN WIGAN
              </div>
              <h1 className="work-sans text-4xl md:text-5xl font-bold mb-6 leading-tight">Emergency Mobile Tyre Fitting in Wigan</h1>
              <p className="text-lg mb-8 opacity-90 leading-relaxed">Stranded on the A49 or M6? Our expert mobile technicians provide 24/7 rapid roadside tyre replacement and puncture repair throughout Wigan and the surrounding Greater Manchester area.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a className="bg-[#dc2626] text-white work-sans font-bold px-8 py-5 rounded-lg flex items-center justify-center shadow-lg hover:bg-[#b70011] transition-all gap-2" href="tel:08000000000">
                  <span className="material-symbols-outlined">call</span>
                  CALL EMERGENCY DISPATCH
                </a>
                <a className="bg-white text-[#1c1b1b] work-sans font-bold px-8 py-5 rounded-lg border-2 border-transparent hover:border-white hover:bg-transparent hover:text-white transition-all text-center" href="#services">
                  VIEW SERVICES
                </a>
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
        <section className="py-16 bg-[#fcf9f8]" id="services">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="work-sans text-3xl font-bold mb-4">Roadside Assistance Services in Wigan</h2>
              <p className="text-lg max-w-2xl mx-auto text-slate-600">Professional, high-urgency solutions to get you back on the road safely and swiftly.</p>
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
        <section className="py-16 bg-[#f0edec]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-8">
                <div className="bg-white p-10 rounded-2xl h-full shadow-sm">
                  <h2 className="work-sans text-3xl font-bold mb-6">Serving the Entire Wigan Borough</h2>
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
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
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
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="work-sans text-3xl font-bold mb-12 text-center">Wigan Mobile Tyre Fitting FAQs</h2>
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

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full px-8 py-12 max-w-7xl mx-auto">
          <div>
            <div className="text-lg font-bold text-slate-900 mb-4">One Stop Tyres 24/7</div>
            <p className="text-sm text-slate-600">Your first choice for high-urgency emergency roadside assistance in Wigan and beyond. Reliability when you need it most.</p>
          </div>
          <div>
            <div className="font-bold text-[#b70011] mb-4 uppercase text-xs tracking-widest">Services</div>
            <ul className="space-y-2 text-sm text-slate-600">
              {['Emergency Call-out', 'Mobile Tyre Fitting', 'Puncture Repair', 'Jump Starts'].map((s) => (
                <li key={s}><a className="hover:text-red-600 hover:underline" href="#">{s}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-bold text-[#b70011] mb-4 uppercase text-xs tracking-widest">Company</div>
            <ul className="space-y-2 text-sm text-slate-600">
              {['About Us', 'Contact', 'Privacy Policy', 'Terms of Service'].map((s) => (
                <li key={s}><a className="hover:text-red-600 hover:underline" href="#">{s}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-bold text-[#b70011] mb-4 uppercase text-xs tracking-widest">Support</div>
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-[#b70011]">phone</span>
              <span className="font-bold text-slate-900">0800 000 0000</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#b70011]">location_on</span>
              <span className="text-sm text-slate-600">24/7 Coverage Wigan &amp; Greater Manchester</span>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-200 py-6 text-center">
          <p className="text-sm text-slate-600">© 2024 One Stop Tyres 24/7. High-Urgency Emergency Roadside Assistance UK. All Rights Reserved.</p>
        </div>
      </footer>

      {/* FAB */}
      <a
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#dc2626] text-white rounded-full shadow-2xl flex items-center justify-center z-[100] md:hidden hover:scale-105 active:scale-95 transition-all"
        href="tel:08000000000"
      >
        <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>phone_in_talk</span>
      </a>
    </div>
  )
}
