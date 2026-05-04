export const metadata = {
  title: 'About Us | One Stop Tyres 24/7',
  description:
    'Learn about One Stop Tyres 24/7 — premier provider of emergency roadside services and 24/7 mobile tyre solutions across the UK.',
}

export default function AboutPage() {
  return (
    <>
      <main className="bg-[#fcf9f8] text-[#1c1b1b]" style={{ fontFamily: 'Inter, sans-serif' }}>

        {/* 1. HERO */}
        <section
          className="py-24 px-6 text-center text-white"
          style={{
            backgroundImage:
              'linear-gradient(rgba(28,27,27,0.85),rgba(28,27,27,0.85)), url(https://lh3.googleusercontent.com/aida-public/AB6AXuCNQCIh-xxokj_RB-YXzldYeRzn_41TRF_Wdx-kI3GlGP3ot_CXVHcdRrFUAyr14sZ88ODm1sWCxsa7u2-1eoKBOGSgDfpFgALs2ZmGsxWRG0mGXojnJ3M6KSajYND4AUF_6kHsVWuUeXUmybo3iha0DXabGOVGQcJDmag9OwLr3PqwxfoVoFV0n37JUj9mO6vaV8WDdjBHVfXzF3cEkDAvvuD4DJNzBRx47NadnkRU4z7NRPtooMKSDAFLCEChN57HjvGY2THjX_A)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="max-w-4xl mx-auto">
            <h1
              className="mb-6 text-white"
              style={{
                fontFamily: 'Work Sans, sans-serif',
                fontSize: '40px',
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
                fontWeight: 700,
              }}
            >
              About One Stop Tyres 24/7
            </h1>
            <p
              className="mb-10 text-white/90"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', lineHeight: '1.6' }}
            >
              Reliable 24/7 mobile tyre fitting and roadside assistance service across the UK.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <a
                href="tel:07759708646"
                className="flex items-center justify-center gap-2 px-10 py-4 rounded-lg uppercase text-white hover:opacity-90 active:scale-95 transition-all"
                style={{
                  background: '#dc2626',
                  fontFamily: 'Work Sans, sans-serif',
                  fontSize: '20px',
                  lineHeight: '1',
                  letterSpacing: '0.02em',
                  fontWeight: 700,
                }}
              >
                <span className="material-symbols-outlined">phone_in_talk</span>
                Call Now
              </a>
              <a
                href="https://wa.me/447759708646"
                className="flex items-center justify-center gap-2 border-2 border-white text-white px-10 py-4 rounded-lg uppercase hover:bg-white hover:text-[#1c1b1b] active:scale-95 transition-all"
                style={{
                  fontFamily: 'Work Sans, sans-serif',
                  fontSize: '20px',
                  lineHeight: '1',
                  letterSpacing: '0.02em',
                  fontWeight: 700,
                }}
              >
                <span className="material-symbols-outlined">chat</span>
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        {/* 2. COMPANY INTRO & 3. MISSION */}
        <section className="py-16 px-6 bg-[#fcf9f8]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left: text */}
            <div className="space-y-10">
              <div className="space-y-4">
                <h2
                  className="uppercase text-[#b70011]"
                  style={{
                    fontFamily: 'Work Sans, sans-serif',
                    fontSize: '32px',
                    lineHeight: '1.2',
                    letterSpacing: '-0.01em',
                    fontWeight: 700,
                  }}
                >
                  Who We Are
                </h2>
                <p className="text-[#5c403c]" style={{ fontSize: '18px', lineHeight: '1.6' }}>
                  One Stop Tyres 24/7 is a premier provider of emergency roadside services, specialized
                  in high-urgency mobile tyre solutions. Our fleet operates round-the-clock across the
                  United Kingdom, ensuring that no driver is ever left stranded for long.
                </p>
                <p className="text-[#5c403c]" style={{ fontSize: '18px', lineHeight: '1.6' }}>
                  With a focus on speed, reliability, and technical excellence, we have built a reputation
                  as the nationwide authority in mobile tyre fitting. Our technicians are distributed
                  strategically to reach you within 30 to 60 minutes, regardless of your location.
                </p>
              </div>
              {/* Mission box */}
              <div
                className="bg-[#f0edec] p-10 rounded-xl shadow-sm"
                style={{ borderLeft: '8px solid #b70011' }}
              >
                <h2
                  className="mb-2 text-[#3e5e95]"
                  style={{
                    fontFamily: 'Work Sans, sans-serif',
                    fontSize: '32px',
                    lineHeight: '1.2',
                    letterSpacing: '-0.01em',
                    fontWeight: 700,
                  }}
                >
                  Our Mission
                </h2>
                <p className="italic text-[#1c1b1b]" style={{ fontSize: '18px', lineHeight: '1.6' }}>
                  &ldquo;To provide fast, reliable, and professional roadside assistance, ensuring every
                  driver gets back on the road safely and quickly.&rdquo;
                </p>
              </div>
            </div>
            {/* Right: image with badge */}
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_NmVjBqj8FvBFnOAK-O_Ly3LE0tRyMy7jCyosszgjTJASD371IbmAnqzN1mytLWdo71xhYWVbO2F9OhzPXfL_dUgpvHaiQMaTeudByXKqXuzQNXwWjfH7uKkyDpggtcU6goxbqh2rlyIic5cL3iA0R7ebbTXSiy-AOMzsgBUZF3Qk6Im0aDX6aYvA7QE-t23eI6yo68mSb8GIWENmn5BoE56_ttuu9dA6gXjkbJYmf9VoWoJt7NGbht7J8v1XYcrT6zlt5NlLq-M"
                alt="Mobile service technician"
                className="rounded-xl shadow-xl w-full object-cover"
                style={{ height: '500px' }}
              />
              <div className="absolute -bottom-6 -left-6 bg-[#b70011] text-white p-6 rounded-lg shadow-lg">
                <span className="block text-4xl font-black">24/7</span>
                <span
                  className="block uppercase"
                  style={{ fontSize: '14px', lineHeight: '1.2', fontWeight: 600 }}
                >
                  UK Coverage
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. WHAT WE DO (Bento Grid) */}
        <section className="py-16 px-6 bg-[#f6f3f2]">
          <div className="max-w-7xl mx-auto">
            <h2
              className="text-center mb-16 text-[#1c1b1b]"
              style={{
                fontFamily: 'Work Sans, sans-serif',
                fontSize: '32px',
                lineHeight: '1.2',
                letterSpacing: '-0.01em',
                fontWeight: 700,
              }}
            >
              What We Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: 'tire_repair', title: 'Mobile tyre fitting', desc: 'We bring the tyre shop to you, anywhere in the UK, at any time of day.' },
                { icon: 'build', title: 'Emergency puncture repair', desc: 'Swift repairs to get you moving without needing a full tyre replacement.' },
                { icon: 'bolt', title: 'Jump start services', desc: 'Flat battery? Our technicians carry professional grade boosters for all vehicles.' },
                { icon: 'settings_input_component', title: 'TPMS reset', desc: 'Electronic sensor calibration to ensure your safety monitoring is accurate.' },
                { icon: 'key', title: 'Locking nut removal', desc: 'Lost your key? We use specialist tools to remove locking nuts without damage.' },
                { icon: 'home', title: 'Home tyre fitting', desc: 'Convenient service at your driveway, tailored to your personal schedule.' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white p-8 rounded-xl shadow-sm border border-[#e6bdb8] hover:border-[#b70011] transition-colors group"
                >
                  <span className="material-symbols-outlined text-[#b70011] mb-4 block" style={{ fontSize: '36px' }}>
                    {item.icon}
                  </span>
                  <h3
                    className="mb-2 text-[#1c1b1b]"
                    style={{ fontFamily: 'Work Sans, sans-serif', fontSize: '24px', lineHeight: '1.3', fontWeight: 600 }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#5c403c]" style={{ fontSize: '16px', lineHeight: '1.5' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. WHY CHOOSE US & 6. OUR APPROACH */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
            {/* Why trust us */}
            <div className="md:w-1/2">
              <h2
                className="mb-10 text-[#1c1b1b]"
                style={{
                  fontFamily: 'Work Sans, sans-serif',
                  fontSize: '32px',
                  lineHeight: '1.2',
                  letterSpacing: '-0.01em',
                  fontWeight: 700,
                }}
              >
                Why Drivers Trust Us
              </h2>
              <ul className="space-y-6">
                {[
                  { title: '24/7 Availability', desc: 'Day or night, rain or shine, we are always on call.' },
                  { title: 'Fast Response Nationwide', desc: 'Average arrival time of 30-60 minutes across most UK postcodes.' },
                  { title: 'Transparent Pricing', desc: 'No hidden fees. Upfront quotes provided before we dispatch.' },
                  { title: 'Experienced Technicians', desc: 'Fully certified experts with years of roadside experience.' },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <span
                      className="material-symbols-outlined text-[#b70011] shrink-0"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                    <div>
                      <strong
                        className="block text-[#1c1b1b]"
                        style={{ fontSize: '14px', lineHeight: '1.2', fontWeight: 600 }}
                      >
                        {item.title}
                      </strong>
                      <span className="text-[#5c403c]" style={{ fontSize: '16px', lineHeight: '1.5' }}>
                        {item.desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Approach */}
            <div className="md:w-1/2 bg-slate-900 text-white p-10 rounded-2xl flex flex-col justify-center">
              <h2
                className="mb-6"
                style={{
                  fontFamily: 'Work Sans, sans-serif',
                  fontSize: '32px',
                  lineHeight: '1.2',
                  letterSpacing: '-0.01em',
                  fontWeight: 700,
                }}
              >
                Our Approach
              </h2>
              <p className="mb-6 opacity-90" style={{ fontSize: '18px', lineHeight: '1.6' }}>
                We prioritize a customer-first mindset. From the second you call us, our dispatch team
                uses real-time GPS tracking to find the closest technician to your location.
              </p>
              <p className="opacity-90" style={{ fontSize: '18px', lineHeight: '1.6' }}>
                Our safety protocols are industry-leading, ensuring that both you and your vehicle are
                handled with professional care. We don&apos;t just fix tyres; we provide peace of mind in
                high-stress situations.
              </p>
              <div className="mt-10 flex gap-4">
                <div className="flex-1 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <span className="text-xs uppercase font-bold tracking-widest block mb-2 opacity-60">
                    Avg. Response
                  </span>
                  <span className="text-2xl font-black">45 MIN</span>
                </div>
                <div className="flex-1 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <span className="text-xs uppercase font-bold tracking-widest block mb-2 opacity-60">
                    Rating
                  </span>
                  <span className="text-2xl font-black">4.9/5.0</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. FINAL CTA */}
        <section className="py-16 px-6 bg-[#dc2626] text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2
              className="mb-4"
              style={{
                fontFamily: 'Work Sans, sans-serif',
                fontSize: '32px',
                lineHeight: '1.2',
                letterSpacing: '-0.01em',
                fontWeight: 700,
              }}
            >
              Need Immediate Help?
            </h2>
            <p className="mb-10 opacity-90" style={{ fontSize: '18px', lineHeight: '1.6' }}>
              Our team is available 24/7 to assist you anywhere across the UK. Professional help is just
              a phone call away.
            </p>
            <a
              href="tel:07759708646"
              className="inline-flex items-center justify-center gap-3 bg-white text-[#b70011] px-12 py-5 rounded-lg uppercase shadow-xl hover:bg-slate-100 active:scale-95 transition-all mx-auto"
              style={{
                fontFamily: 'Work Sans, sans-serif',
                fontSize: '20px',
                lineHeight: '1',
                letterSpacing: '0.02em',
                fontWeight: 700,
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                phone_enabled
              </span>
              CALL NOW: 07759 708 646
            </a>
          </div>
        </section>

        {/* Mobile FAB */}
        <a
          href="tel:07759708646"
          className="md:hidden fixed bottom-8 right-8 bg-[#b70011] text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-[100]"
          aria-label="Call us"
        >
          <span
            className="material-symbols-outlined text-3xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            phone_in_talk
          </span>
        </a>
      </main>
    </>
  )
}
