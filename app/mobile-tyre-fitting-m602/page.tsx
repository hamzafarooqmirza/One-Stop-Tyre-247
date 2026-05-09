import ServicePage from '@/components/ServicePage'

export const metadata = {
  title: 'Mobile Tyre Fitting M602 | One Stop Tyres 24/7',
  description:
    'Fast and reliable mobile tyre fitting service available 24/7 on the M602 and surrounding areas. We get you back on the road in under 60 minutes.',
}

export default function M602Page() {
  return (
    <ServicePage
      title="Mobile Tyre Fitting on the M602"
      serviceName="M602 Mobile Tyre Fitting"
      heroSubheading="Fast and reliable mobile tyre fitting service available 24/7 on the M602 and surrounding areas. We get you back on the road in under 60 minutes."
      introBody="The M602 serves as a critical gateway between the M60/M62 interchange and the heart of Salford and Manchester. As one of the busiest commuter routes in the North West, a tyre puncture or blowout here can cause significant disruption and stress. Our specialized motorway response team is strategically positioned near Eccles and Salford to reach any point on the M602 within minutes. We understand the high-speed environment of the motorway and prioritize your safety above all else, arriving with full safety lighting and professional equipment."
      included={[
        'Emergency Roadside Replacement — we carry a massive stock of tyres from budget to premium brands (Michelin, Pirelli, Continental)',
        'All Sizes Stocked including Run-Flat tyres',
        'Locking Nut Removal',
        'Digital Balancing',
        'Puncture Repair to BSAU 159 standards',
        'TPMS Reset — modern sensor calibration to clear dashboard errors after fitting',
        'Jump Starts — high-power packs for flat batteries on the hard shoulder',
        'Valve Replacement — fixing slow leaks caused by corroded or damaged tyre valves',
      ]}
      whyChooseUs={[
        'Ultra-Fast ETA — based local to Eccles, our response times for the M602 are the fastest in Greater Manchester',
        'Safety First Protocols — highly trained in roadside safety and traffic management',
        'No Hidden Costs — the price we quote is the price you pay',
        '5.0 star rated service — "Incredible service on the M602 today. Arrived in 20 mins!" — Sarah T., Manchester',
        '24/7 availability — we operate 365 days a year, day and night',
      ]}
      benefits={[
        'Save Time — don\'t waste hours waiting for a tow truck or sitting in a garage waiting room',
        'Expert Staff — our technicians are certified professionals with years of roadside experience',
        'UK Wide Reach — our network covers the entire Greater Manchester area',
        'Safe Disposal — we take your old tyre away and dispose of it in an environmentally friendly manner',
        'If stranded, move to the hard shoulder or safe refuge area and wait behind the safety barrier before calling us',
      ]}
      whenYouNeedIt="If you are currently stranded on the M602, please move your vehicle to the hard shoulder or a safe refuge area. Exit the vehicle from the left-hand side and wait behind the safety barrier if possible before calling us. We prioritize motorway emergencies to ensure your exposure to traffic is minimized. Whether you're near the M60/M62 interchange at Junction 1, through Eccles and Winton, or approaching Junction 3 at Regent Road, Salford — we cover the entire M602 corridor 24/7."
      faqs={[
        {
          q: 'Where on the M602 do you cover?',
          a: 'We cover the entire length of the M602, from Junction 1 (M60/M62 interchange) all the way to Junction 3 at Regent Road, Salford. We also cover surrounding areas like Eccles, Winton, and Pendleton.',
        },
        {
          q: 'How quickly can you get to me on the M602?',
          a: 'Our average response time for the M602 corridor is 30-45 minutes. Traffic conditions in Salford can vary, but our local base gives us a distinct advantage over national providers.',
        },
        {
          q: 'Do you work through the night?',
          a: 'Yes, we operate 24 hours a day, 365 days a year. Motorway emergencies don\'t stick to a 9-to-5 schedule, and neither do we.',
        },
        {
          q: 'Can you fix a run-flat tyre?',
          a: 'Run-flat tyres generally cannot be repaired if they have been driven on while deflated, as the internal structure becomes compromised. However, we carry a wide range of replacement run-flat tyres to fit on-site.',
        },
      ]}
    />
  )
}
