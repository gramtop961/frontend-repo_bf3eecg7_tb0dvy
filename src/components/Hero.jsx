import { useRef, useEffect } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  const sectionRef = useRef(null)

  useEffect(() => {
    // Ensure the hero takes full viewport height
    if (sectionRef.current) {
      sectionRef.current.style.minHeight = '100vh'
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle vignette & gradient overlays that don't block pointer events */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70" />
      <div className="pointer-events-none absolute inset-0" style={{
        background: 'radial-gradient(70% 50% at 50% 0%, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0.0) 60%)'
      }} />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-24 sm:pt-36 sm:pb-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-2 text-xs text-white/80 shadow-lg shadow-black/20">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Live 3D • Glassmorphic • GSAP-ready
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
            Hand‑Rolled Luxury. Ultra‑Smooth Experience.
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-white/80">
            A cinematic landing crafted with WebGL, parallax layers, and buttery scroll interactions.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#features" className="rounded-full bg-white/90 hover:bg-white text-gray-900 font-semibold px-6 py-3 transition-colors shadow-lg shadow-black/20">
              Explore Features
            </a>
            <a href="#steps" className="rounded-full border border-white/30 bg-white/10 hover:bg-white/20 text-white px-6 py-3 backdrop-blur-md transition-colors">
              See The Flow
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
