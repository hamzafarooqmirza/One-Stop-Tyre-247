import { BOROUGHS } from '@/lib/locations'

const ROAD_PAGES = [
  { name: 'M60', slug: 'm60' },
  { name: 'M61', slug: 'm61' },
  { name: 'M62', slug: 'm62' },
  { name: 'M56', slug: 'm56' },
  { name: 'M66', slug: 'm66' },
  { name: 'M67', slug: 'm67' },
  { name: 'M602', slug: 'm602' },
  { name: 'A627', slug: 'a627' },
]

export default function ServiceAreasMap() {
  return (
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

      {/* Right — locations, grouped by borough */}
      <div className="w-full lg:w-1/2 bg-[#0f172a] px-6 sm:px-10 py-10 sm:py-14">
        <span className="inline-block bg-[#FF4444]/15 text-[#FF4444] font-bold uppercase tracking-widest text-xs mb-3 px-3 py-1 rounded-full border border-[#FF4444]/30">
          Our Service Areas
        </span>
        <h2
          className="text-white text-2xl sm:text-3xl font-black mb-2 leading-tight text-balance"
          style={{ fontFamily: 'var(--font-work-sans)' }}
        >
          Mobile Tyre Fitting Manchester &amp; Greater Manchester — Full Coverage
        </h2>
        <p className="text-slate-400 text-sm mb-5 leading-relaxed">
          Every Greater Manchester borough, town and motorway we cover, 24/7. Broken down on a
          motorway hard shoulder or stuck on your driveway at home — our nearest available
          technician is dispatched straight to your GPS location.
        </p>

        <div className="space-y-2.5">
          {BOROUGHS.map((borough) => (
            <div key={borough.name} className="flex flex-wrap items-center gap-1.5">
              {borough.slug ? (
                <a
                  href={`/mobile-tyre-fitting-${borough.slug}`}
                  className="inline-flex items-center gap-1 text-white font-extrabold text-sm hover:text-[#FF4444] transition-colors shrink-0"
                >
                  <span className="material-symbols-outlined text-[#FF4444]" style={{ fontSize: '15px' }}>
                    location_on
                  </span>
                  {borough.name}
                </a>
              ) : (
                <span className="inline-flex items-center gap-1 text-white font-extrabold text-sm shrink-0">
                  <span className="material-symbols-outlined text-[#FF4444]" style={{ fontSize: '15px' }}>
                    location_on
                  </span>
                  {borough.name}
                </span>
              )}
              {borough.towns.map((town) => (
                <a
                  key={town.slug}
                  href={`/mobile-tyre-fitting-${town.slug}`}
                  className="text-xs font-bold text-slate-300 bg-white/5 hover:bg-[#FF4444] hover:text-white border border-white/10 hover:border-[#FF4444] px-2.5 py-1 rounded-full transition-colors"
                >
                  {town.name}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="inline-flex items-center gap-1 text-white font-extrabold text-sm shrink-0">
              <span className="material-symbols-outlined text-[#FF4444]" style={{ fontSize: '15px' }}>
                directions
              </span>
              Motorways
            </span>
            {ROAD_PAGES.map((road) => (
              <a
                key={road.slug}
                href={`/mobile-tyre-fitting-${road.slug}`}
                className="text-xs font-bold text-slate-300 bg-white/5 hover:bg-[#FF4444] hover:text-white border border-white/10 hover:border-[#FF4444] px-2.5 py-1 rounded-full transition-colors"
              >
                {road.name}
              </a>
            ))}
          </div>
        </div>

        <a
          href="/service-area"
          className="mt-6 inline-flex items-center gap-2 bg-[#FF4444] text-[#121212] text-sm font-bold px-5 py-3 rounded-xl hover:bg-red-700 hover:text-white transition-colors"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>map</span>
          View Full Service Area
        </a>
      </div>
    </section>
  )
}
