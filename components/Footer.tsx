export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        {/* Brand */}
        <div className="space-y-8">
          <a href="#" aria-label="One Stop Mobile Tyres 24/7 - Home" className="flex justify-center md:justify-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One-Stop%20Loog-airanko-Qpv1QvladNLpRhg8X3Hs6SzyydzFMq.webp"
              alt="One Stop Mobile Tyres 24/7"
              className="h-20 w-auto"
            />
          </a>
          <p className="text-slate-400 text-sm leading-relaxed text-center md:text-left mt-6">
            The premier 24/7 emergency roadside assistance partner across Greater Manchester.
            Rapid response, professional service, and transparent pricing.
          </p>
          <ul className="space-y-4 text-slate-400 text-sm font-medium pt-2">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#b70011] text-lg">call</span>
              <a href="tel:07759708646" className="text-white font-bold hover:text-[#b70011] transition-colors">
                07759 708 646
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#b70011] text-lg">mail</span>
              <a href="mailto:info@onestoptyres247.co.uk" className="hover:text-[#b70011] transition-colors break-all">
                info@onestoptyres247.co.uk
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold mb-8 text-lg uppercase tracking-wider text-slate-200">
            Our Services
          </h4>
          <ul className="space-y-4 text-slate-400 text-sm font-medium">
            {[
              { label: 'Mobile Tyre Fitting', href: '/mobile-tyre-fitting' },
              { label: 'Home Tyre Fitting', href: '/home-tyre-fitting' },
              { label: 'Emergency Puncture Repair', href: '/emergency-puncture-repair' },
              { label: 'Jump Start', href: '/jump-start' },
              { label: 'Locking Nut Removal', href: '/locking-nut-removal' },
              { label: 'TPMS Reset', href: '/tpms-reset' },
            ].map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-[#b70011] transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-[#b70011] rounded-full" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Areas */}
        <div>
          <h4 className="font-bold mb-8 text-lg uppercase tracking-wider text-slate-200">
            Service Areas
          </h4>
          <ul className="space-y-4 text-slate-400 text-sm font-medium">
            {[
              { label: 'Manchester', href: '/mobile-tyre-fitting-manchester' },
              { label: 'Bolton', href: '/mobile-tyre-fitting-bolton' },
              { label: 'Bury', href: '/mobile-tyre-fitting-bury' },
              { label: 'Oldham', href: '/mobile-tyre-fitting-oldham' },
              { label: 'Rochdale', href: '/mobile-tyre-fitting-rochdale' },
              { label: 'Stockport', href: '/mobile-tyre-fitting-stockport' },
              { label: 'Tameside', href: '/mobile-tyre-fitting-tameside' },
              { label: 'Trafford', href: '/mobile-tyre-fitting-trafford' },
              { label: 'Wigan', href: '/mobile-tyre-fitting-wigan' },
            ].map((area) => (
              <li key={area.href}>
                <a href={area.href} className="hover:text-[#b70011] transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-slate-600 rounded-full" />
                  {area.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Motorways */}
        <div>
          <h4 className="font-bold mb-8 text-lg uppercase tracking-wider text-slate-200">
            Motorway Coverage
          </h4>
          <ul className="space-y-4 text-slate-400 text-sm font-medium">
            {[
              { label: 'Mobile Tyre Fitting M60', href: '/mobile-tyre-fitting-m60' },
              { label: 'Mobile Tyre Fitting M61', href: '/mobile-tyre-fitting-m61' },
              { label: 'Mobile Tyre Fitting M62', href: '/mobile-tyre-fitting-m62' },
              { label: 'Mobile Tyre Fitting M602', href: '/mobile-tyre-fitting-m602' },
              { label: 'Mobile Tyre Fitting M66', href: '/mobile-tyre-fitting-m66' },
              { label: 'Mobile Tyre Fitting M67', href: '/mobile-tyre-fitting-m67' },
            ].map((road) => (
              <li key={road.href}>
                <a href={road.href} className="hover:text-[#b70011] transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-slate-600 rounded-full" />
                  {road.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 text-xs text-center md:text-left">
          © 2026 One Stop Tyres 24/7. High-Urgency Emergency Roadside Assistance UK. All Rights
          Reserved.
        </p>
        <p className="text-slate-600 text-[11px] text-center md:text-right">
          Designed &amp; Developed By{' '}
          <a
            href="https://linkedo.co.uk"
            rel="nofollow noopener noreferrer"
            target="_blank"
            className="text-slate-400 hover:text-[#b70011] transition-colors font-semibold"
          >
            Linkedo
          </a>
        </p>
      </div>
    </footer>
  )
}
