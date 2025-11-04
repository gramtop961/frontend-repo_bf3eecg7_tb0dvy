import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Parallax stack using GSAP
export default function ParallaxLayers() {
  const ref = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })

      tl.to('.pl-back', { yPercent: 20, ease: 'none' }, 0)
        .to('.pl-mid', { yPercent: 35, ease: 'none' }, 0)
        .to('.pl-fore', { yPercent: 50, ease: 'none' }, 0)
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative py-28 sm:py-36">
      <div className="absolute inset-0 -z-0">
        <div className="pl-back absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent" />
        <div className="pl-mid absolute inset-0" style={{
          background: 'radial-gradient(60% 40% at 20% 30%, rgba(59,130,246,0.10) 0%, rgba(0,0,0,0) 70%)'
        }} />
        <div className="pl-fore absolute inset-0" style={{
          background: 'radial-gradient(40% 30% at 80% 50%, rgba(236,72,153,0.10) 0%, rgba(0,0,0,0) 70%)'
        }} />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div id="features" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Glassmorphism', desc: 'Soft, frosted panels with subtle lighting.' },
            { title: 'Parallax', desc: 'Layers that move at different speeds as you scroll.' },
            { title: 'Spline 3D', desc: 'A floating 3D scene sets the mood.' },
          ].map((card, i) => (
            <div key={i} className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl p-6 text-white shadow-xl shadow-black/20">
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="mt-2 text-white/80">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
