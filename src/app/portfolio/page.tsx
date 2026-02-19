'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ProjectModal from '@/components/ProjectModal'
import { portfolioProjects, portfolioCategories, type PortfolioProject } from '@/data/portfolioProjects'

export default function WorkPage() {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null)
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === activeCategory)

  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 md:pt-48 pb-16 md:pb-24">
        <div className="px-6 md:px-12 lg:px-24">
          <motion.p
            className="text-text-tertiary text-xs tracking-[0.3em] uppercase font-mono mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Portfolio
          </motion.p>
          <motion.h1
            className="font-display text-[clamp(3rem,10vw,10rem)] font-black uppercase tracking-tighter leading-[0.85] mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Featured
            <br />
            <span className="text-stroke">work</span>
          </motion.h1>
          <motion.p
            className="text-text-secondary text-lg md:text-xl max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A collection of our best work. Each project is crafted with care,
            delivered on time, and built to drive real results.
          </motion.p>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-12">
        <div className="px-6 md:px-12 lg:px-24">
          <motion.div
            className="flex flex-wrap gap-2 md:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {portfolioCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm uppercase tracking-wider border transition-colors ${
                  activeCategory === category
                    ? 'border-text-primary bg-text-primary text-bg-primary'
                    : 'border-border text-text-secondary hover:border-text-primary hover:text-text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 md:pb-32">
        <div className="px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="relative overflow-hidden cursor-pointer group"
                onClick={() => setSelectedProject(project)}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                layout
              >
                <div className="relative w-full aspect-[4/3]">
                  {/* Image */}
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700 scale-100 group-hover:scale-105 [filter:grayscale(100%)] group-hover:[filter:grayscale(0%)]"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                    <span className="text-white/50 text-xs uppercase tracking-wider font-mono">
                      {project.category}
                    </span>
                    <h3 className="text-white font-display text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight mt-2">
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-sm mt-2 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.description}
                    </p>
                  </div>

                  {/* Year badge */}
                  <div className="absolute top-6 right-6 text-white/40 text-xs font-mono">
                    {project.year}
                  </div>

                  {/* Click indicator */}
                  <div className="absolute bottom-6 right-6 w-10 h-10 border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="px-6 md:px-12 lg:px-24">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">
              Have a project in mind?
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              Let's create something great together.
            </p>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('openContactForm'))}
              className="btn-primary"
            >
              <span>Get in Touch</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </main>
  )
}
