import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Home Tyre Fitting | One Stop Tyres 24/7',
  description:
    'Professional home tyre fitting service available 24/7 across the UK. We come to your driveway — no garage visit needed.',
}

export default function HomeTyreFittingPage() {
  return (
    <ServicePage
      title="Home Tyre Fitting"
      serviceName="Home Tyre Fitting"
      heroSubheading="Professional, fast and reliable home tyre fitting available 24/7 across the UK. We come to your driveway so you never have to leave home."
      introBody="Home tyre fitting is the ultimate in convenience. Instead of driving to a garage, booking an appointment, and waiting around, you simply call us and our technician arrives at your home address with the right tyres and equipment. Whether it is a planned tyre change or an unexpected flat discovered on your driveway, we make the process completely hassle-free."
      included={[
        'On-site fitting at your home address',
        'Fast response — we arrive at a time that suits you',
        'Professional, certified technicians',
        'Fully equipped mobile vans with all tyre sizes',
        'TPMS sensor check and reset included',
        'Old tyre disposal handled by us',
        'Final torque check and safety inspection',
      ]}
      benefits={[
        'No garage visit — saves you time and effort',
        'No need to arrange transport or a courtesy car',
        'Fit tyres while you work from home or relax',
        'Available evenings and weekends',
        'Convenient, stress-free tyre replacement',
      ]}
      whenYouNeedIt="Home tyre fitting is ideal when you notice a slow puncture or worn tyres on your car at home, when you want to change your tyres for the season without the hassle of visiting a garage, or when you simply want the most convenient tyre service possible. It is also perfect for households with multiple vehicles or when your schedule makes a garage visit impractical."
      faqs={[
        {
          q: 'Do I need to be home when you arrive?',
          a: 'You or another responsible adult should be present to confirm the vehicle and payment. We will keep you updated on our estimated arrival time.',
        },
        {
          q: 'What do you need from me before you arrive?',
          a: 'Just your vehicle registration number, the tyre size (or we can look it up), your home address, and a contact number. We will take care of the rest.',
        },
        {
          q: 'Can you fit run-flat tyres at home?',
          a: 'Yes, we stock and can fit run-flat tyres for a range of vehicles. Please mention this when you call so we can bring the correct tyres and equipment.',
        },
        {
          q: 'How long does a home tyre fitting take?',
          a: 'A standard single tyre fitting typically takes around 20–30 minutes once the technician arrives. Fitting a full set of four takes approximately one hour.',
        },
        {
          q: 'Is home tyre fitting more expensive than a garage?',
          a: 'Our pricing is competitive and transparent. You receive the same professional service as a garage but with the added convenience of not leaving your home.',
        },
      ]}
    />
  )
}
