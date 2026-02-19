'use client'

import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Deep dive into your brand, market, and audience.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Roadmap that aligns vision with objectives.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Pixel-perfect interfaces with purpose.',
  },
  {
    number: '04',
    title: 'Development',
    description: 'Clean code, peak performance.',
  },
  {
    number: '05',
    title: 'Launch',
    description: 'Deploy with precision, support with care.',
  },
]

export default function HorizontalScroll() {
  return (
    <section className="py-12 md:py-32 relative overflow-hidden border-y border-border">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container-custom relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-10 md:mb-32">
          <ScrollReveal>
            <div className="flex items-center gap-3 md:gap-4">
              <span className="text-text-tertiary text-xs tracking-[0.2em] uppercase font-mono">
                09
              </span>
              <div className="w-8 md:w-12 h-[1px] bg-border" />
              <span className="text-text-secondary text-xs tracking-[0.2em] uppercase">
                Process
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-heading font-black tracking-tight uppercase md:text-right">
              How We
              <br />
              <span className="text-stroke">Work</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Process steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
          {processSteps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.1}>
              <div className="group relative py-8 md:py-0 md:px-6 first:md:pl-0 last:md:pr-0 border-b md:border-b-0 md:border-r border-border last:border-0">
                {/* Number */}
                <div className="flex items-baseline gap-4 md:block mb-4 md:mb-8">
                  <span className="text-text-tertiary/30 font-display text-6xl md:text-7xl lg:text-8xl font-black group-hover:text-text-tertiary/60 transition-colors duration-700">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="md:pr-4">
                  <h3 className="text-text-primary text-lg md:text-xl font-bold uppercase tracking-tight mb-2 group-hover:text-text-secondary transition-colors duration-500">
                    {step.title}
                  </h3>
                  <p className="text-text-tertiary text-sm leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                    {step.description}
                  </p>
                </div>

                {/* Hover indicator */}
                <motion.div
                  className="absolute bottom-0 left-0 md:left-6 md:right-6 h-[2px] bg-text-primary origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom note */}
        <ScrollReveal delay={0.5}>
          <div className="mt-10 md:mt-32 flex items-center justify-center gap-4 md:gap-8">
            <div className="h-[1px] w-8 md:w-12 bg-border" />
            <p className="text-text-tertiary text-xs tracking-[0.2em] uppercase font-mono">
              Iterative & Transparent
            </p>
            <div className="h-[1px] w-8 md:w-12 bg-border" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
