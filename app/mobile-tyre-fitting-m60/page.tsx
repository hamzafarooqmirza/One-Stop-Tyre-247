import ServicePage from '@/components/ServicePage'

export const metadata = {
  title: 'Mobile Tyre Fitting M60 | 24/7 Emergency Roadside Assistance | One Stop Tyres 24/7',
  description:
    'Fast and reliable mobile tyre fitting service available 24/7 on the M60 and surrounding junctions. We arrive in 20-30 minutes to get you back on your journey safely.',
}

export default function M60Page() {
  return (
    <ServicePage
      title="Mobile Tyre Fitting on the M60"
      serviceName="M60 Mobile Tyre Fitting"
      heroSubheading="Fast and reliable mobile tyre fitting service available 24/7 on the M60 and surrounding junctions. We arrive in 20-30 minutes to get you back on your journey safely."
      introBody="Being stranded on the M60 motorway is not only stressful but can be incredibly dangerous. Our rapid-response team specializes in motorway roadside assistance, ensuring your vehicle is secured and your tyres are replaced with the highest safety standards in mind. Whether you're near the Trafford Centre, Stockport, or Prestwich, we are just a call away. We provide 24/7 coverage from Junction 1 in Stockport all the way around to Junction 27, including intersections with the M62, M6, and M56."
      included={[
        'Emergency Roadside Fitting — on-the-spot tyre replacement for cars, vans, and SUVs directly on the M60 hard shoulder or safe zones',
        'Puncture Repairs — safe, British Standard puncture repairs if your tyre can be salvaged',
        'Jump Starts — heavy-duty jump start equipment for motorway stalls',
        'Premium brands stocked — Michelin, Pirelli, and budget options for all vehicles',
        'Full Junction 1–27 coverage around the entire M60 ring road',
        'Average arrival time of 20-30 minutes',
        'Certified technicians qualified for motorway working environments',
        'No hidden costs — transparent pricing provided over the phone before dispatch',
      ]}
      whyChooseUs={[
        'Certified Technicians — all fitters are qualified for motorway working environments',
        'Massive Tyre Inventory — we stock premium brands (Michelin, Pirelli) and budget options for all vehicles',
        'No Hidden Costs — transparent pricing provided over the phone before we dispatch',
        'Priority Dispatch — M60 call-outs are treated as high-urgency emergencies',
        '20-30 minute average arrival time across the full M60 ring road',
      ]}
      benefits={[
        '20-30 Min Arrival — fastest possible response across the M60 ring road',
        '24/7 Availability — we never close, including weekends and bank holidays',
        'Full M60 Coverage — all 27 junctions including M62, M6, and M56 intersections',
        'Competitive Pricing — fair, upfront quotes with no surprises on arrival',
        'Use your phone\'s GPS, What3Words, or blue motorway marker signs to share your location',
      ]}
      whenYouNeedIt="Don't wait in a dangerous position on the M60. Our priority dispatch system treats M60 call-outs as high-urgency. If you're stranded on the hard shoulder near the Trafford Centre, Stockport, Prestwich, or any point on the ring road, call us immediately. Our technicians use specialist high-visibility vans and safety equipment. We always advise you to wait behind the crash barrier while we work. You can share your location using the blue driver location signs every 500m, or send your What3Words or GPS location via WhatsApp."
      faqs={[
        {
          q: 'Do you cover the entire M60 ring road?',
          a: 'Yes, we provide 24/7 coverage from Junction 1 in Stockport all the way around to Junction 27, including intersections with the M62, M6, and M56.',
        },
        {
          q: 'How do I tell you my location on the motorway?',
          a: 'You can use the blue driver location signs (markers) every 500m, or simply send us your What3Words or GPS location via WhatsApp.',
        },
        {
          q: 'Is it safe to change a tyre on the M60?',
          a: 'Our technicians use specialist high-visibility vans and safety equipment. We always advise you to wait behind the crash barrier while we work.',
        },
        {
          q: 'What is your average arrival time on the M60?',
          a: 'Our average arrival time across the M60 ring road is 20-30 minutes. Our central Greater Manchester location gives us quick access to all junctions.',
        },
      ]}
    />
  )
}
