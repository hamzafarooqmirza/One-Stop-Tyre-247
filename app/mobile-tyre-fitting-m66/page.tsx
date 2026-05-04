import ServicePage from '@/components/ServicePage'

export const metadata = {
  title: 'Mobile Tyre Fitting M66 Motorway | One Stop Tyres 24/7',
  description:
    'Stuck on the M66? Whether you\'re near Bury, Ramsbottom, or the Edenfield bypass, our emergency tyre technicians arrive in 30-60 minutes.',
}

export default function M66Page() {
  return (
    <ServicePage
      title="Rapid Mobile Tyre Fitting M66 Motorway"
      serviceName="M66 Mobile Tyre Fitting"
      heroSubheading="Stuck on the M66? Whether you're near Bury, Ramsbottom, or the Edenfield bypass, our emergency tyre technicians arrive in 30-60 minutes to get you back on the road safely."
      introBody="The M66 is a critical link between the M60 Manchester ring road and the East Lancashire hills. We operate 24/7 across the entire M66 corridor, providing manufacturer-spec tyre replacements and high-speed puncture repairs. Our Bury-based fleet gives us the fastest arrival times on the M66, covering all junctions from J1 Summerseat/Ramsbottom through to J4 Simister Island (M60/M62). We also cover the A663 and A56 Edenfield Bypass which feeds directly into the northern end of the M66."
      included={[
        'Express Puncture Repair — BS AU 159 compliant repairs with pressure monitoring sensor reset and high-speed balancing included',
        'Locking Nut Removal — specialist extraction tools for all makes and models without damaging your alloys',
        'Jump Starts — heavy-duty 12V/24V jump start packs for cars, vans, and commercial vehicles',
        'Full M66 corridor coverage — J1 Summerseat/Ramsbottom, J2 Bury Town Centre, J3 Pilsworth/Heywood, J4 Simister Island',
        'A663 and A56 Edenfield Bypass coverage',
        'All tyre sizes in stock — budget to premium brands including Michelin and Pirelli',
        'Average 35-minute arrival via our Bury-based local fleet',
        'Request callback service available',
      ]}
      whyChooseUs={[
        '30-60 Min Response — fastest arrival times on the M66 via our local Bury-based fleet',
        'All Sizes In Stock — from budget to premium brands like Michelin and Pirelli for all rims',
        'Fair Transparent Pricing — no hidden call-out fees; the price we quote is the price you pay',
        'Safety First — highly trained technicians following strict motorway safety protocols',
        'Average arrival time of 35 minutes — the fastest on the M66 corridor',
      ]}
      benefits={[
        'Bury-based fleet for fastest possible M66 response times',
        'Junction-by-junction coverage across the full M66 from Simister Island to Ramsbottom',
        'A663 and A56 Edenfield Bypass coverage for northern approach roads',
        'BS AU 159 compliant puncture repairs with balancing included',
        'Locking nut removal without alloy damage using specialist extraction tools',
      ]}
      whenYouNeedIt="Whether you're stuck near Summerseat and Ramsbottom at J1, near Bury Town Centre at J2, around Pilsworth and Heywood at J3, or near the busy Simister Island M60/M62 interchange at J4 — our Bury-based team is strategically placed to reach you faster than any national competitor. We also cover the A663 and A56 Edenfield Bypass for vehicles approaching the northern end of the M66."
      faqs={[
        {
          q: 'What is your average arrival time on the M66?',
          a: 'Our average arrival time is 35 minutes due to our Bury-based fleet, which is strategically positioned for fastest response across all M66 junctions.',
        },
        {
          q: 'Do you cover all M66 junctions?',
          a: 'Yes, we cover all junctions: J1 Summerseat/Ramsbottom, J2 Bury Town Centre, J3 Pilsworth/Heywood, and J4 Simister Island (M60/M62 interchange). We also cover the A663 and A56 Edenfield Bypass.',
        },
        {
          q: 'Can you remove locking wheel nuts on the M66?',
          a: 'Yes, we carry specialist extraction tools for all makes and models. We can safely remove locking wheel nuts without damaging your alloys, even at the roadside.',
        },
        {
          q: 'Do you repair punctures or only replace tyres on the M66?',
          a: 'We do both. If your tyre is repairable under BS AU 159 standards, we\'ll fix it on-site including a pressure monitoring sensor reset and high-speed balancing — saving you the cost of a new tyre.',
        },
      ]}
    />
  )
}
