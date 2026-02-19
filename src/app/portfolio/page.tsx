'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const projects = [
  {
    id: 1,
    title: 'Meridian',
    category: 'Brand Identity',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=800&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop&q=80',
    ],
    description: 'Complete rebrand for a fintech startup',
    challenge: 'Meridian needed to stand out in a crowded fintech market while building trust with both young professionals and institutional investors. Their existing brand felt outdated and failed to communicate their innovative approach to financial services.',
    solution: 'We developed a clean, geometric visual language with a sophisticated color palette. The new identity system includes logo, typography, iconography, and comprehensive brand guidelines that work across all touchpoints.',
    benefits: [
      { metric: '45%', label: 'Increase in brand recognition' },
      { metric: '3x', label: 'More investor inquiries' },
      { metric: '$2.5M', label: 'Series A funding secured' },
      { metric: '60%', label: 'Faster sales cycle' },
    ],
    testimonial: {
      quote: 'The rebrand completely transformed how investors perceive us. We closed our Series A within 3 months of launching the new identity.',
      author: 'Sarah Chen',
      role: 'CEO, Meridian',
    },
    services: ['Brand Strategy', 'Visual Identity', 'Brand Guidelines', 'Digital Assets'],
  },
  {
    id: 2,
    title: 'Noir Studio',
    category: 'Website',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&h=1000&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=800&fit=crop&q=80',
    ],
    description: 'E-commerce platform for fashion brand',
    challenge: 'Noir Studio was losing sales to competitors with better online experiences. Their existing website was slow, hard to navigate, and did not reflect their luxury brand positioning.',
    solution: 'Custom Shopify development with unique product pages, seamless checkout flow, and integration with inventory management systems. We focused on creating an immersive shopping experience that mirrors the in-store feel.',
    benefits: [
      { metric: '180%', label: 'Increase in online sales' },
      { metric: '35%', label: 'Higher average order value' },
      { metric: '2.5s', label: 'Page load time (from 8s)' },
      { metric: '45%', label: 'Lower cart abandonment' },
    ],
    testimonial: {
      quote: 'Our online revenue now exceeds our physical stores. The website has become our primary sales channel.',
      author: 'Marcus Webb',
      role: 'Founder, Noir Studio',
    },
    services: ['E-Commerce Development', 'UX Design', 'Shopify Integration', 'Payment Systems'],
  },
  {
    id: 3,
    title: 'Apex Ventures',
    category: 'Landing Page',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&h=600&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=800&fit=crop&q=80',
    ],
    description: 'Investment platform launch',
    challenge: 'Apex Ventures was launching a new fund targeting tech startups but had no online presence. They needed to quickly establish credibility and generate qualified leads.',
    solution: 'Minimalist design focused on credibility and clear messaging. Interactive portfolio showcase and streamlined contact forms with smart lead qualification.',
    benefits: [
      { metric: '12%', label: 'Visitor to lead conversion' },
      { metric: '50+', label: 'Startup applications in month 1' },
      { metric: '8', label: 'Deals closed from website leads' },
      { metric: '$15M', label: 'Total investment deployed' },
    ],
    testimonial: {
      quote: 'The landing page paid for itself within the first week. We are now receiving more quality deal flow than ever.',
      author: 'James Liu',
      role: 'Managing Partner, Apex Ventures',
    },
    services: ['Landing Page Design', 'Copywriting', 'Lead Generation', 'Analytics Setup'],
  },
  {
    id: 4,
    title: 'Flow App',
    category: 'Product Design',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1559526324-593bc073d938?w=1200&h=800&fit=crop&q=80',
    ],
    description: 'Productivity app for remote teams',
    challenge: 'Flow needed a complete redesign of their productivity app. User retention was low and the interface was confusing, leading to poor reviews and high churn.',
    solution: 'User-centered design process with extensive research and testing. Clean interface with powerful features hidden behind simple interactions. Focus on reducing cognitive load.',
    benefits: [
      { metric: '4.8', label: 'App Store rating (from 3.2)' },
      { metric: '50K+', label: 'Downloads in 6 months' },
      { metric: '65%', label: 'Improvement in retention' },
      { metric: '40%', label: 'Increase in daily active users' },
    ],
    testimonial: {
      quote: 'Users are actually enjoying our app now. The redesign completely changed how people perceive Flow.',
      author: 'Anna Park',
      role: 'Product Lead, Flow',
    },
    services: ['Product Design', 'UX Research', 'UI Design', 'Prototyping'],
  },
  {
    id: 5,
    title: 'Artisan Coffee',
    category: 'E-Commerce',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&h=800&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1200&h=800&fit=crop&q=80',
    ],
    description: 'Online store for specialty coffee',
    challenge: 'Artisan Coffee wanted to launch direct-to-consumer sales but struggled to differentiate from larger competitors. They needed a way to tell their story and build customer loyalty.',
    solution: 'Story-driven e-commerce experience with subscription options, detailed origin information, and brewing guides. Each product page tells the story of the farmers and the journey of the beans.',
    benefits: [
      { metric: '85%', label: 'Subscription retention rate' },
      { metric: '200%', label: 'Increase in customer LTV' },
      { metric: '3.5x', label: 'Higher repeat purchase rate' },
      { metric: '25K', label: 'Email subscribers in year 1' },
    ],
    testimonial: {
      quote: 'Our customers feel connected to our story now. The subscription business has completely transformed our revenue model.',
      author: 'David Torres',
      role: 'Owner, Artisan Coffee',
    },
    services: ['E-Commerce Design', 'Subscription System', 'Content Strategy', 'Email Marketing'],
  },
  {
    id: 6,
    title: 'Kinetic',
    category: 'Website',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=1000&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=800&fit=crop&q=80',
    ],
    description: 'Corporate website redesign',
    challenge: 'Kinetic corporate website was outdated, slow, and failing to generate leads. The company was losing deals because prospects did not take them seriously after seeing the website.',
    solution: 'Complete redesign with focus on user experience, clear service presentation, and optimized conversion paths. Performance optimization reduced load times by 60%.',
    benefits: [
      { metric: '90%', label: 'Increase in lead generation' },
      { metric: '60%', label: 'Faster page load time' },
      { metric: '3x', label: 'More time spent on site' },
      { metric: '40%', label: 'Higher conversion rate' },
    ],
    testimonial: {
      quote: 'Prospects now come to meetings already impressed. The website does half the selling for us.',
      author: 'Michael Brown',
      role: 'VP Sales, Kinetic',
    },
    services: ['Website Redesign', 'Performance Optimization', 'SEO', 'CMS Development'],
  },
]

