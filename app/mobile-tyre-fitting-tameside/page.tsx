export const metadata = {
  title: 'Mobile Tyre Fitting Tameside | 24/7 Emergency Service | One Stop Tyres 24/7',
}

export default function TamesidePage() {
  return (
    <div className="bg-[#fcf9f8] font-body-md text-[#1c1b1b]">
      {/* Hero Section */}
      <section
        className="relative min-h-[100svh] lg:min-h-[600px] flex items-center justify-center text-center px-4"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(https://lh3.googleusercontent.com/aida-public/AB6AXuA-lQ5gFH5jK3Fo6pxwB59kBLfwwfAB96rATZI1VOCDVcKzNuMpr1lQN8KH2SHY676vXIEiiF_TIH2vovCYh9eF332Ls8Sg3lxPUyycPYdBsn46hKbzZmn2cOAi1buTuCjl5sjGRy39JfA2K5zAxxJ3qygF7PSakzYymtQFNX0X8xnUuBC1Rha1q2oEY2pp5T-IG3XY2zdFZtp7CvXgOOnMm3L1L3d993Kr5SAoHb6tjygAPoYEmYUfx65ZspoKk7I1Y0-ArzQv-eo)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="max-w-4xl mx-auto py-20">
          <div className="inline-flex items-center gap-2 bg-[#dc2626] text-white px-4 py-2 rounded-full mb-4 animate-pulse">
            <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>emergency</span>
            <span className="text-label-bold">EMERGENCY TYRE FITTING TAMESIDE</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 leading-[1.1] font-black text-balance"
            style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.02em' }}
          >
            Mobile Tyre Fitting{' '}
            <span className="text-[#b70011]">Tameside</span>
            : 24/7 Roadside Response
          </h1>
          <p className="font-body-lg text-body-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">Don&apos;t let a puncture ruin your journey through Ashton, Stalybridge, or Hyde. Our Tameside mobile tyre units arrive within 20-30 minutes to get you moving again.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-8">
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
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-white/70">
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
      </section>

      {/* Trust Bar */}
      <div className="bg-[#3e5e95] text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap justify-center sm:justify-between items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#c8e6ff]">verified</span>
            <span className="text-label-bold">Tameside Rated #1 for Speed</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#c8e6ff]">timer</span>
            <span className="text-label-bold">20-30 Min Arrival Time</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#c8e6ff]">payments</span>
            <span className="text-label-bold">No Hidden Call-out Fees</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#c8e6ff]">star</span>
            <span className="text-label-bold">500+ Local Reviews</span>
          </div>
        </div>
      </div>

      {/* Bento Grid Services Section */}
      <section className="py-xl bg-[#f6f3f2]" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="font-h2 text-2xl sm:text-[32px] text-[#1c1b1b] mb-4">Urgent Services Across Tameside</h2>
            <p className="text-body-lg text-[#5c403c]">Comprehensive mobile tyre solutions for cars, vans, and 4x4s.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Large Feature Card */}
            <div className="md:col-span-2 md:row-span-2 bg-white p-8 rounded-xl shadow-md flex flex-col justify-between border-l-8 border-[#dc2626]">
              <div>
                <span className="material-symbols-outlined text-[#b70011] text-5xl mb-6 block">tire_repair</span>
                <h3 className="font-h3 text-h3 mb-4">Emergency Roadside Assistance</h3>
                <p className="text-body-md text-[#5c403c] mb-6 leading-relaxed">Stuck on the M60 or a quiet Tameside road? Our flagship service provides rapid response for punctures and blowouts. We carry a wide range of tyre sizes in our mobile workshops to ensure a first-time fix.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#b70011]" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                    <span>Home, Work, or Roadside Fitting</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#b70011]" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                    <span>Laser Wheel Balancing Included</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#b70011]" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                    <span>Available 24 Hours, 365 Days</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-between items-end">
                <div className="bg-[#c8e6ff]/30 px-4 py-2 rounded-lg text-[#004c6d] font-label-bold">
                  Rapid Ashton Response
                </div>
                <div className="text-h3 font-bold text-[#b70011]">From £49.99</div>
              </div>
            </div>
            {/* Secondary Card 1 */}
            <div className="bg-[#3e5e95] p-8 rounded-xl shadow-md text-white">
              <span className="material-symbols-outlined text-[#c8e6ff] text-4xl mb-4 block">electric_car</span>
              <h3 className="font-h3 text-h3 mb-2">EV Tyre Specialists</h3>
              <p className="text-body-md text-white/80">Expert fitting for electric vehicles requiring specific load ratings and noise reduction technology.</p>
            </div>
            {/* Secondary Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-[#3e5e95]">
              <span className="material-symbols-outlined text-[#3e5e95] text-4xl mb-4 block">build_circle</span>
              <h3 className="font-h3 text-h3 mb-2">Puncture Repairs</h3>
              <p className="text-body-md text-[#5c403c]">Safe, British Standard repairs whenever possible to save you the cost of a new tyre.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="py-xl bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <h2 className="font-h2 text-h2 text-[#1c1b1b] mb-5">Serving All of Tameside &amp; Surrounding Areas</h2>
            <p className="text-body-lg text-[#5c403c] mb-8 leading-relaxed">Our local technicians are based strategically throughout the borough to ensure we can reach you in under an hour, no matter where you are.</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 p-3 bg-[#f0edec] rounded-lg">
                <span className="material-symbols-outlined text-[#b70011]">location_on</span>
                <span className="font-label-bold">Ashton-under-Lyne</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-[#f0edec] rounded-lg">
                <span className="material-symbols-outlined text-[#b70011]">location_on</span>
                <span className="font-label-bold">Dukinfield</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-[#f0edec] rounded-lg">
                <span className="material-symbols-outlined text-[#b70011]">location_on</span>
                <span className="font-label-bold">Hyde</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-[#f0edec] rounded-lg">
                <span className="material-symbols-outlined text-[#b70011]">location_on</span>
                <span className="font-label-bold">Stalybridge</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-[#f0edec] rounded-lg">
                <span className="material-symbols-outlined text-[#b70011]">location_on</span>
                <span className="font-label-bold">Denton</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-[#f0edec] rounded-lg">
                <span className="material-symbols-outlined text-[#b70011]">location_on</span>
                <span className="font-label-bold">Audenshaw</span>
              </div>
            </div>
            <p className="mt-8 font-label-bold text-[#3e5e95]">Plus coverage for Mossley, Droylsden, and Longdendale.</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl border-8 border-[#f0edec]">
            <img
              className="w-full h-64 sm:h-96 lg:h-[450px] object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx156xY1nHW1ButZ_FxQF6qwpCBiDL2LJa7HIL_AMblj1Mufe18lTkecIqoHc6AohdJht9EA9HCH4rLQLx6ZkgQTYPDhw5POhNxEQfErMKQoabZxNqA8Uj1CkZQchxfb40Miaa-4ssflk2_OEiXD63hNI8GJh3E1OFPdgrLI8sSwBiZjbVX_VJK2LkMroJlxYdJIQbp_gCa6DLMdxNan8Om3IhysF61mIijnhgLwjDLGa4JgPe_MZ9HN0_ZMkf-QXQ-GUkPaKym00"
              alt="Digital map highlighting Tameside borough in Greater Manchester"
            />
          </div>
        </div>
      </section>

      {/* Call to Action / Urgency Block */}
      <section className="py-xl bg-[#dc2626] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-h1 text-2xl sm:text-3xl lg:text-4xl mb-5">Facing a Tyre Emergency in Tameside Right Now?</h2>
          <p className="text-body-lg mb-8 opacity-90 leading-relaxed">Our dispatchers are standing by 24/7. Call our priority line and we&apos;ll send the nearest technician to your exact location immediately.</p>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl inline-block border border-white/20">
            <p className="font-label-bold uppercase tracking-widest mb-4">Emergency Hotline</p>
            <a className="text-4xl md:text-6xl font-black block mb-6" href="tel:0800000000">0800 000 000</a>
            <p className="text-body-md italic">Averaging 42 minute arrival time in Tameside today.</p>
          </div>
        </div>
      </section>

    </div>
  )
}
