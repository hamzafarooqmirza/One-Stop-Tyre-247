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
          background: "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 w-full">
          <div className="max-w-2xl">
            <div className="inline-block bg-[#dc2626] text-white px-4 py-1 rounded-full mb-4 font-label-bold text-sm tracking-widest uppercase">Emergency Service Available</div>
            <h1 className="font-h1 text-3xl sm:text-4xl lg:text-5xl text-white mb-6 leading-tight">24/7 Mobile Tyre Fitting in Rochdale</h1>
            <p className="font-body-lg text-slate-100 mb-6 max-w-xl leading-relaxed">Stranded with a flat tyre? Whether you&apos;re on the M62, in Rochdale Town Centre, or parked at Hollingworth Lake, our expert technicians arrive within 20-30 minutes to get you moving again.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a className="bg-[#dc2626] hover:bg-[#b70011] transition-colors text-white font-call-to-action py-4 px-8 rounded-lg flex items-center justify-center gap-3 shadow-lg" href="tel:0800123456">
                <span className="material-symbols-outlined text-2xl">phone_in_talk</span>
                CALL EMERGENCY DISPATCH
              </a>
              <a className="bg-[#a2c1ff] hover:bg-[#3e5e95] text-[#2d4e85] hover:text-white font-call-to-action py-4 px-8 rounded-lg flex items-center justify-center gap-3 transition-colors" href="#services">
                VIEW SERVICES
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#c8e6ff]">timer</span>
                <span className="font-label-bold">20-30 Min Arrival</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#c8e6ff]">verified</span>
                <span className="font-label-bold">All Tyre Sizes</span>
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

      {/* Services Bento Grid */}
      <section className="py-xl bg-[#fcf9f8]" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <h2 className="font-h2 text-[#1c1b1b] mb-4 text-center">Comprehensive Roadside Assistance</h2>
            <p className="text-center text-[#5c403c] max-w-2xl mx-auto leading-relaxed">Providing Rochdale motorists with expert tyre solutions and mechanical aid whenever and wherever required.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Emergency Fitting Card */}
            <div className="md:col-span-8 bg-white p-lg rounded-xl shadow-[0px_4px_20px_rgba(0,45,98,0.05)] border border-[#e5e2e1] relative overflow-hidden group">
              <div className="relative z-10">
                <div className="w-12 h-12 bg-[#ffdad6] rounded-lg flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[#b70011] text-3xl">car_repair</span>
                </div>
                <h3 className="font-h3 text-[#1c1b1b] mb-4">Emergency Mobile Tyre Fitting</h3>
                <p className="text-[#5c403c] mb-6 max-w-lg">Our core service for Rochdale. We stock a massive range of premium, mid-range, and budget tyres for all vehicle types including cars, 4x4s, and light commercials. Available 24 hours a day, 365 days a year.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#b70011] text-xl">check_circle</span>
                    <span className="font-body-md">Roadside, Workplace or Home</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#b70011] text-xl">check_circle</span>
                    <span className="font-body-md">Locking Wheel Nut Removal</span>
                  </li>
                </ul>
                <button className="bg-[#b70011] text-white px-8 py-3 rounded-lg font-label-bold flex items-center gap-2">
                  CALL NOW <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
              <img
                alt="New Tyre"
                className="absolute right-0 bottom-0 w-1/3 opacity-10 group-hover:opacity-20 transition-opacity"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzws1g39MMbabdP3gOhqpZXlrLKjBVUT_mo5zWX1KMwfQSj3TCbTJ_KaPjILz6AqXrbWXE4jY_0gjmQ1qDCiju7NyFL2DAQNcDVuM-gHeVQ0ABinZJUsxXlgoYwadKN3IsnGWvxqsLLZdseLUcPvzDL24uh7YwSk36ANeVgcFDBb2Is-9cdyGjkB5YGlq1dWHxwJGxl_4FJDMRuMYElcwwPDo6hQwklwU_Oko_hnen06iMazs1AW_ZA1p5N41jNBmBCv43pD5O030"
              />
            </div>
            {/* Puncture Repair */}
            <div className="md:col-span-4 bg-[#3e5e95] p-lg rounded-xl shadow-lg text-white">
              <div className="w-12 h-12 bg-[#d7e2ff] rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[#001b3f] text-3xl">build</span>
              </div>
              <h3 className="font-h3 mb-4">Mobile Puncture Repair</h3>
              <p className="text-blue-100 mb-8">Not every flat needs a new tyre. If it&apos;s safe to repair, we&apos;ll fix it on the spot to save you money.</p>
              <div className="bg-blue-800/30 p-4 rounded-lg">
                <div className="text-sm font-label-bold uppercase text-blue-200 mb-1">Starts From</div>
                <div className="text-3xl font-h1">£45.00</div>
              </div>
            </div>
            {/* Jump Starts */}
            <div className="md:col-span-4 bg-white p-lg rounded-xl shadow-[0px_4px_20px_rgba(0,45,98,0.05)] border border-[#e5e2e1]">
              <div className="w-12 h-12 bg-[#c8e6ff] rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[#005f88] text-3xl">bolt</span>
              </div>
              <h3 className="font-h3 text-[#1c1b1b] mb-4">Battery Jump Starts</h3>
              <p className="text-[#5c403c]">Flat battery on a cold Rochdale morning? We carry high-power booster packs to get your engine running instantly.</p>
            </div>
            {/* Coverage */}
            <div className="md:col-span-8 bg-[#ebe7e7] p-lg rounded-xl border border-[#e5e2e1] flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h3 className="font-h3 text-[#1c1b1b] mb-4">Rochdale Coverage Area</h3>
                <p className="text-[#5c403c] mb-6">We cover the entire Rochdale borough and surrounding Greater Manchester areas with rapid response times.</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 px-3 py-2 bg-white rounded border border-[#e5e2e1] font-label-bold text-xs">
                    <span className="material-symbols-outlined text-[#b70011] text-base">location_on</span> M62 Motorway
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-white rounded border border-[#e5e2e1] font-label-bold text-xs">
                    <span className="material-symbols-outlined text-[#b70011] text-base">location_on</span> Town Centre
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-white rounded border border-[#e5e2e1] font-label-bold text-xs">
                    <span className="material-symbols-outlined text-[#b70011] text-base">location_on</span> Castleton
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-white rounded border border-[#e5e2e1] font-label-bold text-xs">
                    <span className="material-symbols-outlined text-[#b70011] text-base">location_on</span> Milnrow
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-white rounded border border-[#e5e2e1] font-label-bold text-xs">
                    <span className="material-symbols-outlined text-[#b70011] text-base">location_on</span> Littleborough
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-white rounded border border-[#e5e2e1] font-label-bold text-xs">
                    <span className="material-symbols-outlined text-[#b70011] text-base">location_on</span> Heywood
                  </div>
                </div>
              </div>
              <div className="flex-1 min-h-[200px] bg-slate-200 rounded-lg overflow-hidden border border-[#e5e2e1]">
                <img
                  alt="Map Area"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2hbo202_eqbLyuDyBZo-qgTzpxW1zRRNY_c-VccIG578Fmz7CkmZ5W4I9iiv69rcgZ8x_8D9R1NFscTTpcmbj5vkPE1j-527JCwLPYcNxxcvjt5i1lVT4VNuXwC2uPohLWAeVV7C4e5v9wpg_YRlthAoeFAyOuHf_x941SVBDbMjum4QhEmEt5L9I_JSF757RKSb5vgBXyY_Cs4Yu-7MKnter8-nejNi7cunEsVqhFQbtsNKTJeK_PhN_HJsD9529gzxjsUb3oiM"
                />
              </div>
            </div>
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

      {/* FAQ Section */}
      <section className="py-xl bg-[#fcf9f8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-h2 text-[#1c1b1b] mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group bg-white p-6 rounded-lg border border-[#e5e2e1] shadow-sm open:shadow-md transition-all">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="font-label-bold text-lg">Do you cover the M62 near Rochdale?</span>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <div className="mt-4 text-[#5c403c] leading-relaxed">
                Yes, we provide emergency tyre services for the M62 between Junction 18 (Simister Island) and Junction 22 (Rishworth Moor). We are experts at safe roadside recovery and fitting on the motorway network.
              </div>
            </details>
            <details className="group bg-white p-6 rounded-lg border border-[#e5e2e1] shadow-sm open:shadow-md transition-all">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="font-label-bold text-lg">What tyres do you stock?</span>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <div className="mt-4 text-[#5c403c] leading-relaxed">
                We carry a wide range of all-season, summer, and winter tyres. This includes premium brands like Michelin, Continental, and Bridgestone, as well as high-quality mid-range and budget options to suit all price points.
              </div>
            </details>
            <details className="group bg-white p-6 rounded-lg border border-[#e5e2e1] shadow-sm open:shadow-md transition-all">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="font-label-bold text-lg">Can you come to my workplace in Kingsway?</span>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <div className="mt-4 text-[#5c403c] leading-relaxed">
                Absolutely. We frequently visit business parks like Kingsway, Sandbrook Park, and Stakehill. We can fit your tyres while you work, so you don&apos;t lose time visiting a traditional garage.
              </div>
            </details>
          </div>
        </div>
      </section>

    </div>
  )
}
