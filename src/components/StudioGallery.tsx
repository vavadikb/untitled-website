'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&q=80',
    alt: 'Creative workspace',
    span: 'col-span-2 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600&h=600&fit=crop&q=80',
    alt: 'Office details',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&q=80',
    alt: 'Team meeting',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=800&fit=crop&q=80',
    alt: 'Sketching session',
    span: 'col-span-1 md:row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop&q=80',
    alt: 'Coffee break',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop&q=80',
    alt: 'Workshop',
    span: 'col-span-2 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop&q=80',
    alt: 'Presentation',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=600&fit=crop&q=80',
    alt: 'Studio space',
    span: 'col-span-1 row-span-1',
  },
]

export default function StudioGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section className="section-padding-sm md:section-padding relative">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container-custom relative">
        <ScrollReveal>
          <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-24">
            <span className="text-text-tertiary text-xs tracking-[0.2em] uppercase font-mono">
              08
            </span>
            <div className="w-8 md:w-12 h-[1px] bg-border" />
            <span className="text-text-secondary text-xs tracking-[0.2em] uppercase">
              Behind the Scenes
            </span>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] md:auto-rows-[250px] gap-2 md:gap-6">
          {galleryImages.map((image, i) => (
            <ScrollReveal key={i} delay={i * 0.08} className={image.span}>
              <motion.div
                className="relative w-full h-full overflow-hidden cursor-pointer group bg-bg-secondary"
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedImage(i)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover img-grayscale group-hover:scale-110 transition-transform duration-700"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-bg-primary/0 group-hover:bg-bg-primary/30 transition-colors duration-500" />
                <div className="absolute inset-0 border border-border group-hover:border-text-primary transition-colors duration-500 pointer-events-none" />

                {/* Index */}
                <div className="absolute top-3 left-3 font-mono text-[10px] text-text-tertiary">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-bg-primary p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Grid pattern */}
            <div className="absolute inset-0 grid-pattern opacity-30" />

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 text-text-secondary hover:text-text-primary transition-colors z-10"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            <button
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage((prev) =>
                  prev !== null && prev > 0 ? prev - 1 : galleryImages.length - 1
                )
              }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage((prev) =>
                  prev !== null && prev < galleryImages.length - 1 ? prev + 1 : 0
                )
              }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={selectedImage}
                src={galleryImages[selectedImage].src.replace(/w=\d+/, 'w=1600').replace(/h=\d+/, 'h=1200')}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-[80vh] object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 border border-border pointer-events-none" />
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-sm text-text-tertiary">
              {String(selectedImage + 1).padStart(2, '0')} / {String(galleryImages.length).padStart(2, '0')}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
