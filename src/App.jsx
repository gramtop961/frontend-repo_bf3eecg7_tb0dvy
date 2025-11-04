import Hero from './components/Hero'
import ParallaxLayers from './components/ParallaxLayers'
import PinnedSteps from './components/PinnedSteps'
import GlassGrid from './components/GlassGrid'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0e13] text-white">
      <Hero />
      <ParallaxLayers />
      <PinnedSteps />
      <GlassGrid />
      <footer className="py-16 text-center text-white/60">
        Built for motion — GSAP, Spline, and glassmorphism in harmony.
      </footer>
    </div>
  )
}

export default App
