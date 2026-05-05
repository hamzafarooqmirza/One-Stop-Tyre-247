export const metadata = {
  title: 'Mobile Tyre Fitting Stockport | Emergency Roadside Assistance 24/7',
  description: 'Stuck on the A6 or stranded in Cheadle? Our rapid response teams are stationed across Stockport to provide 20-30 minute emergency tyre repairs and replacements.',
}

export default function StockportPage() {
  return (
    <div className="bg-[#fcf9f8] text-[#1c1b1b] overflow-x-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[100svh] lg:min-h-[600px] flex items-center bg-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover opacity-40"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAup35Fvnu1YnYxxCeZcIQQDwiQ-GaVTp63rm_rFlDnchfoi3AaQS25V1vqtsJ4rXR8oAivHBHfvvTYs49JdOmVr_GP17uKy1ydADdU5ZtznZ2Cs7TO7WZr4G1U0nts_dobjefnPiijoVUpQYF8cdPnCPx_0l5lcSCi3Y96N73PozGyaUCsrUIB6EbzeAQRAiMQwibfQ0s7k_AqpfJDkKk3RW_sM2ol79yN-lqe68zfpS05AED3m-bzVYfbsAPZiDEWS1wUUwrcB4U"
              alt="Professional roadside assistance vehicle with amber lighting in Stockport"
            />
            <div className="absolute inset-0 bg-slate-900/60 lg:bg-transparent"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            <div>
              <div className="inline-block bg-[#dc2626] text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
                STOCKPORT EMERGENCY TYRE FITTING
              </div>
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 leading-[1.1] font-black text-balance"
                style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.02em' }}
              >
                Fastest Mobile Tyre Fitting in{' '}
                <span className="text-[#b70011]">Stockport</span>{' '}
                — We Come to You 24/7
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
                Stuck on the A6 or stranded in Cheadle? Our rapid response teams are stationed across Stockport to provide 20-30 minute emergency tyre repairs and replacements.
              </p>
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
            <div className="hidden lg:block">
              <div className="bg-white p-8 rounded-2xl shadow-2xl text-slate-900 border-l-8 border-[#dc2626]">
                <h3 className="work-sans text-xl font-semibold mb-4">Request Immediate Help</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Your Location in Stockport</label>
                    <input className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 focus:ring-[#3e5e95] focus:border-[#3e5e95] outline-none" placeholder="e.g. SK1, Heaton Moor, Bramhall..." type="text" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Tyre Size (If known)</label>
                    <input className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 focus:ring-[#3e5e95] focus:border-[#3e5e95] outline-none" placeholder="e.g. 205/55 R16" type="text" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Mobile Number</label>
                    <input className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 focus:ring-[#3e5e95] focus:border-[#3e5e95] outline-none" placeholder="For instant technician dispatch" type="tel" />
                  </div>
                  <button className="w-full bg-[#3e5e95] text-white py-4 rounded-xl work-sans font-bold shadow-lg hover:brightness-110 transition-all" type="submit">
                    Dispatch Technician Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
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
                Professional Roadside Assistance in Stockport
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
                Comprehensive mobile vehicle support available every day of the year across Stockport and surrounding areas.
              </p>
            </div>

            {/* Cards */}
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

        {/* Why Choose Us */}
        <section className="bg-[#f6f3f2] py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="relative">
                <img
                  className="rounded-2xl shadow-2xl relative z-10"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-0-SyJhT_cMu92G4ajh2JO0jJCWuJn5Nsa4tCpMiK9FLPEmGl5EijiS7Nxvhd7Fk6NGS8IDsjYWjwn95xKO-UcpSeLQruuNKFMpGHOppT1CfhoTIA6wKAmlkqd2M9HWV18bxh6N_mC7gUiplEXA4CmO8H8BHBpaJ6-yWL5_X6CDNdzFcZgrOPXWy9s-88mddKxEKGYFqrq8_ac6TkTKX-0COJEmLJM-TgHwldzHCs-Cgk5zwNgYNeYo2VFe6Xvyyk75hCgr3WAuA"
                  alt="Professional technician checking tread depth"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl z-20 border-b-4 border-[#dc2626]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-yellow-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="font-bold text-lg">4.9/5 Rating</span>
                  </div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Based on 1,200+ Stockport jobs</p>
                </div>
              </div>
              <div>
                <h2 className="work-sans text-2xl sm:text-3xl font-bold text-[#1c1b1b] mb-5">The Preferred Mobile Tyre Service in <span className="text-[#b70011]">Stockport</span></h2>
                <ul className="space-y-6">
                  {[
                    { title: 'Local Knowledge', desc: "We know Stockport's roads—from the tight streets of Edgeley to the suburban lanes of Marple. We navigate traffic to reach you faster." },
                    { title: 'Stock for All Vehicles', desc: 'Budget, Mid-range, and Premium brands always in stock. Whether you drive a Ford or a Ferrari, we have the right rubber ready.' },
                    { title: 'Contactless Payment', desc: 'Pay securely by card at the roadside. No cash needed, no awkward trips to the ATM in the middle of the night.' },
                  ].map((item) => (
                    <li key={item.title} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3e5e95] text-white flex items-center justify-center">
                        <span className="material-symbols-outlined text-sm">done_all</span>
                      </div>
                      <div>
                        <h4 className="work-sans text-lg font-semibold mb-1">{item.title}</h4>
                        <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Map */}
        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 flex flex-col justify-center">
              <h2 className="work-sans text-3xl font-bold mb-4">Stockport Coverage</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">We provide complete coverage across the Metropolitan Borough of Stockport and surrounding areas including:</p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {['Bramhall', 'Cheadle', 'Gatley', 'Hazel Grove', 'Marple', 'Reddish', 'Romiley', 'Bredbury'].map((area) => (
                  <span key={area} className="flex items-center gap-2 font-bold text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b70011] flex-shrink-0"></span>
                    {area}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2 h-96 rounded-2xl overflow-hidden shadow-xl border-4 border-white relative">
              <img
                className="w-full h-full object-cover grayscale opacity-50"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa8cy6qK7SKsDDHsZ5C9JasF5daxAcax-N6IOXx7LNXTFwrBK4s4_A1TL8GV2apJtuOk-k-vBPCQKzLBmHIVdcP_LqFCQOzH5GBSrgKTEJ2K5K_CKqdoUyJMGMAq6dvfTydmRKVu5qY2JCzSVeNmDuDgYOOy4hGPB6DPK1nWuSA-46czQneR2YB_HjVe-0vfaSnOQPDT7p4BpVmzUr6mJZgBge8j0Q_TGYCR_DpGqxdI_xNNajsuRGEF3MIPu_lS3tFsw10g56amE"
                alt="Digital map of Stockport area"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#dc2626] text-white p-4 rounded-xl shadow-2xl flex items-center gap-3">
                  <span className="material-symbols-outlined">location_on</span>
                  <span className="font-bold">4 Technicians Active Now</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
