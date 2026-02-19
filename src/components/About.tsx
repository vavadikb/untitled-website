'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function About() {
  return (
    <section id="about" className="py-24 md:py-40 relative">
      <div className="px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl">
          <motion.p
            className="text-text-tertiary text-xs tracking-[0.3em] uppercase font-mono mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            About
          </motion.p>

          <motion.p
            className="text-text-primary text-2xl md:text-3xl lg:text-4xl leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            No endless meetings. No design by committee.
            Just honest conversations and focused work that actually ships.
          </motion.p>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors group"
            >
              <span className="text-sm uppercase tracking-[0.2em]">Learn more</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
