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
              <h1 className="font-h1 text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6">Mobile Tyre Fitting in Manchester</h1>
              <p className="font-body-lg text-base sm:text-lg text-slate-300 max-w-lg leading-relaxed mb-6">Fast and reliable mobile tyre fitting service available 24/7 in Manchester and surrounding areas. We come to you, wherever you are.</p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <a className="flex items-center justify-center gap-3 bg-[#dc2626] hover:bg-[#b70011] text-white px-8 py-4 rounded-lg font-call-to-action transition-all transform active:scale-95 shadow-xl" href="tel:07759708646">
                  <span className="material-symbols-outlined">phone_in_talk</span>
                  Call Now
                </a>
                <a className="flex items-center justify-center gap-3 bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-lg font-call-to-action transition-all transform active:scale-95 shadow-xl" href="https://wa.me/447759708646">
                  <span className="material-symbols-outlined text-[#25D366]" style={{fontVariationSettings: "'FILL' 1"}}>chat</span>
                  WhatsApp Us
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-md p-lg rounded-xl border border-white/20 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#dc2626] rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-white">schedule</span>
                  </div>
                  <div>
                    <div className="text-label-bold text-white/70">Estimated Arrival</div>
                    <div className="text-h3 font-h3 text-white">20-30 Minutes</div>
                  </div>
                </div>
                <div className="space-y-3">
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
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#fcf9f8]">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="flex flex-col gap-0">
              <h2 className="font-h2 text-h2 text-[#1c1b1b] mb-4">Mobile Tyre Fitting Services in Manchester</h2>
              <p className="font-body-md text-body-md text-[#5c403c] leading-relaxed mb-6">
                One Stop Tyres 24/7 provides comprehensive mobile tyre fitting throughout Manchester. Whether you&apos;re stuck on the M60, stranded at Manchester Airport, or at home in Didsbury, our local technicians are strategically positioned to provide quick emergency response. We understand the urgency of tyre mishaps, which is why we&apos;ve optimized our Manchester dispatch for maximum efficiency.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
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
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-h2 text-h2 mb-4">Our Mobile Tyre Services</h2>
              <div className="w-20 h-1 bg-[#b70011] mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-[#fcf9f8] p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-[#b70011] text-4xl mb-4 block" style={{fontVariationSettings: "'FILL' 1"}}>tire_repair</span>
                <h3 className="font-h3 text-h3 mb-3">Mobile Tyre Fitting</h3>
                <p className="text-[#5c403c] leading-relaxed">Professional fitting at your doorstep or workplace using the latest equipment.</p>
              </div>
              <div className="bg-[#fcf9f8] p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-[#b70011] text-4xl mb-4 block" style={{fontVariationSettings: "'FILL' 1"}}>build</span>
                <h3 className="font-h3 text-h3 mb-3">Emergency Replacement</h3>
                <p className="text-[#5c403c] leading-relaxed">Blew a tyre? We carry a vast stock of new tyres for immediate roadside replacement.</p>
              </div>
              <div className="bg-[#fcf9f8] p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-[#b70011] text-4xl mb-4 block" style={{fontVariationSettings: "'FILL' 1"}}>leak_add</span>
                <h3 className="font-h3 text-h3 mb-3">Puncture Repair</h3>
                <p className="text-[#5c403c] leading-relaxed">Whenever possible, we repair punctures to save you the cost of a new tyre.</p>
              </div>
              <div className="bg-[#fcf9f8] p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-[#b70011] text-4xl mb-4 block" style={{fontVariationSettings: "'FILL' 1"}}>bolt</span>
                <h3 className="font-h3 text-h3 mb-3">Jump Starts</h3>
                <p className="text-[#5c403c] leading-relaxed">Dead battery? Our mobile units are equipped to get your engine running again fast.</p>
              </div>
              <div className="bg-[#fcf9f8] p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-[#b70011] text-4xl mb-4 block" style={{fontVariationSettings: "'FILL' 1"}}>settings_input_component</span>
                <h3 className="font-h3 text-h3 mb-3">TPMS Services</h3>
                <p className="text-[#5c403c] leading-relaxed">Diagnostic and repair for Tyre Pressure Monitoring Systems on all modern vehicles.</p>
              </div>
              <div className="bg-[#fcf9f8] p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-[#b70011] text-4xl mb-4 block" style={{fontVariationSettings: "'FILL' 1"}}>lock_open</span>
                <h3 className="font-h3 text-h3 mb-3">Locking Nut Removal</h3>
                <p className="text-[#5c403c] leading-relaxed">Lost your key? We use specialist tools to remove locking wheel nuts without damage.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-h2 text-2xl sm:text-[32px] text-center mb-12">How it Works</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 relative">
              <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5 bg-slate-200 -z-0"></div>
              <div className="relative z-10 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-white border-4 border-[#b70011] rounded-full flex items-center justify-center font-h3 text-h3 text-[#b70011] mb-4">1</div>
                <h4 className="font-h3 text-h3 text-sm mb-3">Call Us</h4>
                <p className="text-[#5c403c] text-sm leading-relaxed">Tell us your location and tyre size.</p>
              </div>
              <div className="relative z-10 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-white border-4 border-[#b70011] rounded-full flex items-center justify-center font-h3 text-h3 text-[#b70011] mb-4">2</div>
                <h4 className="font-h3 text-h3 text-sm mb-3">Get Quote</h4>
                <p className="text-[#5c403c] text-sm leading-relaxed">We provide an instant, all-inclusive price.</p>
              </div>
              <div className="relative z-10 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-white border-4 border-[#b70011] rounded-full flex items-center justify-center font-h3 text-h3 text-[#b70011] mb-4">3</div>
                <h4 className="font-h3 text-h3 text-sm mb-3">Technician Dispatched</h4>
                <p className="text-[#5c403c] text-sm leading-relaxed">A local Manchester specialist arrives within 1 hour.</p>
              </div>
              <div className="relative z-10 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-white border-4 border-[#b70011] rounded-full flex items-center justify-center font-h3 text-h3 text-[#b70011] mb-4">4</div>
                <h4 className="font-h3 text-h3 text-sm mb-3">Back on Road</h4>
                <p className="text-[#5c403c] text-sm leading-relaxed">Job completed safely so you can continue your journey.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us - Bento Grid Style */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-h2 text-2xl sm:text-[32px] mb-10">Why Choose One Stop Tyres 24/7 in Manchester</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 bg-[#3e5e95] text-white p-8 rounded-2xl flex flex-col justify-between">
                <div>
                  <h3 className="font-h3 text-h3 mb-4">Deep Local Knowledge</h3>
                  <p className="font-body-lg leading-relaxed">Our Manchester-based teams know every shortcut and bypass across the Greater Manchester area, ensuring we beat traffic to reach you faster than any national chain.</p>
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <span className="material-symbols-outlined text-4xl">location_city</span>
                  <span className="font-label-bold uppercase">Trusted by 10,000+ local drivers</span>
                </div>
              </div>
              <div className="bg-[#dc2626] text-white p-8 rounded-2xl">
                <h3 className="font-h3 text-h3 mb-4">24/7 Availability</h3>
                <p className="leading-relaxed">Day or night, rain or shine. We never close because emergencies don&apos;t have business hours.</p>
                <div className="text-6xl font-black opacity-20 mt-8">24H</div>
              </div>
              <div className="bg-slate-100 p-8 rounded-2xl">
                <h3 className="font-h3 text-h3 mb-4 text-[#1c1b1b]">Premium Equipment</h3>
                <p className="text-[#5c403c] leading-relaxed">We use dealership-grade balancing and fitting machines mounted in our mobile vans for a perfect finish.</p>
              </div>
              <div className="md:col-span-2 bg-[#005f88] text-white p-8 rounded-2xl flex items-center gap-8">
                <div className="flex-1">
                  <h3 className="font-h3 text-h3 mb-4">Rapid Response Fleet</h3>
                  <p className="leading-relaxed">Our fleet is distributed across Manchester and Salford, allowing for sub-60 minute arrival times even during peak commute hours.</p>
                </div>
                <span className="material-symbols-outlined text-7xl opacity-20 hidden sm:block">shutter_speed</span>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[300px]" style={{fontVariationSettings: "'FILL' 1"}}>warning</span>
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-2xl">
              <h2 className="font-h2 text-h2 mb-5 text-red-500">Emergency Tyre Assistance in Manchester</h2>
              <p className="font-body-lg text-body-lg mb-8 text-slate-300 leading-relaxed">
                Manchester&apos;s busy motorways like the M60, M62, and M56 are hotspots for tyre emergencies. Being stranded on a fast road is dangerous. Our emergency units are priority-dispatched for motorway breakdowns, equipped with high-intensity lighting and safety barriers to ensure your roadside repair is handled with the highest safety standards.
              </p>
              <a className="inline-flex items-center gap-4 bg-[#dc2626] text-white px-10 py-5 rounded-lg font-call-to-action shadow-2xl hover:scale-105 transition-transform mt-6" href="tel:07759708646">
                <span className="material-symbols-outlined">call</span>
                PRIORITY EMERGENCY CALL
              </a>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#fcf9f8]">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-h2 text-2xl sm:text-[32px] text-center mb-12">Benefits of Our Mobile Tyre Fitting in Manchester</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-[#b70011]">euro_symbol</span>
                </div>
                <h4 className="font-label-bold text-lg mb-3">Cost Effective</h4>
                <p className="text-sm text-[#5c403c] leading-relaxed">Save on towing fees and travel costs. We bring the garage to you.</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-[#b70011]">update</span>
                </div>
                <h4 className="font-label-bold text-lg mb-3">Time Saving</h4>
                <p className="text-sm text-[#5c403c] leading-relaxed">Don&apos;t waste half a day at a tyre center. We work while you&apos;re at home or work.</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-[#b70011]">verified_user</span>
                </div>
                <h4 className="font-label-bold text-lg mb-3">Safety First</h4>
                <p className="text-sm text-[#5c403c] leading-relaxed">Don&apos;t risk driving on a damaged tyre. We&apos;ll come and fix it safely on-site.</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-[#b70011]">local_parking</span>
                </div>
                <h4 className="font-label-bold text-lg mb-3">Stress Free</h4>
                <p className="text-sm text-[#5c403c] leading-relaxed">Simple booking, transparent pricing, and professional service across M-postcodes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-h2 text-h2 text-center mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group bg-[#fcf9f8] rounded-xl p-6 border border-slate-100 open:shadow-md transition-all">
                <summary className="list-none flex justify-between items-center cursor-pointer font-h3 text-h3 text-lg">
                  Do you cover all areas of Greater Manchester?
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <p className="mt-4 text-[#5c403c] leading-relaxed">Yes, we cover the entire Greater Manchester region including Salford, Trafford, Oldham, Stockport, Bury, Bolton, Rochdale, and Tameside, as well as the city center and Manchester Airport.</p>
              </details>
              <details className="group bg-[#fcf9f8] rounded-xl p-6 border border-slate-100 open:shadow-md transition-all">
                <summary className="list-none flex justify-between items-center cursor-pointer font-h3 text-h3 text-lg">
                  How long does a mobile tyre fitting take?
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <p className="mt-4 text-[#5c403c] leading-relaxed">A single tyre replacement typically takes 20-30 minutes once our technician arrives. A full set of four tyres usually takes 45-60 minutes.</p>
              </details>
              <details className="group bg-[#fcf9f8] rounded-xl p-6 border border-slate-100 open:shadow-md transition-all">
                <summary className="list-none flex justify-between items-center cursor-pointer font-h3 text-h3 text-lg">
                  Do you offer 24-hour emergency service in Manchester?
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <p className="mt-4 text-[#5c403c] leading-relaxed">Yes, we operate 24 hours a day, 7 days a week, 365 days a year. Our emergency dispatch line is always staffed and ready to send a technician to your location.</p>
              </details>
              <details className="group bg-[#fcf9f8] rounded-xl p-6 border border-slate-100 open:shadow-md transition-all">
                <summary className="list-none flex justify-between items-center cursor-pointer font-h3 text-h3 text-lg">
                  What tyre brands do you carry?
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <p className="mt-4 text-[#5c403c] leading-relaxed">We stock all major premium brands including Michelin, Continental, Bridgestone, and Pirelli, as well as mid-range and budget options to suit all price points.</p>
              </details>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#f0edec] relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-h2 text-h2 mb-5">Need a Tyre Fitted in Manchester Right Now?</h2>
            <p className="font-body-lg text-[#5c403c] leading-relaxed mb-8">Don&apos;t wait by the roadside. Call our dedicated Manchester line and get a technician dispatched in minutes.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <a className="flex items-center justify-center gap-3 bg-[#dc2626] hover:bg-[#b70011] text-white px-10 py-5 rounded-lg font-call-to-action transition-all shadow-xl" href="tel:07759708646">
                <span className="material-symbols-outlined">phone_in_talk</span>
                Call Now
              </a>
              <a className="flex items-center justify-center gap-3 bg-[#1c1b1b] hover:bg-slate-800 text-white px-10 py-5 rounded-lg font-call-to-action transition-all shadow-xl" href="https://wa.me/447759708646">
                <span className="material-symbols-outlined text-[#25D366]" style={{fontVariationSettings: "'FILL' 1"}}>chat</span>
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
