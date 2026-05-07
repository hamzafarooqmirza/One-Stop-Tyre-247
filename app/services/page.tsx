import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Our Expert Mobile Services | One Stop Tyres 24/7',
  description:
    'Professional 24/7 roadside assistance across the UK. Mobile tyre fitting, jump starts, puncture repair, TPMS reset & more — we bring the garage to you.',
}

const services = [
  {
    href: '/mobile-tyre-fitting',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCElGeNknzc8tbZCtwXI6ShEouRpz5AJNdTuPAfhj3Iug5GwouWvmzE1C6aM66i4WdGax_dcTkOiaqi37yWVuhbfAI9W5tM6M6Rh5iV2Ri0JvwL4kKrd35wNxBNMiNpn1rbBVOMhm8SQ0QdpyxD2cUsmBxP3lW2ZpHTuhoZO8v3jKV6khvNCisX0gIB_EqS7GSHhDnUjjKyg0mvDRUVs3zrIdz32f6Nz-qq-FonAXxmLQLatjW4oE-lHHKz3KzelIzRJTMiMvIAyPw',
    title: 'Mobile Tyre Fitting',
    desc: 'Expert tyre fitting at your location, whether you\'re at work or stuck on the roadside. We handle all vehicle types and tyre brands.',
    badge: 'From £45',
    btnLabel: 'Book Now',
  },
  {
    href: '/home-tyre-fitting',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAs_JAhbnO42-k3pwlSz0TGgdO10Dzogn6t53OaAT0Eo397zbr0KI6XdDg0R1mwsTTqzKpTRcxH3GMVUPPe2zFX2Z6UfBxTZBfN6iEyF7vWjsJlpELJ4YEjmQ6W2h6txonOOduvoZbLX6UPFlyeWfSQTDK6WPDTFE9lB5pd_ZFOUzZl3GiJZoEB8KCeRjLLR5p1h0hV4eyaYE-DHIjThjlJipQixTz1MzZRZxx8JAWoiz3s0FgpJHmqSGQUL-XNHYSoXCZ7wXlZucM',
    title: 'Home Tyre Fitting',
    desc: "Don't waste time at a garage. We come to your home to fit new tyres while you relax or work, ensuring maximum convenience.",
    badge: 'All Sizes',
    btnLabel: 'Learn More',
  },
  {
    href: '/emergency-puncture-repair',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUzM2QMgRm1dhyIUbenteAsjgXGyXk3h4MdE5UIae1hRYywv3d0VrN4nVZZV9w4Mz-XTNev_wlAp7mVq6LRGtGi5R8SSqpleEVVvfjat1VR6uaaIwv2qDdJM8bK21QUruJfGp-3bJdCqBOiLFpZjOzvyQqnodctvoUtkfDPyQQ6AiXgN-IErK_4OQZVS-JHIDXA1I0W_HfixD-Oq6BdNj1yavFfx-I1AI45fbHNlknn6IhypQ5-BUm64Qi0ONoSpcJrRkFNtF7OyY',
    title: 'Emergency Puncture Repair',
    desc: 'Stuck with a flat? Our rapid response team will arrive quickly to repair your puncture and get you back on the road safely.',
    badge: '24/7 Support',
    btnLabel: 'Book Now',
  },
  {
    href: '/jump-start',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2gQqnD5XtI8I7EbQmVR-hR7HtTKVZDZ8GdCUvmvrSSUTxRVocGc5SSWZqBp9khgwjgpLgirzqVJgdDmjIt-BOhfhj-HiBF0-sZu8-1O20Aufjm4mq9TxvBWsn5gMbgkh0z4OZIiI1AHWTuLX661biMF4GgZpMozotzQ_zblrEFqg4dRJzfESK0Q4jv9LnqJei-DG55VHN1DHWTGbZT2PJ1xFEq2VVZ6OCEeF7y_Wmt9nGgIsDIui60Ju9uQpFL0WVPwKdjku4v6E',
    title: 'Jump Start',
    desc: 'Flat battery? Our technicians carry professional jumpstart equipment to revive your vehicle quickly and diagnose any issues.',
    badge: 'Fast Response',
    btnLabel: 'Learn More',
  },
  {
    href: '/tpms-reset',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCArJmMKP_sxgl4YpBFhjCqARE72y0R4JBpKlA8UvTRZx792pgiRNwX1EAhUU45c9rMvoCPaBh28FXZo7sFC9wTNkLW2bpzfiRpuk7d2MZFx3vHp0IqjtLGB9wahW3NYv5fEZt31dCqq0dDbcrI6tzzMX1b1C1Qr8fXgLaBGk398Pnr5EALBbd5-5eeDxwH2_QULRtSxiEZrlWH-E-eRbM8ncM4BHz2fL4OxcCEQylnxjEAaFwoebcmSd3TrML71jwCav9EhC-wtdE',
    title: 'TPMS Reset',
    desc: "Tyre pressure sensors acting up? We provide full TPMS diagnostics and resets to ensure your vehicle's safety systems are correct.",
    badge: 'Expert Reset',
    btnLabel: 'Book Now',
  },
  {
    href: '/locking-nut-removal',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWHgmjyky0L8OZK0amuT9Uzmu6wA1GsrabMiD_r-YRIk6R_x2eT7kp04pUPuY8BAM_PxI68UE9A7skfD71wPCTNep2GXLcH3cO1w9z6EhJ3RObeKbU4UyxbV0P9IXDcznooLBPMQMZf3veg7xe5hp2EUUtVDfZe2wl1WqLfG1G8RrflYEFPs9ARDIpMHx-tVdWEY23P0fuJHRxmonlEZS9jcSLYt7PX7udyIWgOiKkYNKcZy9gT_TeZDBn7HkRArShIyTfnzwX_ao',
    title: 'Locking Nut Removal',
    desc: "Lost your key? We use specialized equipment to safely remove locking wheel nuts without damaging your precious alloy wheels.",
    badge: 'Damage Free',
    btnLabel: 'Learn More',
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-surface font-body-md text-on-background antialiased">
      {/* Hero Section */}
      <section className="relative min-h-[400px] sm:min-h-[500px] lg:min-h-[614px] flex items-center justify-center overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply z-10" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSq0GYlxYlG6b5vlVNaXGT7ME_FD2gUyedBR-WE7hfWoO2kPlta2iR9qxSRFur7398_kjvVEPAyRLcNCGXUzcgJmM1n_MJs_8BYHZAudP1FHDADUJ9zJqof6MixfWmONNIWfLIIquw-g12805_q_NHWNaUNJJzEmWMwubhI-v1ilMOvHwfzJJsIFRM8bwlEn3fPQnQLc5pGb304YcqPXiEHLyFydx8hO54qoGbXfMBXUipKw9LDEHLD0Rl-TRu4jsuoZW2OQOxV0Y"
          alt="One Stop Tyres 24/7 mobile services van"
          width={1920}
          height={614}
          loading="eager"
        />
        <div className="relative z-20 text-center px-4 sm:px-5 max-w-4xl mx-auto">
          <h1 className="font-h1 text-2xl sm:text-3xl lg:text-h1 text-white mb-4 sm:mb-6 leading-tight">Our Expert Mobile Services</h1>
          <p className="font-body-lg text-sm sm:text-base lg:text-body-lg text-white/90 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Professional 24/7 roadside assistance across Manchester and Greater Manchester. We bring the garage to you, anywhere, anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              className="bg-primary text-on-primary font-call-to-action text-sm sm:text-base lg:text-call-to-action px-4 sm:px-lg py-3 sm:py-sm rounded-lg hover:bg-primary/90 transition-all shadow-lg uppercase text-center"
              href="tel:07759708646"
            >
              EMERGENCY ASSISTANCE
            </a>
            <a
              className="bg-white/10 backdrop-blur-md border-2 border-white text-white font-call-to-action text-sm sm:text-base lg:text-call-to-action px-4 sm:px-lg py-3 sm:py-sm rounded-lg hover:bg-white hover:text-secondary transition-all uppercase text-center"
              href="#services"
            >
              VIEW ALL SERVICES
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-12 sm:py-16 lg:py-xl px-4 sm:px-5 max-w-7xl mx-auto" id="services">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-h2 text-2xl sm:text-3xl lg:text-h2 text-secondary mb-4">Complete Roadside Solutions</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((card) => (
            <a
              key={card.href}
              href={card.href}
              className="group bg-white rounded-xl shadow-[0_4px_20px_rgba(0,45,98,0.05)] overflow-hidden border border-gray-100 hover:border-secondary transition-all"
            >
              <div className="aspect-video overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={card.img}
                  alt={card.title}
                  width={600}
                  height={338}
                  loading="lazy"
                />
              </div>
              <div className="p-4 sm:p-md">
                <h3 className="font-h3 text-lg sm:text-xl lg:text-h3 text-secondary mb-2 sm:mb-3">{card.title}</h3>
                <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant mb-4 sm:mb-6">{card.desc}</p>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
                  <span className="font-label-bold text-xs sm:text-label-bold text-primary bg-primary/5 px-3 py-1 rounded-full">
                    {card.badge}
                  </span>
                  <span className="bg-primary text-on-primary font-label-bold text-xs sm:text-label-bold px-3 sm:px-md py-2 sm:py-2.5 rounded-lg hover:bg-primary/90 transition-all uppercase">
                    {card.btnLabel}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Why Choose Us / Trust Section */}
      <section className="bg-surface-container py-12 sm:py-16 lg:py-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-5">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-lg">
            <div className="w-full lg:w-1/2">
              <h2 className="font-h2 text-2xl sm:text-3xl lg:text-h2 text-secondary mb-4 sm:mb-6">Why Manchester Trusts One Stop Tyres 24/7</h2>
              <p className="font-body-lg text-sm sm:text-base lg:text-body-lg text-on-surface-variant mb-6 sm:mb-8">
                We understand that a vehicle breakdown is more than just a mechanical issue—it&apos;s a stressful disruption to your day.
                That&apos;s why we&apos;ve built our service on three pillars of excellence.
              </p>
              <div className="space-y-5 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-primary/10 p-2.5 sm:p-3 rounded-lg shrink-0">
                    <span className="material-symbols-outlined text-primary text-xl sm:text-2xl">speed</span>
                  </div>
                  <div>
                    <h4 className="font-label-bold text-sm sm:text-label-bold text-secondary sm:text-lg mb-1">Ultra-Fast Response</h4>
                    <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant">We aim for 20-30 minute arrival times across all UK districts.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-primary/10 p-2.5 sm:p-3 rounded-lg shrink-0">
                    <span className="material-symbols-outlined text-primary text-xl sm:text-2xl">schedule</span>
                  </div>
                  <div>
                    <h4 className="font-label-bold text-sm sm:text-label-bold text-secondary sm:text-lg mb-1">True 24/7 Availability</h4>
                    <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant">Midnight or midday, Sunday or Bank Holiday—our technicians are always on standby.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-primary/10 p-2.5 sm:p-3 rounded-lg shrink-0">
                    <span className="material-symbols-outlined text-primary text-xl sm:text-2xl">construction</span>
                  </div>
                  <div>
                    <h4 className="font-label-bold text-sm sm:text-label-bold text-secondary sm:text-lg mb-1">Certified Technicians</h4>
                    <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant">Our team is fully insured and highly experienced with all makes and models.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="relative rounded-2xl shadow-xl w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMLGLpZ4ZKUqHAkVGDqkL2f86zQgkGJjC8sfPRHpFev14mtEUsv40HTeNCi92ur14aJr5DZv4x-u83YoV6RZhcB_VbHhvJ4pFWTJbNK-Bm0hNprLSrVFnNJcBT7W0ExEnHca7UeL_Lbz1AttPkgXLUJ79_VF6nLpGhttpQDmi9ISlUjVpfAmATerQXI4vm_NjJ07phU4zYgML5mu879Aeq2Bu9rhcc3JerikOxUwIrluK5bab_Y6S2xK9IqVtFpHn7rEtsKoaR0yE"
                alt="Professional tyre technician from One Stop Tyres 24/7"
                width={800}
                height={500}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA Section */}
      <section className="px-4 sm:px-5 mb-12 sm:mb-16 lg:mb-xl">
        <div className="max-w-7xl mx-auto bg-primary rounded-2xl overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 p-4 sm:p-8 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[100px] sm:text-[150px] lg:text-[200px]">tire_repair</span>
          </div>
          <div className="p-6 sm:p-lg lg:p-xl flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-md relative z-10">
            <div className="text-white text-center sm:text-left">
              <h2 className="font-h1 text-2xl sm:text-3xl lg:text-h1 mb-2">Need Help Immediately?</h2>
              <p className="font-body-lg text-sm sm:text-base lg:text-body-lg text-white/90">Speak directly to a technician for an instant quote and arrival time.</p>
              <div className="mt-4 sm:mt-6 flex items-center justify-center sm:justify-start gap-3 sm:gap-4">
                <span className="material-symbols-outlined text-2xl sm:text-3xl lg:text-4xl">call</span>
                <span className="text-xl sm:text-2xl lg:text-4xl font-black font-h1">07759 708 646</span>
              </div>
            </div>
            <a
              className="bg-white text-primary font-h2 text-base sm:text-xl lg:text-h2 px-6 sm:px-10 lg:px-xl py-3 sm:py-4 lg:py-md rounded-xl hover:bg-gray-100 transition-all uppercase shadow-lg text-center w-full sm:w-auto sm:min-w-[200px] lg:min-w-[240px]"
              href="tel:07759708646"
            >
              CALL NOW
            </a>
          </div>
        </div>
      </section>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 sm:px-4 py-2 bg-white border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,45,98,0.05)] rounded-t-2xl">
        <a className="flex flex-col items-center justify-center text-gray-500 py-1 px-2" href="/">
          <span className="material-symbols-outlined text-xl">home</span>
          <span className="text-[9px] sm:text-[10px] font-semibold font-h3">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center bg-red-50 text-red-600 rounded-xl px-2 sm:px-3 py-1.5" href="/services">
          <span className="material-symbols-outlined text-xl">tire_repair</span>
          <span className="text-[9px] sm:text-[10px] font-semibold font-h3">Services</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-500 py-1 px-2" href="tel:07759708646">
          <span className="material-symbols-outlined text-xl">emergency</span>
          <span className="text-[9px] sm:text-[10px] font-semibold font-h3">Emergency</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-500 py-1 px-2" href="#">
          <span className="material-symbols-outlined text-xl">person</span>
          <span className="text-[9px] sm:text-[10px] font-semibold font-h3">Account</span>
        </a>
      </nav>


    </div>
  )
}