const categories = ['All', 'Website', 'E-Commerce', 'Brand Identity', 'Landing Page', 'Product Design']

export default function WorkPage() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

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
            {categories.map((category) => (
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

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[9999] overflow-y-auto bg-bg-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
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
                  src={selectedProject.images[0]}
                  alt={selectedProject.title}
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
                      {selectedProject.category} — {selectedProject.year}
                    </span>
                    <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight mt-4">
                      {selectedProject.title}
                    </h1>
                    <p className="text-text-secondary text-xl md:text-2xl mt-6 max-w-2xl">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24">
                    <div>
                      <h3 className="text-text-tertiary text-xs uppercase tracking-[0.2em] mb-4">
                        The Challenge
                      </h3>
                      <p className="text-text-primary text-lg leading-relaxed">
                        {selectedProject.challenge}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-text-tertiary text-xs uppercase tracking-[0.2em] mb-4">
                        Our Solution
                      </h3>
                      <p className="text-text-primary text-lg leading-relaxed">
                        {selectedProject.solution}
                      </p>
                    </div>
                  </div>

                  {/* Project Images */}
                  <div className="mb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      {selectedProject.images.slice(1).map((img, i) => (
                        <div key={i} className={`${i === 0 ? 'md:col-span-2' : ''}`}>
                          <img
                            src={img}
                            alt={`${selectedProject.title} - Image ${i + 2}`}
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
                      {selectedProject.benefits.map((benefit, i) => (
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
                      <path d="M10 8H6C4.89543 8 4 8.89543 4 10V14C4 15.1046 4.89543 16 6 16H8C8 17.1046 7.10457 18 6 18H5C4.44772 18 4 18.4477 4 19C4 19.5523 4.44772 20 5 20H6C8.20914 20 10 18.2091 10 16V8ZM20 8H16C14.8954 8 14 8.89543 14 10V14C14 15.1046 14.8954 16 16 16H18C18 17.1046 17.1046 18 16 18H15C14.4477 18 14 18.4477 14 19C14 19.5523 14.4477 20 15 20H16C18.2091 20 20 18.2091 20 16V8Z" fill="currentColor"/>
                    </svg>
                    <p className="font-display text-2xl md:text-3xl font-medium leading-relaxed mb-8">
                      "{selectedProject.testimonial.quote}"
                    </p>
                    <div>
                      <p className="text-text-primary font-medium uppercase tracking-wider">
                        {selectedProject.testimonial.author}
                      </p>
                      <p className="text-text-tertiary text-sm">
                        {selectedProject.testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="mb-16 pt-16 border-t border-border">
                    <h3 className="text-text-tertiary text-xs uppercase tracking-[0.2em] mb-6">
                      Services Provided
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.services.map((service) => (
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
                      onClick={() => setSelectedProject(null)}
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
    </main>
  )
}
