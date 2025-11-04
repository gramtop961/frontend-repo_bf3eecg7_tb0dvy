import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check } from 'lucide-react'

export default function PinnedSteps() {
  const wrapRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const boxes = gsap.utils.toArray('.step-box')

      boxes.forEach((box, index) => {
        const check = box.querySelector('.check')
        const text = box.querySelector('.copy')

        gsap.set(check, { scale: 0, opacity: 0 })
        gsap.set(text, { y: 20, opacity: 0 })

        ScrollTrigger.create({
          trigger: box,
          start: 'top center+=50',
          end: '+=300',
          scrub: true,
          pin: true,
          pinSpacing: true,
          onUpdate: (self) => {
            const p = self.progress
            gsap.to(check, { scale: gsap.utils.mapRange(0, 1, 0.5, 1, p), opacity: p, duration: 0.2, overwrite: true })
            gsap.to(text, { y: gsap.utils.mapRange(0, 1, 20, 0, p), opacity: p, duration: 0.2, overwrite: true })
          },
        })
      })
    }, wrapRef)

    return () => ctx.revert()
  }, [])

  const steps = [
    {
      title: 'Choose Your Blend',
      desc: 'Select premium notes with a rich, velvety finish.',
    },
    {
      title: 'Craft The Experience',
      desc: 'Layer animations, parallax, and 3D for depth and story.',
    },
    {
      title: 'Ignite & Enjoy',
      desc: 'Scroll to unveil — each step locks in with a satisfying check.',
    },
  ]

  return (
    <section id="steps" ref={wrapRef} className="relative py-28">
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 60%, rgba(0,0,0,0) 100%)'
      }} />
      <div className="relative mx-auto max-w-4xl px-6">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-white mb-12">
          Smooth, step-by-step
        </h2>
        <div className="space-y-6">
          {steps.map((s, i) => (
            <div key={i} className="step-box rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl p-6 text-white shadow-xl shadow-black/20">
              <div className="flex items-start gap-4">
                <div className="check mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/20 border border-emerald-300/40 shadow-inner">
                  <Check className="text-emerald-300" />
                </div>
                <div className="copy">
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className="mt-1 text-white/80">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
