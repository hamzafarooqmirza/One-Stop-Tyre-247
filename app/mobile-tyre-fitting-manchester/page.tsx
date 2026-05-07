import BrandCarousel from '@/components/BrandCarousel'
import WhyChooseUs from '@/components/WhyChooseUs'
import CityFaq from '@/components/CityFaq'

export const metadata = {
  title: 'Mobile Tyre Fitting in Manchester | One Stop Tyres 24/7',
}

export default function ManchesterPage() {
  return (
    <div className="bg-[#fcf9f8] text-[#1c1b1b] font-body-md">
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[100svh] lg:min-h-[600px] flex items-center overflow-hidden bg-slate-900 text-white">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover opacity-40"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuACli4zgmYq4HZebl6RB3BqPRVXNBBdShjzy9eFQguMHxUDWa4vGMLgGdjtzXM_mrlnoiq26fIqd2Gu0hAOtUptDpShWDgjleGN8YggUUyXy9D4nu9OX2Qicxgq-E9qrCZjaWYqsr5e12IBQCQtrxx-7XfaXXVae6kGAhNSulbnUEpX-Rwe9L5OVWHhaqIIGihsLMtEnEIwcm8MHFDncannDAduZLdBA66QAvaf5pHWnWPBiOKB2DNsHumc3TNn9SHYayiA5-rE3UE"
              alt="Professional roadside assistance technician changing tyre on a Manchester road"
            />
            <div className="absolute inset-0 bg-[#0f172a]/75 lg:bg-gradient-to-r lg:from-slate-950 lg:via-slate-900/80 lg:to-transparent"></div>
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-0">
              <div className="inline-flex items-center gap-2 bg-[#dc2626] text-white px-4 py-1 rounded-full text-label-bold animate-pulse mb-4 w-fit">
                <span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>emergency</span>
                24/7 MANCHESTER EMERGENCY RESPONSE
              </div>
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 leading-[1.1] font-black text-balance"
                style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.02em' }}
              >
                Mobile Tyre Fitting in{' '}
                <span className="text-[#b70011]">Manchester</span>
              </h1>
              <p className="font-body-lg text-base sm:text-lg text-slate-300 max-w-lg leading-relaxed mb-8">Fast and reliable mobile tyre fitting service available 24/7 in Manchester and surrounding areas. We come to you, wherever you are.</p>
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
                Professional Roadside Assistance in Manchester
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
                Comprehensive mobile vehicle support available every day of the year across Manchester and surrounding areas.
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
        <WhyChooseUs city="Manchester" />





        {/* Brand Carousel */}
        <BrandCarousel />

        {/* FAQ Section */}
        <CityFaq
          city="Manchester"
          faqs={[
            {
              q: 'Do you cover all areas of Greater Manchester?',
              a: 'Yes, we cover the entire Greater Manchester region including Salford, Trafford, Oldham, Stockport, Bury, Bolton, Rochdale, and Tameside, as well as the city centre and Manchester Airport.',
            },
            {
              q: 'How long does a mobile tyre fitting take in Manchester?',
              a: 'A single tyre replacement typically takes 20-30 minutes once our technician arrives. A full set of four tyres usually takes 45-60 minutes.',
            },
            {
              q: 'Do you offer 24-hour emergency service in Manchester?',
              a: 'Yes, we operate 24 hours a day, 7 days a week, 365 days a year. Our emergency dispatch line is always staffed and ready to send a technician to your location.',
            },
            {
              q: 'What tyre brands do you carry for Manchester drivers?',
              a: 'We stock all major premium brands including Michelin, Continental, Bridgestone, and Pirelli, as well as mid-range and budget options to suit all price points.',
            },
            {
              q: 'Can you assist with tyre emergencies on the M60 ring road?',
              a: 'Absolutely. Our emergency units are priority-dispatched for motorway breakdowns on the M60, M62, and M56, equipped with safety lighting and barriers for your protection.',
            },
          ]}
        />

        {/* Final CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#f0edec] relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-h2 text-xl sm:text-2xl lg:text-h2 mb-4 sm:mb-5 leading-tight">Need a Tyre Fitted in Manchester Right Now?</h2>
            <p className="font-body-lg text-sm sm:text-base lg:text-lg text-[#5c403c] leading-relaxed mb-6 sm:mb-8">Don&apos;t wait by the roadside. Call our dedicated Manchester line and get a technician dispatched in minutes.</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-4 sm:mt-6">
              <a className="flex items-center justify-center gap-2 sm:gap-3 bg-[#dc2626] hover:bg-[#b70011] text-white px-6 sm:px-10 py-4 sm:py-5 rounded-lg font-call-to-action text-sm sm:text-base transition-all shadow-xl" href="tel:07759708646">
                <span className="material-symbols-outlined text-xl sm:text-2xl">phone_in_talk</span>
                Call Now
              </a>
              <a className="flex items-center justify-center gap-2 sm:gap-3 bg-[#1c1b1b] hover:bg-slate-800 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-lg font-call-to-action text-sm sm:text-base transition-all shadow-xl" href="https://wa.me/447759708646">
                <span className="material-symbols-outlined text-[#25D366] text-xl sm:text-2xl" style={{fontVariationSettings: "'FILL' 1"}}>chat</span>
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
