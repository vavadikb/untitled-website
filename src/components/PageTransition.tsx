'use client'

import { useEffect, useState, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function PageTransition() {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false)
  const [count, setCount] = useState(0)
  const isFirstRender = useRef(true)

  useEffect(() => {
    // Skip the first render (initial page load has its own preloader)
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    setIsLoading(true)
    setCount(0)

    const duration = 700
    let startTime: number | null = null

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp

      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)

      setCount(Math.round(eased * 100))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(100)
        setTimeout(() => setIsLoading(false), 200)
      }
    }

    requestAnimationFrame(animate)
  }, [pathname])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: '-100%',
            transition: {
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            },
          }}
        >
          {/* Grid pattern */}
          <div className="absolute inset-0 grid-pattern opacity-50" />

          <div className="relative flex flex-col items-center">
            {/* Studio Name */}
            <div className="mb-12">
              <span className="font-display text-sm tracking-[0.3em] uppercase text-text-secondary">
                untitled studio
              </span>
            </div>

            {/* Counter */}
            <div className="font-display text-[clamp(5rem,15vw,12rem)] leading-none font-black tracking-tighter text-text-primary">
              {String(count).padStart(3, '0')}
            </div>

            {/* Progress bar */}
            <div className="mt-12 w-64 h-[1px] bg-border overflow-hidden">
              <motion.div
                className="h-full bg-text-primary"
                style={{ width: `${count}%` }}
              />
            </div>

            {/* Loading text */}
            <p className="mt-6 text-text-tertiary text-xs tracking-[0.2em] uppercase font-mono">
              Loading experience
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
