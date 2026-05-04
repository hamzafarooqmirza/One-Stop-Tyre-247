export const metadata = {
  title: 'Mobile Tyre Fitting Oldham | 24/7 Emergency Service | One Stop Tyres 24/7',
  description: 'Fast and reliable mobile tyre fitting service available 24/7 in Oldham and surrounding areas. 20-30 min arrival in Chadderton, Failsworth, Royton, Shaw and more.',
}

export default function OldhamPage() {
  return (
    <div className="bg-[#fcf9f8] text-[#1c1b1b] overflow-x-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[600px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1c1b1b] via-[#1c1b1b]/70 to-transparent z-10"></div>
            <img
              alt="Mobile Tyre Fitting Oldham"
              className="w-full h-full object-cover object-center"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3WPBHLb8oI6NlUbetHGxrxiWajSXddJ-bMq4pXSVPaYFh3PHsgn8h-0s4S8J7GH0UAZC49r0ZOPOd8zn9mzDBHGPUfwUXg4IYvURi6te7Pm4lvXyaJUY6SuRJ6rb6uCQxg15PNiuqA5Ok8GbTsrdC_nNYlvlvwafoylbWszZHCZWoEKocqMKKMeY9zyVHzdry1KfQ5YcfiZSUNliH7NRGlfHQyNTAJDskniaZE4wCJGWbs0xVYMLXSLh2S9jTuRkmALRX7-tuz8I"
            />
          </div>
          <div className="relative z-20 max-w-7xl mx-auto px-6 py-16 w-full">
            <div className="max-w-2xl space-y-6">
              <span className="inline-block bg-[#dc2626] text-white px-4 py-1 font-bold text-sm rounded">24/7 EMERGENCY COVERAGE</span>
              <h1 className="work-sans text-4xl md:text-5xl font-bold text-white uppercase tracking-tighter">Mobile Tyre Fitting in Oldham</h1>
              <p className="text-lg text-slate-200 leading-relaxed">Fast and reliable mobile tyre fitting service available 24/7 in Oldham and surrounding areas. We come to you at home, work, or roadside.</p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a className="bg-[#dc2626] text-white work-sans font-bold text-lg h-14 px-10 flex items-center justify-center rounded-lg shadow-lg active:scale-95 transition-all" href="tel:0800000000">
                  CALL NOW
                </a>
                <a className="bg-[#3e5e95] text-white work-sans font-bold text-lg h-14 px-10 flex items-center justify-center rounded-lg shadow-lg active:scale-95 transition-all" href="#">
                  WHATSAPP US
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="work-sans text-3xl font-bold mb-6 text-[#1c1b1b]">Mobile Tyre Fitting Services in Oldham</h2>
              <div className="space-y-4 text-[#5c403c] leading-relaxed">
                <p>When you&apos;re stuck with a puncture or a blown tyre, you need a service that responds with high urgency. One Stop Tyres 24/7 provides premier local Oldham coverage, ensuring our technicians reach you within 20-30 minutes regardless of your location in the borough.</p>
                <p>Our rapid arrival times cover everything from Chadderton and Failsworth to Royton and Shaw. We pride ourselves on institutional trust and grit, delivering high-end roadside solutions to keep Oldham moving.</p>
              </div>
              <div className="mt-8 flex gap-6">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#b70011]">verified</span>
                  <span className="font-bold text-sm">Fully Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#b70011]">schedule</span>
                  <span className="font-bold text-sm">20-30 Min Arrival</span>
                </div>
              </div>
            </div>
            <div className="relative group">
              <img
                alt="Tyre Fitting Oldham"
                className="relative rounded-xl shadow-lg w-full h-[400px] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGUqgyBMUnoryR3k42WzyW0cCfAm5-_Hi6AgyoI3hH-PyhwbpKy8wrkQFKleuVf5ryiITSmPH33_gwCF4rSJk9HaraouhUHlTrsTmPQ93OiynJVxxp4zWc3-gJMs1O1rLHiEGRa6qGrNN1TQfap08QUTf-jCZgkLaBVxwpvB6JWJNqhw5obxx9bSrbbIw8JvwTZtXH1_1MQIjMdDy-ss82v-nQUhmCi3sLRECL3nehW2Ug5DOXXT8OYxPz4Og8dFA_r9RTKawdGUk"
              />
            </div>
          </div>
        </section>

        {/* Services Bento Grid */}
        <section className="bg-[#f6f3f2] py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="work-sans text-3xl font-bold text-center mb-16 text-[#1c1b1b] uppercase">Our Mobile Tyre Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Emergency Roadside - Large */}
              <div className="md:col-span-2 bg-white p-8 rounded-xl border border-[#e6bdb8] flex flex-col justify-between shadow-sm hover:border-[#b70011] transition-all group">
                <div>
                  <span className="material-symbols-outlined text-[#dc2626] text-4xl mb-4 block">car_repair</span>
                  <h3 className="work-sans text-2xl font-semibold mb-4">Emergency Roadside Fitting</h3>
                  <p className="text-[#5c403c] leading-relaxed">Stuck on the A62 or M60? Our emergency units are on standby 24/7 to replace your tyres anywhere in Oldham, getting you back on your journey safely.</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-6">
                  <span className="bg-[#005f88]/10 text-[#004c6d] px-4 py-1 text-xs font-bold rounded-full uppercase">Rapid Response</span>
                  <span className="bg-[#005f88]/10 text-[#004c6d] px-4 py-1 text-xs font-bold rounded-full uppercase">All Makes</span>
                </div>
              </div>
              {/* At-Home */}
              <div className="bg-[#3e5e95] p-8 rounded-xl text-white flex flex-col justify-between">
                <span className="material-symbols-outlined text-4xl mb-4">home_repair_service</span>
                <h3 className="work-sans text-2xl font-semibold mb-4">At-Home Service</h3>
                <p className="opacity-90 leading-relaxed">Enjoy the convenience of professional tyre fitting in your driveway. No more waiting at garages; we bring the shop to you.</p>
              </div>
              {/* Puncture */}
              <div className="bg-white p-8 rounded-xl border border-[#e6bdb8] shadow-sm hover:border-[#b70011] transition-all">
                <span className="material-symbols-outlined text-[#dc2626] text-4xl mb-4 block">build</span>
                <h3 className="work-sans text-2xl font-semibold mb-4">Puncture Repairs</h3>
                <p className="text-[#5c403c] leading-relaxed">Safe, legal puncture repairs that save you the cost of a new tyre whenever possible.</p>
              </div>
              {/* Commercial - Large */}
              <div className="md:col-span-2 bg-white p-8 rounded-xl border border-[#e6bdb8] flex flex-col md:flex-row gap-8 items-center shadow-sm hover:border-[#b70011] transition-all">
                <div className="flex-1">
                  <span className="material-symbols-outlined text-[#dc2626] text-4xl mb-4 block">tire_repair</span>
                  <h3 className="work-sans text-2xl font-semibold mb-4">Commercial &amp; Fleet</h3>
                  <p className="text-[#5c403c] leading-relaxed">We provide priority tyre maintenance and emergency repair services for local Oldham businesses and delivery fleets.</p>
                </div>
                <img
                  alt="Commercial Fleet Oldham"
                  className="w-48 h-48 rounded-lg object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy6fp3KlkGyHBX7y9aXFItpQOBYzSgBDR_v42mX_k0DOE79bflWDTAPChgefqoP_6Jf-BnkWuYDTIg9UySh_5H0_uEGBaMxRn2gHnqie_ndRTV5zJB81FIFrBzEHMbSM19zH0npOBEQs_HhazGwskp6-wwNjip0_6F-lLAq6BNXKB-Yp2L4YW_-niFVXTsyVxDTV6RXsN7FIVQg4OQFsLD7uQEyddLqUMlthy-atLgJMKroyFX_ppr2CFZVlm6eipalzE222GmFAE"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 max-w-7xl mx-auto px-6">
          <h2 className="work-sans text-3xl font-bold text-center mb-16 text-[#1c1b1b]">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-slate-200 -z-10"></div>
            {[
              { num: '01', title: 'Call Us', desc: 'Call our 24/7 hotline with your tyre size and location in Oldham.' },
              { num: '02', title: 'Get a Quote', desc: 'Receive a transparent, all-inclusive price with no hidden fees.' },
              { num: '03', title: 'Technician Dispatched', desc: 'Our nearest mobile unit heads to your location immediately.' },
              { num: '04', title: 'Back on Road', desc: 'Tyre fitted, balanced, and safety-checked. Pay and go!' },
            ].map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-white border-4 border-[#dc2626] rounded-full flex items-center justify-center mb-6 shadow-md group-hover:bg-[#dc2626] group-hover:text-white transition-all">
                  <span className="work-sans font-bold text-xl">{step.num}</span>
                </div>
                <h4 className="work-sans font-semibold text-sm mb-2 uppercase">{step.title}</h4>
                <p className="text-[#5c403c] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-[#1c1b1b] py-16 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="work-sans text-3xl font-bold mb-16 uppercase tracking-tight">Why Choose One Stop Tyres 24/7 in Oldham</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-6">
                {[
                  { title: 'Hyper-Local Experts', desc: 'Our technicians know Oldham like the back of their hands, navigating the back roads and busy hubs to reach you faster.', highlight: true },
                  { title: 'Massive Inventory', desc: 'From budget to premium brands like Michelin and Pirelli, we stock all sizes for cars, vans, and SUVs.', highlight: false },
                  { title: 'Fixed Pricing', desc: "The price we quote is the price you pay. No roadside haggling or emergency surcharges hidden in the small print.", highlight: false },
                ].map((item) => (
                  <div key={item.title} className={`flex gap-6 border-l-4 ${item.highlight ? 'border-[#dc2626]' : 'border-slate-700'} pl-6 py-2`}>
                    <div>
                      <h4 className="work-sans text-lg font-semibold mb-2">{item.title}</h4>
                      <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-slate-900 rounded-2xl overflow-hidden relative">
                <img
                  alt="Oldham Professional Service"
                  className="w-full h-full object-cover rounded-xl opacity-60"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD--y7QCIKBFoPb3b-qHgswMzwFNBk-SLRijjkNQ02gsBXXW4zg-XECjLlCPq9SJN68pKqy_TOrLTrwniWvNaywRN2zBw0sgdSfOOKbTo1V6an0QhBdDWZT7KOKql2ysSeIoR5cSzW3p0I4YErurctWWqEQ8HV3_FAXo3wkt2ujTJxAC8zZ5cJfKEo9zSWHGjfa5MZn83lj_HS5b-fZ3i8Xy-AvVeY8s3fM29feBwlKqhQs9rPR_EOGLjd9igHUghuoNJCN3nGybEs"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Emergency CTA */}
        <section className="bg-[#dc2626] py-16 text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined" style={{ fontSize: '300px' }}>emergency_home</span>
          </div>
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <h2 className="work-sans text-3xl font-bold mb-4 uppercase">Emergency Tyre Assistance in Oldham</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto leading-relaxed">Facing a blowout at night? Don&apos;t leave your car abandoned. Our 24-hour rapid response team is ready now.</p>
            <a className="inline-flex items-center gap-4 bg-white text-[#b70011] work-sans font-bold text-lg h-16 px-16 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all" href="tel:0800000000">
              <span className="material-symbols-outlined">phone_in_talk</span>
              CALL EMERGENCY LINE NOW
            </a>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 max-w-7xl mx-auto px-6">
          <h2 className="work-sans text-3xl font-bold text-center mb-16 uppercase">Benefits of Our Mobile Tyre Fitting</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'timer', title: 'Time Saving', desc: 'Skip the garage queues. We fit while you continue with your day at home or work.' },
              { icon: 'security', title: 'Maximized Safety', desc: 'Driving on a damaged tyre is dangerous. Let us come to you to eliminate the risk.' },
              { icon: 'payments', title: 'Zero Hidden Costs', desc: "Mobile fitting doesn't have to be expensive. Our competitive rates rival traditional garages." },
            ].map((benefit) => (
              <div key={benefit.title} className="p-8 bg-white rounded-xl shadow-sm text-center border border-slate-100">
                <div className="w-16 h-16 bg-[#ffdad6] text-[#b70011] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-3xl">{benefit.icon}</span>
                </div>
                <h3 className="work-sans text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-[#5c403c] leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#ebe7e7] py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="work-sans text-3xl font-bold text-center mb-16 uppercase">Oldham Service FAQ</h2>
            <div className="space-y-4">
              {[
                { q: 'How quickly can you reach me in Oldham?', a: 'Our average response time for Oldham (OL1 - OL9) is between 30 to 60 minutes. We have local technicians stationed near the town centre for immediate dispatch.' },
                { q: 'Do you cover Saddleworth and upland areas?', a: 'Yes, our 4x4-capable mobile units regularly service Greenfield, Uppermill, and Delph, even in challenging weather conditions.' },
                { q: 'Can you fit tyres for electric vehicles (EVs)?', a: 'Absolutely. We carry specialized EV-rated tyres and use the correct jacking equipment for Teslas and other electric car brands common in Oldham.' },
              ].map((faq) => (
                <details key={faq.q} className="group bg-white rounded-lg border border-[#e6bdb8] overflow-hidden">
                  <summary className="flex justify-between items-center p-6 cursor-pointer font-bold hover:bg-slate-50 list-none">
                    {faq.q}
                    <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                  </summary>
                  <div className="px-6 pb-6 text-[#5c403c] leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="work-sans text-3xl font-bold mb-4 uppercase text-[#1c1b1b]">Need Mobile Tyre Fitting in Oldham?</h2>
            <p className="text-lg mb-10 text-[#5c403c] leading-relaxed">Don&apos;t wait. Get a professional technician at your location in under an hour.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a className="bg-[#dc2626] text-white work-sans font-bold text-lg h-16 px-16 flex items-center justify-center rounded-lg shadow-xl active:scale-95 transition-all" href="tel:0800000000">
                CALL 0800 000 000
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
