export const metadata = {
  title: 'Mobile Tyre Fitting Stockport | Emergency Roadside Assistance 24/7',
  description: 'Stuck on the A6 or stranded in Cheadle? Our rapid response teams are stationed across Stockport to provide 20-30 minute emergency tyre repairs and replacements.',
}

export default function StockportPage() {
  return (
    <div className="bg-[#fcf9f8] text-[#1c1b1b] overflow-x-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      <main>
        {/* Hero Section */}
        <section className="relative bg-slate-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-40">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAup35Fvnu1YnYxxCeZcIQQDwiQ-GaVTp63rm_rFlDnchfoi3AaQS25V1vqtsJ4rXR8oAivHBHfvvTYs49JdOmVr_GP17uKy1ydADdU5ZtznZ2Cs7TO7WZr4G1U0nts_dobjefnPiijoVUpQYF8cdPnCPx_0l5lcSCi3Y96N73PozGyaUCsrUIB6EbzeAQRAiMQwibfQ0s7k_AqpfJDkKk3RW_sM2ol79yN-lqe68zfpS05AED3m-bzVYfbsAPZiDEWS1wUUwrcB4U"
              alt="Professional roadside assistance vehicle with amber lighting in Stockport"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#dc2626] text-white px-4 py-1 rounded-full text-sm font-bold mb-6">
                STOCKPORT EMERGENCY TYRE FITTING
              </div>
              <h1 className="work-sans text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Fastest Mobile Tyre Fitting in <span className="text-[#dc2626]">Stockport</span> — We Come to You 24/7
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
                Stuck on the A6 or stranded in Cheadle? Our rapid response teams are stationed across Stockport to provide 20-30 minute emergency tyre repairs and replacements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#dc2626] text-white px-8 py-4 rounded-xl work-sans font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all">
                  <span className="material-symbols-outlined">call</span>
                  Emergency Call Out
                </button>
                <button className="bg-white/10 backdrop-blur-md border-2 border-white/20 text-white px-8 py-4 rounded-xl work-sans font-bold flex items-center justify-center gap-2 hover:bg-white/20 transition-all">
                  <span className="material-symbols-outlined">schedule</span>
                  Book Fitting
                </button>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm font-semibold">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[#005f88]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  20-30 Min Arrival
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[#005f88]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  No Hidden Fees
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[#005f88]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  All Sizes Stocked
                </span>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white p-8 rounded-2xl shadow-2xl text-slate-900 border-l-8 border-[#dc2626]">
                <h3 className="work-sans text-xl font-semibold mb-4">Request Immediate Help</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Your Location in Stockport</label>
                    <input className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 focus:ring-[#3e5e95] focus:border-[#3e5e95] outline-none" placeholder="e.g. SK1, Heaton Moor, Bramhall..." type="text" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Tyre Size (If known)</label>
                    <input className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 focus:ring-[#3e5e95] focus:border-[#3e5e95] outline-none" placeholder="e.g. 205/55 R16" type="text" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Mobile Number</label>
                    <input className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 focus:ring-[#3e5e95] focus:border-[#3e5e95] outline-none" placeholder="For instant technician dispatch" type="tel" />
                  </div>
                  <button className="w-full bg-[#3e5e95] text-white py-4 rounded-xl work-sans font-bold shadow-lg hover:brightness-110 transition-all" type="submit">
                    Dispatch Technician Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Services Bento Grid */}
        <section className="py-16 max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="work-sans text-3xl font-bold text-[#1c1b1b] mb-4">Urgent Mobile Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We don&apos;t just fit tyres; we provide a complete roadside safety solution for Stockport motorists, 24 hours a day.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Large Puncture Card */}
            <div className="md:col-span-2 bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-center group hover:shadow-lg transition-all">
              <div className="flex-1">
                <div className="w-12 h-12 bg-[#ffdad6] rounded-lg flex items-center justify-center text-[#dc2626] mb-4">
                  <span className="material-symbols-outlined">build</span>
                </div>
                <h3 className="work-sans text-xl font-semibold mb-2">Expert Puncture Repair</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">Don&apos;t replace when you can repair. We provide safe, BSAU 159 standard roadside puncture repairs in Heaton Chapel, Reddish, and beyond.</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-[#c8e6ff] text-[#001e2e] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">From £45</span>
                  <span className="bg-[#f0edec] text-slate-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Stockport Wide</span>
                </div>
              </div>
              <div className="w-full md:w-1/3 h-48 rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxiGMvqlvvVprqIl-HT9oQ9KbDkVW-t8frd_bM6JYvzkyKqfbseboLYwyewz2CNHBxZ_QCrDDeYu7XLZuUCLzI3arh0FlYDRIqZXYoZXdXhhB7nVH2v6pfFpmH3fioEZLUlg5RJWnmuqyvRblMNQ3077EtKm3nt38kJwomiYJsKWMHFyRkATpa7y7iYc-4R1yOFJKOieeFaRFsYEWYdKcNJHN5gfx3LJo_zt_vEvHVClgShkJtnKC7Nt0o26Gz-Q0HUFRl-raXTVo"
                  alt="Technician performing a puncture repair"
                />
              </div>
            </div>
            {/* Home Fitting */}
            <div className="bg-[#3e5e95] text-white p-8 rounded-xl shadow-sm flex flex-col justify-between hover:scale-[1.02] transition-transform">
              <div>
                <span className="material-symbols-outlined text-4xl mb-4 block">home_repair_service</span>
                <h3 className="work-sans text-xl font-semibold mb-2">Home &amp; Work Fitting</h3>
                <p className="text-slate-200 leading-relaxed">Fitting while you work or relax. We cover all residential and commercial Stockport postcodes including SK1-SK8.</p>
              </div>
              <button className="mt-6 text-white border-b-2 border-white/30 font-bold self-start text-sm">Learn More</button>
            </div>
            {/* Jump Starts */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#ffdad6] rounded-lg flex items-center justify-center text-[#dc2626] mb-4">
                <span className="material-symbols-outlined">bolt</span>
              </div>
              <h3 className="work-sans text-xl font-semibold mb-2">Emergency Jump Starts</h3>
              <p className="text-slate-600 leading-relaxed">Flat battery near Stockport Viaduct? Our team carries heavy-duty boosters for all vehicle types.</p>
            </div>
            {/* Commercial */}
            <div className="md:col-span-2 bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-center hover:shadow-lg transition-all">
              <div className="w-full md:w-1/4 h-32 rounded-lg overflow-hidden order-last md:order-first">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnP3XDSkRBLVlAvoHZmyIgZwFKhY7EigaSqXwGDwFFkya71f4VTTw0gSR79BjjJFFfC6etHyOnsCcqyxKeQsGU-PcVRpNrWyPwx8s23xJMSnTnr-ap_21ag_IZyAcDfzdNec5elXqcTk-lcpwH8t970Ts0mKKkZXBvlOXn9sGLgW482dv4_8gM90vv-iT5WszzQuvdVv9Et-tI-l_jDh8RQU4V4uEsmFlpamhBIQM-cRTSTvpU9H9mtlItVxo4uPQ39fOLumsndww"
                  alt="Row of professional commercial vans ready for dispatch"
                />
              </div>
              <div className="flex-1">
                <h3 className="work-sans text-xl font-semibold mb-2">Commercial Fleet Support</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">Specialized tyre fitting for vans, HGVs, and fleets across the Stockport industrial zones. Minimize downtime with our 24/7 priority fleet service.</p>
                <div className="flex gap-4">
                  <span className="flex items-center gap-1 font-bold text-[#3e5e95] text-sm"><span className="material-symbols-outlined">check</span> Van Tyres</span>
                  <span className="flex items-center gap-1 font-bold text-[#3e5e95] text-sm"><span className="material-symbols-outlined">check</span> Multi-car Discount</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-[#f6f3f2] py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <img
                  className="rounded-2xl shadow-2xl relative z-10"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-0-SyJhT_cMu92G4ajh2JO0jJCWuJn5Nsa4tCpMiK9FLPEmGl5EijiS7Nxvhd7Fk6NGS8IDsjYWjwn95xKO-UcpSeLQruuNKFMpGHOppT1CfhoTIA6wKAmlkqd2M9HWV18bxh6N_mC7gUiplEXA4CmO8H8BHBpaJ6-yWL5_X6CDNdzFcZgrOPXWy9s-88mddKxEKGYFqrq8_ac6TkTKX-0COJEmLJM-TgHwldzHCs-Cgk5zwNgYNeYo2VFe6Xvyyk75hCgr3WAuA"
                  alt="Professional technician checking tread depth"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl z-20 border-b-4 border-[#dc2626]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-yellow-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="font-bold text-lg">4.9/5 Rating</span>
                  </div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Based on 1,200+ Stockport jobs</p>
                </div>
              </div>
              <div>
                <h2 className="work-sans text-3xl font-bold text-[#1c1b1b] mb-8">The Preferred Mobile Tyre Service in <span className="text-[#b70011]">Stockport</span></h2>
                <ul className="space-y-6">
                  {[
                    { title: 'Local Knowledge', desc: "We know Stockport's roads—from the tight streets of Edgeley to the suburban lanes of Marple. We navigate traffic to reach you faster." },
                    { title: 'Stock for All Vehicles', desc: 'Budget, Mid-range, and Premium brands always in stock. Whether you drive a Ford or a Ferrari, we have the right rubber ready.' },
                    { title: 'Contactless Payment', desc: 'Pay securely by card at the roadside. No cash needed, no awkward trips to the ATM in the middle of the night.' },
                  ].map((item) => (
                    <li key={item.title} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3e5e95] text-white flex items-center justify-center">
                        <span className="material-symbols-outlined text-sm">done_all</span>
                      </div>
                      <div>
                        <h4 className="work-sans text-lg font-semibold mb-1">{item.title}</h4>
                        <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Map */}
        <section className="py-16 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 flex flex-col justify-center">
              <h2 className="work-sans text-3xl font-bold mb-4">Stockport Coverage</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">We provide complete coverage across the Metropolitan Borough of Stockport and surrounding areas including:</p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {['Bramhall', 'Cheadle', 'Gatley', 'Hazel Grove', 'Marple', 'Reddish', 'Romiley', 'Bredbury'].map((area) => (
                  <span key={area} className="flex items-center gap-2 font-bold text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b70011] flex-shrink-0"></span>
                    {area}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2 h-96 rounded-2xl overflow-hidden shadow-xl border-4 border-white relative">
              <img
                className="w-full h-full object-cover grayscale opacity-50"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa8cy6qK7SKsDDHsZ5C9JasF5daxAcax-N6IOXx7LNXTFwrBK4s4_A1TL8GV2apJtuOk-k-vBPCQKzLBmHIVdcP_LqFCQOzH5GBSrgKTEJ2K5K_CKqdoUyJMGMAq6dvfTydmRKVu5qY2JCzSVeNmDuDgYOOy4hGPB6DPK1nWuSA-46czQneR2YB_HjVe-0vfaSnOQPDT7p4BpVmzUr6mJZgBge8j0Q_TGYCR_DpGqxdI_xNNajsuRGEF3MIPu_lS3tFsw10g56amE"
                alt="Digital map of Stockport area"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#dc2626] text-white p-4 rounded-xl shadow-2xl flex items-center gap-3">
                  <span className="material-symbols-outlined">location_on</span>
                  <span className="font-bold">4 Technicians Active Now</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
