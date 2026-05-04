import ServicePage from '@/components/ServicePage'

export const metadata = {
  title: 'Mobile Tyre Fitting M67 | One Stop Tyres 24/7',
  description:
    'Fast and reliable mobile tyre fitting service available 24/7 on the M67 and surrounding areas in Tameside, Hyde, and Denton.',
}

export default function M67Page() {
  return (
    <ServicePage
      title="Mobile Tyre Fitting on the M67"
      serviceName="M67 Mobile Tyre Fitting"
      heroSubheading="Fast and reliable mobile tyre fitting service available 24/7 on the M67 and surrounding areas. We get you back on the road in under 60 minutes."
      introBody="Stranded on the M67? Whether you are a daily commuter from Tameside heading towards Manchester or traveling through Hyde and Denton, our emergency tyre fitting units are strategically positioned to reach you within 20-30 minutes. We understand that a flat tyre on a busy motorway is more than just an inconvenience — it's a safety hazard. Our expert technicians are equipped with state-of-the-art tools to handle tyre emergencies on the hard shoulder or at nearby motorway services safely and efficiently."
      included={[
        'Emergency Roadside Replacement — 24/7 rapid response for tyre blowouts and punctures on the M67 motorway hard shoulder',
        'Puncture Repair — safe, British Standard repairs carried out on-site if your tyre is salvageable',
        'Mobile Fitting — for all tyre sizes including run-flats and SUV tyres',
        'All major tyre brands stocked — budget to premium',
        'Full coverage from J1 (M60 interchange at Denton) through to J4 (Hattersley/Mottram)',
        'High-visibility lighting and safety equipment for hard shoulder work',
        'Average arrival time of 20-30 minutes on the M67 corridor',
        'Specialized local knowledge of M67 junctions and Tameside routes',
      ]}
      whyChooseUs={[
        'Rapid Response Time — average arrival time of 20-30 minutes on the M67 corridor',
        'All Tyre Types Stocked — from budget to premium brands for all major vehicles',
        'Safety Certified — all technicians fully trained for high-speed motorway environments',
        '24/7 availability — day and night, weekends and bank holidays',
        'Local knowledge of the M67, Hyde, Denton, Hattersley, and Tameside area',
      ]}
      benefits={[
        'Save Time — no need to wait for a tow truck or visit a garage',
        'Fixed Pricing — transparent quotes with no hidden call-out fees',
        'Maximum Safety — avoid driving on a dangerous space-saver or flat tyre',
        'Tameside Coverage — specialized local knowledge of M67 junctions and routes',
        'Statistics: 24/7 availability, 60 min max arrival, 100% mobile units, UK standard safety protocols',
      ]}
      whenYouNeedIt="In an emergency on the M67, switch on your hazard lights, move to the hard shoulder, and exit the vehicle via the left-hand door. Call us immediately for priority dispatch. Our units are based near Denton and Hyde, allowing us to typically reach any point on the M67 within 30 to 60 minutes. We cover the full length from the M60 interchange at Denton (J1) through to the end of the motorway at Hattersley/Mottram (J4)."
      faqs={[
        {
          q: 'How quickly can you get to the M67?',
          a: 'Our units are based near Denton and Hyde, allowing us to typically reach any point on the M67 within 30 to 60 minutes, depending on traffic conditions.',
        },
        {
          q: 'Do you cover all junctions of the M67?',
          a: 'Yes, we cover the full length from the M60 interchange at Denton (J1) through to the end of the motorway at Hattersley/Mottram (J4).',
        },
        {
          q: 'Can you change a tyre at the roadside safely?',
          a: 'Absolutely. Our technicians are trained in motorway safety protocols and our vans are equipped with high-visibility lighting and safety equipment to ensure a secure work area.',
        },
        {
          q: 'Do you cover the surrounding Tameside areas?',
          a: 'Yes, in addition to the M67 motorway itself, we cover the surrounding Tameside areas including Hyde, Denton, Hattersley, Mottram, and Stalybridge.',
        },
      ]}
    />
  )
}
