'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTA() {
  return (
    <section id="contact" className="py-32 md:py-48 relative overflow-hidden">
      {/* Background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[25vw] font-display font-black uppercase tracking-tighter text-text-primary opacity-[0.02]">
          START
        </span>
      </div>

      <div className="px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Label */}
          <motion.p
            className="text-text-tertiary text-xs tracking-[0.3em] uppercase font-mono mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Start Your Project
          </motion.p>

          {/* Main text */}
          <motion.h2
            className="font-display text-[clamp(2.5rem,8vw,7rem)] font-black tracking-tighter uppercase leading-[0.9] mb-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Let's build
            <br />
            <span className="text-stroke">something</span>
            <br />
            great
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-text-secondary text-lg md:text-xl max-w-xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Ready to get started? Send us a message and we will get back to you within 24 hours.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/contact" className="btn-primary group">
              <span>Get in Touch</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <a
              href="#work"
              className="btn-secondary group"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <span>View Our Work</span>
            </a>
          </motion.div>

          {/* Email */}
          <motion.div
            className="mt-16 pt-16 border-t border-border"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-text-tertiary text-xs uppercase tracking-wider mb-4">
              Or reach us directly
            </p>
            <a
              href="mailto:hello@untitled.it.com"
              className="text-text-primary text-2xl md:text-3xl font-display font-bold hover:text-text-secondary transition-colors"
            >
              hello@untitled.it.com
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
