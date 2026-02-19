'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { getProjectBySlug, projects, type Project } from '@/data/projects'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import { useTheme } from '@/components/ThemeProvider'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {theme === 'dark' ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </motion.div>
    </button>
  )
}

function ProjectHero({ project }: { project: Project }) {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div ref={heroRef} className="relative h-[70vh] md:h-[85vh] overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{ y }}
      >
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover img-grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/60 via-transparent to-bg-primary" />
      </motion.div>

      <motion.div
        className="absolute inset-0 flex items-end"
        style={{ opacity }}
      >
        <div className="container-custom pb-16 md:pb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-tertiary text-xs tracking-[0.2em] uppercase font-mono mb-4"
          >
            {project.category}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase"
          >
            {project.title}
          </motion.h1>
        </div>
      </motion.div>
    </div>
  )
}

function ProjectInfo({ project }: { project: Project }) {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left column - Description */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl md:text-2xl text-text-primary leading-relaxed font-medium">
              {project.description}
            </p>
          </motion.div>

          {/* Right column - Project details */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-8">
              <div>
                <p className="text-text-tertiary text-xs uppercase tracking-wider mb-2">Client</p>
                <p className="text-text-primary font-medium">{project.client}</p>
              </div>
              <div>
                <p className="text-text-tertiary text-xs uppercase tracking-wider mb-2">Year</p>
                <p className="text-text-primary font-mono">{project.year}</p>
              </div>
              <div>
                <p className="text-text-tertiary text-xs uppercase tracking-wider mb-2">Services</p>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <span
                      key={service}
                      className="px-3 py-1 text-sm text-text-secondary border border-border"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ProjectChallenge({ project }: { project: Project }) {
  return (
    <section className="py-16 md:py-24 border-y border-border relative">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container-custom relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-text-tertiary text-xs tracking-[0.2em] uppercase font-mono mb-4">The Challenge</p>
            <p className="text-text-secondary text-lg leading-relaxed">{project.challenge}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-text-tertiary text-xs tracking-[0.2em] uppercase font-mono mb-4">The Solution</p>
            <p className="text-text-secondary text-lg leading-relaxed">{project.solution}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ProjectGallery({ project }: { project: Project }) {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-text-tertiary text-xs tracking-[0.2em] uppercase font-mono mb-12"
        >
          Gallery
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {project.gallery.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative aspect-[3/2] overflow-hidden bg-bg-secondary"
            >
              <img
                src={image}
                alt={`${project.title} - Image ${i + 1}`}
                className="w-full h-full object-cover img-grayscale group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                loading="lazy"
              />
              <div className="absolute inset-0 border border-border group-hover:border-text-primary transition-colors duration-500" />
              <div className="absolute top-3 left-3 font-mono text-[10px] text-text-tertiary">
                {String(i + 1).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function NextProject({ project }: { project: Project }) {
  const nextProject = project.nextProject
    ? projects.find(p => p.slug === project.nextProject)
    : null

  if (!nextProject) return null

  return (
    <Link href={`/projects/${nextProject.slug}`}>
      <section className="relative py-24 md:py-32 border-t border-border group cursor-pointer overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 grid-pattern opacity-30" />

        {/* Background image */}
        <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
          <img
            src={nextProject.image}
            alt={nextProject.title}
            className="w-full h-full object-cover img-grayscale group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
          />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-text-tertiary text-xs uppercase tracking-wider font-mono mb-4">Next Project</p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase group-hover:text-text-secondary transition-colors duration-500">
              {nextProject.title}
            </h2>
            <p className="text-text-tertiary mt-4 uppercase tracking-wider text-sm">{nextProject.category}</p>
          </motion.div>
        </div>
      </section>
    </Link>
  )
}

export default function ProjectPage() {
  const params = useParams()
  const router = useRouter()
  const [project, setProject] = useState<Project | null>(null)
  useSmoothScroll()

  useEffect(() => {
    const slug = params.slug as string
    const foundProject = getProjectBySlug(slug)

    if (foundProject) {
      setProject(foundProject)
    } else {
      router.push('/')
    }
  }, [params.slug, router])

  if (!project) {
    return (
      <div className="min-h-screen bg-bg-primary flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-text-primary border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <main className="bg-bg-primary min-h-screen">
      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex items-center justify-between"
      >
        <Link
          href="/#portfolio"
          className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors duration-300 group"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className="group-hover:-translate-x-1 transition-transform duration-300"
          >
            <path
              d="M19 12H5M5 12L12 19M5 12L12 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm tracking-wider uppercase">Back</span>
        </Link>

        <ThemeToggle />
      </motion.div>

      <ProjectHero project={project} />
      <ProjectInfo project={project} />
      <ProjectChallenge project={project} />
      <ProjectGallery project={project} />
      <NextProject project={project} />

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container-custom flex items-center justify-between">
          <Link href="/" className="font-display text-xl font-bold tracking-tight text-text-primary">
            untitled<span className="text-text-secondary">.</span>
          </Link>
          <p className="text-text-tertiary text-sm font-mono">
            &copy; {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </main>
  )
}
