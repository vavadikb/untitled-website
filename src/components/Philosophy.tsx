'use client'

import { motion } from 'framer-motion'

const RING_COUNT = 20

function ConcentricCircles() {
  const rings = Array.from({ length: RING_COUNT }, (_, i) => i)

  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
      <svg
        viewBox="0 0 1000 600"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 left-0 w-full h-full"
        preserveAspectRatio="xMidYMax meet"
        style={{ color: 'var(--color-text)' }}
      >
        <defs>
          <clipPath id="sectionBounds">
            <rect x="0" y="0" width="1000" height="600" />
          </clipPath>
        </defs>
        {rings.map((i) => {
          const t = i / (RING_COUNT - 1)
          const minR = 30
          const maxR = 560
          const r = minR + t * (maxR - minR)
          // Opacity: bright at center (0.65), fades to near-zero at edges
          const opacity = Math.pow(1 - t, 1.6) * 0.62 + 0.03
          // Stroke width: thick at center (4px), tapers to hairline (0.35px)
          const strokeWidth = 4 * Math.pow(1 - t, 1.2) + 0.35
          return (
            <circle
              key={i}
              cx="500"
              cy="600"
              r={r}
              fill="none"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              opacity={opacity}
              clipPath="url(#sectionBounds)"
            />
          )
        })}
      </svg>
    </div>
  )
}

export default function Philosophy() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden border-y border-border">
      {/* Concentric circles background */}
      <ConcentricCircles />

      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[20vw] font-display font-black uppercase tracking-tighter text-text-primary opacity-[0.02]">
          CRAFT
        </span>
      </div>

      <div className="px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Subtle scrim so text stays crisp over the rings */}
          <div className="absolute inset-[-2rem] rounded-sm pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at center, var(--color-bg) 30%, transparent 75%)', opacity: 0.7 }}
          />
          <div className="relative z-10">
          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-display text-[clamp(1.5rem,4vw,3rem)] font-medium leading-[1.2] tracking-tight">
              "Great design is not just about aesthetics.
              <span className="text-text-secondary"> It is about solving problems, </span>
              creating connections, and building experiences that
              <span className="text-stroke"> last.</span>"
            </p>
          </motion.blockquote>

          {/* Divider */}
          <motion.div
            className="w-16 h-[1px] bg-text-primary mx-auto my-12"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          {/* Author */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-text-primary text-sm uppercase tracking-[0.2em] font-medium">
              Our Philosophy
            </p>
            <p className="text-text-secondary text-sm mt-2">
              Every project starts with understanding
            </p>
          </motion.div>
          </div>
        </div>

      </div>
    </section>
  )
}
