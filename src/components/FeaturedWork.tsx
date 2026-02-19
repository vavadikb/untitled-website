'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import ProjectModal from '@/components/ProjectModal'
import { portfolioProjects, type PortfolioProject } from '@/data/portfolioProjects'

function ProjectCard({ project, onClick, index }: { project: PortfolioProject, onClick: () => void, index: number }) {
  return (
    <motion.div
      className="relative overflow-hidden cursor-pointer group"
      onClick={onClick}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="relative w-full aspect-[4/3]">
        {/* Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-700 scale-100 group-hover:scale-105"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
          <span className="text-white/50 text-xs uppercase tracking-wider font-mono">
            {project.category}
          </span>
          <h3 className="text-white font-display text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-tight mt-2">
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
  )
}

export default function FeaturedWork() {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null)

  return (
    <section id="work" className="py-20 md:py-32 relative">
      <div className="px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <div>
            <motion.p
              className="text-text-tertiary text-xs tracking-[0.3em] uppercase font-mono mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Recent Projects
            </motion.p>
            <motion.h2
              className="font-display text-[clamp(2.5rem,6vw,5rem)] font-black tracking-tight uppercase leading-[0.9]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              We design
              <br />
              <span className="text-stroke">everything</span>
            </motion.h2>
          </div>

          <motion.p
            className="text-text-secondary max-w-sm text-base md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            From startups to established brands, we create digital experiences that drive results.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {portfolioProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
              index={index}
            />
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors group"
          >
            <span className="text-sm uppercase tracking-[0.2em]">View all projects</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-1 transition-transform">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}
