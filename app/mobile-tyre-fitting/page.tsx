import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Mobile Tyre Fitting | One Stop Tyres 24/7',
  description:
    'Professional, fast and reliable mobile tyre fitting available 24/7 across the UK. We come to you — wherever you are.',
}

export default function MobileTyreFittingPage() {
  return (
    <div className="bg-surface font-body-md text-on-surface">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 opacity-50">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVjuF71bae3s_0VDWK8tncPM5vEjXjnQNzID9DL64w6TIvYq7tzleMfzXYk4bpGyf78COYQ3qb8oagSYbYCN5nZ1ohYMg0pOUnp3UypVIoXB59Kri1-hLmxuP0KRCmkqpXdjcN0MhwEuEaa9OQeYBh6kVI10bvL3ch-mJWh5r-BPvK5k7YX41jUl0_lKhJSx7Beibvl0TsCPZ7CCSgnFBVMHwBJVefj9I0_S5pgwCmZ7wJflRR9UmEaShtu8hvImZXtr7QpoB7VWo"
            alt="Mobile tyre fitting technician at work"
            width={1920}
            height={1080}
            loading="eager"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-xl w-full">
          <div className="max-w-2xl">
            <h1 className="font-h1 text-h1 text-white mb-md">Mobile Tyre Fitting</h1>
            <p className="font-body-lg text-body-lg text-slate-200 mb-lg">
              Professional, fast and reliable Mobile Tyre Fitting available 24/7 across the UK.
            </p>
            <div className="flex flex-wrap gap-md">
              <a
                className="bg-primary text-white font-call-to-action text-call-to-action px-lg py-4 rounded-lg flex items-center gap-xs hover:bg-red-700 transition-all active:scale-95 shadow-lg"
                href="tel:07759708646"
              >
                <span className="material-symbols-outlined">call</span>
                CALL NOW
              </a>
              <a
                className="bg-white text-slate-900 font-call-to-action text-call-to-action px-lg py-4 rounded-lg flex items-center gap-xs hover:bg-slate-100 transition-all active:scale-95 shadow-lg"
                href="https://wa.me/447759708646"
              >
                <span className="material-symbols-outlined">chat</span>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 p-lg hidden lg:block">
          <div className="bg-white/10 backdrop-blur-md p-md rounded-xl border border-white/20">
            <div className="flex items-center gap-sm">
              <div className="bg-primary p-xs rounded-full">
                <span className="material-symbols-outlined text-white fill-1">timer</span>
              </div>
              <span className="text-white font-label-bold">20-30 Min Response Nationwide</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-xl px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
            <div>
              <h2 className="font-h2 text-h2 text-on-surface mb-md">Reliable Mobile Tyre Fitting Service</h2>
              <p className="font-body-lg text-slate-600 mb-md leading-relaxed">
                Getting a flat tyre or needing a replacement shouldn&apos;t derail your entire day. Our professional mobile tyre fitting service brings the expertise of a traditional garage directly to your doorstep. Whether you are relaxing at home, busy at work, or unfortunately stranded roadside, our technicians are equipped to handle any situation.
              </p>
              <p className="font-body-lg text-slate-600 leading-relaxed">
                We eliminate the stress of towing your vehicle or finding a local shop that&apos;s open. With nationwide coverage across the UK, we ensure that premium service is always just one phone call away, 24 hours a day, 7 days a week.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-sm">
              <div className="rounded-xl overflow-hidden shadow-[0px_4px_20px_rgba(0,45,98,0.05)] aspect-square">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi04esex3q98x5n2R7YfJU5MizuWLVJcXXXtABd6nouaMK3dfrnyICzE8lfbNnk5hwGlkVW2vWzp5pG-v0fnqAzzVfjIA-oW-YNPVZ08GGdfYVLaFW-VGAp4eAn3hTEkGL2mjspGiJfN34OyTp8b_U3CpSiOETQI7Gtt5GyM7gimoiuSWJlzOKTDGDwyRlt2N6wWtYBcdfd3wwHuMREdK7TmUCH5ucLWLLZuHTGHfLAjyjnp11y8APtpgWpPuEO6UMT92PKOxZuVw"
                  alt="Tyre fitting technician at work"
                  width={400}
                  height={400}
                  loading="lazy"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-[0px_4px_20px_rgba(0,45,98,0.05)] aspect-square mt-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfkFNTuQezALDGwMAcID4tDsojtMjGMtZkj_lxtV0kPATjKEZPEBIVYEgnTpilKcD_j1GA1fDB5BfCRs1ldDd1waRgrN8z0nNX26Qywl0193b3gFNaWi6pDHWZd_y5F-TBXIPiUULzbEdfa_yOWB9RnxPG3ijAaROSCM_iBvJ94lV74apcDtatHttdmmr5PMnLq3tMu1YXQ1bOp-QMfQXdFw4MrEtj4m-bdzHSWEDn7fMenEKN7D0yOCS71XtpcaD0CRL1FY0Bk5Y"
                  alt="One Stop Tyres service van"
                  width={400}
                  height={400}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included & Why Choose Us (Bento Layout) */}
      <section className="py-xl px-6 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* What's Included */}
            <div className="md:col-span-7 bg-white p-lg rounded-xl shadow-[0px_4px_20px_rgba(0,45,98,0.05)]">
              <h2 className="font-h2 text-h2 text-on-surface mb-lg">What&apos;s Included in Our Mobile Tyre Fitting</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
                {[
                  { icon: 'location_on', label: 'On-site service at your location' },
                  { icon: 'bolt', label: 'Fast response time' },
                  { icon: 'engineering', label: 'Professional technicians' },
                  { icon: 'minor_crash', label: 'Fully equipped vehicles' },
                  { icon: 'verified_user', label: 'Safe and reliable process' },
                ].map((item) => (
                  <div key={item.icon} className="flex items-start gap-sm">
                    <span className="material-symbols-outlined text-primary bg-primary/10 p-xs rounded-lg">{item.icon}</span>
                    <span className="font-label-bold text-slate-800">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Why Choose Us */}
            <div className="md:col-span-5 bg-primary text-white p-lg rounded-xl shadow-lg">
              <h2 className="font-h2 text-h2 mb-lg">Why Choose One Stop Tyres 24/7</h2>
              <ul className="space-y-sm">
                {[
                  'Available 24/7',
                  'Fast response nationwide',
                  'No hidden charges',
                  'Experienced professionals',
                  'Fully equipped vans',
                  'Trusted and reliable service',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-sm">
                    <span className="material-symbols-outlined">check_circle</span>
                    <span className="font-body-md">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-xl px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-xl">
            <h2 className="font-h2 text-h2 text-on-surface">How Our Service Works</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-sm" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
            {[
              { n: '01', icon: 'phone_iphone', title: 'Contact Us', desc: 'Call or message us with your tyre requirements and vehicle details.' },
              { n: '02', icon: 'my_location', title: 'Share Your Location', desc: 'Provide your exact position using GPS or your address across the UK.' },
              { n: '03', icon: 'local_shipping', title: 'Technician Dispatched', desc: 'Our nearest mobile unit is instantly sent to your specific location.' },
              { n: '04', icon: 'verified', title: 'Service Completed', desc: 'Your tyres are fitted, balanced, and you are ready to hit the road safely.' },
            ].map((step) => (
              <div
                key={step.n}
                className="p-lg bg-surface border border-slate-100 rounded-xl shadow-[0px_4px_20px_rgba(0,45,98,0.05)] relative overflow-hidden group"
              >
                <div className="text-6xl font-black text-slate-100 absolute -right-2 -top-2 group-hover:text-primary/10 transition-colors font-h1">
                  {step.n}
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-md">
                    <span className="material-symbols-outlined">{step.icon}</span>
                  </div>
                  <h3 className="font-h3 text-h3 mb-xs">{step.title}</h3>
                  <p className="text-slate-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & When You Need This */}
      <section className="py-xl px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
            <div>
              <h2 className="font-h2 text-h2 mb-lg">Benefits of Choosing Our Mobile Tyre Fitting</h2>
              <div className="space-y-md">
                {[
                  { icon: 'schedule', title: 'Saves time and effort', desc: 'Avoid the disruption of your daily schedule with our efficient on-site service.' },
                  { icon: 'no_transfer', title: 'No need to visit a garage', desc: 'The mobile garage comes to you, eliminating travel and waiting time.' },
                  { icon: 'sos', title: 'Immediate roadside assistance', desc: 'Emergency support wherever you are stranded nationwide.' },
                ].map((b) => (
                  <div key={b.icon} className="flex gap-md">
                    <span className="material-symbols-outlined text-primary text-3xl">{b.icon}</span>
                    <div>
                      <h4 className="font-label-bold text-lg">{b.title}</h4>
                      <p className="text-slate-400">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-800 p-lg rounded-xl border border-slate-700">
              <h2 className="font-h2 text-h2 mb-md">When You Might Need Us</h2>
              <p className="text-slate-300 mb-lg leading-relaxed">
                Emergencies don&apos;t happen on a schedule. You might need our Mobile Tyre Fitting service during:
              </p>
              <ul className="space-y-sm">
                {[
                  'Unexpected punctures on a busy motorway.',
                  'Worn-out treads discovered during a morning commute.',
                  'Needing new tyres without the hassle of a garage visit.',
                  'Damage to a tyre sidewall while parking or driving.',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-xs text-slate-300">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-xl px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-xl">
            <h2 className="font-h2 text-h2 text-on-surface">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-md">
            {[
              { q: 'How quickly can you arrive?', a: 'Our average response time nationwide is between 30 to 60 minutes, depending on your exact location and traffic conditions.' },
              { q: 'Are you really available 24/7?', a: 'Yes, we operate 24 hours a day, 365 days a year, including bank holidays and weekends across the entire UK.' },
              { q: 'What vehicles do you cover?', a: 'We provide mobile tyre fitting for cars, vans, 4x4s, and small commercial vehicles of all makes and models.' },
              { q: 'What payment methods do you accept?', a: 'We accept all major credit/debit cards, Apple Pay, Google Pay, and cash for your convenience at the point of service.' },
            ].map((faq, i) => (
              <details key={faq.q} className="group p-md border border-slate-200 rounded-xl transition-all hover:border-primary/50" open={i === 0}>
                <summary className="flex justify-between items-center cursor-pointer list-none font-label-bold text-lg text-slate-900">
                  {faq.q}
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <p className="mt-sm text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-xl px-6 bg-primary text-white overflow-hidden relative">
        <div className="absolute -right-20 -bottom-20 opacity-10">
          <span className="material-symbols-outlined text-[300px]">tire_repair</span>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-h1 text-h1 mb-md">Need Immediate Assistance?</h2>
          <p className="font-body-lg text-white/90 mb-lg">
            Call now and our team will reach you quickly anywhere across the UK. Our lines are open 24/7 for all your tyre emergencies.
          </p>
          <a
            href="tel:07759708646"
            className="bg-white text-primary font-call-to-action text-call-to-action px-xl py-lg rounded-full flex items-center gap-sm mx-auto hover:bg-slate-100 transition-all active:scale-95 shadow-xl w-fit"
          >
            <span className="material-symbols-outlined text-4xl">phone_in_talk</span>
            CALL NOW: 07759 708 646
          </a>
        </div>
      </section>


    </div>
  )
}
