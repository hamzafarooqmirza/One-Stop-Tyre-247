import BrandCarousel from '@/components/BrandCarousel'
import WhyChooseUs from '@/components/WhyChooseUs'
import CityFaq from '@/components/CityFaq'
import ReviewsCarousel from '@/components/ReviewsCarousel'

export const metadata = {
  title: 'Mobile Tyre Fitting in Trafford | One Stop Tyres 24/7',
}

export default function TraffordPage() {
  return (
    <div className="bg-[#fcf9f8] text-[#1c1b1b] font-body-md">
      <main>
        {/* Hero Section */}
        <section
          className="relative min-h-[100svh] lg:min-h-[600px] flex items-center justify-center text-center px-4"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(https://lh3.googleusercontent.com/aida-public/AB6AXuCg002K0OOPUj2BWv1aNNo9razXyT2fSlEIwUDVdQGupgjSFDUcrCMcUq-DALcOEWWRpAA7TAfaJfZ699fvvfMyjZXAI5lGsWv4_-Z7UBU6e24eqt5n8Zl4KjC_C8GSL1nTNhdYy7gTOljMWus0u75lLq8ztF7AKtKgYpcysFVUByQFt3HmSjzB7FTYnbZ6t0ySopUIhFAXTMcpIyuPrsTlELOdImGcfMyYD6hJWppaZaG9FavlPs7UysrIAFXwy_SB4GwdsWhOHj4)",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="max-w-4xl mx-auto py-20">
            <div className="inline-flex items-center gap-2 bg-[#dc2626] text-white px-4 py-2 rounded-full mb-4 animate-pulse">
              <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>emergency</span>
              <span className="text-label-bold">24/7 TRAFFORD EMERGENCY RESPONSE</span>
            </div>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 leading-[1.1] font-black text-balance"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.02em' }}
            >
              Mobile Tyre Fitting in{' '}
              <span className="text-[#b70011]">Trafford</span>
            </h1>
            <p className="font-body-lg text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed mb-8">Rapid 24/7 mobile tyre fitting across the Trafford borough — from the Trafford Centre and M60 to Stretford, Sale, Altrincham, and Urmston. We come to you in 20-30 minutes.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 mb-8">
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
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-white/70">
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
                Professional Roadside Assistance in Trafford
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
                Comprehensive mobile vehicle support available every day of the year across Trafford and surrounding areas.
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
        <WhyChooseUs city="Trafford" />




        {/* Brand Carousel */}
        <BrandCarousel />

        {/* Reviews Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
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
                <span className="text-sm font-bold text-[#0f172a]">5 / 5</span>
                <span className="text-xs text-slate-400 font-medium hidden sm:inline">Based on Google Reviews</span>
              </div>
            </div>

            <ReviewsCarousel />

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

        {/* FAQ Section */}
        <CityFaq
          city="Trafford"
          faqs={[
            {
              q: 'How quickly can you reach me near the Trafford Centre?',
              a: 'Our strategic location near the M60 allows us to reach the Trafford Centre and surrounding areas within 20-30 minutes. We cover Stretford, Sale, Altrincham, Urmston, and Old Trafford.',
            },
            {
              q: 'Do you cover the M60 and M63 through Trafford?',
              a: 'Yes. We provide 24/7 emergency tyre fitting on the M60 and all major A-roads through Trafford, including the A56 and A57.',
            },
            {
              q: 'What tyre brands do you stock for Trafford drivers?',
              a: 'We carry all major premium brands including Michelin, Continental, Bridgestone, Pirelli, and Goodyear, alongside mid-range and budget options to suit every vehicle.',
            },
            {
              q: 'Can you come to my home in Altrincham or Sale?',
              a: 'Absolutely. Our home tyre fitting service covers the entire Trafford borough. We come to your driveway and fit your tyres while you relax at home.',
            },
          ]}
        />

        {/* Final CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#f0edec] relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-h2 text-xl sm:text-2xl lg:text-h2 mb-4 sm:mb-5 leading-tight">Need a Tyre Fitted in Trafford Right Now?</h2>
            <p className="font-body-lg text-sm sm:text-base lg:text-lg text-[#5c403c] leading-relaxed mb-6 sm:mb-8">Don&apos;t wait by the roadside. Call our dedicated Trafford line and get a technician dispatched in minutes.</p>
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
