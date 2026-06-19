'use client'

import { useState, useEffect, useCallback } from 'react'

const SLIDES = [
  {
    badge: 'Mobile Tyre Fitting & Emergency Tyre Repair',
    heading: 'Mobile Tyre Fitting Near Me – 24/7 Service',
    body: 'Need a mobile tyre fitter fast? Our fully equipped mobile tyre fitting vans provide emergency tyre repair, mobile tyre replacement and same day tyre fitting at your home, workplace or roadside location. Available 24 hours a day with rapid response times.',
    listLabel: 'Why Drivers Choose Us',
    items: [
      'Mobile tyre fitting at your location',
      'Emergency tyre repair 24/7',
      'Same day tyre fitting available',
      'Home, work & roadside assistance',
      'Competitive prices & fast response',
    ],
  },
  {
    badge: 'Emergency Mobile Tyre Service',
    heading: 'Flat Tyre? We Come To You',
    body: 'Whether you need mobile tyre repair, emergency tyre replacement, or roadside tyre assistance, our experienced technicians can get you safely back on the road. No waiting for recovery trucks or visiting a tyre shop.',
    listLabel: 'Available For',
    items: [
      'Mobile tyre fitting Manchester',
      'Mobile tyre fitting Stockport',
      'Mobile tyre fitting Bolton',
      'Mobile tyre fitting Trafford',
      'Mobile tyre fitting Rochdale',
    ],
  },
  {
    badge: 'Same Day Mobile Tyre Replacement',
    heading: 'Professional Mobile Tyre Fitters Near You',
    body: 'Our mobile tyre fitting service covers emergency call-outs, puncture repairs, tyre replacements, and tyre recovery assistance. We bring the tyre shop directly to your location, saving you time and hassle.',
    listLabel: 'Benefits',
    items: [
      'Fast mobile tyre replacement',
      'Experienced mobile tyre fitters',
      'Quality tyres available',
      'Roadside emergency assistance',
      'Available day & night',
    ],
  },
]

const WA_ICON = (
  <svg className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = useCallback((idx: number) => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(idx)
      setAnimating(false)
    }, 300)
  }, [animating])

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % SLIDES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [current, goTo])

  const slide = SLIDES[current]

  return (
    <section className="relative bg-[#0f172a] overflow-hidden min-h-[80svh] lg:min-h-[620px] flex flex-col lg:flex-row">

      {/* Background image */}
      <div className="absolute inset-0 lg:left-1/2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="w-full h-full object-cover object-center"
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Tyre%20Fitting%20One%20Stop-airanko%20%281%29-2niHlhcLFs37TFtkZ5lIBe0UubGjUQ.webp"
          alt="One Stop Mobile Tyres 24/7 branded van at a residential home tyre fitting in Manchester"
          width={1600}
          height={1067}
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-[#0f172a]/85 lg:bg-gradient-to-r lg:from-[#0f172a] lg:via-[#0f172a]/60 lg:to-[#0f172a]/20" />
      </div>

      {/* Slide content */}
      <div className="relative z-10 w-full lg:w-1/2 flex items-center px-5 sm:px-8 pt-12 pb-10 sm:py-16 lg:py-20">
        <div
          className="w-full max-w-lg mx-auto lg:ml-auto lg:mr-10 transition-opacity duration-300"
          style={{ opacity: animating ? 0 : 1 }}
        >
          {/* Badge */}
          <span className="inline-block bg-[#b70011] text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
            {slide.badge}
          </span>

          {/* Heading */}
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 leading-[1.1] font-black text-balance"
            style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.02em' }}
          >
            {slide.heading}
          </h1>

          {/* Body */}
          <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-5">
            {slide.body}
          </p>

          {/* Checklist */}
          <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-3">{slide.listLabel}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2 mb-7">
            {slide.items.map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-white/90">
                <span
                  className="material-symbols-outlined text-green-400 shrink-0"
                  style={{ fontSize: '20px', fontVariationSettings: "'FILL' 1" }}
                >check_circle</span>
                <span className="text-sm font-semibold leading-snug">{item}</span>
              </div>
            ))}
          </div>

          {/* Google Rating Badge */}
          <a href="https://maps.app.goo.gl/tqGMogzsNNn8EXjH8" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full px-4 py-2 mb-5">
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <div className="flex text-yellow-400 gap-px">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              ))}
            </div>
            <span className="font-bold text-sm">5.0</span>
            <span className="text-white/60 text-xs font-medium">Rated By Local Drivers Across Greater Manchester</span>
          </a>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <a
              href="tel:07759708646"
              className="bg-[#FF4444] text-[#121212] font-black px-8 py-4 rounded-xl shadow-2xl shadow-red-900/40 flex items-center justify-center gap-2.5 hover:bg-red-700 hover:text-white transition-all text-base sm:text-lg"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
              CALL NOW
            </a>
            <a
              href="https://wa.me/447759708646"
              className="bg-[#25D366] hover:bg-[#1ebe5d] text-white font-black px-8 py-4 rounded-xl flex items-center justify-center gap-2.5 transition-all text-base sm:text-lg shadow-lg shadow-green-900/20"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              {WA_ICON}
              WHATSAPP US
            </a>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center gap-2.5">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: i === current ? '28px' : '10px',
                  height: '10px',
                  backgroundColor: i === current ? '#FF4444' : 'rgba(255,255,255,0.35)',
                }}
              />
            ))}
            {/* Progress bar */}
            <div className="ml-2 flex-1 max-w-[120px] h-0.5 bg-white/20 rounded-full overflow-hidden">
              <div
                key={current}
                className="h-full bg-[#FF4444] rounded-full"
                style={{ animation: 'slideProgress 5s linear forwards' }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideProgress {
          from { width: 0% }
          to   { width: 100% }
        }
      `}</style>
    </section>
  )
}
