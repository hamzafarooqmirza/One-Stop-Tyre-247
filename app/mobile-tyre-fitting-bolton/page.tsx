export const metadata = {
  title: 'Mobile Tyre Fitting Bolton | 24/7 Emergency Service | One Stop Tyres 24/7',
}

export default function BoltonPage() {
  return (
    <div className="bg-[#fcf9f8] text-[#1c1b1b] font-body-md overflow-x-hidden">
      {/* TopAppBar */}
      <header className="bg-white dark:bg-slate-900 top-0 sticky z-50 border-b border-slate-200 dark:border-slate-800 shadow-md dark:shadow-none">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <div className="text-2xl font-black text-red-600 dark:text-red-500 tracking-tighter uppercase font-h1">
            One Stop Tyres 24/7
          </div>
          <nav className="hidden md:flex gap-8 items-center">
            <a className="font-h3 text-base font-semibold tracking-tight text-slate-700 dark:text-slate-300 hover:text-red-700 dark:hover:text-red-400 transition-colors duration-200" href="#">Home</a>
            <a className="font-h3 text-base font-semibold tracking-tight text-slate-700 dark:text-slate-300 hover:text-red-700 dark:hover:text-red-400 transition-colors duration-200" href="#">Services</a>
            <a className="font-h3 text-base font-semibold tracking-tight text-red-600 dark:text-red-500 border-b-2 border-red-600 pb-1" href="#">Coverage Area</a>
            <a className="font-h3 text-base font-semibold tracking-tight text-slate-700 dark:text-slate-300 hover:text-red-700 dark:hover:text-red-400 transition-colors duration-200" href="#">About Us</a>
            <a className="font-h3 text-base font-semibold tracking-tight text-slate-700 dark:text-slate-300 hover:text-red-700 dark:hover:text-red-400 transition-colors duration-200" href="#">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <a className="bg-[#dc2626] text-white px-6 py-2 rounded font-call-to-action text-sm flex items-center gap-2 hover:opacity-80 transition-all active:scale-95" href="tel:08001234567">
              <span className="material-symbols-outlined text-sm">phone_in_talk</span>
              CALL NOW
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[716px] flex items-center overflow-hidden bg-slate-900">
          <div className="absolute inset-0 z-0 opacity-40">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWRHcG5Yq1w-p0lx2dCmskXprqQ8BVFsQm9GWU1KDecKdfF7xNkFVpvBooVDgTM_tXZ9tWyD-H6EKn11-PQYJS9qi0AZWVw2cWLCnIG3IuHsJTkBZ74m4XD9Kgqvug2JP91HXI642wqA9p6K8NrR5684YNPTG94cdsn51Sld0OiXccRXLYihx35J91OPtwSeFSLTUQnxs4fSwJtOI46S5s6u2Q51C6rHnUp7-Ins3g1qA6vSjUHbzvWjmNf_meQIL-olV4ypY1wVo"
              alt="Professional roadside assistance scene at night in Bolton"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
          <div className="relative z-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 py-20">
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-[#dc2626]/20 text-[#fff6f5] border border-[#dc2626]/30 px-3 py-1 rounded-full mb-6 w-fit">
                <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>emergency_home</span>
                <span className="text-label-bold">20-30 MIN ARRIVAL IN BOLTON</span>
              </div>
              <h1 className="font-h1 text-h1 text-white mb-6 leading-tight">
                Emergency Mobile Tyre Fitting <span className="text-[#dc2626]">Bolton 24/7</span>
              </h1>
              <p className="font-body-lg text-body-lg text-slate-300 mb-10 max-w-lg">
                Stuck with a puncture near the Reebok or on the A666? Our expert technicians provide rapid roadside tyre replacement across Bolton, Farnworth, and Horwich.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#dc2626] text-white px-8 py-5 rounded-lg font-call-to-action flex items-center justify-center gap-3 shadow-lg hover:bg-[#b70011] transition-all">
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>call</span>
                  BOOK EMERGENCY REPAIR
                </button>
                <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-5 rounded-lg font-call-to-action flex items-center justify-center gap-3 hover:bg-white/20 transition-all">
                  VIEW SERVICES
                </button>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
                <h3 className="font-h3 text-h3 text-[#1c1b1b] mb-6">Rapid Response Quote</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-label-bold text-[#5c403c] mb-2">Tyre Size (e.g. 205/55/R16)</label>
                    <input className="w-full bg-[#f6f3f2] border border-[#e6bdb8] rounded-lg p-3 focus:outline-none focus:border-[#3e5e95] transition-colors" placeholder="Enter size" type="text" />
                  </div>
                  <div>
                    <label className="block text-label-bold text-[#5c403c] mb-2">Location in Bolton</label>
                    <input className="w-full bg-[#f6f3f2] border border-[#e6bdb8] rounded-lg p-3 focus:outline-none focus:border-[#3e5e95] transition-colors" placeholder="e.g. BL1 1AA" type="text" />
                  </div>
                  <button className="w-full bg-[#3e5e95] text-white py-4 rounded-lg font-call-to-action hover:opacity-90 transition-opacity">
                    GET INSTANT PRICE
                  </button>
                  <p className="text-center text-xs text-[#5c403c]">Average response time: 42 minutes today.</p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid Services */}
        <section className="py-xl max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-h2 text-h2 mb-4 text-[#1c1b1b]">Tyre Services We Provide in Bolton</h2>
            <p className="font-body-md text-[#5c403c] max-w-2xl mx-auto">From high-performance tyres for the motorway to budget options for local commuting, we carry all stock for immediate fitting.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Large Feature Card */}
            <div className="md:col-span-2 md:row-span-2 bg-white rounded-xl overflow-hidden shadow-md border border-slate-100 group">
              <div className="h-64 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5d2QnbwoTUMyhv9wQE9RBmwaSJskZjhBpyoeAl1AEWRAdf2pIdPqEZSXAldUQWYquyLTaZB0-aqgsw66hfBLK-S2pe7tJIdYxsdYfdn_KJ-Jg9dA1Cg2e3PU8Z775GpFuJ2-C8atuVLlaL83n7StePVoUJmw0MEtRNaJ-zHYUM4MADyAVsdbnNhDXO6ambD2WsR-4kFDuIkOfMhXQUJ1RxB_YaPJpy8ca_qY8anDwlR6nUN_adksFg-GXN7ZiOT_NNiCbfGF6AK4"
                  alt="Professional mechanic fitting a tyre"
                />
                <div className="absolute top-4 left-4 bg-[#dc2626] text-white px-3 py-1 rounded text-label-bold">POPULAR</div>
              </div>
              <div className="p-8">
                <h3 className="font-h3 text-h3 mb-4">Mobile Tyre Fitting</h3>
                <p className="font-body-md text-[#5c403c] mb-6">The most convenient way to replace your tyres. We come to your home, workplace, or the roadside anywhere in Bolton. No need to visit a garage and wait in line—we bring the workshop to you.</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <li className="flex items-center gap-2 text-[#1c1b1b]">
                    <span className="material-symbols-outlined text-[#dc2626]">check_circle</span>
                    All major brands stocked
                  </li>
                  <li className="flex items-center gap-2 text-[#1c1b1b]">
                    <span className="material-symbols-outlined text-[#dc2626]">check_circle</span>
                    Digital wheel balancing
                  </li>
                  <li className="flex items-center gap-2 text-[#1c1b1b]">
                    <span className="material-symbols-outlined text-[#dc2626]">check_circle</span>
                    New valves included
                  </li>
                  <li className="flex items-center gap-2 text-[#1c1b1b]">
                    <span className="material-symbols-outlined text-[#dc2626]">check_circle</span>
                    Old tyre disposal
                  </li>
                </ul>
                <button className="text-[#3e5e95] font-call-to-action flex items-center gap-2 hover:gap-4 transition-all">
                  LEARN MORE <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
            {/* Puncture Card */}
            <div className="bg-[#a2c1ff] rounded-xl p-8 flex flex-col justify-between group">
              <div>
                <span className="material-symbols-outlined text-[#3e5e95] text-5xl mb-6 block">build</span>
                <h3 className="font-h3 text-h3 text-[#2d4e85] mb-4">Puncture Repair</h3>
                <p className="font-body-md text-[#2d4e85] opacity-80">BS AU 159 standard repairs carried out at your location. If it&apos;s safe to fix, we&apos;ll save you the cost of a new tyre.</p>
              </div>
              <div className="mt-8">
                <span className="text-label-bold text-[#3e5e95]">FROM £45.00</span>
              </div>
            </div>
            {/* Jump Starts Card */}
            <div className="bg-[#ebe7e7] rounded-xl p-8 flex flex-col justify-between group">
              <div>
                <span className="material-symbols-outlined text-[#5c403c] text-5xl mb-6 block">bolt</span>
                <h3 className="font-h3 text-h3 text-[#1c1b1b] mb-4">Jump Starts</h3>
                <p className="font-body-md text-[#5c403c]">Flat battery in the Bolton cold? We provide professional jump-start services and battery testing for all vehicle types.</p>
              </div>
              <div className="mt-8">
                <span className="text-label-bold text-[#5c403c]">30 MIN RESPONSE</span>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="bg-white py-xl border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                className="rounded-2xl shadow-xl"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVrPZpsRrvVIy8OMnWu6bdNtm1zrmT1z3BmFFvgG3XDFgGAcHSHg2nTF2L0jBgiDxKgJhML6FQe-NhO_69cBTU1I_mQpOE3VgwK5JdxzLfJlCqvcC8-oZJm3TLe9XOPkyXpeSXUBz_kIyqlkgU9udXjzLJ0YudBfPvQf-IbGRKiiSiCBKwvAzyRC73a709IuwFWbfsCRhB8evWPpOv5e3AAzvBjLPjwChrWUuhDCwI3rVXE-J0vsviyl2U4KTSrVFwewj0g8K8d2A"
                alt="Clean, organized mobile tyre fitting van interior"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-h2 text-h2 mb-6">Why Bolton Drivers Choose Us?</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-[#ffdad6] w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[#410002]">speed</span>
                  </div>
                  <div>
                    <h4 className="font-h3 text-h3 text-lg mb-2">Fastest Response in BL1-BL9</h4>
                    <p className="text-[#5c403c]">Strategically based to reach Bolton town centre, Great Lever, and Smithills within 40 minutes.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-[#c8e6ff] w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[#001e2e]">payments</span>
                  </div>
                  <div>
                    <h4 className="font-h3 text-h3 text-lg mb-2">No Hidden Call-out Fees</h4>
                    <p className="text-[#5c403c]">Transparent pricing given upfront. The price we quote over the phone is the price you pay on-site.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-[#d7e2ff] w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[#001b3f]">verified_user</span>
                  </div>
                  <div>
                    <h4 className="font-h3 text-h3 text-lg mb-2">Fully Certified Technicians</h4>
                    <p className="text-[#5c403c]">All our fitters are IMI certified and insured to work on everything from family hatchbacks to prestige electric vehicles.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Area Coverage Section */}
        <section className="py-xl bg-[#f6f3f2] overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
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

        {/* CTA Section */}
        <section className="py-xl">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-slate-900 rounded-[2rem] p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#dc2626]/10 blur-[100px] rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#3e5e95]/10 blur-[100px] rounded-full"></div>
              <h2 className="font-h1 text-white mb-6 relative z-10">Stuck with a flat in Bolton?</h2>
              <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto relative z-10">Don&apos;t wait for hours on a recovery truck. Call our direct Bolton emergency line and we&apos;ll dispatch the nearest fitter immediately.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                <a className="bg-[#dc2626] text-white px-10 py-6 rounded-xl font-call-to-action text-2xl flex items-center justify-center gap-4 hover:scale-105 transition-transform" href="tel:08001234567">
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>phone_in_talk</span>
                  0800 123 4567
                </a>
                <div className="flex flex-col justify-center text-left">
                  <p className="text-white font-label-bold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    Technicians Available Now
                  </p>
                  <p className="text-slate-500 text-sm">Typical arrival time: 42 mins</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full px-8 py-12 max-w-7xl mx-auto">
          <div className="col-span-1 md:col-span-1">
            <div className="text-lg font-bold text-slate-900 dark:text-white mb-6 font-h1">One Stop Tyres 24/7</div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">Premium emergency tyre fitting across Bolton and Greater Manchester. Professional service when you need it most.</p>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-slate-400">verified</span>
              <span className="material-symbols-outlined text-slate-400">security</span>
              <span className="material-symbols-outlined text-slate-400">credit_card</span>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <li><a className="hover:text-red-600 dark:hover:text-red-400 hover:underline transition-all" href="#">Emergency Call-out</a></li>
              <li><a className="hover:text-red-600 dark:hover:text-red-400 hover:underline transition-all" href="#">Mobile Tyre Fitting</a></li>
              <li><a className="hover:text-red-600 dark:hover:text-red-400 hover:underline transition-all" href="#">Puncture Repair</a></li>
              <li><a className="hover:text-red-600 dark:hover:text-red-400 hover:underline transition-all" href="#">Jump Starts</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <li><a className="hover:text-red-600 dark:hover:text-red-400 hover:underline transition-all" href="#">About Us</a></li>
              <li><a className="hover:text-red-600 dark:hover:text-red-400 hover:underline transition-all" href="#">Coverage Area</a></li>
              <li><a className="hover:text-red-600 dark:hover:text-red-400 hover:underline transition-all" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-red-600 dark:hover:text-red-400 hover:underline transition-all" href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Contact Bolton</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Deane Road, Bolton</p>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Greater Manchester, BL3</p>
            <a className="text-red-600 font-bold block mb-2" href="tel:08001234567">0800 123 4567</a>
            <a className="text-slate-600 dark:text-slate-400 text-sm hover:underline" href="mailto:info@onestoptyres.co.uk">info@onestoptyres.co.uk</a>
          </div>
        </div>
        <div className="border-t border-slate-200 dark:border-slate-800 py-6 px-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-600 dark:text-slate-400">© 2024 One Stop Tyres 24/7. High-Urgency Emergency Roadside Assistance UK. All Rights Reserved.</p>
          <div className="flex gap-6">
            <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-red-600">thumb_up</span>
            <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-red-600">share</span>
          </div>
        </div>
      </footer>

      {/* Urgent FAB */}
      <a className="fixed bottom-6 right-6 w-16 h-16 bg-[#dc2626] text-white rounded-full shadow-2xl flex items-center justify-center z-50 md:hidden hover:scale-110 active:scale-95 transition-all" href="tel:08001234567">
        <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>phone_in_talk</span>
      </a>
    </div>
  )
}
