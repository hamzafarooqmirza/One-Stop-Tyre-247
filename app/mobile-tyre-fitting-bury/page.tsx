export const metadata = {
  title: 'Mobile Tyre Fitting Bury | One Stop Tyres 24/7 | Emergency Roadside Assistance',
  description: 'Stranded in Bury? Our rapid-response mobile tyre units cover every corner of Bury 24 hours a day. 20-30 min arrival on M66, A56 and all surrounding areas.',
}

export default function BuryPage() {
  return (
    <div className="bg-[#fcf9f8] text-[#1c1b1b] overflow-x-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      <main>
        {/* Hero Section */}
        <section className="relative bg-[#1c1b1b] py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-40">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGZDhN9FUlFZutp_QbQgvUisUHwHOjKJQH8hkyXplJM7vk-RaCp4QYmfwRB9tyTO_FkwqjCEmuhoxa_t6b5nZ31qVQVvVIA2139m7uL504i6ffeCV-PxW6-zBiYlgv_PxpiPGxLrz9E5_0h8cw4pbG25uPQQm8ZnNAwRauwwMZpoV06EWRvbx0hmkk3K_mMu4Be6UKbvdDi4KGspJw3Ss9cngd-xuUWi0yUuinwpgnFMlvDeSlYaF6C6HIEBpgjhHTnuSGuefs8Ww"
              alt="Professional roadside assistance scene in Bury at twilight"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-[#dc2626] text-white px-4 py-2 rounded-full mb-6 text-sm font-bold">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>emergency_home</span>
                URGENT ASSISTANCE: 20-30 MIN ARRIVAL IN BURY
              </div>
              <h1 className="work-sans text-4xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                Mobile Tyre Fitting <span className="text-[#dc2626]">Bury</span> – 24/7 Emergency Support
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed">
                Stranded on the M66 or stuck in the heart of Bury? Our rapid-response mobile tyre units cover every corner of Bury 24 hours a day. We bring the garage to you, ensuring you&apos;re back on the road within the hour.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#dc2626] text-white work-sans font-bold text-lg py-5 px-10 rounded-lg flex items-center justify-center gap-3 hover:bg-[#b70011] transition-all">
                  <span className="material-symbols-outlined">call</span>
                  CALL 0800-TYRE-FIT
                </button>
                <button className="bg-[#3e5e95] text-white work-sans font-bold text-lg py-5 px-10 rounded-lg flex items-center justify-center gap-3 hover:opacity-90 transition-all">
                  BOOK SERVICE ONLINE
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid Services */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="work-sans text-3xl font-bold mb-4" style={{ letterSpacing: '-0.01em' }}>Complete Tyre Care in Bury</h2>
            <p className="text-slate-600">Professional, swift, and reliable services across BL8, BL9 and surrounding areas.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Large Card */}
            <div className="md:col-span-8 bg-white p-8 rounded-xl shadow-md border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[#dc2626] text-4xl">tire_repair</span>
                </div>
                <h3 className="work-sans text-2xl font-semibold mb-4">Emergency Roadside Fitting</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">Our flagship service in Bury. Whether it&apos;s a blowout on the A56 or a flat in a residential driveway, we carry a massive stock of tyres for all vehicle types—from family hatchbacks to commercial vans. Available 24/7, 365 days a year.</p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="bg-blue-50 text-[#001e2e] px-3 py-1 rounded-full text-xs font-bold">M66 Specialists</span>
                  <span className="bg-blue-50 text-[#001e2e] px-3 py-1 rounded-full text-xs font-bold">All Major Brands</span>
                  <span className="bg-blue-50 text-[#001e2e] px-3 py-1 rounded-full text-xs font-bold">20-30 Min Wait</span>
                </div>
              </div>
              <div className="text-right">
                <span className="font-bold text-[#dc2626] text-xl">From £45.00</span>
              </div>
            </div>
            {/* EV Card */}
            <div className="md:col-span-4 bg-[#3e5e95] p-8 rounded-xl shadow-md flex flex-col justify-between">
              <span className="material-symbols-outlined text-white text-4xl mb-4">electric_car</span>
              <div>
                <h3 className="work-sans text-2xl font-semibold text-white mb-2">EV Tyre Specialists</h3>
                <p className="text-blue-100 opacity-80 leading-relaxed">High-torque tyre replacements specifically for electric and hybrid vehicles in the Bury area.</p>
              </div>
              <div className="mt-6">
                <button className="text-white underline font-bold text-sm">View Specs</button>
              </div>
            </div>
            {/* Puncture Card */}
            <div className="md:col-span-4 bg-white p-8 rounded-xl shadow-md border border-slate-100">
              <span className="material-symbols-outlined text-[#dc2626] text-4xl mb-4 block">build</span>
              <h3 className="work-sans text-2xl font-semibold mb-2">Puncture Repair</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">Safe, BSAU 159 standard repairs to save you the cost of a full new tyre whenever possible.</p>
              <span className="font-bold text-slate-900 text-sm">Professional Plugging</span>
            </div>
            {/* Trust Card */}
            <div className="md:col-span-8 bg-slate-900 p-8 rounded-xl relative overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-20 transform translate-x-1/4 translate-y-1/4">
                <span className="material-symbols-outlined text-white" style={{ fontSize: '200px' }}>verified</span>
              </div>
              <div className="relative z-10">
                <h3 className="work-sans text-2xl font-semibold text-white mb-4">Trust The Bury Experts</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-red-500">check_circle</span>
                    <div>
                      <h4 className="text-white font-bold">Fully Insured</h4>
                      <p className="text-slate-400 text-sm">Comprehensive cover for your peace of mind.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-red-500">check_circle</span>
                    <div>
                      <h4 className="text-white font-bold">Mobile Balancing</h4>
                      <p className="text-slate-400 text-sm">Computerized wheel balancing on-site.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency CTA Section */}
        <section className="bg-[#dc2626] py-16">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white">
              <h2 className="work-sans text-3xl font-bold mb-2">Need a tyre in Bury right now?</h2>
              <p className="text-lg opacity-90">Our mobile technicians are currently patrolling near the Rock Shopping Centre and Whitefield.</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-right hidden sm:block">
                <p className="text-white text-sm font-bold uppercase">Emergency Line</p>
                <p className="text-white text-2xl font-black">0800 123 4567</p>
              </div>
              <a className="bg-white text-[#dc2626] px-8 py-4 rounded-full work-sans font-bold shadow-lg hover:scale-105 transition-transform" href="tel:08001234567">
                CALL NOW
              </a>
            </div>
          </div>
        </section>

        {/* Coverage Area */}
        <section className="py-24 bg-[#f6f3f2]">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="work-sans text-3xl font-bold mb-6">Serving All of Bury &amp; Beyond</h2>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">We don&apos;t just cover the town center. Our mobile tyre fitting vans are dispatched across the entire metropolitan borough, reaching you quickly wherever you are.</p>
              <ul className="grid grid-cols-2 gap-4">
                {['Ramsbottom', 'Tottington', 'Radcliffe', 'Whitefield', 'Prestwich', 'Summerseat'].map((area) => (
                  <li key={area} className="flex items-center gap-2 font-semibold">
                    <span className="material-symbols-outlined text-[#b70011]">location_on</span>
                    {area}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden h-96 shadow-xl border-4 border-white">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-WKuD-yF7XrwU4qxj_41AU7_4OwuJvrmgFDwHshqnglto0a-Hx0NCBo94rHERiuKyMG1F8MdAVsN3YtsQsXpplqQi-oGpO2CMPXvQz97s-RkMi2VNp2FY5kP_VQn_D_r7bKsHw2CFJuhIQBkXV69Etm3flrjAw6DDKB46e67WPaS-8w4uWMWhERoIPcNTZe5DEvTYWcVQxiymqt72YzJ9MDl8MP7l5dLDgQgtNaYR4fEqDtumyqyIjQtkJ5nVNEmysT1S9kGiVyk"
                alt="Satellite map of Bury and Greater Manchester area"
              />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <h2 className="work-sans text-3xl font-bold text-center mb-16">What Bury Drivers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: 'Stuck on the M66 near Ramsbottom exit at 11 PM. One Stop Tyres were there in 35 minutes. Brilliant service, saved my night!', author: 'David R., Bury Resident' },
              { quote: 'Needed a specific tyre for my Tesla. They had it in stock and fitted it at my workplace in Radcliffe. Highly professional.', author: 'Sarah M., EV Owner' },
              { quote: 'The only company that answered at 3 AM on a Sunday. Had me back on the road in under an hour. Absolute lifesavers.', author: 'James L., Delivery Driver' },
            ].map((review) => (
              <div key={review.author} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="italic text-slate-700 mb-6">&quot;{review.quote}&quot;</p>
                <p className="font-bold text-sm">— {review.author}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
