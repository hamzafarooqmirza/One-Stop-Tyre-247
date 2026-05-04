import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'TPMS Reset | One Stop Tyres 24/7',
  description:
    'Professional, fast and reliable TPMS reset available 24/7 across the UK. We clear dashboard warnings and calibrate sensors at your location.',
}

export default function TpmsResetPage() {
  return (
    <div className="bg-background text-on-background font-body-md overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[716px] flex items-center bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="TPMS Reset Emergency Service"
            className="w-full h-full object-cover opacity-40"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAq0fD9SJ7O0Rh6ofwB1JoX7UrSWmKWgpKm7F-O0NBOj9ukg_LmCibWAzVLVKweQgSd9CgKo_g7yPeCkRNjJvjwE76mLtoc45wUc_6Lt74zEk5hE3bgU_oU06swMiQSdSbMctNusJ3GjXkKGYaeLVD-ytWUcybAK1i998swKG3ESea6ZPou1DPztXsboF5ZNqTH3TDV7Iz0AIssykhSdT09exrJ0lLt_gm45aMKWrSISBdyA4yIbWFtqqR7ol_UXSM7TLTUewji0XY"
            width={1920}
            height={716}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-xl w-full">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1 bg-primary text-white font-label-bold rounded-full mb-md uppercase tracking-wider">
              24/7 Nationwide Response
            </span>
            <h1 className="font-h1 text-h1 lg:text-[56px] mb-sm leading-tight">TPMS Reset</h1>
            <p className="font-body-lg text-body-lg text-slate-200 mb-lg max-w-xl">
              Professional, fast and reliable TPMS reset available 24/7 across the UK. We clear dashboard warnings and calibrate sensors at your location.
            </p>
            <div className="flex flex-col sm:flex-row gap-md">
              <a
                className="bg-primary-container text-on-primary h-[56px] px-lg rounded-xl font-call-to-action text-call-to-action shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2"
                href="tel:07759708646"
              >
                <span className="material-symbols-outlined fill-1">phone_in_talk</span>
                Call Now
              </a>
              <a
                className="bg-white/10 backdrop-blur-md border-2 border-white text-white h-[56px] px-lg rounded-xl font-call-to-action text-call-to-action hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center gap-2"
                href="https://wa.me/447759708646"
              >
                <span className="material-symbols-outlined">chat</span>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-xl max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-lg items-center">
        <div>
          <h2 className="font-h2 text-h2 text-primary mb-md">Reliable TPMS Reset Service</h2>
          <div className="space-y-sm font-body-md text-on-surface-variant">
            <p>
              The Tyre Pressure Monitoring System (TPMS) is a vital safety feature that alerts you when your tyre pressure is dangerously low. However, after changing a tyre, inflating to correct levels, or encountering a system glitch, the warning light often persists.
            </p>
            <p>
              Our expert technicians use state-of-the-art specialized tools to diagnose sensor health, reset the onboard computer, and clear dashboard warnings correctly. We ensure your safety systems are functioning exactly as intended by the manufacturer.
            </p>
          </div>
          <div className="mt-lg flex gap-md">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary fill-1">check_circle</span>
              <span className="font-label-bold">Expert Tools</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary fill-1">check_circle</span>
              <span className="font-label-bold">All Makes/Models</span>
            </div>
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="TPMS Diagnostic Tool"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvzuj7kx8L5MIDfSu-cvjKgM5kTd1dm-CWCo8-jdvpN41BEHxqGIxsZUu3sqnkVIOwRmUzIvNWB0HrBL3WknSKhHpY-z5OaWYfHHUI6tYVXN9sQ9BlQnjCNfj_o-cBdeChwWraUR9nt0tvYczLfn5E7uYzIJfr-MXNp5gNeaNpXp-bTOaYBJ7SYjUIRzxZ5mHww6aX7oe79Rx0WkNVHGatXHMJRlsALZ4KT-H1-ziywTfhhgXqh00QYaHWbq3wp_CfCbXlCo-77kg"
            width={800}
            height={450}
            loading="lazy"
          />
        </div>
      </section>

      {/* What's Included: Bento Grid */}
      <section className="bg-surface-container-low py-xl">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-h2 text-h2 text-center mb-xl">What&apos;s Included in Our TPMS Reset</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <div className="md:col-span-2 bg-white p-lg rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-sm block">home_repair_service</span>
                <h3 className="font-h3 text-h3 mb-xs">On-site service</h3>
                <p className="text-on-surface-variant font-body-md">No need to visit a garage. Our fully equipped mobile vans come to your home, workplace, or the roadside anywhere in the UK.</p>
              </div>
            </div>
            <div className="bg-secondary text-white p-lg rounded-2xl shadow-md flex flex-col justify-center items-center text-center">
              <span className="material-symbols-outlined text-tertiary-fixed text-5xl mb-sm block">speed</span>
              <h3 className="font-h3 text-h3 mb-xs">Fast response</h3>
              <p className="opacity-90 font-body-md">We aim to be with you within 20-30 minutes for emergency call-outs.</p>
            </div>
            <div className="bg-white p-lg rounded-2xl shadow-sm border border-slate-100">
              <span className="material-symbols-outlined text-primary text-4xl mb-sm block">badge</span>
              <h3 className="font-h3 text-h3 mb-xs">Professional technicians</h3>
              <p className="text-on-surface-variant font-body-md">Certified experts trained in the latest TPMS protocols for all manufacturers.</p>
            </div>
            <div className="bg-white p-lg rounded-2xl shadow-sm border border-slate-100">
              <span className="material-symbols-outlined text-primary text-4xl mb-sm block">local_shipping</span>
              <h3 className="font-h3 text-h3 mb-xs">Fully equipped vans</h3>
              <p className="text-on-surface-variant font-body-md">Carrying universal sensors and advanced reprogramming hardware for instant fixes.</p>
            </div>
            <div className="bg-white p-lg rounded-2xl shadow-sm border border-slate-100">
              <span className="material-symbols-outlined text-primary text-4xl mb-sm block">verified_user</span>
              <h3 className="font-h3 text-h3 mb-xs">Safe process</h3>
              <p className="text-on-surface-variant font-body-md">Non-invasive digital reset that adheres strictly to vehicle safety standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-xl max-w-7xl mx-auto px-6">
        <h2 className="font-h2 text-h2 text-center mb-xl">How Our Service Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-lg relative">
          {[
            { n: 1, color: 'bg-primary', title: 'Contact Us', desc: 'Call our 24/7 hotline with your vehicle details.' },
            { n: 2, color: 'bg-secondary', title: 'Share Location', desc: 'Send your GPS location via WhatsApp or phone call.' },
            { n: 3, color: 'bg-secondary', title: 'Technician Dispatched', desc: 'A mobile unit is routed to you immediately.' },
            { n: 4, color: 'bg-primary', title: 'Service Completed', desc: 'Sensor reset and dashboard warning cleared on-site.' },
          ].map((step) => (
            <div key={step.n} className="flex flex-col items-center text-center group">
              <div className={`w-16 h-16 rounded-full ${step.color} text-white flex items-center justify-center font-h3 text-h3 mb-sm shadow-lg group-hover:scale-110 transition-transform`}>
                {step.n}
              </div>
              <h4 className="font-h3 text-h3 mb-xs">{step.title}</h4>
              <p className="text-on-surface-variant text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us & Benefits */}
      <section className="bg-secondary text-white py-xl">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-xl items-start">
          <div className="md:col-span-5">
            <h2 className="font-h2 text-h2 mb-lg">Why Choose One Stop Tyres 24/7</h2>
            <ul className="space-y-sm">
              {[
                { icon: 'stars', title: '24/7 availability', desc: 'We never close. Day or night, we are ready.' },
                { icon: 'rocket_launch', title: 'Fast nationwide response', desc: 'Our network covers every major UK road and city.' },
                { icon: 'no_accounts', title: 'No hidden charges', desc: 'Transparent pricing quoted before we depart.' },
                { icon: 'engineering', title: 'Experienced technicians', desc: 'Years of roadside experience in high-urgency scenarios.' },
              ].map((item) => (
                <li key={item.icon} className="flex items-start gap-sm">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim fill-1">{item.icon}</span>
                  <div>
                    <p className="font-label-bold">{item.title}</p>
                    <p className="text-slate-300 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-7 bg-white/5 p-lg rounded-3xl border border-white/10 backdrop-blur-sm">
            <h2 className="font-h2 text-h2 mb-lg">Benefits of Our TPMS Reset</h2>
            <div className="grid sm:grid-cols-2 gap-md">
              {[
                { icon: 'security_update_good', title: 'Correct safety warnings', desc: 'Ensure your car correctly identifies real pressure losses.' },
                { icon: 'tire_repair', title: 'Optimal tyre life', desc: 'Proper calibration prevents uneven tyre wear.' },
                { icon: 'schedule', title: 'Immediate assistance', desc: 'No waiting days for a garage appointment slot.' },
                { icon: 'health_and_safety', title: 'Safe handling', desc: 'Modern cars rely on TPMS for traction control systems.' },
              ].map((b) => (
                <div key={b.icon} className="p-md bg-white/10 rounded-xl">
                  <span className="material-symbols-outlined text-primary text-3xl mb-xs block">{b.icon}</span>
                  <p className="font-label-bold text-white">{b.title}</p>
                  <p className="text-slate-300 text-sm">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* When You Need It Section */}
      <section className="py-xl max-w-7xl mx-auto px-6">
        <h2 className="font-h2 text-h2 text-center mb-xl">When You Might Need TPMS Reset</h2>
        <div className="grid md:grid-cols-3 gap-md">
          {[
            { icon: 'warning', title: 'Warning Light On', desc: 'The dashboard light stays on even after you have inflated all tyres to the correct PSI.' },
            { icon: 'settings_input_component', title: 'Sensors Malfunctioning', desc: "Erratic readings or 'Sensor Not Found' errors appearing on your dashboard display." },
            { icon: 'build_circle', title: 'After New Tyres', desc: 'The system needs recalibrating after fitting new tyres or rotating your current set.' },
          ].map((s) => (
            <div key={s.icon} className="bg-surface-container p-lg rounded-2xl border-l-4 border-primary">
              <span className="material-symbols-outlined text-primary mb-sm block">{s.icon}</span>
              <h4 className="font-h3 text-h3 mb-xs">{s.title}</h4>
              <p className="text-on-surface-variant font-body-md">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-xl bg-surface-container-highest">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-h2 text-h2 text-center mb-xl">Frequently Asked Questions</h2>
          <div className="space-y-sm">
            {[
              { q: 'What is TPMS?', a: "TPMS stands for Tyre Pressure Monitoring System. It's an electronic system designed to monitor the air pressure inside the pneumatic tyres on various types of vehicles." },
              { q: 'Can you replace faulty sensors on-site?', a: "Yes, our mobile vans carry a stock of universal TPMS sensors that can be programmed to match your vehicle's specific requirements right there on the spot." },
              { q: 'How long does a TPMS reset take?', a: 'In most cases, the diagnosis and reset process takes between 15 to 30 minutes once the technician arrives at your vehicle.' },
            ].map((faq) => (
              <details key={faq.q} className="bg-white rounded-xl p-md shadow-sm group border border-slate-200">
                <summary className="font-h3 text-h3 list-none cursor-pointer flex justify-between items-center">
                  {faq.q}
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <p className="mt-sm text-on-surface-variant font-body-md">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-xl overflow-hidden">
        <div className="absolute inset-0 bg-primary-container z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <h2 className="font-h1 text-h1 mb-sm">Need Immediate Assistance?</h2>
          <p className="font-body-lg text-body-lg mb-lg opacity-90">Our emergency units are patrolling near you right now. Call us for a fast 24/7 response.</p>
          <div className="flex justify-center">
            <a
              className="bg-white text-primary-container h-[72px] px-xl rounded-full font-call-to-action text-[28px] shadow-2xl flex items-center gap-4 hover:scale-105 transition-transform active:opacity-70"
              href="tel:07759708646"
            >
              <span className="material-symbols-outlined text-4xl fill-1">phone_in_talk</span>
              07759 708 646
            </a>
          </div>
        </div>
      </section>


    </div>
  )
}
