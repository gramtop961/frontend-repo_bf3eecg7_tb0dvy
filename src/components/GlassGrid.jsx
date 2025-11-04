import { motion } from 'framer-motion'

export default function GlassGrid() {
  const items = [
    {
      title: 'Velvet Draw',
      copy: 'Responsive interactions tuned for elegance and feel.'
    },
    {
      title: 'Futuristic Finish',
      copy: 'A dark, moody palette accented with neon glows.'
    },
    {
      title: 'Performance',
      copy: 'Optimized animations and GPU-accelerated visuals.'
    },
    {
      title: 'GSAP + WebGL',
      copy: 'ScrollTrigger sequences that sync with a live 3D scene.'
    }
  ]

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl p-5 text-white shadow-xl shadow-black/20"
            >
              <h4 className="text-lg font-semibold">{it.title}</h4>
              <p className="mt-2 text-white/80 text-sm">{it.copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
