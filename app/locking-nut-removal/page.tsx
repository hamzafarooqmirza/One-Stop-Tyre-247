import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Locking Nut Removal | One Stop Tyres 24/7',
  description:
    'Specialist damage-free locking wheel nut removal available 24/7 across the UK. Lost your locking nut key? We come to you.',
}

export default function LockingNutRemovalPage() {
  return (
    <ServicePage
      title="Locking Nut Removal"
      serviceName="Locking Nut Removal"
      heroSubheading="Professional, fast and reliable locking nut removal available 24/7 across the UK. Lost your locking wheel nut key? We have the specialist tools to help."
      introBody="Locking wheel nuts are designed to protect your alloys from theft, but when the unique key is lost, broken, or damaged, they can become a serious problem. Standard tools will not remove them — you need specialist equipment and trained hands. Our technicians carry professional locking nut removal tools that can extract even the most stubborn, rounded, or corroded locking nuts without causing damage to your alloy wheels."
      included={[
        'On-site locking nut removal at your location',
        'Specialist extraction tools for all locking nut types',
        'Damage-free technique to protect alloy wheels',
        'Fast response — typically 30–60 minutes',
        'Professional, certified technicians',
        'Replacement locking nuts available on request',
        'Works on all common vehicle makes and models',
      ]}
      benefits={[
        'Removes locking nuts without damaging your alloys',
        'Saves the cost of a main dealer visit',
        'No need to tow the vehicle to a garage',
        'Fast on-site resolution wherever you are',
        'Access restored for tyre changes, brakes, and other servicing',
      ]}
      whenYouNeedIt="You will need our locking nut removal service when you have lost the locking wheel nut key and cannot change a tyre, when the key has rounded or broken off inside the nut, when you have purchased a second-hand car without the locking nut key, or when you need to have your brakes or tyres serviced but the locking nuts are preventing access. Our service resolves the situation quickly without expensive main dealer callouts."
      faqs={[
        {
          q: 'Can you remove any locking wheel nut?',
          a: 'Our technicians carry a wide range of specialist extraction tools and have experience with all major locking nut systems. In the vast majority of cases we are able to remove the nut successfully. We will let you know if your situation requires a different approach.',
        },
        {
          q: 'Will the removal damage my alloy wheel?',
          a: 'Our priority is to remove the locking nut with minimal or no damage to the alloy. We use professional extraction techniques specifically designed to protect the wheel. In rare cases involving heavily corroded or damaged nuts, there may be minor cosmetic marks, but we always aim for damage-free removal.',
        },
        {
          q: 'What if I have the key but it is damaged or worn?',
          a: 'A worn or damaged key can sometimes be used with care, or our technicians may be able to use a specialist socket to grip the nut. Call us and describe the issue — we will advise on the best approach.',
        },
        {
          q: 'How long does locking nut removal take?',
          a: 'Most locking nut removals take between 20 and 45 minutes once the technician arrives, depending on the nut type and the level of corrosion or damage present.',
        },
        {
          q: 'Can you supply replacement locking nuts afterwards?',
          a: 'Yes — we can supply and fit a new set of locking wheel nuts after removal so your wheels remain protected. Please mention this when you call.',
        },
        {
          q: 'Do you need any specific information before you arrive?',
          a: 'It helps to know your vehicle make, model, and year, as well as the locking nut brand if you know it. If you have any photos of the nut or remaining key, please send them via WhatsApp so we can come fully prepared.',
        },
      ]}
    />
  )
}
