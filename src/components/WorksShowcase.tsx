'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const showcaseImages = [
  {
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=80',
    alt: 'Dashboard project',
  },
  {
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=80',
    alt: 'Analytics platform',
  },
  {
    src: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&h=800&fit=crop&q=80',
    alt: 'Tech interface',
  },
]

export default function WorksShowcase() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -30])

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-40 relative overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container-custom relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">
          {/* Left side - Text */}
          <div className="order-2 lg:order-1">
            <ScrollReveal>
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <span className="text-text-tertiary text-xs tracking-[0.2em] uppercase font-mono">
                  03
                </span>
                <div className="w-12 h-[1px] bg-border" />
                <span className="text-text-secondary text-xs tracking-[0.2em] uppercase">
                  Selected Work
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-heading font-black tracking-tight uppercase mb-6">
                Websites
                <br />
                <span className="text-stroke">That Convert</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-md">
                Every site we build is designed to turn visitors into customers.
                Fast loading, mobile-first, and optimized for conversions.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-3">
                {['Web Apps', 'Mobile', 'Dashboards', 'E-Commerce'].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 border border-border text-sm text-text-secondary hover:border-text-primary hover:text-text-primary transition-colors duration-300 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right side - Stacked mockups */}
          <div className="order-1 lg:order-2 relative h-[400px] md:h-[500px] lg:h-[600px]">
            {/* Bottom card */}
            <motion.div
              className="absolute left-[5%] top-[15%] w-[85%] aspect-[16/10] overflow-hidden"
              style={{ y: y1, zIndex: 1 }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <img
                src={showcaseImages[0].src}
                alt={showcaseImages[0].alt}
                className="w-full h-full object-cover img-grayscale"
              />
              <div className="absolute inset-0 border border-border" />
            </motion.div>

            {/* Middle card */}
            <motion.div
              className="absolute left-[10%] top-[8%] w-[80%] aspect-[16/10] overflow-hidden"
              style={{ y: y2, zIndex: 2 }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src={showcaseImages[1].src}
                alt={showcaseImages[1].alt}
                className="w-full h-full object-cover img-grayscale"
              />
              <div className="absolute inset-0 border border-border" />
            </motion.div>

            {/* Top card */}
            <motion.div
              className="absolute left-[8%] top-[5%] w-[82%] aspect-[16/10] overflow-hidden group"
              style={{ y: y3, zIndex: 3 }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img
                src={showcaseImages[2].src}
                alt={showcaseImages[2].alt}
                className="w-full h-full object-cover img-grayscale"
              />
              <div className="absolute inset-0 border border-border" />

              {/* Browser chrome mockup */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-bg-secondary flex items-center px-3 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-text-tertiary/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-text-tertiary/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-text-tertiary/30" />
                </div>
                <div className="flex-1 mx-8">
                  <div className="h-4 bg-border rounded-sm max-w-[200px] mx-auto" />
                </div>
              </div>
            </motion.div>

            {/* Floating elements */}
            <motion.div
              className="absolute -right-4 top-1/4 w-20 h-20 border border-border bg-bg-primary"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute -left-8 bottom-1/4 w-16 h-16 rounded-full border border-border bg-bg-primary"
              animate={{
                y: [0, 20, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
