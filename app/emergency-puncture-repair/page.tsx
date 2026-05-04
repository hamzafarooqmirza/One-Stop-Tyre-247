import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Emergency Puncture Repair | One Stop Tyres 24/7',
  description:
    '24/7 emergency puncture repair across the UK. Professional plug and patch repair to BS AU 159 standards — we come to you.',
}

export default function EmergencyPunctureRepairPage() {
  return (
    <ServicePage
      title="Emergency Puncture Repair"
      serviceName="Emergency Puncture Repair"
      heroSubheading="Professional, fast and reliable emergency puncture repair available 24/7 across the UK. We assess and repair on-site to save your tyre."
      introBody="Not every puncture means you need a new tyre. Our emergency puncture repair service assesses the damage on-site and, where the puncture meets the repairable criteria set out in BS AU 159, we perform a professional plug and patch repair. This saves you money and gets you back on the road quickly. If the tyre cannot be safely repaired, we carry replacement tyres and can fit one immediately."
      included={[
        'On-site puncture assessment at your location',
        'BS AU 159 compliant plug and patch repair where possible',
        'Fast response — typically 30–60 minutes',
        'Professional, certified technicians',
        'Replacement tyre fitting if repair is not viable',
        'TPMS reset after repair or replacement',
        'Full safety check before you drive away',
      ]}
      benefits={[
        'Save money — repair rather than replace where possible',
        'No need to drive on a damaged tyre or use a spare',
        'Fast, professional service at your location',
        'BS AU 159 compliant repairs for your safety',
        'Complete peace of mind before returning to the road',
      ]}
      whenYouNeedIt="Emergency puncture repair is needed when you hear a sudden loss of pressure, notice your vehicle pulling to one side, see a warning light on the dashboard, or discover a flat tyre when you return to your vehicle. Whether caused by a nail, screw, sharp debris, or a kerb strike, our technicians will assess the damage and perform the best possible solution on the spot."
      faqs={[
        {
          q: 'Can every puncture be repaired?',
          a: 'Not all punctures can be safely repaired. Repairs are only possible when the damage is in the central three-quarters of the tread area and the puncture is no larger than 6mm. Sidewall damage, large cuts, or run-flat tyre damage typically require a replacement.',
        },
        {
          q: 'What is BS AU 159?',
          a: 'BS AU 159 is the British Standard for the repair of pneumatic tyres. It defines the safe procedures and criteria for tyre repair. All our puncture repairs are carried out in full compliance with this standard.',
        },
        {
          q: 'How long does a puncture repair take?',
          a: 'A standard plug and patch repair takes approximately 30–45 minutes once the technician arrives. If a replacement tyre is required, fitting typically adds around 15–20 minutes.',
        },
        {
          q: 'Is it safe to drive on a repaired tyre?',
          a: 'Yes — a correctly performed BS AU 159 compliant repair is completely safe and restores the tyre to its full load-carrying and speed-rating capabilities.',
        },
        {
          q: 'What if I have a run-flat tyre?',
          a: 'Run-flat tyres that have been driven on while deflated cannot be repaired and must be replaced. Please let us know you have run-flat tyres when you call.',
        },
        {
          q: 'Can you repair a tyre that has been driven on while flat?',
          a: 'Driving on a flat tyre can cause internal damage that makes repair impossible or unsafe. Our technician will assess the tyre and advise honestly on whether repair or replacement is the right course of action.',
        },
      ]}
    />
  )
}
