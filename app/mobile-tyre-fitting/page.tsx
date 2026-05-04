import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Mobile Tyre Fitting | One Stop Tyres 24/7',
  description:
    'Emergency mobile tyre fitting available 24/7 across the UK. Fast response, professional technicians, fully equipped vans — we come to you.',
}

export default function MobileTyreFittingPage() {
  return (
    <ServicePage
      title="Mobile Tyre Fitting"
      serviceName="Mobile Tyre Fitting"
      heroSubheading="Professional, fast and reliable mobile tyre fitting available 24/7 across the UK. We come to you — wherever you are."
      introBody="Mobile tyre fitting brings the tyre garage directly to your location. Whether you have suffered a blowout on the motorway, a slow puncture at home, or a flat in a car park, our technicians arrive fully equipped to fit new tyres on-site. There is no need to arrange a tow or wait for a garage to open — we operate around the clock, every day of the year."
      included={[
        'On-site tyre fitting at your exact location',
        'Fast response — typically 30–60 minutes',
        'Professional, certified technicians',
        'Fully stocked mobile vans covering all common tyre sizes',
        'TPMS sensor check and reset included',
        'Safe tyre disposal of old tyres',
        'Wheel torque check after fitting',
      ]}
      benefits={[
        'Saves hours compared to visiting a garage',
        'No need to drive on a damaged or flat tyre',
        'Available at home, work, or roadside',
        'Fast assistance reduces time stranded',
        'Reliable, professional service you can count on',
      ]}
      whenYouNeedIt="You might need our mobile tyre fitting service when you wake up to a flat tyre and need to get to work, when a blowout occurs on the motorway late at night, when a slow puncture leaves you stranded in a car park, or simply when you want the convenience of new tyres fitted on your driveway without the hassle of visiting a tyre centre."
      faqs={[
        {
          q: 'How quickly can you reach me?',
          a: 'Our average response time is 30 to 60 minutes, depending on your location and current demand. We cover nationwide locations and always aim to reach you as fast as possible.',
        },
        {
          q: 'Do you carry my tyre size?',
          a: 'Our mobile units carry a wide range of popular tyre sizes. For less common or specialist sizes, we have access to supplier hubs with rapid availability, so we will always find the right tyre for your vehicle.',
        },
        {
          q: 'Can you fit tyres at any location?',
          a: 'Yes — we can fit tyres at your home driveway, workplace car park, on the roadside, in a motorway service station, or virtually anywhere else you are stranded. Safety permitting, we come to you.',
        },
        {
          q: 'What tyre brands do you stock?',
          a: 'We supply tyres from all major brands including Michelin, Pirelli, Continental, Goodyear, Bridgestone, Dunlop, and a range of budget options — all to suit your vehicle specification and budget.',
        },
        {
          q: 'Is your pricing transparent?',
          a: 'Yes. We provide a clear quote before any work begins, including the cost of the tyre and the fitting. There are no hidden call-out charges or surprise fees.',
        },
        {
          q: 'Do you work on all types of vehicles?',
          a: 'We work on cars, SUVs, vans, and light commercial vehicles. If you have a specialist or large vehicle, please call us and we will confirm availability.',
        },
      ]}
    />
  )
}
