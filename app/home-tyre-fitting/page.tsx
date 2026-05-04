import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Home Tyre Fitting | One Stop Tyres 24/7',
  description:
    'Professional, fast and reliable home tyre fitting available 24/7 across the UK. We bring the garage to your doorstep.',
}

export default function HomeTyreFittingPage() {
  return (
    <div className="bg-surface text-on-surface font-body-md">
      {/* 1. Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden py-xl md:py-32">
        <div className="absolute inset-0 opacity-40">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBY2JiBB4iWEo-JXcj4AZLD2m7PufwzApHZYLCT5BTBtSv9thvaIAaxOG0pBI7-rK4LruCo0qt-bOfclAb4qtv1dtf8g2jyZAzNmE8bKGZw_i9IV77jH364SRk-IPjADMxPGTMwS3uSNXL267hNbH11h5kSArtmEO3uXuM4qsbBsG3Eno8f20Tg1oWWjoidwIP-s0b7eMa_ZxsPdO7fexXbEaqNc-zw-1pX5orSctxkU6YiV2PF4omRPKbgo3IpxJqDT8Vh0kK6ni8"
            alt="Home tyre fitting technician"
            width={1920}
            height={1080}
            loading="eager"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-lg">
          <div className="space-y-md">
            <h1 className="font-h1 text-h1 text-white leading-tight">Home Tyre Fitting</h1>
            <p className="font-body-lg text-body-lg text-slate-200 max-w-lg">
              Professional, fast and reliable home tyre fitting available 24/7 across the UK. We bring the garage to your doorstep.
            </p>
            <div className="flex flex-wrap gap-sm pt-xs">
              <a
                className="bg-primary-container text-on-primary px-8 py-4 rounded-lg font-call-to-action uppercase flex items-center gap-xs hover:opacity-90 transition-all shadow-lg"
                href="tel:07759708646"
              >
                <span className="material-symbols-outlined">call</span> Call Now
              </a>
              <a
                className="bg-[#25D366] text-white px-8 py-4 rounded-lg font-call-to-action uppercase flex items-center gap-xs hover:opacity-90 transition-all shadow-lg"
                href="https://wa.me/447759708646"
              >
                <span className="material-symbols-outlined">chat</span> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Introduction */}
      <section className="py-xl bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg items-center">
            <div className="space-y-sm">
              <h2 className="font-h2 text-h2 text-on-background">Reliable Home Tyre Fitting Service</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Experience the ultimate convenience with our door-to-door service. Whether you&apos;ve woken up to a flat tyre on your driveway or you&apos;re too busy with work to visit a local garage, our mobile units are equipped to handle any tyre requirement right where you are. We save you the stress and time of coordinating a tow or waiting in a cold garage lobby.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-sm">
              <div className="bg-surface-container p-lg rounded-xl flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-primary text-5xl mb-sm">home</span>
                <span className="font-label-bold text-label-bold uppercase text-secondary">Doorstep Service</span>
              </div>
              <div className="bg-surface-container p-lg rounded-xl flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-primary text-5xl mb-sm">schedule</span>
                <span className="font-label-bold text-label-bold uppercase text-secondary">Busy Schedules</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What's Included & 6. Benefits (Bento Layout) */}
      <section className="py-xl bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-h2 text-h2 text-on-background mb-xl text-center">What&apos;s Included &amp; The Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            {/* Bento Card 1 */}
            <div className="md:col-span-2 bg-white p-lg rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between">
              <div>
                <h3 className="font-h3 text-h3 text-primary mb-sm">Professional Technicians</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Our team consists of highly trained, fully insured professionals who handle your vehicle with the utmost care. From high-performance cars to family SUVs, we ensure a safe and precise fitting every time.
                </p>
              </div>
              <div className="mt-lg flex gap-xs flex-wrap">
                <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-3 py-1 rounded-full text-xs font-bold uppercase">Fully Insured</span>
                <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-3 py-1 rounded-full text-xs font-bold uppercase">Certified</span>
              </div>
            </div>
            {/* Bento Card 2 */}
            <div className="bg-navy-trust p-lg rounded-xl text-white">
              <span className="material-symbols-outlined text-4xl mb-md">speed</span>
              <h3 className="font-h3 text-h3 mb-sm">Fast Response</h3>
              <p className="text-slate-300 font-body-md">Typical arrival within 20-30 minutes across most UK locations. We prioritize your time.</p>
            </div>
            {/* Bento Card 3 */}
            <div className="bg-white p-lg rounded-xl shadow-sm border border-slate-100">
              <span className="material-symbols-outlined text-primary text-4xl mb-md">build</span>
              <h3 className="font-h3 text-h3 mb-sm">Fully Equipped</h3>
              <p className="text-on-surface-variant font-body-md">Our vans carry the latest wheel balancing and fitting machinery to provide garage-quality results on-site.</p>
            </div>
            {/* Bento Card 4 */}
            <div className="md:col-span-2 bg-primary-container p-lg rounded-xl text-white flex items-center justify-between">
              <div className="max-w-md">
                <h3 className="font-h3 text-h3 mb-sm text-white">Convenient &amp; Safe</h3>
                <p className="text-on-primary-container font-body-md">
                  No need to travel on a damaged tyre. Stay safe in your home while we handle the heavy lifting on your driveway.
                </p>
              </div>
              <span className="material-symbols-outlined text-6xl opacity-30 hidden lg:block">verified_user</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. How It Works */}
      <section className="py-xl bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-h2 text-h2 text-on-background mb-xl text-center">How Our Service Works</h2>
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-lg">
            {[
              { n: 1, title: 'Contact Us', desc: 'Call or WhatsApp our 24/7 emergency line with your tyre size and details.' },
              { n: 2, title: 'Share Location', desc: 'Provide your home address or current location where the vehicle is parked.' },
              { n: 3, title: 'Technician Dispatched', desc: 'Our nearest mobile unit is sent immediately with the correct tyres for your car.' },
              { n: 4, title: 'Service Completed', desc: "Tyre fitted, wheels balanced, and you're back on the road without leaving home." },
            ].map((step) => (
              <div key={step.n} className="relative z-10 text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-md font-bold text-xl shadow-lg">
                  {step.n}
                </div>
                <h3 className="font-h3 text-lg font-bold mb-xs">{step.title}</h3>
                <p className="text-on-surface-variant text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section className="py-xl bg-navy-trust text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg items-center">
            <div>
              <h2 className="font-h2 text-h2 mb-md">Why Choose One Stop Tyres 24/7</h2>
              <ul className="space-y-md">
                {[
                  { title: '24/7 Availability', desc: 'We never sleep. Midnight or bank holidays, we are always on standby.' },
                  { title: 'No Hidden Charges', desc: 'Clear, upfront pricing with no nasty surprises on the driveway.' },
                  { title: 'Nationwide Response', desc: 'Our massive network ensures we reach you wherever you are in the UK.' },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-sm">
                    <span className="material-symbols-outlined text-primary-container">check_circle</span>
                    <div>
                      <span className="font-h3 text-lg block">{item.title}</span>
                      <p className="text-slate-300">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover aspect-video"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh9UaduYOcqugNFvii14mqbkKS26l_CEILPQo8zi22TtpcLKSh-miEyClatv1ZrfgrTLStqQ1-TUwUNEfoxsF84VwfUhW729PP4DRtBRfDISG8_HGtOmuo5G_aWu7-rw5eXFqd19J78cWffSST-6k4HGO36MwQqliseaC8hurg-sYiuF79hNUba4eDYjPibAxjsIjQgKnldUzB84pagMU4lpIeRs9r47G39W4eOk72OWQ6GNKhan3XKB40nko7iPvJYJIi1BHMYOI"
                alt="Professional tyre tread inspection"
                width={800}
                height={450}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. When You Need It */}
      <section className="py-xl bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-h2 text-h2 text-on-background mb-xl text-center">When You Might Need Home Tyre Fitting</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            {[
              { title: 'Morning Surprises', desc: 'Waking up to a flat tyre when you have an important meeting or school run is the worst. We get you moving before breakfast.' },
              { title: 'Work From Home', desc: "Don't interrupt your productivity. We fit your tyres while you take your calls, zero downtime for your workday." },
              { title: 'Comfort & Ease', desc: 'Skip the oily rags and bad coffee of garage waiting rooms. Relax on your own sofa while our experts do the work.' },
            ].map((s) => (
              <div key={s.title} className="bg-white p-lg rounded-xl border-l-4 border-primary shadow-sm">
                <h3 className="font-h3 text-lg font-bold mb-xs">{s.title}</h3>
                <p className="text-on-surface-variant">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="py-xl bg-surface-container-low">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-h2 text-h2 text-on-background mb-xl text-center">Frequently Asked Questions</h2>
          <div className="space-y-sm">
            {[
              { q: 'Do I need to be present during the fitting?', a: "While it's ideal for you to be there to provide the locking wheel nut key, we can arrange contact-free services if you can securely leave the key for our technician." },
              { q: 'Can you work on my driveway?', a: 'Yes! As long as there is enough space for our van to park safely near your car and enough room to work around the wheels, your driveway is the perfect place.' },
              { q: 'What areas do you cover?', a: 'We provide 24/7 nationwide coverage across the UK. Wherever you are, our mobile units are never far away.' },
            ].map((faq) => (
              <details key={faq.q} className="bg-white p-md rounded-lg shadow-sm group">
                <summary className="font-h3 text-lg cursor-pointer flex justify-between items-center list-none">
                  {faq.q}
                  <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                </summary>
                <p className="mt-md text-on-surface-variant">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="py-xl bg-primary-container text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-h1 text-h1 mb-md">Need Immediate Assistance?</h2>
          <p className="font-body-lg text-lg mb-xl opacity-90">Call now for 20-30 minute arrival. Our technicians are ready to help you at home right now.</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-md">
            <a
              className="bg-white text-primary px-12 py-5 rounded-lg font-call-to-action uppercase shadow-2xl hover:scale-105 transition-transform flex items-center gap-sm"
              href="tel:07759708646"
            >
              <span className="material-symbols-outlined">call</span> 07759 708 646
            </a>
            <p className="text-white font-label-bold uppercase">Open 24 Hours / 7 Days A Week</p>
          </div>
        </div>
      </section>


    </div>
  )
}
