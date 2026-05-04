import ServicePage from '@/components/ServicePage'

export const metadata = {
  title: 'M62 Mobile Tyre Fitting | 24/7 Emergency Roadside Assistance | One Stop Tyres 24/7',
  description:
    'Stuck on the M62? From Liverpool to Hull, we provide 24/7 emergency tyre repairs and replacements with a 30-60 minute arrival time.',
}

export default function M62Page() {
  return (
    <ServicePage
      title="M62 Mobile Tyre Fitting & Roadside Assistance"
      serviceName="M62 Mobile Tyre Fitting"
      heroSubheading="Stuck on the M62? From Liverpool to Hull, we provide 24/7 emergency tyre repairs and replacements with a 30-60 minute arrival time. Don't wait on the hard shoulder — call the experts now."
      introBody="Crossing the spine of England, the M62 is vital and volatile. We cover every mile, every junction, and every service station across the Trans-Pennine route. Our strategic positioning near major junctions like J18 (Simister Island) and J22 (Rishworth Moor) ensures we reach you before anyone else. From commercial vans crossing the Pennines to standard family cars, we carry a vast range of premium and budget tyres in every van."
      included={[
        'Emergency tyre replacement for all vehicle types — cars, vans, and commercial vehicles',
        'All tyre sizes stocked — premium and budget brands in every van',
        'Puncture repairs to British Standards',
        'Full M62 corridor coverage from Liverpool to Hull',
        'Greater Manchester sections — Eccles, Simister Island, Rochdale (J18–J21)',
        'Pennine Crossing — high-altitude all-weather assistance through Scammonden Water and Rishworth Moor',
        'West & East Yorkshire — Huddersfield, Leeds, Ferrybridge, and through to the Humber Bridge',
        'Service station attendance — Birch Services, Hartshead Moor, Ferrybridge, and Burtonwood',
      ]}
      whyChooseUs={[
        '30-60 minute arrival — strategic positioning near major junctions like J18 and J22',
        'All tyre sizes in stock — from budget to premium for all vehicle types',
        'M62 Safety Experts — specifically trained for high-speed roadside recovery and hazardous hard shoulder repairs',
        '"Lost a tyre near Ferrybridge at 2 AM. One Stop Tyres were there within 40 minutes. Truly a lifesaver." — Dave H., Haulage Driver',
        '24/7 emergency dispatch — every motorway call-out treated as high-priority',
      ]}
      benefits={[
        'Junction-by-junction coverage across the entire Trans-Pennine route',
        'All-weather capability for high-altitude Pennine conditions',
        'Service station fitting — we attend all major M62 services',
        'Commercial vehicle specialists — large stock of commercial-rated tyres',
        'Fastest response in the region due to strategic depot positioning',
      ]}
      whenYouNeedIt="Whether you've suffered a tyre blowout near Simister Island, a puncture on the Pennine crossing, or a flat near Ferrybridge — our team is ready to respond immediately. If you've managed to limp your vehicle to a service station at Birch, Hartshead Moor, Ferrybridge, or Burtonwood, we can perform a full tyre replacement or puncture repair in the car park while you wait. Our dispatchers treat every M62 motorway call-out as a high-priority emergency."
      faqs={[
        {
          q: 'Do you cover the entire length of the M62?',
          a: 'Yes, we cover the full M62 from its western end near Liverpool all the way through Greater Manchester, across the Pennines, through West Yorkshire and East Yorkshire to the Humber Bridge area.',
        },
        {
          q: 'Can you attend the M62 service stations?',
          a: 'Absolutely. We attend Birch Services, Hartshead Moor Services, Ferrybridge Services, and Burtonwood Services. If you can safely reach any of these, we can fit your tyre in the car park.',
        },
        {
          q: 'What is your average response time on the M62?',
          a: 'Our average arrival time is 30-60 minutes. Our strategic positioning near J18 (Simister Island) and J22 (Rishworth Moor) ensures we can reach most M62 locations quickly.',
        },
        {
          q: 'Do you carry commercial van tyres for the M62?',
          a: 'Yes, every van in our fleet carries a range of commercial-rated tyres suitable for all popular van makes and models used on the M62 Trans-Pennine route.',
        },
      ]}
    />
  )
}
