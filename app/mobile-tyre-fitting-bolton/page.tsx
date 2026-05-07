import BrandCarousel from '@/components/BrandCarousel'
import WhyChooseUs from '@/components/WhyChooseUs'
import CityFaq from '@/components/CityFaq'

export const metadata = {
  title: 'Mobile Tyre Fitting Bolton | 24/7 Emergency Service | One Stop Tyres 24/7',
}

export default function BoltonPage() {
  return (
    <div className="bg-[#fcf9f8] text-[#1c1b1b] font-body-md overflow-x-hidden">
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[100svh] lg:min-h-[600px] flex items-center overflow-hidden bg-slate-900">
          <div className="absolute inset-0 z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover opacity-40"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWRHcG5Yq1w-p0lx2dCmskXprqQ8BVFsQm9GWU1KDecKdfF7xNkFVpvBooVDgTM_tXZ9tWyD-H6EKn11-PQYJS9qi0AZWVw2cWLCnIG3IuHsJTkBZ74m4XD9Kgqvug2JP91HXI642wqA9p6K8NrR5684YNPTG94cdsn51Sld0OiXccRXLYihx35J91OPtwSeFSLTUQnxs4fSwJtOI46S5s6u2Q51C6rHnUp7-Ins3g1qA6vSjUHbzvWjmNf_meQIL-olV4ypY1wVo"
              alt="Professional roadside assistance scene at night in Bolton"
            />
          </div>
          <div className="absolute inset-0 bg-[#0f172a]/75 lg:bg-gradient-to-r lg:from-slate-950 lg:to-transparent z-10"></div>
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-24 w-full">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center justify-center">
              <div className="inline-flex items-center gap-2 bg-[#dc2626]/20 text-[#fff6f5] border border-[#dc2626]/30 px-3 py-1 rounded-full mb-4 w-fit">
                <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>emergency_home</span>
                <span className="text-label-bold">20-30 MIN ARRIVAL IN BOLTON</span>
              </div>
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 leading-[1.1] font-black text-balance"
                style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.02em' }}
              >
                Emergency Mobile Tyre Fitting{' '}
                <span className="text-[#b70011]">Bolton 24/7</span>
              </h1>
              <p className="font-body-lg text-body-lg text-slate-300 mb-8 max-w-lg mx-auto leading-relaxed">
                Stuck with a puncture near the Reebok or on the A666? Our expert technicians provide rapid roadside tyre replacement across Bolton, Farnworth, and Horwich.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-8 justify-center">
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
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-white/70 justify-center">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#b70011] text-[18px]">verified</span>
                  <span className="text-sm font-medium">Fully Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#b70011] text-[18px]">task_alt</span>
                  <span className="text-sm font-medium">All Payment Methods Welcome</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-16">
              <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-2 block">
                What We Do
              </span>
              <h2
                className="text-2xl sm:text-[32px] font-bold text-slate-900 mb-3 leading-tight"
                style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
              >
                Professional Roadside Assistance in Bolton
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
                Comprehensive mobile vehicle support available every day of the year across Bolton and surrounding areas.
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

        {/* Why Choose Us */}
        <WhyChooseUs city="Bolton" />

        {/* Area Coverage Section */}
        <section className="py-16 sm:py-20 bg-[#f6f3f2] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <h2 className="font-h2 text-h2 mb-6">Full Bolton Coverage Area</h2>
                <p className="font-body-lg text-body-lg text-[#5c403c] mb-8">We cover the entire Metropolitan Borough of Bolton and surrounding Greater Manchester suburbs.</p>
                <div className="grid grid-cols-2 gap-x-8 gap-y-3 mb-10">
                  <span className="flex items-center gap-2 font-label-bold"><span className="w-1.5 h-1.5 rounded-full bg-[#b70011]"></span> Bolton Town Centre</span>
                  <span className="flex items-center gap-2 font-label-bold"><span className="w-1.5 h-1.5 rounded-full bg-[#b70011]"></span> Farnworth</span>
                  <span className="flex items-center gap-2 font-label-bold"><span className="w-1.5 h-1.5 rounded-full bg-[#b70011]"></span> Horwich</span>
                  <span className="flex items-center gap-2 font-label-bold"><span className="w-1.5 h-1.5 rounded-full bg-[#b70011]"></span> Westhoughton</span>
                  <span className="flex items-center gap-2 font-label-bold"><span className="w-1.5 h-1.5 rounded-full bg-[#b70011]"></span> Little Lever</span>
                  <span className="flex items-center gap-2 font-label-bold"><span className="w-1.5 h-1.5 rounded-full bg-[#b70011]"></span> Blackrod</span>
                  <span className="flex items-center gap-2 font-label-bold"><span className="w-1.5 h-1.5 rounded-full bg-[#b70011]"></span> Bromley Cross</span>
                  <span className="flex items-center gap-2 font-label-bold"><span className="w-1.5 h-1.5 rounded-full bg-[#b70011]"></span> Kearsley</span>
                </div>
                <div className="p-6 bg-white rounded-xl border-l-4 border-[#b70011] shadow-sm">
                  <p className="italic text-[#5c403c]">&quot;Had a blowout on the M61 near the Bolton turnoff. One Stop Tyres were there in 35 minutes and had me back on the road. Professional and efficient.&quot;</p>
                  <p className="mt-4 font-label-bold">— David R., Horwich</p>
                </div>
              </div>
              <div className="lg:col-span-7 relative">
                <div className="bg-slate-300 w-full aspect-video rounded-3xl overflow-hidden shadow-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-fGW5ZX_X7qj5vNHTEPTR-0tCtTtXJrFaJXd4UdJSRKZnDo3EZHn76ZgQniVW47kraGpBbdTaIQyaFxr2XE6UH7eD9nafiJA927yQE4CVLOsfL2wC9cXksgPLUxT9bai9X5u_NtcLTAnJKOEtYsQX-CwnMmSaHZeTKzTwxcLbgpcuj2kFqvgCeTtQj31brvrq4lNHO2SS2780SgBykGRxOX5m4b6THefeNY79hi1rhu7JMxpNuhZUJWHalqAobUe3fLd6V08VHS4"
                    alt="Aerial map view of Bolton UK highlighting major road networks"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[#dc2626] text-white p-6 rounded-2xl shadow-xl hidden sm:block">
                  <p className="text-3xl font-black">24/7</p>
                  <p className="text-sm font-bold uppercase tracking-widest">Availability</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Carousel */}
        <BrandCarousel />

        {/* FAQ */}
        <CityFaq
          city="Bolton"
          faqs={[
            {
              q: 'How quickly can you reach me in Bolton?',
              a: 'Our mobile units are strategically positioned across Bolton, meaning we can typically reach Bolton Town Centre, Farnworth, Horwich, and surrounding areas within 20-30 minutes.',
            },
            {
              q: 'Do you cover the M61 and A666 in Bolton?',
              a: 'Yes. We provide full motorway and A-road emergency tyre fitting across the M61, A666, A58, and all major routes through the Bolton borough.',
            },
            {
              q: 'What tyre brands do you carry for Bolton customers?',
              a: 'We stock all major premium brands including Michelin, Continental, Bridgestone, Pirelli, Dunlop, and Goodyear, as well as mid-range and budget options to suit every price point.',
            },
            {
              q: 'Are you available on Bank Holidays in Bolton?',
              a: 'Absolutely. We operate 24 hours a day, 365 days a year — including all Bank Holidays. A tyre emergency does not keep office hours, and neither do we.',
            },
          ]}
        />

        {/* CTA Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="bg-slate-900 rounded-2xl sm:rounded-[2rem] p-8 sm:p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#dc2626]/10 blur-[100px] rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#3e5e95]/10 blur-[100px] rounded-full"></div>
              <h2 className="font-h1 text-2xl sm:text-3xl lg:text-4xl text-white mb-6 relative z-10">Stuck with a flat in Bolton?</h2>
              <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto relative z-10">Don&apos;t wait for hours on a recovery truck. Call our Bolton emergency line and we&apos;ll dispatch the nearest fitter immediately.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                <a className="bg-[#dc2626] text-white px-10 py-6 rounded-xl font-call-to-action text-2xl flex items-center justify-center gap-4 hover:scale-105 transition-transform" href="tel:07759708646">
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>call</span>
                  07759 708 646
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
