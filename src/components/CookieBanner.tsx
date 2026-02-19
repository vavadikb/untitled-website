'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const STORAGE_KEY = 'cookie-consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      // Slight delay so it doesn't flash on first paint
      const t = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(t)
    }
  }, [])

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:bottom-8 md:max-w-sm z-[9998]"
        >
          <div className="bg-bg-primary border border-border p-6 shadow-2xl">
            {/* Header */}
            <p className="text-text-tertiary text-xs uppercase tracking-[0.2em] font-mono mb-3">
              Cookies
            </p>
            <p className="text-text-primary text-sm leading-relaxed mb-5">
              We use cookies to improve your experience and analyse site usage.
              See our{' '}
              <Link href="/privacy" className="underline underline-offset-2 hover:text-text-secondary transition-colors">
                Privacy Policy
              </Link>{' '}
              for details.
            </p>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={accept}
                className="flex-1 py-2.5 bg-text-primary text-bg-primary text-xs uppercase tracking-[0.15em] font-medium hover:opacity-80 transition-opacity"
              >
                Accept
              </button>
              <button
                onClick={decline}
                className="flex-1 py-2.5 border border-border text-text-secondary text-xs uppercase tracking-[0.15em] font-medium hover:border-text-primary hover:text-text-primary transition-colors"
              >
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
