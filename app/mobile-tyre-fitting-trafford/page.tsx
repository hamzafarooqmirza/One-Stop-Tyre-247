export const metadata = {
  title: 'Mobile Tyre Fitting Trafford | One Stop Tyres 24/7 | Emergency Roadside Assistance',
}

export default function TraffordPage() {
  return (
    <div className="bg-[#fcf9f8] text-[#1c1b1b] font-body-md">
      {/* Hero Section */}
      <section className="relative min-h-[100svh] lg:min-h-[600px] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-40"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg002K0OOPUj2BWv1aNNo9razXyT2fSlEIwUDVdQGupgjSFDUcrCMcUq-DALcOEWWRpAA7TAfaJfZ699fvvfMyjZXAI5lGsWv4_-Z7UBU6e24eqt5n8Zl4KjC_C8GSL1nTNhdYy7gTOljMWus0u75lLq8ztF7AKtKgYpcysFVUByQFt3HmSjzB7FTYnbZ6t0ySopUIhFAXTMcpIyuPrsTlELOdImGcfMyYD6hJWppaZaG9FavlPs7UysrIAFXwy_SB4GwdsWhOHj4"
            alt="Professional roadside assistance technician in Trafford at night"
          />
          <div className="absolute inset-0 bg-[#0f172a]/75 lg:bg-gradient-to-r lg:from-slate-950 lg:via-slate-900/80 lg:to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-24 grid lg:grid-cols-2 gap-12 items-center w-full">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#b70011]/20 border border-[#b70011]/30 rounded-full text-[#ffb4ab] font-label-bold mb-4">
              <span className="w-2 h-2 rounded-full bg-[#b70011] animate-pulse"></span>
              20-30 MINUTE ARRIVAL IN TRAFFORD
            </div>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 leading-[1.1] font-black text-balance"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.02em' }}
            >
              Emergency Mobile Tyre Fitting{' '}
              <span className="text-[#b70011]">Trafford</span>
            </h1>
            <p className="text-body-lg text-slate-300 max-w-xl leading-relaxed mb-8">
              Stuck with a puncture near the Trafford Centre or M60? Our expert technicians provide rapid roadside tyre replacement 24/7. Professional service, competitive rates, and immediate response.
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
          {/* Quick Quote Card */}
          <div className="bg-white p-8 rounded-xl shadow-[0px_4px_20px_rgba(0,45,98,0.05)] border border-slate-100 hidden lg:block">
            <h3 className="font-h3 text-slate-900 mb-6">Request Emergency Help</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-slate-600 font-label-bold mb-2">Registration Number</label>
                <input className="w-full p-4 bg-slate-50 border-slate-200 rounded-lg focus:ring-[#3e5e95] focus:border-[#3e5e95] transition-all font-h2 text-center uppercase tracking-widest text-2xl" placeholder="e.g. TR66 FRD" type="text" />
              </div>
              <div>
                <label className="block text-slate-600 font-label-bold mb-2">Current Location in Trafford</label>
                <div className="relative">
                  <span className="absolute left-4 top-4 material-symbols-outlined text-slate-400">location_on</span>
                  <input className="w-full p-4 pl-12 bg-slate-50 border-slate-200 rounded-lg" placeholder="Postcode or Landmark" type="text" />
                </div>
              </div>
              <button className="w-full bg-[#3e5e95] text-white py-4 rounded-lg font-call-to-action hover:opacity-90 transition-opacity" type="submit">
                LOCATE TECHNICIAN
              </button>
            </form>
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

      {/* Coverage Map Section */}
      <section className="bg-slate-100 py-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-h2 text-slate-900 mb-5">Coverage Across All of Trafford</h2>
            <p className="text-body-lg text-slate-600 leading-relaxed">Our strategic location near the M60 allows us to reach any part of Trafford within 45 minutes on average. Whether you&apos;re at work, home, or the roadside, we come to you.</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-slate-200">
                <span className="material-symbols-outlined text-[#b70011]">pin_drop</span>
                <span className="font-label-bold">Trafford Centre</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-slate-200">
                <span className="material-symbols-outlined text-[#b70011]">pin_drop</span>
                <span className="font-label-bold">Altrincham</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-slate-200">
                <span className="material-symbols-outlined text-[#b70011]">pin_drop</span>
                <span className="font-label-bold">Sale &amp; Stretford</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-slate-200">
                <span className="material-symbols-outlined text-[#b70011]">pin_drop</span>
                <span className="font-label-bold">Old Trafford</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-slate-200">
                <span className="material-symbols-outlined text-[#b70011]">pin_drop</span>
                <span className="font-label-bold">Urmston</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-slate-200">
                <span className="material-symbols-outlined text-[#b70011]">pin_drop</span>
                <span className="font-label-bold">Partington</span>
              </div>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-96 shadow-[0px_4px_20px_rgba(0,45,98,0.05)] border-4 border-white">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQmq9pZXMyNtXFlvWww9mGX969SNUhTZWFC2M14jUMFnmCI_dXPevXqoBvNIZ0kurJQPYhgri655_o4Jrx7AjXHb2NcTp4tDZHQgp8fOWsv2ClGvt782cohkyMidLXN8OsQ8VUGyoxPywUVtqhla82Ez1A3lfaXyN7q96f4cdorQf309n4wVCQmLrl88jpUbQpflaM6inYdxXJJ_tUS_2FxB27it6D7H2B8mnN6G-RbmwxQ5k2WDQ4LH6jvLquI_NMWTS2_qqzSe8"
              alt="Digital map visualization of the Trafford district"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/10">
              <div className="bg-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-4">
                <div className="w-4 h-4 bg-red-600 rounded-full animate-ping"></div>
                <p className="font-h3 text-slate-900">4 Mobile Units Live</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-xl max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#3e5e95] rounded-2xl sm:rounded-3xl p-8 sm:p-12 overflow-hidden relative">
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-white">
            <div className="space-y-2">
              <h4 className="text-4xl font-black text-[#87ceff]">30m</h4>
              <p className="font-label-bold opacity-80 uppercase tracking-wider">Avg Response</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-4xl font-black text-[#87ceff]">24/7</h4>
              <p className="font-label-bold opacity-80 uppercase tracking-wider">Full Availability</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-4xl font-black text-[#87ceff]">10k+</h4>
              <p className="font-label-bold opacity-80 uppercase tracking-wider">Tyres in Stock</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-4xl font-black text-[#87ceff]">5★</h4>
              <p className="font-label-bold opacity-80 uppercase tracking-wider">Google Rating</p>
            </div>
          </div>
          <div className="absolute right-0 top-0 h-full w-1/3 bg-white/5 skew-x-12"></div>
        </div>
      </section>

    </div>
  )
}
