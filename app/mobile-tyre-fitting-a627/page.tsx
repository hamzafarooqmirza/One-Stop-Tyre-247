import ServicePage from '@/components/ServicePage'

export const metadata = {
  title: 'Mobile Tyre Fitting A627 | One Stop Tyres 24/7',
  description:
    'Fast and reliable mobile tyre fitting service available 24/7 on the A627 and surrounding areas. We come to you, wherever you are stranded.',
}

export default function A627Page() {
  return (
    <ServicePage
      title="Mobile Tyre Fitting on the A627"
      serviceName="A627 Mobile Tyre Fitting"
      heroSubheading="Fast and reliable mobile tyre fitting service available 24/7 on the A627 and surrounding areas. We come to you, wherever you are stranded."
      introBody="Getting a flat tyre on the A627 can be a stressful experience, especially during peak commuter hours or late at night. One Stop Tyres 24/7 provides a dedicated rapid-response team specifically for the A627 corridor. Our expert technicians are strategically positioned to reach you within 20-30 minutes, ensuring you aren't left waiting on a dangerous roadside. We handle everything from simple punctures to complete blowouts for cars, vans, and 4x4s, using industry-leading equipment and high-quality tyres to get you back on your journey safely."
      included={[
        'Emergency Puncture Repair — on-site repairs following BS AU 159 standards to save you time and money on the A627',
        'New Tyre Installation — all major brands and sizes, premium to budget',
        'Jump Starts — heavy-duty jump start services to get your engine running again instantly',
        'Locking Nut Removal — specialist tools to safely remove locking wheel nuts without damaging your alloys',
        'Wheel Balancing — every new tyre precision balanced on-site using mobile balancing units',
        'Full A627 corridor coverage including links to the M62 and surrounding Oldham/Rochdale areas',
        'Amber light protection and roadside safety protocols',
        '20-30 minute average response time',
      ]}
      whyChooseUs={[
        '20-30 Minute Arrival — local knowledge of the A627 ensures we find you fast',
        '24/7 Availability — day or night, weekends or bank holidays — we never close',
        'Certified Technicians — staff fully trained in high-speed roadside safety',
        'No Hidden Costs — the price we quote is the price you pay. Period.',
        'Garage Quality Service — our vans are fully equipped workshops providing the same level of service as a static garage',
      ]}
      benefits={[
        'Time Saving — we fix it on the spot so you don\'t wait for a tow truck to a potentially closed garage',
        'Garage Quality — our vans are fully equipped workshops providing static-garage-level service',
        'Full A627 Coverage — the entire length including links to the M62 and surrounding Oldham/Rochdale areas',
        'Commercial van tyres stocked — wide range of commercial-rated tyres for all popular van makes and models',
        'Amber light protection and strict roadside safety protocols for your safety',
      ]}
      whenYouNeedIt="Stuck in a dangerous position on the A627? Switch on your hazard lights, stay safe behind the crash barrier if possible, and call us immediately. Our dispatchers prioritize A627 emergency calls for the safety of you and other motorists. Our technicians are trained to work safely on high-speed roads. We use amber light protection and follow all roadside safety protocols. Whether it's a simple puncture or a complete blowout for your car, van, or 4x4 — we have the equipment and tyres ready."
      faqs={[
        {
          q: 'How fast can you reach me on the A627?',
          a: 'Our average response time for the A627 corridor is 20-30 minutes, depending on traffic conditions and your exact mileage.',
        },
        {
          q: 'Do you stock tyres for commercial vans?',
          a: 'Yes, we carry a wide range of commercial-rated tyres suitable for all popular van makes and models.',
        },
        {
          q: 'Can you fix a tyre on the A627 shoulder?',
          a: 'Yes, our technicians are trained to work safely on high-speed roads. We use amber light protection and follow all roadside safety protocols.',
        },
        {
          q: 'Do you cover the areas around the A627?',
          a: 'Yes, we cover the entire length of the A627, including all links to the M62 and surrounding Oldham and Rochdale areas.',
        },
      ]}
    />
  )
}
