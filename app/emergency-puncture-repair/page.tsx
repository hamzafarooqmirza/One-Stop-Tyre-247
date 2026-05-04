import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Emergency Puncture Repair | One Stop Tyres 24/7',
  description:
    'Professional, fast and reliable emergency puncture repair available 24/7 across the UK. We get you back on the road safely and swiftly.',
}

export default function EmergencyPunctureRepairPage() {
  return (
    <div className="bg-background text-on-background font-body-md overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative min-h-[716px] flex items-center py-xl"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop') center/cover no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary-container text-white px-3 py-1 rounded mb-6">
              <span className="material-symbols-outlined text-sm fill-1">bolt</span>
              <span className="text-xs font-bold uppercase tracking-widest">Emergency Assistance</span>
            </div>
            <h1 className="font-h1 text-h1 text-white mb-6">Emergency Puncture Repair</h1>
            <p className="font-body-lg text-body-lg text-slate-200 mb-8 max-w-lg">
              Professional, fast and reliable emergency puncture repair available 24/7 across the UK. We get you back on the road safely and swiftly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                className="bg-primary-container hover:bg-red-700 text-white font-call-to-action text-call-to-action px-10 py-5 rounded-lg flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1"
                href="tel:07759708646"
              >
                <span className="material-symbols-outlined">call</span>
                Call Now
              </a>
              <a
                className="bg-white hover:bg-slate-100 text-on-background font-call-to-action text-call-to-action px-10 py-5 rounded-lg flex items-center justify-center gap-3 transition-all border-2 border-white transform hover:-translate-y-1"
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
      <section className="py-xl bg-surface">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-lg items-center">
          <div>
            <h2 className="font-h2 text-h2 text-on-background mb-6">Reliable Emergency Puncture Repair Service</h2>
            <div className="space-y-4 font-body-md text-body-md text-slate-700">
              <p>
                When a nail, shard of glass, or road debris interrupts your journey, One Stop Tyres 24/7 is here to help. We understand that a flat tyre isn&apos;t just an inconvenience—it can be a safety hazard, especially on busy motorways or in remote areas.
              </p>
              <p>
                Our priority is always your safety and your wallet. We specialize in roadside puncture repairs that meet strict British Standard (BS AU 159) guidelines, prioritizing repair over replacement wherever it is safe and possible to do so. Our technicians carry the latest tools to ensure a permanent, high-quality fix on-site.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfQqM7NgTUMbNljd91CfCszX2iLqY72iEpUmLbcBY0uU6XXQ4limf2ozhF6ddSlXmcTXXuUSgzgq92F7ueeRWrcq9SaPU2c8EQFB1vx9D_sS65EyZuAsURvUo03HKohRXLkgP6KxB9QJk163xlbPDfJC46Vx21pqFvJvv2WO5y1_BZP_YTKyhFI05nTlw5Ps2X9HNEPQPgEnRnUtlsgURwsWKrQAPd3QfAIALrL0IMOwT0-yMUuJtgS-kgcYFdRPGyR_T5j_AyQPs"
                alt="Puncture repair technician"
                width={600}
                height={600}
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl rounded-xl hidden md:block">
              <p className="text-primary font-bold text-h3">20-30 Min</p>
              <p className="text-slate-600 text-sm">Average Arrival Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included: Bento Grid */}
      <section className="py-xl bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-h2 text-h2 mb-4">What&apos;s Included in Our Emergency Puncture Repair</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Comprehensive service from the moment you call until you&apos;re back on your way.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            <div className="md:col-span-3 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 block">home_repair_service</span>
              <h3 className="font-h3 text-h3 mb-2">On-site Service</h3>
              <p className="text-slate-600">No need to tow your car. Our technicians come directly to your home, workplace, or the roadside.</p>
            </div>
            <div className="md:col-span-3 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 block">airport_shuttle</span>
              <h3 className="font-h3 text-h3 mb-2">Fast Response</h3>
              <p className="text-slate-600">Rapid dispatch system ensures a technician reaches your location within 20-30 minutes nationwide.</p>
            </div>
            <div className="md:col-span-2 bg-on-secondary-fixed text-white p-8 rounded-2xl shadow-sm">
              <span className="material-symbols-outlined text-tertiary-fixed-dim text-4xl mb-4 block">engineering</span>
              <h3 className="font-h3 text-h3 mb-2">Professional Technicians</h3>
              <p className="text-slate-300">Highly trained experts skilled in assessing and repairing all tyre types.</p>
            </div>
            <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 block">local_shipping</span>
              <h3 className="font-h3 text-h3 mb-2">Fully Equipped Vans</h3>
              <p className="text-slate-600">Mobile workshops stocked with professional grade repair kits and compressors.</p>
            </div>
            <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 block">verified_user</span>
              <h3 className="font-h3 text-h3 mb-2">Safe Process</h3>
              <p className="text-slate-600">Strict adherence to UK safety standards for internal plug-patch repairs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-xl bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-h2 text-h2 mb-12 text-center">How Our Service Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { n: 1, title: 'Contact Us', desc: 'Call our 24/7 hotline or WhatsApp our team.' },
              { n: 2, title: 'Share Location', desc: 'Send us your live location via mobile phone for pinpoint accuracy.' },
              { n: 3, title: 'Technician Dispatched', desc: 'The nearest mobile tyre unit is instantly rerouted to you.' },
              { n: 4, title: 'Service Completed', desc: "Tyre repaired, pressure checked, and you're safe to continue." },
            ].map((step) => (
              <div key={step.n} className="text-center group">
                <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="text-2xl font-bold">{step.n}</span>
                </div>
                <h3 className="font-h3 text-h3 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Benefits */}
      <section className="py-xl bg-on-secondary-fixed text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-h2 text-h2 mb-8">Why Choose One Stop Tyres 24/7</h2>
              <ul className="space-y-6">
                {[
                  { title: '24/7 Availability', desc: 'Rain or shine, day or night, we are always operational.' },
                  { title: 'No Hidden Charges', desc: 'Fixed call-out fees and transparent pricing quoted upfront.' },
                  { title: 'Trusted Nationwide', desc: 'Thousands of 5-star reviews from stranded motorists across the UK.' },
                ].map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <span className="material-symbols-outlined text-primary-fixed-dim fill-1">check_circle</span>
                    <div>
                      <h4 className="font-label-bold text-lg">{item.title}</h4>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10">
              <h2 className="font-h2 text-h2 mb-8">Benefits of Choosing Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { label: 'Cost-Effective', desc: 'Repairs cost a fraction of a new premium tyre replacement.' },
                  { label: 'Immediate Assistance', desc: 'Minimize downtime and avoid towing fees entirely.' },
                  { label: 'Saves the Tyre', desc: 'Prolongs the life of your tyre while maintaining integrity.' },
                  { label: 'Convenience', desc: 'We handle everything roadside while you stay safe in your vehicle.' },
                ].map((b) => (
                  <div key={b.label}>
                    <p className="text-tertiary-fixed text-sm font-bold uppercase tracking-wider mb-2">{b.label}</p>
                    <p className="text-slate-300">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary opacity-10 blur-[100px] rounded-full" />
      </section>

      {/* When You Need It */}
      <section className="py-xl bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-h2 text-h2 mb-12 text-center">When You Might Need Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDE1Y5FoXPVWQM6sSru75ZeVtHX8a-OQBdHih-pBWwp6YaTo-gf8ayksm7WSLTPEsgY8KVuNReeTMSFsUOHRKWVn553th6flT0OJqAaTvBChfu2RcPTCEW7Mg4Yu24Bt1HuEuyt_gPcbOGw7EJpROflefma_xqiBobS2tq0xwVaPF4QIU26lSOAeAakhkfj5k57JHgcOxO8qzJ75G-a5U_7Ov4amGKw-FGJI510ULQDD9tFAXFxTvHiWCaTVFToU0xYIQFGO6fKek0',
                title: 'Stranded on the Motorway',
                desc: 'Hitting debris at high speed can cause sudden pressure loss. Stay safe behind the barrier while we handle the repair.',
              },
              {
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSYYClf96nQvkm8Wvb0zWkBgL1UOWZAng9liR4rx2AGjX4CNkjahvHqhfll5I8YP7fbZpV9jn7blf9J2RCAiRZY0I6ZwAr2QNDALXx5ELvZN3pCeThowMmUEMgFyN-hHS5FH-_6aJN99htS38SsDpDpBNKkn1ed6BJ2X-vR4NnrEYYSCXUeJPdzTGzWVGQhu_LZpf8rojxEJ0d-HqeapoJgyiBKCuiynmdSi-7DZkEBnY8j3N01hVH_Rh3u-YFWFqQKrnaiaXFh4w',
                title: 'Flat in a Car Park',
                desc: "Returning to your car to find a flat? Don't risk driving to a garage and damaging the wheel rim—let us come to you.",
              },
              {
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtbWRvdq_nEHmgLxgVsr9yrdbMm-jZJVzc0U33SRR5JWiAeKuOGR-EdzOR-Uu-GEKMybocqtCO4C046UclWXHBLkqFzIRTfn421-OnLRk1BfM0ZTPaJKtFy3dJRrPGtDxojY1UDOZbaCIsZGI_oEjdSzWA7Brlf1LsfFwb2MzthI2SeAvtknDlWbuB5Q9W9b9JnxUq_K6cfk_Xnolg3YOoCWBRyPb8ywdJBQdKkkigoNHt5l-_w3UDFf6IPtFbwOE16dLKvHy0i9c',
                title: 'Hearing a Hiss',
                desc: 'Noticed a slow leak or a distinct hissing sound? We can catch punctures early before they become dangerous blowouts.',
              },
            ].map((s) => (
              <div key={s.title} className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform hover:-translate-y-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="w-full h-48 object-cover" src={s.img} alt={s.title} width={600} height={192} loading="lazy" />
                <div className="p-6">
                  <h3 className="font-h3 text-h3 mb-3">{s.title}</h3>
                  <p className="text-slate-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-xl bg-white border-y border-slate-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-h2 text-h2 mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'Can all punctures be repaired?', a: 'No, repairs are only safe if the puncture is within the central 75% of the tread area and hasn\'t damaged the sidewall. Our technician will assess this on arrival.' },
              { q: 'How long does a puncture repair take?', a: 'A professional roadside repair typically takes between 20 to 30 minutes once the technician arrives on the scene.' },
              { q: 'Is the repair permanent?', a: 'Yes, we use the plug-patch method which seals both the puncture hole and the internal lining, making it a permanent solution for the life of the tyre.' },
            ].map((faq) => (
              <details key={faq.q} className="group p-6 bg-surface-container rounded-xl cursor-pointer">
                <summary className="flex justify-between items-center font-h3 text-lg list-none">
                  {faq.q}
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <p className="mt-4 text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-xl bg-primary-container text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="font-h1 text-h1 mb-6">Need Immediate Assistance?</h2>
          <p className="font-body-lg text-body-lg mb-10 opacity-90">
            Call now and we&apos;ll dispatch a mobile tyre technician to your exact location immediately. We&apos;re ready when you are.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              className="bg-white text-primary font-bold text-call-to-action px-12 py-6 rounded-full flex items-center justify-center gap-3 shadow-2xl hover:scale-105 transition-transform"
              href="tel:07759708646"
            >
              <span className="material-symbols-outlined">phone_in_talk</span>
              07759 708 646
            </a>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_white,_transparent)]" />
        </div>
      </section>

      {/* Urgent FAB */}
      <a
        className="fixed bottom-6 right-6 w-16 h-16 bg-primary-container text-white rounded-full flex items-center justify-center shadow-2xl z-50 md:hidden active:scale-95 transition-all"
        href="tel:07759708646"
        aria-label="Call us"
      >
        <span className="material-symbols-outlined text-3xl fill-1">phone_in_talk</span>
      </a>
    </div>
  )
}
