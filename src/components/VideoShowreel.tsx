'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import MagneticButton from './MagneticButton'

export default function VideoShowreel() {
  const [isPlaying, setIsPlaying] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <section ref={sectionRef} className="section-padding-sm md:section-padding relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container-custom relative">
        <ScrollReveal>
          <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-24">
            <span className="text-text-tertiary text-xs tracking-[0.2em] uppercase font-mono">
              07
            </span>
            <div className="w-8 md:w-12 h-[1px] bg-border" />
            <span className="text-text-secondary text-xs tracking-[0.2em] uppercase">
              Showreel 2024
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <motion.div
            className="relative aspect-video overflow-hidden cursor-pointer group"
            style={{ scale, opacity }}
            onClick={() => setIsPlaying(true)}
          >
            <img
              src="https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1920&h=1080&fit=crop&q=80"
              alt="Showreel thumbnail"
              className="w-full h-full object-cover img-grayscale group-hover:scale-105 transition-transform duration-700"
              style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
            />

            <div className="absolute inset-0 bg-bg-primary/40 group-hover:bg-bg-primary/20 transition-colors duration-500" />
            <div className="absolute inset-0 border border-border group-hover:border-text-primary transition-colors duration-500" />

            <div className="absolute inset-0 flex items-center justify-center">
              <MagneticButton strength={30}>
                <motion.div
                  className="w-24 h-24 md:w-32 md:h-32 border-2 border-text-primary flex items-center justify-center bg-bg-primary/50 backdrop-blur-sm group-hover:bg-text-primary transition-colors duration-500"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="ml-1 text-text-primary group-hover:text-bg-primary transition-colors duration-500">
                    <path
                      d="M8 5.14v13.72a1 1 0 001.5.86l11.03-6.86a1 1 0 000-1.72L9.5 4.28A1 1 0 008 5.14z"
                      fill="currentColor"
                    />
                  </svg>
                </motion.div>
              </MagneticButton>
            </div>

            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
              <p className="text-text-primary text-sm tracking-[0.15em] uppercase font-medium">
                Watch Showreel
              </p>
              <p className="text-text-tertiary text-xs mt-1 font-mono">01:42</p>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>

      <AnimatePresence>
        {isPlaying && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-bg-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPlaying(false)}
          >
            {/* Grid pattern */}
            <div className="absolute inset-0 grid-pattern opacity-30" />

            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-8 right-8 text-text-secondary hover:text-text-primary transition-colors z-10"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            <motion.div
              className="w-full max-w-6xl aspect-video mx-4 bg-bg-secondary overflow-hidden flex items-center justify-center border border-border"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 border border-border flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-text-primary ml-1">
                    <path
                      d="M8 5.14v13.72a1 1 0 001.5.86l11.03-6.86a1 1 0 000-1.72L9.5 4.28A1 1 0 008 5.14z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <p className="font-display text-2xl font-bold uppercase tracking-tight text-text-primary mb-2">Coming Soon</p>
                <p className="text-text-secondary text-sm">
                  Showreel video will be added here
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
