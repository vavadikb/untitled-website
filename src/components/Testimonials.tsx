'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    quote: 'They delivered our entire website in just 5 days. The quality exceeded our expectations and the process was incredibly smooth.',
    name: 'Alexander Chen',
    role: 'CEO',
    company: 'Luminary Inc.',
  },
  {
    quote: 'Working with untitled was refreshing. No endless meetings, no delays — just great work delivered on time.',
    name: 'Sarah Mitchell',
    role: 'Founder',
    company: 'Nexus Labs',
  },
  {
    quote: 'Our conversion rate increased by 40% after the redesign. Best investment we made this year.',
    name: 'Marcus Webb',
    role: 'CMO',
    company: 'Aether Collective',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(next, 6000)
    return () => clearInterval(interval)
  }, [next])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  }

  return (
    <section className="py-24 md:py-40 relative border-y border-border">
      <div className="px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Left side - Label */}
          <div className="lg:col-span-3">
            <motion.p
              className="text-text-tertiary text-xs tracking-[0.3em] uppercase font-mono mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Testimonials
            </motion.p>
            <motion.h2
              className="font-display text-2xl md:text-3xl font-bold tracking-tight uppercase"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              What our
              <br />
              <span className="text-stroke">clients say</span>
            </motion.h2>

            {/* Navigation */}
            <div className="hidden lg:flex items-center gap-4 mt-12">
              <button
                onClick={prev}
                className="w-12 h-12 border border-border hover:border-text-primary flex items-center justify-center transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-text-primary">
                  <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={next}
                className="w-12 h-12 border border-border hover:border-text-primary flex items-center justify-center transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-text-primary">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <span className="text-text-tertiary text-sm font-mono ml-4">
                {String(current + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* Right side - Quote */}
          <div className="lg:col-span-9 relative min-h-[300px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                <blockquote>
                  <p className="font-display text-[clamp(1.5rem,3.5vw,3rem)] font-medium leading-[1.2] tracking-tight">
                    "{testimonials[current].quote.split(/(untitled)/gi).map((part, i) =>
                      part.toLowerCase() === 'untitled' ? (
                        <span key={i} className="text-stroke">{part}</span>
                      ) : (
                        <span key={i}>{part}</span>
                      )
                    )}"
                  </p>
                </blockquote>

                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-text-primary" />
                  <div>
                    <p className="text-text-primary font-medium uppercase tracking-wider text-sm">
                      {testimonials[current].name}
                    </p>
                    <p className="text-text-tertiary text-sm">
                      {testimonials[current].role}, {testimonials[current].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile navigation */}
        <div className="flex lg:hidden items-center justify-center gap-4 mt-12">
          <button
            onClick={prev}
            className="w-12 h-12 border border-border hover:border-text-primary flex items-center justify-center transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-text-primary">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <span className="text-text-tertiary text-sm font-mono">
            {String(current + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
          </span>
          <button
            onClick={next}
            className="w-12 h-12 border border-border hover:border-text-primary flex items-center justify-center transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-text-primary">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
