/* ─── Shared "Why Choose Us" section (Bolton design) ─────── */

function FeatureItem({
  icon,
  title,
  desc,
  bg,
  iconColor,
}: {
  icon: string
  title: string
  desc: string
  bg: string
  iconColor: string
}) {
  return (
    <div className="flex gap-4">
      <div className={`${bg} w-12 h-12 rounded-full flex items-center justify-center shrink-0`}>
        <span className={`material-symbols-outlined ${iconColor}`}>{icon}</span>
      </div>
      <div>
        <h4 className="font-bold text-lg mb-2 text-[#0f172a]">{title}</h4>
        <p className="text-[#5c403c] leading-relaxed text-sm sm:text-base">{desc}</p>
      </div>
    </div>
  )
}

export default function WhyChooseUs({ city }: { city: string }) {
  return (
    <section className="bg-white py-16 sm:py-20 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Image */}
        <div className="order-2 lg:order-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="rounded-2xl shadow-xl w-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVrPZpsRrvVIy8OMnWu6bdNtm1zrmT1z3BmFFvgG3XDFgGAcHSHg2nTF2L0jBgiDxKgJhML6FQe-NhO_69cBTU1I_mQpOE3VgwK5JdxzLfJlCqvcC8-oZJm3TLe9XOPkyXpeSXUBz_kIyqlkgU9udXjzLJ0YudBfPvQf-IbGRKiiSiCBKwvAzyRC73a709IuwFWbfsCRhB8evWPpOv5e3AAzvBjLPjwChrWUuhDCwI3rVXE-J0vsviyl2U4KTSrVFwewj0g8K8d2A"
            alt="Clean, organized mobile tyre fitting van interior"
            width={800}
            height={600}
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Content */}
        <div className="order-1 lg:order-2">
          <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
            The Best Choice
          </span>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0f172a] mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            Why {city} Drivers Choose Us?
          </h2>
          <div className="space-y-8">
            <FeatureItem
              icon="speed"
              title={`Fastest Response in ${city}`}
              desc="Strategically based to reach you within 20-30 minutes — at home, work, or roadside."
              bg="bg-[#ffdad6]"
              iconColor="text-[#410002]"
            />
            <FeatureItem
              icon="sell"
              title="No Hidden Call-out Fees"
              desc="Transparent pricing given upfront. The price we quote over the phone is the price you pay on-site."
              bg="bg-[#c8e6ff]"
              iconColor="text-[#001e2e]"
            />
            <FeatureItem
              icon="verified_user"
              title="Fully Certified Technicians"
              desc="All our fitters are IMI certified and insured to work on everything from family hatchbacks to prestige electric vehicles."
              bg="bg-[#d7e2ff]"
              iconColor="text-[#001b3f]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
