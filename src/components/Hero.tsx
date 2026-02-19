'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Main content */}
      <motion.div className="relative z-10 w-full px-6 md:px-12 lg:px-24" style={{ opacity }}>
        {/* Top line */}
        <motion.div
          className="h-[1px] bg-text-primary mb-12 md:mb-20"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'left' }}
        />

        {/* Main headline */}
        <div className="space-y-2 md:space-y-4">
          <div className="overflow-hidden">
            <motion.h1
              className="font-display text-[clamp(3rem,12vw,12rem)] font-black uppercase tracking-tighter leading-[0.85]"
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              We craft
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              className="font-display text-[clamp(3rem,12vw,12rem)] font-black uppercase tracking-tighter leading-[0.85] text-stroke"
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              digital
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              className="font-display text-[clamp(3rem,12vw,12rem)] font-black uppercase tracking-tighter leading-[0.85]"
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              experiences<span className="text-text-secondary">.</span>
            </motion.h1>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 md:mt-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          {/* Description */}
          <motion.div
            className="max-w-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed">
              Strategy. Design. Code. Everything in between.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center gap-6"
          >
            <a
              href="#work"
              className="group flex items-center gap-4"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <span className="text-text-primary text-sm uppercase tracking-[0.2em] group-hover:text-text-secondary transition-colors">
                View Work
              </span>
              <div className="w-14 h-14 border border-text-primary group-hover:bg-text-primary flex items-center justify-center transition-all duration-300">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-text-primary group-hover:text-bg-primary transition-colors rotate-90"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          </motion.div>
        </div>

        {/* Bottom line */}
        <motion.div
          className="h-[1px] bg-border mt-12 md:mt-20"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'right' }}
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          className="w-[1px] h-20 bg-border relative overflow-hidden"
        >
          <motion.div
            className="absolute top-0 w-full h-1/2 bg-text-primary"
            animate={{ y: ['-100%', '200%'] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
        <span className="text-text-tertiary text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
      </motion.div>
    </section>
  )
}
