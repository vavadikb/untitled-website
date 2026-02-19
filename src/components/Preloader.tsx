'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PreloaderProps {
  onComplete: () => void
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [count, setCount] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const hasCompletedRef = useRef(false)

  useEffect(() => {
    const duration = 600
    let startTime: number | null = null

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp

      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function
      const eased = 1 - Math.pow(1 - progress, 3)
      const currentCount = Math.round(eased * 100)

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else if (!hasCompletedRef.current) {
        hasCompletedRef.current = true
        setCount(100)
        setTimeout(() => {
          setIsComplete(true)
          setTimeout(onComplete, 600)
        }, 300)
      }
    }

    requestAnimationFrame(animate)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="preloader"
          exit={{
            y: '-100%',
            transition: {
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            },
          }}
        >
          {/* Grid pattern */}
          <div className="absolute inset-0 grid-pattern opacity-50" />

          <div className="relative flex flex-col items-center">
            {/* Studio Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-12"
            >
              <span className="font-display text-sm tracking-[0.3em] uppercase text-text-secondary">
                untitled studio
              </span>
            </motion.div>

            {/* Counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="font-display text-[clamp(5rem,15vw,12rem)] leading-none font-black tracking-tighter text-text-primary"
            >
              {String(count).padStart(3, '0')}
            </motion.div>

            {/* Progress bar */}
            <div className="mt-12 w-64 h-[1px] bg-border overflow-hidden">
              <motion.div
                className="h-full bg-text-primary"
                style={{ width: `${count}%` }}
                transition={{ duration: 0.1, ease: 'linear' }}
              />
            </div>

            {/* Loading text */}
            <motion.p
              className="mt-6 text-text-tertiary text-xs tracking-[0.2em] uppercase font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Loading experience
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
