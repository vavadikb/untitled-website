'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function GradientDivider() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5])

  return (
    <div
      ref={containerRef}
      className="relative h-[30vh] md:h-[50vh] overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 w-full h-[120%]"
        style={{ y }}
      >
        <motion.img
          src="/gradient-waves.jpg"
          alt=""
          className="w-full h-full object-cover"
          style={{ opacity }}
        />
      </motion.div>

      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-bg-primary to-transparent z-10" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-primary to-transparent z-10" />
    </div>
  )
}
