import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Jump Start Service | One Stop Tyres 24/7',
  description:
    'Fast 24/7 jump start service across the UK. Dead battery? Our technicians reach you quickly and get your vehicle running again.',
}

export default function JumpStartPage() {
  return (
    <ServicePage
      title="Jump Start"
      serviceName="Jump Start"
      heroSubheading="Professional, fast and reliable jump start service available 24/7 across the UK. Dead battery? We will get you moving again."
      introBody="A flat or dead battery is one of the most common reasons drivers find themselves stranded. It can happen after leaving your lights on, in cold weather, or simply because your battery has reached the end of its life. Our jump start service gets your vehicle running again quickly and safely, without causing damage to your vehicle's electrical system."
      included={[
        'On-site jump start at your exact location',
        'Fast response — typically 30–60 minutes',
        'Professional, certified technicians',
        'Safe jump-start procedure for all vehicle types',
        'Battery health check after jump start',
        'Advice on whether your battery needs replacing',
        'Available for cars, SUVs, and light commercial vehicles',
      ]}
      benefits={[
        'Saves time versus waiting for a breakdown service',
        'No risk of incorrect jump-start damaging your electrics',
        'Available at home, work, or roadside',
        'Fast assistance — get back on the road quickly',
        'Honest advice on battery condition with no upselling pressure',
      ]}
      whenYouNeedIt="You might need a jump start when you turn the key and hear nothing but a clicking sound, when your car cranks slowly but will not start, when you have left your headlights on overnight, or after a long period of the vehicle sitting unused. Cold winter mornings are a particularly common time for battery failures, and our 24/7 service means help is always available."
      faqs={[
        {
          q: 'Will a jump start damage my car?',
          a: 'When performed correctly by a professional, a jump start is safe for all modern vehicles. Our technicians are trained in safe jump-start procedures and use professional-grade equipment to avoid any risk to your vehicle\'s electronics.',
        },
        {
          q: 'What if my battery is completely dead?',
          a: 'If your battery is completely discharged, we can still get you started. After the jump, we will advise whether the battery has recovered or whether a replacement is needed.',
        },
        {
          q: 'Can you jump-start any vehicle?',
          a: 'We can jump-start cars, SUVs, and light commercial vehicles. For hybrid or electric vehicles, please call us first to confirm compatibility, as these require specific procedures.',
        },
        {
          q: 'Do you also replace batteries?',
          a: 'Yes — if after the jump start we determine your battery needs replacing, we carry a range of replacement batteries and can fit one on the spot.',
        },
        {
          q: 'How long does a jump start take?',
          a: 'The jump start itself takes just a few minutes. We will then run a battery health check and give you clear advice, so the whole visit typically takes around 20–30 minutes.',
        },
      ]}
    />
  )
}
