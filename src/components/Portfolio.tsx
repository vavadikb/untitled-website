'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import ScrollReveal from './ScrollReveal'
import { projects } from '@/data/projects'

function ProjectCard({
  project,
  index,
  isMobile = false,
}: {
  project: (typeof projects)[0]
  index: number
  isMobile?: boolean
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95])

  const CardContent = (
    <motion.div
      ref={cardRef}
      className="group relative overflow-hidden cursor-pointer"
      style={isMobile ? {} : { scale }}
    >
      {/* Image container */}
      <div className={`relative overflow-hidden bg-bg-secondary ${isMobile ? 'aspect-[3/4] w-[70vw] max-w-[280px]' : 'aspect-[4/5]'}`}>
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover img-grayscale"
          style={isMobile ? {} : { y }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          loading="lazy"
        />
        {/* Border */}
        <div className="absolute inset-0 border border-border group-hover:border-text-primary transition-colors duration-500" />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-bg-primary/0 group-hover:bg-bg-primary/60 transition-colors duration-500" />

        {/* View project indicator */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="flex items-center gap-3 text-text-primary">
            <span className="text-sm tracking-[0.15em] uppercase font-medium">View</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Index number */}
        <div className="absolute top-4 left-4 font-mono text-xs text-text-tertiary">
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>

      {/* Project info */}
      <div className="mt-4 md:mt-6 flex items-start justify-between">
        <div>
          <h3 className={`font-display font-bold tracking-tight uppercase text-text-primary group-hover:text-text-secondary transition-colors duration-300 ${isMobile ? 'text-lg' : 'text-xl md:text-2xl'}`}>
            {project.title}
          </h3>
          <p className="text-text-tertiary text-xs md:text-sm mt-1 uppercase tracking-wider">
            {project.category}
          </p>
        </div>
        <span className="text-text-tertiary text-xs md:text-sm font-mono">{project.year}</span>
      </div>
    </motion.div>
  )

  if (isMobile) {
    return <Link href={`/projects/${project.slug}`}>{CardContent}</Link>
  }

  return (
    <ScrollReveal delay={index % 2 === 0 ? 0 : 0.15}>
      <Link href={`/projects/${project.slug}`}>{CardContent}</Link>
    </ScrollReveal>
  )
}

function MobileSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.scrollLeft
      const cardWidth = sliderRef.current.offsetWidth * 0.7 + 16 // card width + gap
      const newIndex = Math.round(scrollLeft / cardWidth)
      setActiveIndex(Math.min(newIndex, projects.length - 1))
    }
  }

  return (
    <div className="md:hidden">
      {/* Slider */}
      <div
        ref={sliderRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto pb-6 -mx-5 px-5 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project, i) => (
          <div key={project.slug} className="flex-shrink-0 snap-start">
            <ProjectCard project={project} index={i} isMobile />
          </div>
        ))}
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (sliderRef.current) {
                const cardWidth = sliderRef.current.offsetWidth * 0.7 + 16
                sliderRef.current.scrollTo({ left: cardWidth * i, behavior: 'smooth' })
              }
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === activeIndex ? 'bg-text-primary w-6' : 'bg-border'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding-sm md:section-padding relative">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container-custom relative">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-8 md:mb-24">
          <ScrollReveal>
            <div>
              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                <span className="text-text-tertiary text-xs tracking-[0.2em] uppercase font-mono">
                  04
                </span>
                <div className="w-8 md:w-12 h-[1px] bg-border" />
                <span className="text-text-secondary text-xs tracking-[0.2em] uppercase">
                  Portfolio
                </span>
              </div>
              <h2 className="font-display text-heading font-black tracking-tight uppercase">
                Selected Works
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-text-secondary text-sm max-w-xs md:text-right">
              Projects that pushed boundaries and delivered results.
            </p>
          </ScrollReveal>
        </div>

        {/* Mobile slider */}
        <MobileSlider />

        {/* Desktop grid - 2 columns */}
        <div className="hidden md:grid grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <div
              key={project.slug}
              className={i % 2 === 1 ? 'mt-24' : ''}
            >
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>

        {/* View all link */}
        <ScrollReveal>
          <div className="mt-10 md:mt-24 text-center">
            <a
              href="#"
              className="inline-flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors duration-300 group"
            >
              <span className="text-sm tracking-[0.15em] uppercase">View All Projects</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className="group-hover:translate-x-1 transition-transform duration-300"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
