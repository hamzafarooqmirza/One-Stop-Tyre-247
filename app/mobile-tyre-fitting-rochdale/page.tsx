import BrandCarousel from '@/components/BrandCarousel'
import WhyChooseUs from '@/components/WhyChooseUs'
import CityFaq from '@/components/CityFaq'

export const metadata = {
  title: 'Mobile Tyre Fitting Rochdale | 24/7 Emergency Service | One Stop Tyres 24/7',
  description: 'Fast 24/7 mobile tyre fitting in Rochdale. Emergency roadside assistance for M62, Town Centre, and Littleborough. 20-30 min arrival. Call One Stop Tyres 24/7 now.',
}

export default function RochdalePage() {
  return (
    <div className="bg-[#fcf9f8] text-[#1c1b1b] font-body-md">
      {/* Hero Section */}
      <section
        className="min-h-[100svh] lg:min-h-[600px] flex items-center text-white relative"
        style={{
          background: "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mobile%20Tyre%20fitting-airanko-mB2PlClNhJqqD09qARja8bLAbTDtoE.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 w-full">
          <div className="max-w-2xl">
            <div className="inline-block bg-[#dc2626] text-white px-4 py-1 rounded-full mb-4 font-label-bold text-sm tracking-widest uppercase">Emergency Service Available</div>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 leading-[1.1] font-black text-balance"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.02em' }}
            >
              24/7 Mobile Tyre Fitting in{' '}
              <span className="text-[#b70011]">Rochdale</span>
            </h1>
            <p className="font-body-lg text-slate-100 mb-8 max-w-xl leading-relaxed">Stranded with a flat tyre? Whether you&apos;re on the M62, in Rochdale Town Centre, or parked at Hollingworth Lake, our expert technicians arrive within 20-30 minutes to get you moving again.</p>
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
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-[#fcf9f8] py-10 sm:py-12 border-b border-[#e5e2e1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="text-center">
            <div className="text-3xl font-h1 text-[#b70011] mb-1">5000+</div>
            <div className="text-sm font-label-bold text-[#5c403c] uppercase tracking-tighter">Tyres Fitted</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-h1 text-[#b70011] mb-1">24/7</div>
            <div className="text-sm font-label-bold text-[#5c403c] uppercase tracking-tighter">Availability</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-h1 text-[#b70011] mb-1">100%</div>
            <div className="text-sm font-label-bold text-[#5c403c] uppercase tracking-tighter">Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-h1 text-[#b70011] mb-1">30m</div>
            <div className="text-sm font-label-bold text-[#5c403c] uppercase tracking-tighter">Avg Response</div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50" id="services">
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
              Professional Roadside Assistance in Rochdale
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
              Comprehensive mobile vehicle support available every day of the year across Rochdale and surrounding areas.
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

      {/* Booking CTA / Process */}
      <section className="bg-[#dc2626] text-white py-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 sm:gap-12 items-center">
          <div>
            <h2 className="font-h1 text-2xl sm:text-3xl lg:text-4xl mb-6">Need a Tyre Change Right Now?</h2>
            <p className="text-[#ffdad6] mb-8 font-body-lg">Don&apos;t wait for a tow truck. We come to you and change your tyre while you wait in the safety of your vehicle.</p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full border-2 border-[#ffdad6] flex items-center justify-center font-bold">1</div>
                <div>
                  <div className="font-label-bold text-lg mb-1">Call Our Dispatch</div>
                  <p className="text-[#ffdad6]">Tell us your location and tyre size (on the tyre sidewall).</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full border-2 border-[#ffdad6] flex items-center justify-center font-bold">2</div>
                <div>
                  <div className="font-label-bold text-lg mb-1">Get a Fixed Quote</div>
                  <p className="text-[#ffdad6]">We provide a transparent price with no hidden call-out fees.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full border-2 border-[#ffdad6] flex items-center justify-center font-bold">3</div>
                <div>
                  <div className="font-label-bold text-lg mb-1">Technician Dispatched</div>
                  <p className="text-[#ffdad6]">Our mobile van arrives and fits your tyre in 20-30 mins.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-2xl text-[#1c1b1b]">
            <h3 className="font-h3 mb-6">Request Callback</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-label-bold mb-1 text-[#5c403c]">Your Phone Number</label>
                <input className="w-full bg-[#f6f3f2] border-[#e5e2e1] rounded-lg p-3 focus:ring-[#3e5e95] focus:border-[#3e5e95]" placeholder="07xxx xxxxxx" type="tel" />
              </div>
              <div>
                <label className="block text-sm font-label-bold mb-1 text-[#5c403c]">Tyre Size (Optional)</label>
                <input className="w-full bg-[#f6f3f2] border-[#e5e2e1] rounded-lg p-3 focus:ring-[#3e5e95] focus:border-[#3e5e95]" placeholder="e.g. 205/55 R16" type="text" />
              </div>
              <div>
                <label className="block text-sm font-label-bold mb-1 text-[#5c403c]">Location in Rochdale</label>
                <input className="w-full bg-[#f6f3f2] border-[#e5e2e1] rounded-lg p-3 focus:ring-[#3e5e95] focus:border-[#3e5e95]" placeholder="Postcode or Street Name" type="text" />
              </div>
              <button className="w-full bg-[#dc2626] text-white py-4 rounded-lg font-call-to-action shadow-md hover:bg-[#b70011] transition-all">
                REQUEST URGENT CALLBACK
              </button>
              <p className="text-center text-xs text-[#5c403c] mt-4">We typically call back within 120 seconds for all emergency requests.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs city="Rochdale" />

      {/* Brand Carousel */}
      <BrandCarousel />

      {/* FAQ Section */}
      <CityFaq
        city="Rochdale"
        faqs={[
          {
            q: 'Do you cover the M62 near Rochdale?',
            a: 'Yes, we provide emergency tyre services for the M62 between Junction 18 (Simister Island) and Junction 22 (Rishworth Moor). We are experts at safe roadside recovery and fitting on the motorway network.',
          },
          {
            q: 'What tyre brands do you stock for Rochdale drivers?',
            a: 'We carry a wide range of all-season, summer, and winter tyres including premium brands like Michelin, Continental, and Bridgestone, as well as high-quality mid-range and budget options.',
          },
          {
            q: 'Can you come to my workplace at Kingsway Business Park?',
            a: 'Absolutely. We frequently visit business parks like Kingsway, Sandbrook Park, and Stakehill. We fit your tyres while you work, saving you time at a traditional garage.',
          },
          {
            q: 'How fast can you reach me in Rochdale town centre?',
            a: 'Our average arrival time in Rochdale town centre is 20-30 minutes. We also cover Heywood, Middleton, Littleborough, and Milnrow with the same rapid response.',
          },
        ]}
      />

    </div>
  )
}
