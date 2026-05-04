import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Jump Start Service | One Stop Tyres 24/7',
  description:
    "Professional, fast and reliable jump start available 24/7 across the UK. Don't let a dead battery ruin your schedule.",
}

export default function JumpStartPage() {
  return (
    <div className="bg-background text-on-background font-body-md overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative min-h-[614px] flex items-center text-white"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80') center/cover no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-xl w-full">
          <div className="max-w-2xl space-y-md">
            <span className="bg-primary-container text-on-primary px-3 py-1 rounded font-label-bold uppercase tracking-widest">
              Available 24/7 UK Wide
            </span>
            <h1 className="font-h1 text-white text-6xl">Jump Start</h1>
            <p className="font-body-lg text-slate-100 max-w-xl">
              Professional, fast and reliable jump start available 24/7 across the UK. Don&apos;t let a dead battery ruin your schedule; we arrive within 20-30 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-md pt-sm">
              <a
                className="flex items-center justify-center gap-xs bg-primary-container hover:bg-primary text-white font-call-to-action py-md px-lg rounded-xl shadow-lg transition-all active:scale-95"
                href="tel:07759708646"
              >
                <span className="material-symbols-outlined fill-1">phone_in_talk</span>
                CALL NOW
              </a>
              <a
                className="flex items-center justify-center gap-xs bg-secondary hover:bg-on-secondary-fixed-variant text-white font-call-to-action py-md px-lg rounded-xl shadow-lg transition-all active:scale-95"
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
      <section className="py-xl bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-lg items-center">
          <div className="space-y-md">
            <h2 className="font-h2 text-on-background">Reliable Jump Start Service</h2>
            <p className="font-body-md text-on-surface-variant">
              Modern vehicle batteries are highly sensitive and prone to failure, especially during cold weather snaps or after lights are accidentally left on overnight. Long periods of inactivity can also drain your battery&apos;s charge, leaving you stranded at the most inconvenient times.
            </p>
            <p className="font-body-md text-on-surface-variant">
              At One Stop Tyres 24/7, we provide a professional jump-start solution using industrial-grade equipment. Unlike standard consumer jumper cables, our professional power packs provide a clean, surge-protected boost that ensures your vehicle starts safely without damaging delicate electronic control units (ECUs).
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Jump Start — professional battery clamps"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa2c2K92nCe9G_NTaEBkP_ApvFcAKwsUYKu1mIZmPX38tBU7g_bb_jWcAC4K2AV0u_p8NS991tW4AohXQ5ig65fjIJflr6gEoPWGHqWoLFXuSYwU17-erVxrfFNedQKv5yVpP2KVuYXd7AO2NhWfUNnDOE90-fwKtJP7ca0ma5rRwhNVGvC4yea8Q_xGpQo4TCbGicSXXFCw4OGIB8Ph3ZdRT9Hu2yZp2ZIf-2gtEX5MCZ1R0zazfGy8a_ArdwSRcHtpkJbTr4JME"
              width={800}
              height={450}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Bento Grid: What's Included & Benefits */}
      <section className="py-xl bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-sm lg:gap-md">
            {/* What's Included */}
            <div className="md:col-span-7 bg-white p-lg rounded-xl shadow-sm border border-slate-100">
              <h2 className="font-h2 mb-md">What&apos;s Included in Our Jump Start</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
                {[
                  { icon: 'location_on', title: 'On-site service', desc: 'We come to your exact location, anywhere in the UK.' },
                  { icon: 'bolt', title: 'Fast response', desc: 'Typical arrival time of 20-30 minutes.' },
                  { icon: 'engineering', title: 'Professional technicians', desc: 'Experienced specialists handling your vehicle with care.' },
                  { icon: 'verified_user', title: 'Safe process', desc: 'ECU protection and surge-free charging guaranteed.' },
                ].map((item) => (
                  <div key={item.icon} className="flex items-start gap-sm">
                    <span className="material-symbols-outlined text-primary text-3xl">{item.icon}</span>
                    <div>
                      <h3 className="font-h3 text-lg">{item.title}</h3>
                      <p className="text-on-surface-variant text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Why Choose Us */}
            <div className="md:col-span-5 bg-secondary text-white p-lg rounded-xl shadow-lg flex flex-col justify-between">
              <div>
                <h2 className="font-h2 text-white mb-md">Why Choose Us</h2>
                <ul className="space-y-sm">
                  {[
                    '24/7 Availability Nationwide',
                    'No Hidden Call-out Charges',
                    'Fully Equipped Recovery Vans',
                    'Trusted by Thousands of UK Drivers',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-sm font-label-bold">
                      <span className="material-symbols-outlined text-tertiary-fixed">check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-lg pt-md border-t border-secondary-container/30">
                <p className="text-tertiary-fixed text-sm italic">
                  &quot;The technician arrived in 40 mins and had my car started in 5. Professional and polite.&quot; - Recent Customer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-xl bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-lg">
            <h2 className="font-h2 text-on-background">How Our Service Works</h2>
            <p className="font-body-md text-on-surface-variant">Simple 4-step process to get you back on the road.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-md relative">
            {[
              { icon: 'phone_callback', title: 'Contact Us', desc: 'Call our emergency line or send a WhatsApp message.' },
              { icon: 'my_location', title: 'Share Your Location', desc: 'Provide your address or send a GPS pin via WhatsApp.' },
              { icon: 'speed', title: 'Technician Dispatched', desc: 'Our nearest specialist is routed to you immediately.' },
              { icon: 'task_alt', title: 'Service Completed', desc: 'Car started safely and battery health tested on-site.' },
            ].map((step) => (
              <div key={step.icon} className="flex flex-col items-center text-center space-y-sm group">
                <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary-container group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-3xl">{step.icon}</span>
                </div>
                <h3 className="font-h3 text-xl">{step.title}</h3>
                <p className="text-sm text-on-surface-variant">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scenarios: When You Need It */}
      <section className="py-xl bg-on-secondary-fixed text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="font-h2 mb-lg text-white">When You Might Need a Jump Start</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            {[
              { icon: 'wb_sunny', title: 'Morning Failure', desc: "Car won't start in the morning after a cold night or being parked for several days." },
              { icon: 'shopping_cart', title: 'Dead While Shopping', desc: 'Leaving headlights or internal lights on while running errands results in a flat battery.' },
              { icon: 'warning', title: 'Alternator Issues', desc: 'Mechanical issues preventing the battery from charging while driving, leaving you stranded mid-journey.' },
            ].map((s) => (
              <div key={s.icon} className="bg-white/5 backdrop-blur-sm border border-white/10 p-lg rounded-xl hover:bg-white/10 transition-colors">
                <span className="material-symbols-outlined text-primary-container text-4xl mb-sm block">{s.icon}</span>
                <h3 className="font-h3 text-xl mb-xs">{s.title}</h3>
                <p className="text-slate-300 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <span className="material-symbols-outlined text-[300px]">electric_car</span>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-xl bg-surface">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-h2 text-center mb-lg">Common Questions</h2>
          <div className="space-y-md">
            {[
              { q: "What if my battery needs replacing?", a: "Our technicians carry diagnostic equipment. If we determine the battery is dead and won't hold a charge, we can often supply and fit a new high-quality battery on the spot." },
              { q: "Is it safe for modern car electronics?", a: "Yes. We use professional-grade power packs with anti-surge technology specifically designed to protect the ECUs and sensitive digital components of modern vehicles." },
              { q: "How long does it take to arrive?", a: "We aim to reach most urban UK locations within 30 to 60 minutes. Our dispatch system identifies the closest mobile technician to your real-time location." },
            ].map((faq) => (
              <details key={faq.q} className="group bg-white rounded-xl shadow-sm border border-slate-100 p-md">
                <summary className="flex justify-between items-center font-h3 text-lg cursor-pointer list-none">
                  {faq.q}
                  <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                </summary>
                <p className="mt-sm text-on-surface-variant">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-xl bg-white border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="bg-primary-container rounded-3xl p-lg md:p-xl shadow-2xl relative overflow-hidden">
            <div className="relative z-10 text-white space-y-md">
              <h2 className="font-h1 text-white">Need Immediate Assistance?</h2>
              <p className="font-body-lg text-white/90">Call now for a 20-30 minute response. We are available 24 hours a day, 7 days a week, 365 days a year.</p>
              <div className="flex justify-center">
                <a
                  className="inline-flex items-center gap-sm bg-white text-primary font-call-to-action px-lg py-md rounded-full shadow-lg hover:scale-105 transition-transform"
                  href="tel:07759708646"
                >
                  <span className="material-symbols-outlined fill-1">phone_in_talk</span>
                  Call 07759 708 646
                </a>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-black/10 rounded-full blur-2xl" />
          </div>
        </div>
      </section>

      {/* Urgent FAB (Mobile Only) */}
      <a
        className="fixed bottom-6 right-6 w-16 h-16 bg-primary-container text-white rounded-full flex items-center justify-center shadow-2xl z-[60] md:hidden active:scale-90 transition-transform"
        href="tel:07759708646"
        aria-label="Call us"
      >
        <span className="material-symbols-outlined text-3xl fill-1">phone_in_talk</span>
      </a>
    </div>
  )
}
