'use client'

import { motion, AnimatePresence } from 'framer-motion'
import type { PortfolioProject } from '@/data/portfolioProjects'

interface ProjectModalProps {
  project: PortfolioProject | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[9999] overflow-y-auto bg-bg-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          data-lenis-prevent
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="fixed top-6 right-6 md:top-12 md:right-12 z-50 w-12 h-12 border border-border hover:border-text-primary flex items-center justify-center transition-colors bg-bg-primary"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-text-primary">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Hero Image */}
            <div className="relative w-full h-[60vh] md:h-[80vh]">
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/20 to-transparent" />
            </div>

            {/* Project Info */}
            <div className="relative px-6 md:px-12 lg:px-24 -mt-32">
              <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-16 md:mb-24">
                  <span className="text-text-tertiary text-xs uppercase tracking-wider font-mono">
                    {project.category} — {project.year}
                  </span>
                  <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight mt-4">
                    {project.title}
                  </h1>
                  <p className="text-text-secondary text-xl md:text-2xl mt-6 max-w-2xl">
                    {project.description}
                  </p>
                </div>

                {/* Challenge & Solution */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24">
                  <div>
                    <h3 className="text-text-tertiary text-xs uppercase tracking-[0.2em] mb-4">
                      The Challenge
                    </h3>
                    <p className="text-text-primary text-lg leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-text-tertiary text-xs uppercase tracking-[0.2em] mb-4">
                      Our Solution
                    </h3>
                    <p className="text-text-primary text-lg leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Project Images */}
                <div className="mb-24">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {project.images.slice(1).map((img, i) => (
                      <div key={i} className={`${i === 0 ? 'md:col-span-2' : ''}`}>
                        <img
                          src={img}
                          alt={`${project.title} - Image ${i + 2}`}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits / Results */}
                <div className="mb-24 py-16 border-y border-border">
                  <h3 className="text-text-tertiary text-xs uppercase tracking-[0.2em] mb-12 text-center">
                    Client Benefits
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {project.benefits.map((benefit, i) => (
                      <div key={i} className="text-center">
                        <span className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-text-primary">
                          {benefit.metric}
                        </span>
                        <p className="text-text-tertiary text-sm uppercase tracking-wider mt-2">
                          {benefit.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="mb-24 max-w-3xl mx-auto text-center">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="mx-auto mb-8 text-text-tertiary/30">
                    <path d="M10 8H6C4.89543 8 4 8.89543 4 10V14C4 15.1046 4.89543 16 6 16H8C8 17.1046 7.10457 18 6 18H5C4.44772 18 4 18.4477 4 19C4 19.5523 4.44772 20 5 20H6C8.20914 20 10 18.2091 10 16V8ZM20 8H16C14.8954 8 14 8.89543 14 10V14C14 15.1046 14.8954 16 16 16H18C18 17.1046 17.1046 18 16 18H15C14.4477 18 14 18.4477 14 19C14 19.5523 14.4477 20 15 20H16C18.2091 20 20 18.2091 20 16V8Z" fill="currentColor" />
                  </svg>
                  <p className="font-display text-2xl md:text-3xl font-medium leading-relaxed mb-8">
                    &ldquo;{project.testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <p className="text-text-primary font-medium uppercase tracking-wider">
                      {project.testimonial.author}
                    </p>
                    <p className="text-text-tertiary text-sm">
                      {project.testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Services */}
                <div className="mb-16 pt-16 border-t border-border">
                  <h3 className="text-text-tertiary text-xs uppercase tracking-[0.2em] mb-6">
                    Services Provided
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.services.map((service) => (
                      <span
                        key={service}
                        className="px-4 py-2 border border-border text-text-primary text-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Back button */}
                <div className="pb-24">
                  <button
                    onClick={onClose}
                    className="group flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="rotate-180">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-sm uppercase tracking-[0.2em]">Back to all projects</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
