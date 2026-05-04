import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'TPMS Reset | One Stop Tyres 24/7',
  description:
    'Professional TPMS reset service available 24/7 across the UK. We reset your tyre pressure monitoring system on-site after every tyre change or repair.',
}

export default function TpmsResetPage() {
  return (
    <ServicePage
      title="TPMS Reset"
      serviceName="TPMS Reset"
      heroSubheading="Professional, fast and reliable TPMS reset service available 24/7 across the UK. We clear your warning light and restore your tyre monitoring system on-site."
      introBody="The Tyre Pressure Monitoring System (TPMS) is a safety-critical feature in modern vehicles that alerts you when tyre pressure drops to an unsafe level. After any tyre change, rotation, or repair, the TPMS must be reset to recognise the new sensor positions and calibrate correctly. Without a proper reset, the warning light will remain on and the system will not function accurately, leaving you without reliable pressure monitoring."
      included={[
        'Full TPMS diagnostic scan on-site',
        'Reset and recalibration for all wheel positions',
        'Compatible with direct and indirect TPMS systems',
        'TPMS sensor replacement if faulty (on request)',
        'Warning light clearance',
        'System function test after reset',
        'Works on all major vehicle makes and models',
      ]}
      benefits={[
        'Restores full TPMS functionality after tyre changes',
        'Eliminates the annoying TPMS warning light',
        'Ensures accurate tyre pressure monitoring for safety',
        'No need to visit a main dealer for a reset',
        'Completed on-site — quick and convenient',
      ]}
      whenYouNeedIt="You will need a TPMS reset whenever you have had new tyres fitted, had your tyres rotated, replaced a TPMS sensor, or had a puncture repair. The warning light illuminating after tyre work is a clear sign the system needs to be recalibrated. It is also needed when the light stays on persistently without a visible puncture, as this can indicate a faulty or low-battery sensor."
      faqs={[
        {
          q: 'What is TPMS and why does it need resetting?',
          a: 'TPMS stands for Tyre Pressure Monitoring System. It monitors the air pressure in each tyre and alerts you if it drops below a safe level. After any tyre change or rotation, the system must be reset to recognise the updated configuration and calibrate correctly.',
        },
        {
          q: 'What is the difference between direct and indirect TPMS?',
          a: 'Direct TPMS uses individual pressure sensors inside each wheel that transmit data to the vehicle. Indirect TPMS uses the ABS wheel speed sensors to infer pressure changes. Both types require a reset procedure after tyre changes — our equipment handles both.',
        },
        {
          q: 'Can I drive with the TPMS warning light on?',
          a: 'You should not ignore the TPMS warning light. It indicates either that a tyre is underinflated or that the system needs resetting. Driving on an underinflated tyre is dangerous and can lead to a blowout.',
        },
        {
          q: 'How long does a TPMS reset take?',
          a: 'A standard TPMS reset typically takes 15–20 minutes, including the diagnostic scan and recalibration. If a sensor replacement is needed, this may take slightly longer.',
        },
        {
          q: 'Do you replace TPMS sensors?',
          a: 'Yes — if a sensor is found to be faulty or has a low battery, we can supply and fit a replacement sensor on-site. Please mention this when you call so we can bring the correct parts for your vehicle.',
        },
      ]}
    />
  )
}
