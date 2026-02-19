'use client'

import { useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import Preloader from '@/components/Preloader'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import FeaturedWork from '@/components/FeaturedWork'
import Philosophy from '@/components/Philosophy'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  useSmoothScroll()

  const handlePreloaderComplete = useCallback(() => {
    setIsLoading(false)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      </AnimatePresence>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <ScrollProgress />
        <Navigation />
        <Hero />
        <Services />
        <FeaturedWork />
        <Philosophy />
        <Testimonials />
        <CTA />
        <Footer />
      </motion.main>
    </>
  )
}
