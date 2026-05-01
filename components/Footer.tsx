export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        {/* Brand */}
        <div className="space-y-8">
          <a href="#" aria-label="One Stop Mobile Tyres 24/7 - Home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One-Stop%20Loog-airanko-Qpv1QvladNLpRhg8X3Hs6SzyydzFMq.webp"
              alt="One Stop Mobile Tyres 24/7"
              className="h-20 w-auto"
            />
          </a>
          <p className="text-slate-400 text-sm leading-relaxed">
            The premier 24/7 emergency roadside assistance partner across Greater Manchester.
            Rapid response, professional service, and transparent pricing.
          </p>
          <div className="flex gap-4">
            <span className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-[#b70011] transition-all cursor-pointer">
              <span className="material-symbols-outlined text-lg">public</span>
            </span>
            <span className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-[#b70011] transition-all cursor-pointer">
              <span className="material-symbols-outlined text-lg">share</span>
            </span>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold mb-8 text-lg uppercase tracking-wider text-slate-200">
            Our Services
          </h4>
          <ul className="space-y-4 text-slate-400 text-sm font-medium">
            {['Emergency Call-out', 'Mobile Tyre Fitting', 'Puncture Repair', 'Locking Nut Removal'].map(
              (item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#b70011] transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#b70011] rounded-full" />
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Service Areas */}
        <div>
          <h4 className="font-bold mb-8 text-lg uppercase tracking-wider text-slate-200">
            Service Areas
          </h4>
          <ul className="space-y-4 text-slate-400 text-sm font-medium">
            {['Manchester City', 'Oldham & Rochdale', 'Bolton & Bury', 'Stockport & Trafford'].map(
              (area) => (
                <li key={area}>
                  <a href="#" className="hover:text-[#b70011] transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-slate-600 rounded-full" />
                    {area}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold mb-8 text-lg uppercase tracking-wider text-slate-200">
            Direct Contact
          </h4>
          <ul className="space-y-6 text-slate-400 text-sm font-medium">
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined text-[#b70011] bg-[#b70011]/10 p-2 rounded-lg">
                call
              </span>
              <div>
                <span className="block text-xs uppercase text-slate-500 mb-1">Phone 24/7</span>
                <a href="tel:07759708646" className="text-white text-lg font-bold">
                  07759 708 646
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined text-[#b70011] bg-[#b70011]/10 p-2 rounded-lg">
                mail
              </span>
              <div>
                <span className="block text-xs uppercase text-slate-500 mb-1">Email Us</span>
                <a href="mailto:info@onestoptyres247.co.uk" className="text-white">
                  info@onestoptyres247.co.uk
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 text-xs text-center md:text-left">
          © 2024 One Stop Tyres 24/7. High-Urgency Emergency Roadside Assistance UK. All Rights
          Reserved.
        </p>
        <div className="flex gap-6 text-[10px] text-slate-600 uppercase font-bold tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>
    </footer>
  )
}
