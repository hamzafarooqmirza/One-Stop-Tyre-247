import ServicePage from '@/components/ServicePage'

export const metadata = {
  title: 'Mobile Tyre Fitting M61 | 24/7 Emergency Roadside Assistance | One Stop Tyres 24/7',
  description:
    'Fast and reliable mobile tyre fitting service available 24/7 on the M61 and surrounding areas. We get you back on the road in 60 minutes or less.',
}

export default function M61Page() {
  return (
    <ServicePage
      title="Mobile Tyre Fitting on the M61"
      serviceName="M61 Mobile Tyre Fitting"
      heroSubheading="Fast and reliable mobile tyre fitting service available 24/7 on the M61 and surrounding areas. We get you back on the road in 60 minutes or less."
      introBody="The M61 is a critical artery connecting Bolton, Manchester, and Preston. Traffic volume is high, and a tyre puncture can happen at any moment, leaving you stranded in a dangerous position. At One Stop Tyres 24/7, we specialise in rapid-response mobile tyre fitting specifically for the M61 corridor. Our fleet of fully equipped vans is strategically positioned near major junctions to ensure that whether you're heading south towards the M60 or north towards the M6, help is never more than a phone call away. Our main depot is located in the Bolton area, and we patrol the M61 24/7."
      included={[
        'Emergency Roadside Replacement — instant on-site replacements for all passenger and light commercial vehicles, all major brands, run-flat tyres, locking nut removal, and high performance tyres',
        'Puncture Repair — on-site repairs following BSAU159 standards, from £45.00',
        'Home or Work Fitting — schedule a fitting at your convenience near the M61',
        'Jump Starts — heavy-duty jump packs to get your engine turning instantly',
        'Wheel Balancing — digital balancing included with every fitting for a smooth, vibration-free drive',
        'Live GPS tracking link sent so you can track our technician\'s arrival',
        'NTDA-certified technicians for your total peace of mind',
        '15+ years of experience in roadside tyre fitting',
      ]}
      whyChooseUs={[
        'Unbeatable Speed — located just off J4 and J6, we hit the M61 faster than any national competitor',
        'Transparent Pricing — no hidden call-out fees; the price we quote over the phone is the price you pay',
        'Fully Certified — all roadside work carried out by NTDA-certified technicians',
        '15+ years experience in emergency roadside tyre fitting',
        'M61 emergency priority — we prioritise M61 emergencies above all standard call-outs',
      ]}
      benefits={[
        'Average M61 arrival time of 35-45 minutes',
        'Bolton depot gives fastest access to J4, J5, and J6 — typically within 30 minutes',
        'Full coverage from Junction 1 (M60 Interchange) to Junction 8 (Chorley/M6)',
        'Chapter 8 high-visibility lighting for safe hard shoulder working',
        'Don\'t wait hours for a recovery truck — we\'re already on the road',
      ]}
      whenYouNeedIt="Are you in a dangerous location on the M61? Stay in your vehicle, call us immediately, and we will dispatch our closest technician. We prioritise M61 emergencies above all standard call-outs. Our vans are equipped with high-visibility Chapter 8 lighting and our technicians are trained in motorway safety protocols. We cover the entire length of the M61, from Junction 1 (M60 Interchange) right through to Junction 8 (Chorley/M6), including common hotspots like the Rivington Services."
      faqs={[
        {
          q: 'Which junctions of the M61 do you cover?',
          a: 'We cover the entire length of the M61, from Junction 1 (M60 Interchange) right through to Junction 8 (Chorley/M6). This includes common hotspots like the Rivington Services.',
        },
        {
          q: 'Can you fix a tyre on the hard shoulder?',
          a: 'Yes, our vans are equipped with high-visibility Chapter 8 lighting and our technicians are trained in motorway safety protocols. We can safely replace your tyre while you wait in a safe area.',
        },
        {
          q: 'What is your average arrival time to Bolton M61?',
          a: 'Because our main depot is located in the Bolton area, we typically reach M61 Junction 4, 5, and 6 within 30 minutes of your call.',
        },
        {
          q: 'Do you provide a live tracking link?',
          a: 'Yes, after we dispatch our technician to your M61 location, you will receive a GPS tracking link so you can monitor their arrival in real time.',
        },
      ]}
    />
  )
}
