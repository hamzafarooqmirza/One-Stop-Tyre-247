import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Locking Nut Removal | One Stop Tyres 24/7',
  description:
    'Specialist damage-free locking wheel nut removal available 24/7 across the UK. Lost your locking nut key? We come to you.',
}

export default function LockingNutRemovalPage() {
  return (
    <div className="bg-background text-on-background font-body-md overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full h-full object-cover opacity-40"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1mKnY6IUstQcQAzhgUF9qTesuabTZt_hNd2N7MiApHk1rySSFFvjGH4TR5ObL6Er9R_xLcwdlDXglIVVaA8Cf3ov1mij1TKCByrZ0NLDQIiXQzuQwCDV-sm3n2nTKqqrZRsqQR4rzMYMftOhL4Tl5H9W1ozZaBCIl1eF2L8bEunVGD-gkV4T1r9huDQ6cwQ98MnUnxwL61Zgu3cTYhHGatD0rvhVA6S-aNn-U2FFa9iR5ZwcygWmOGeIZExIV051hAu4dCPz0Xo4"
            alt="Specialist locking nut removal technician working roadside at night"
            width={1920}
            height={1080}
            loading="eager"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col items-start gap-8">
          <div className="inline-flex items-center gap-2 bg-primary-container px-4 py-1 rounded-full text-white text-label-bold uppercase tracking-widest">
            <span className="material-symbols-outlined text-sm">emergency</span>
            24/7 NATIONWIDE ASSISTANCE
          </div>
          <h1 className="font-h1 text-h1 max-w-2xl leading-tight">Locking Nut Removal</h1>
          <p className="font-body-lg text-body-lg max-w-xl text-slate-300">
            Professional, fast and reliable locking nut removal available 24/7 across the UK. We get you back on the road when keys are lost or nuts are damaged.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              className="bg-primary text-on-primary px-10 py-4 rounded-xl font-call-to-action text-call-to-action flex items-center justify-center gap-3 shadow-lg shadow-red-900/20 active:scale-95 transition-all"
              href="tel:07759708646"
            >
              <span className="material-symbols-outlined">phone_in_talk</span>
              Call Now
            </a>
            <a
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-xl font-call-to-action text-call-to-action flex items-center justify-center gap-3 active:scale-95 transition-all"
              href="https://wa.me/447759708646"
            >
              <span className="material-symbols-outlined">chat</span>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Introduction Bento Grid */}
      <section className="max-w-7xl mx-auto px-6 py-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-h2 text-h2 text-slate-900">Reliable Locking Nut Removal Service</h2>
            <p className="font-body-lg text-body-lg text-slate-600">
              {"Don't let a lost key or a rounded-off nut ruin your journey. At One Stop Tyres 24/7, we specialize in high-urgency recovery. Whether you've lost your unique locking wheel nut key or the nuts themselves have been damaged by overtightening at a garage, our technicians arrive equipped to solve the problem on the spot."}
            </p>
            <div className="p-6 bg-tertiary-fixed/30 rounded-xl border-l-4 border-tertiary">
              <p className="font-body-md text-slate-800 italic">
                &quot;We use specialized non-destructive tools designed to remove even the most stubborn locking nuts without damaging your expensive alloy wheels.&quot;
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {[
              { icon: 'precision_manufacturing', label: 'Specialist Tools', bg: 'bg-red-50', color: 'text-red-600' },
              { icon: 'verified_user', label: 'No Alloy Damage', bg: 'bg-blue-50', color: 'text-blue-600' },
              { icon: 'schedule', label: '20-30m Arrival', bg: 'bg-green-50', color: 'text-green-600' },
              { icon: 'public', label: 'UK Coverage', bg: 'bg-purple-50', color: 'text-purple-600' },
            ].map((item) => (
              <div key={item.icon} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center gap-3">
                <div className={`w-12 h-12 ${item.bg} rounded-full flex items-center justify-center ${item.color}`}>
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <span className="font-label-bold text-slate-900">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included / Why Choose Us */}
      <section className="bg-secondary text-white py-xl">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="font-h2 text-h2 border-l-4 border-primary-container pl-6">{"What's Included"}</h2>
            <div className="grid gap-4">
              {[
                { icon: 'location_on', label: 'On-site service at your home, work, or roadside' },
                { icon: 'bolt', label: 'Fast response times nationwide' },
                { icon: 'engineering', label: 'Professional, highly trained technicians' },
                { icon: 'minor_crash', label: 'Fully equipped mobile service vans' },
                { icon: 'security', label: 'Safe process with no wheel damage' },
              ].map((item) => (
                <div key={item.icon} className="flex items-center gap-4 bg-white/5 p-4 rounded-lg">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim">{item.icon}</span>
                  <span className="font-body-md">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="font-h2 text-h2 border-l-4 border-primary-container pl-6">Why Choose Us</h2>
            <ul className="space-y-4">
              {[
                '24/7 availability for emergencies',
                'Fast nationwide response coverage',
                'Transparent pricing with no hidden charges',
                'Experienced technicians for all car brands',
                'Highly trusted by thousands of UK drivers',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary-container">check_circle</span>
                  <div className="font-body-md">{item}</div>
                </li>
              ))}
            </ul>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="rounded-2xl shadow-2xl mt-8 w-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpLC9ix-hj7_zQq03XBFJVhNcV9Wl7tuZj4AR-aM7VFqX6DpL5bNDK97_9jRLIg4Fta2NiiNgH6rITryqHskpkvgeb1E2_feQTf9KE_EPez-BR29WFPdsMepQHbdRXlyresdDrWVEvn6kjVtOnsqOhoXwPJsG06322Jbd_nAqP5nFe_psjiUI9_Gv-9cnuMJMDH8lJQvi25-2itfFYU3D4b_u6MITMb91C_QOpRAd2IpHUR9hem8xdg0RN4e4HbWx60e2gHkHIt7M"
              alt="Technician carefully handling a locking wheel nut on an alloy wheel"
              width={800}
              height={500}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-6 py-xl text-center">
        <h2 className="font-h2 text-h2 text-slate-900 mb-lg">How Our Service Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { n: 1, title: 'Contact Us', desc: 'Call our emergency hotline or message us on WhatsApp.' },
            { n: 2, title: 'Share Location', desc: 'Provide your vehicle details and precise location.' },
            { n: 3, title: 'Dispatch', desc: 'A mobile technician is dispatched immediately to you.' },
            { n: 4, title: 'Completed', desc: "Nut removed safely and you're back on your way." },
          ].map((step, i) => (
            <div key={step.n} className="relative">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-h3 mx-auto mb-4 relative z-10 font-bold text-xl">
                {step.n}
              </div>
              {i < 3 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-200 -z-0" />
              )}
              <h3 className="font-h3 text-h3 mb-2">{step.title}</h3>
              <p className="font-body-md text-slate-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits & Scenarios Section */}
      <section className="bg-surface-container py-xl">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* When You Might Need Us */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="font-h2 text-h2 text-slate-900 mb-6">When You Might Need Us</h2>
            <div className="space-y-4">
              {[
                { icon: 'vpn_key', title: 'Lost Key', desc: "You've lost your locking wheel nut key and need a tyre change." },
                { icon: 'build_circle', title: 'Damaged Nuts', desc: 'Nuts are rounded off or overtightened beyond manual removal.' },
                { icon: 'tire_repair', title: 'Flat Tyre Emergency', desc: "You have a puncture but can't remove the wheel to fit a spare." },
              ].map((item) => (
                <div key={item.icon} className="flex gap-4 p-4 border border-slate-100 rounded-xl hover:border-primary/30 transition-colors">
                  <span className="material-symbols-outlined text-primary">{item.icon}</span>
                  <div>
                    <p className="font-label-bold text-slate-900">{item.title}</p>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-6">
            <h2 className="font-h2 text-h2 text-slate-900">Benefits of Our Service</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-tertiary-container text-white p-6 rounded-xl">
                <span className="material-symbols-outlined mb-2 block">car_repair</span>
                <h3 className="font-label-bold block mb-1">Non-Destructive</h3>
                <p className="text-sm opacity-90">Keeps your alloy wheels in pristine condition.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <span className="material-symbols-outlined text-primary mb-2 block">timer</span>
                <h3 className="font-label-bold block mb-1">Saves Time</h3>
                <p className="text-sm text-slate-600">Avoid expensive towing or long garage waits.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <span className="material-symbols-outlined text-primary mb-2 block">support_agent</span>
                <h3 className="font-label-bold block mb-1">Immediate Assistance</h3>
                <p className="text-sm text-slate-600">No appointments needed, we come to you now.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <span className="material-symbols-outlined text-primary mb-2 block">front_loader</span>
                <h3 className="font-label-bold block mb-1">Safe Handling</h3>
                <p className="text-sm text-slate-600">Technicians use industry-standard safety protocols.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 py-xl">
        <h2 className="font-h2 text-h2 text-slate-900 mb-lg text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Will it damage my wheels?',
              a: 'Absolutely not. We use non-destructive removal tools specifically designed to grip the locking nut without touching or scratching the surrounding alloy wheel surface.',
              open: true,
            },
            {
              q: 'Do you need the original key?',
              a: 'No, that is why our service is specialized. We can remove almost all types of locking nuts even if the original key is missing or damaged.',
            },
            {
              q: 'Can you remove rounded wheel nuts?',
              a: 'Yes, our tools are effective against overtightened, rusted, or rounded-off nuts that standard wrenches cannot grip.',
            },
            {
              q: 'How long does it take to arrive?',
              a: 'Our average arrival time nationwide is between 30 and 60 minutes, depending on your location and traffic conditions.',
            },
          ].map((faq) => (
            <details key={faq.q} className="group bg-white border border-slate-200 rounded-xl" open={faq.open}>
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-label-bold text-slate-900">
                {faq.q}
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <div className="px-6 pb-6 text-slate-600 font-body-md">{faq.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-xl">
        <div className="bg-primary-container rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[120px]">build</span>
          </div>
          <h2 className="font-h2 text-h2 mb-4">Need Immediate Assistance?</h2>
          <p className="font-body-lg mb-8 max-w-2xl mx-auto">
            Call now to speak with our dispatch team. We are ready to help you anywhere in the UK, 24 hours a day.
          </p>
          <a
            className="bg-white text-primary px-12 py-5 rounded-xl font-call-to-action text-call-to-action flex items-center justify-center gap-4 mx-auto hover:bg-slate-50 transition-all active:scale-95 shadow-xl w-fit"
            href="tel:07759708646"
          >
            <span className="material-symbols-outlined">phone_in_talk</span>
            Call Now
          </a>
        </div>
      </section>

      {/* FAB */}
      <a
        className="fixed bottom-8 right-8 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl z-50 hover:scale-110 active:scale-95 transition-all"
        href="tel:07759708646"
        aria-label="Call us"
      >
        <span className="material-symbols-outlined text-3xl">phone_in_talk</span>
      </a>
    </div>
  )
}
