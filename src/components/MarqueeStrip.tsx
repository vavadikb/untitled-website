'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface MarqueeStripProps {
  variant?: 'primary' | 'secondary' | 'awards'
}

const variants = {
  primary: {
    text: 'DESIGN · DEVELOP · DELIVER · ',
    reverse: false,
  },
  secondary: {
    text: 'STRATEGY · BRANDING · DIGITAL · ',
    reverse: true,
  },
  awards: {
    text: 'AWWWARDS · CSSDA · FWA · WEBBY · ',
    reverse: false,
  },
}

export default function MarqueeStrip({ variant = 'primary' }: MarqueeStripProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const config = variants[variant]

  const x1 = useTransform(
    scrollYProgress,
    [0, 1],
    config.reverse ? ['-25%', '0%'] : ['0%', '-25%']
  )
  const x2 = useTransform(
    scrollYProgress,
    [0, 1],
    config.reverse ? ['0%', '-25%'] : ['-25%', '0%']
  )

  return (
    <div
      ref={containerRef}
      className="py-8 md:py-16 overflow-hidden select-none border-y border-border"
    >
      {/* First row */}
      <motion.div
        className="flex whitespace-nowrap mb-4"
        style={{ x: x1 }}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <span
            key={i}
            className="font-display text-[clamp(3rem,8vw,7rem)] font-black uppercase tracking-tighter mx-4 shrink-0 text-text-primary"
          >
            {config.text}
          </span>
        ))}
      </motion.div>

      {/* Second row */}
      <motion.div
        className="flex whitespace-nowrap"
        style={{ x: x2 }}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <span
            key={i}
            className="text-stroke font-display text-[clamp(3rem,8vw,7rem)] font-black uppercase tracking-tighter mx-4 shrink-0"
          >
            {config.text}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
