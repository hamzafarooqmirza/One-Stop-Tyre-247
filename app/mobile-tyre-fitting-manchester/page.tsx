export const metadata = {
  title: 'Mobile Tyre Fitting in Manchester | One Stop Tyres 24/7',
}

export default function ManchesterPage() {
  return (
    <div className="bg-[#fcf9f8] text-[#1c1b1b] font-body-md">
      {/* TopAppBar */}
      <header className="bg-white dark:bg-slate-900 top-0 sticky z-50 border-b border-slate-200 dark:border-slate-800 shadow-md dark:shadow-none">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <div className="text-2xl font-black text-red-600 dark:text-red-500 tracking-tighter uppercase font-h1">One Stop Tyres 24/7</div>
          <nav className="hidden md:flex items-center space-x-8 font-h3 text-base font-semibold tracking-tight">
            <a className="text-slate-700 dark:text-slate-300 hover:text-red-700 dark:hover:text-red-400 transition-colors duration-200" href="#">Home</a>
            <a className="text-slate-700 dark:text-slate-300 hover:text-red-700 dark:hover:text-red-400 transition-colors duration-200" href="#">Services</a>
            <a className="text-red-600 dark:text-red-500 border-b-2 border-red-600 pb-1" href="#">Coverage Area</a>
            <a className="text-slate-700 dark:text-slate-300 hover:text-red-700 dark:hover:text-red-400 transition-colors duration-200" href="#">About Us</a>
            <a className="text-slate-700 dark:text-slate-300 hover:text-red-700 dark:hover:text-red-400 transition-colors duration-200" href="#">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <a className="hidden lg:flex items-center gap-2 bg-[#dc2626] text-white px-6 py-2 rounded font-call-to-action uppercase" href="tel:0800000000">
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>phone_in_talk</span>
              CALL NOW
            </a>
            <button className="md:hidden text-[#1c1b1b]">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[716px] flex items-center overflow-hidden bg-slate-900 text-white">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover opacity-40"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuACli4zgmYq4HZebl6RB3BqPRVXNBBdShjzy9eFQguMHxUDWa4vGMLgGdjtzXM_mrlnoiq26fIqd2Gu0hAOtUptDpShWDgjleGN8YggUUyXy9D4nu9OX2Qicxgq-E9qrCZjaWYqsr5e12IBQCQtrxx-7XfaXXVae6kGAhNSulbnUEpX-Rwe9L5OVWHhaqIIGihsLMtEnEIwcm8MHFDncannDAduZLdBA66QAvaf5pHWnWPBiOKB2DNsHumc3TNn9SHYayiA5-rE3UE"
              alt="Professional roadside assistance technician changing tyre on a Manchester road"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-xl grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-md">
              <div className="inline-flex items-center gap-2 bg-[#dc2626] text-white px-4 py-1 rounded-full text-label-bold animate-pulse">
                <span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>emergency</span>
                24/7 MANCHESTER EMERGENCY RESPONSE
              </div>
              <h1 className="font-h1 text-h1 text-white leading-none">Mobile Tyre Fitting in Manchester</h1>
              <p className="font-body-lg text-body-lg text-slate-300 max-w-lg">Fast and reliable mobile tyre fitting service available 24/7 in Manchester and surrounding areas. We come to you, wherever you are.</p>
              <div className="flex flex-col sm:flex-row gap-4 pt-sm">
                <a className="flex items-center justify-center gap-3 bg-[#dc2626] hover:bg-[#b70011] text-white px-8 py-5 rounded-lg font-call-to-action transition-all transform active:scale-95 shadow-xl" href="tel:0800000000">
                  <span className="material-symbols-outlined">phone_in_talk</span>
                  Call Now
                </a>
                <a className="flex items-center justify-center gap-3 bg-white hover:bg-slate-100 text-slate-900 px-8 py-5 rounded-lg font-call-to-action transition-all transform active:scale-95 shadow-xl" href="#">
                  <span className="material-symbols-outlined text-[#25D366]" style={{fontVariationSettings: "'FILL' 1"}}>chat</span>
                  WhatsApp Us
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-md p-lg rounded-xl border border-white/20 shadow-2xl">
                <div className="flex items-center gap-4 mb-md">
                  <div className="w-12 h-12 bg-[#dc2626] rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-white">schedule</span>
                  </div>
                  <div>
                    <div className="text-label-bold text-white/70">Estimated Arrival</div>
                    <div className="text-h3 font-h3 text-white">20-30 Minutes</div>
                  </div>
                </div>
                <div className="space-y-sm">
                  <div className="flex items-center gap-3 text-white/90">
                    <span className="material-symbols-outlined text-[#87ceff]">check_circle</span>
                    <span>No hidden call-out fees</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <span className="material-symbols-outlined text-[#87ceff]">check_circle</span>
                    <span>All tyre brands &amp; sizes in stock</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <span className="material-symbols-outlined text-[#87ceff]">check_circle</span>
                    <span>Professional UK-wide network</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-xl px-6 bg-[#fcf9f8]">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-xl items-center">
            <div className="space-y-md">
              <h2 className="font-h2 text-h2 text-[#1c1b1b]">Mobile Tyre Fitting Services in Manchester</h2>
              <p className="font-body-md text-body-md text-[#5c403c] leading-relaxed">
                One Stop Tyres 24/7 provides comprehensive mobile tyre fitting throughout Manchester. Whether you&apos;re stuck on the M60, stranded at Manchester Airport, or at home in Didsbury, our local technicians are strategically positioned to provide quick emergency response. We understand the urgency of tyre mishaps, which is why we&apos;ve optimized our Manchester dispatch for maximum efficiency.
              </p>
              <div className="flex flex-wrap gap-xs">
                <span className="bg-[#c8e6ff]/30 text-[#004c6d] px-4 py-1 rounded text-label-bold">Salford</span>
                <span className="bg-[#c8e6ff]/30 text-[#004c6d] px-4 py-1 rounded text-label-bold">Trafford</span>
                <span className="bg-[#c8e6ff]/30 text-[#004c6d] px-4 py-1 rounded text-label-bold">Oldham</span>
                <span className="bg-[#c8e6ff]/30 text-[#004c6d] px-4 py-1 rounded text-label-bold">Stockport</span>
                <span className="bg-[#c8e6ff]/30 text-[#004c6d] px-4 py-1 rounded text-label-bold">Bury</span>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl aspect-video bg-[#ebe7e7] relative">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuADDzUwoq4A7m7ussR8CuJkSuw6-6uHsKPQWHDXtmuQZVKivLzhepaz79HlVA-0CWHYxRyADPZYCFQG8TveWDdJYQ5xSliwR8ariNuMe6JkaQMb5xih7ySPTcJpZ7CIxNKC6J2c9g0MiD7WoOoQtgP_38TuFsYqjyO6EqxBwTrtu6TwsHc_EXWt4ELcZH5S5C3TSCwV83XlBfrwN0Wc91frXYKaC9h_mtdpkdnVuqGcbvtkb6DTY9LWjEldLPdJmUDjW5a0PxIvLcM"
                alt="Digital map highlighting Greater Manchester area"
              />
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-xl px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-xl">
              <h2 className="font-h2 text-h2 mb-sm">Our Mobile Tyre Services</h2>
              <div className="w-20 h-1 bg-[#b70011] mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-[#fcf9f8] p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-[#b70011] text-4xl mb-4 block" style={{fontVariationSettings: "'FILL' 1"}}>tire_repair</span>
                <h3 className="font-h3 text-h3 mb-3">Mobile Tyre Fitting</h3>
                <p className="text-[#5c403c]">Professional fitting at your doorstep or workplace using the latest equipment.</p>
              </div>
              <div className="bg-[#fcf9f8] p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-[#b70011] text-4xl mb-4 block" style={{fontVariationSettings: "'FILL' 1"}}>build</span>
                <h3 className="font-h3 text-h3 mb-3">Emergency Replacement</h3>
                <p className="text-[#5c403c]">Blew a tyre? We carry a vast stock of new tyres for immediate roadside replacement.</p>
              </div>
              <div className="bg-[#fcf9f8] p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-[#b70011] text-4xl mb-4 block" style={{fontVariationSettings: "'FILL' 1"}}>leak_add</span>
                <h3 className="font-h3 text-h3 mb-3">Puncture Repair</h3>
                <p className="text-[#5c403c]">Whenever possible, we repair punctures to save you the cost of a new tyre.</p>
              </div>
              <div className="bg-[#fcf9f8] p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-[#b70011] text-4xl mb-4 block" style={{fontVariationSettings: "'FILL' 1"}}>bolt</span>
                <h3 className="font-h3 text-h3 mb-3">Jump Starts</h3>
                <p className="text-[#5c403c]">Dead battery? Our mobile units are equipped to get your engine running again fast.</p>
              </div>
              <div className="bg-[#fcf9f8] p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-[#b70011] text-4xl mb-4 block" style={{fontVariationSettings: "'FILL' 1"}}>settings_input_component</span>
                <h3 className="font-h3 text-h3 mb-3">TPMS Services</h3>
                <p className="text-[#5c403c]">Diagnostic and repair for Tyre Pressure Monitoring Systems on all modern vehicles.</p>
              </div>
              <div className="bg-[#fcf9f8] p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-[#b70011] text-4xl mb-4 block" style={{fontVariationSettings: "'FILL' 1"}}>lock_open</span>
                <h3 className="font-h3 text-h3 mb-3">Locking Nut Removal</h3>
                <p className="text-[#5c403c]">Lost your key? We use specialist tools to remove locking wheel nuts without damage.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-xl px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-h2 text-h2 text-center mb-xl">How it Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5 bg-slate-200 -z-0"></div>
              <div className="relative z-10 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-white border-4 border-[#b70011] rounded-full flex items-center justify-center font-h3 text-h3 text-[#b70011] mb-4">1</div>
                <h4 className="font-h3 text-h3 text-sm mb-2">Call Us</h4>
                <p className="text-[#5c403c] text-sm">Tell us your location and tyre size.</p>
              </div>
              <div className="relative z-10 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-white border-4 border-[#b70011] rounded-full flex items-center justify-center font-h3 text-h3 text-[#b70011] mb-4">2</div>
                <h4 className="font-h3 text-h3 text-sm mb-2">Get Quote</h4>
                <p className="text-[#5c403c] text-sm">We provide an instant, all-inclusive price.</p>
              </div>
              <div className="relative z-10 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-white border-4 border-[#b70011] rounded-full flex items-center justify-center font-h3 text-h3 text-[#b70011] mb-4">3</div>
                <h4 className="font-h3 text-h3 text-sm mb-2">Technician Dispatched</h4>
                <p className="text-[#5c403c] text-sm">A local Manchester specialist arrives within 1 hour.</p>
              </div>
              <div className="relative z-10 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-white border-4 border-[#b70011] rounded-full flex items-center justify-center font-h3 text-h3 text-[#b70011] mb-4">4</div>
                <h4 className="font-h3 text-h3 text-sm mb-2">Back on Road</h4>
                <p className="text-[#5c403c] text-sm">Job completed safely so you can continue your journey.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us - Bento Grid Style */}
        <section className="py-xl px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-h2 text-h2 mb-xl">Why Choose One Stop Tyres 24/7 in Manchester</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 bg-[#3e5e95] text-white p-lg rounded-2xl flex flex-col justify-between">
                <div>
                  <h3 className="font-h3 text-h3 mb-4">Deep Local Knowledge</h3>
                  <p className="font-body-lg">Our Manchester-based teams know every shortcut and bypass across the Greater Manchester area, ensuring we beat traffic to reach you faster than any national chain.</p>
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <span className="material-symbols-outlined text-4xl">location_city</span>
                  <span className="font-label-bold uppercase">Trusted by 10,000+ local drivers</span>
                </div>
              </div>
              <div className="bg-[#dc2626] text-white p-lg rounded-2xl">
                <h3 className="font-h3 text-h3 mb-4">24/7 Availability</h3>
                <p>Day or night, rain or shine. We never close because emergencies don&apos;t have business hours.</p>
                <div className="text-6xl font-black opacity-20 mt-8">24H</div>
              </div>
              <div className="bg-slate-100 p-lg rounded-2xl">
                <h3 className="font-h3 text-h3 mb-4 text-[#1c1b1b]">Premium Equipment</h3>
                <p className="text-[#5c403c]">We use dealership-grade balancing and fitting machines mounted in our mobile vans for a perfect finish.</p>
              </div>
              <div className="md:col-span-2 bg-[#005f88] text-white p-lg rounded-2xl flex items-center gap-lg">
                <div className="flex-1">
                  <h3 className="font-h3 text-h3 mb-4">Rapid Response Fleet</h3>
                  <p>Our fleet is distributed across Manchester and Salford, allowing for sub-60 minute arrival times even during peak commute hours.</p>
                </div>
                <span className="material-symbols-outlined text-7xl opacity-20 hidden sm:block">shutter_speed</span>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Section */}
        <section className="py-xl px-6 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[300px]" style={{fontVariationSettings: "'FILL' 1"}}>warning</span>
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-2xl">
              <h2 className="font-h2 text-h2 mb-md text-red-500">Emergency Tyre Assistance in Manchester</h2>
              <p className="font-body-lg text-body-lg mb-lg text-slate-300">
                Manchester&apos;s busy motorways like the M60, M62, and M56 are hotspots for tyre emergencies. Being stranded on a fast road is dangerous. Our emergency units are priority-dispatched for motorway breakdowns, equipped with high-intensity lighting and safety barriers to ensure your roadside repair is handled with the highest safety standards.
              </p>
              <a className="inline-flex items-center gap-4 bg-[#dc2626] text-white px-10 py-6 rounded-lg font-call-to-action shadow-2xl hover:scale-105 transition-transform" href="tel:0800000000">
                <span className="material-symbols-outlined">call</span>
                PRIORITY EMERGENCY CALL
              </a>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-xl px-6 bg-[#fcf9f8]">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-h2 text-h2 text-center mb-xl">Benefits of Our Mobile Tyre Fitting in Manchester</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-[#b70011]">euro_symbol</span>
                </div>
                <h4 className="font-label-bold text-lg mb-2">Cost Effective</h4>
                <p className="text-sm text-[#5c403c]">Save on towing fees and travel costs. We bring the garage to you.</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-[#b70011]">update</span>
                </div>
                <h4 className="font-label-bold text-lg mb-2">Time Saving</h4>
                <p className="text-sm text-[#5c403c]">Don&apos;t waste half a day at a tyre center. We work while you&apos;re at home or work.</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-[#b70011]">verified_user</span>
                </div>
                <h4 className="font-label-bold text-lg mb-2">Safety First</h4>
                <p className="text-sm text-[#5c403c]">Don&apos;t risk driving on a damaged tyre. We&apos;ll come and fix it safely on-site.</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-[#b70011]">local_parking</span>
                </div>
                <h4 className="font-label-bold text-lg mb-2">Stress Free</h4>
                <p className="text-sm text-[#5c403c]">Simple booking, transparent pricing, and professional service across M-postcodes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-xl px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-h2 text-h2 text-center mb-xl">Frequently Asked Questions</h2>
            <div className="space-y-sm">
              <details className="group bg-[#fcf9f8] rounded-xl p-6 border border-slate-100 open:shadow-md transition-all">
                <summary className="list-none flex justify-between items-center cursor-pointer font-h3 text-h3 text-lg">
                  Do you cover all areas of Greater Manchester?
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <p className="mt-4 text-[#5c403c] leading-relaxed">Yes, we cover the entire Greater Manchester region including Salford, Trafford, Oldham, Stockport, Bury, Bolton, Rochdale, and Tameside, as well as the city center and Manchester Airport.</p>
              </details>
              <details className="group bg-[#fcf9f8] rounded-xl p-6 border border-slate-100 open:shadow-md transition-all">
                <summary className="list-none flex justify-between items-center cursor-pointer font-h3 text-h3 text-lg">
                  How fast can you reach me in an emergency?
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <p className="mt-4 text-[#5c403c] leading-relaxed">Our average arrival time in Manchester is 30 to 60 minutes, depending on your exact location and current traffic conditions on major routes like the M60.</p>
              </details>
              <details className="group bg-[#fcf9f8] rounded-xl p-6 border border-slate-100 open:shadow-md transition-all">
                <summary className="list-none flex justify-between items-center cursor-pointer font-h3 text-h3 text-lg">
                  What tyre brands do you stock?
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <p className="mt-4 text-[#5c403c] leading-relaxed">We carry a comprehensive range of premium brands (Michelin, Continental, Pirelli), mid-range (Hankook, Kumho), and high-quality budget options to suit all vehicles and budgets.</p>
              </details>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-xl px-6 bg-[#f0edec] relative">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h2 className="font-h2 text-h2 mb-md">Need Mobile Tyre Fitting in Manchester?</h2>
            <p className="font-body-lg text-body-lg mb-xl max-w-2xl mx-auto">Our local technicians are ready to assist you right now. Get back on the road safely with Manchester&apos;s leading mobile tyre specialists.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a className="flex items-center justify-center gap-3 bg-[#dc2626] hover:bg-[#b70011] text-white px-12 py-6 rounded-full font-call-to-action transition-all transform hover:scale-105 shadow-xl" href="tel:0800000000">
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>phone_in_talk</span>
                Call Now
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Urgent FAB for Mobile */}
      <a className="fixed bottom-6 right-6 w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center shadow-2xl z-[100] md:hidden" href="tel:0800000000">
        <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>phone_in_talk</span>
      </a>

      {/* Footer */}
      <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full px-8 py-12 max-w-7xl mx-auto">
          <div className="space-y-4">
            <div className="text-lg font-bold text-slate-900 dark:text-white">One Stop Tyres 24/7</div>
            <p className="text-sm text-slate-600 dark:text-slate-400">High-Urgency Emergency Roadside Assistance UK. Your local Manchester tyre fitting experts.</p>
          </div>
          <div>
            <h4 className="font-label-bold text-slate-900 dark:text-white mb-4 uppercase">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a className="text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 hover:underline transition-colors" href="#">Emergency Call-out</a></li>
              <li><a className="text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 hover:underline transition-colors" href="#">Mobile Tyre Fitting</a></li>
              <li><a className="text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 hover:underline transition-colors" href="#">Puncture Repair</a></li>
              <li><a className="text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 hover:underline transition-colors" href="#">Jump Starts</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-bold text-slate-900 dark:text-white mb-4 uppercase">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs">phone</span> 0800 000 000</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs">mail</span> help@onestoptyres.co.uk</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs">location_on</span> Manchester Service Hub</li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-bold text-slate-900 dark:text-white mb-4 uppercase">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a className="text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 hover:underline transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 hover:underline transition-colors" href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 dark:border-slate-800 py-6 text-center">
          <p className="text-sm text-slate-600 dark:text-slate-400">© 2024 One Stop Tyres 24/7. High-Urgency Emergency Roadside Assistance UK. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}
