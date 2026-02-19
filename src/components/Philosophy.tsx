'use client'

import { motion } from 'framer-motion'

export default function Philosophy() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden border-y border-border">
      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[20vw] font-display font-black uppercase tracking-tighter text-text-primary opacity-[0.02]">
          CRAFT
        </span>
      </div>

      <div className="px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
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
            <p className="text-text-tertiary text-sm mt-2">
              Every project starts with understanding
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
