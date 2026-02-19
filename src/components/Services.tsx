'use client'

import { motion } from 'framer-motion'

const services = [
  {
    number: '01',
    title: 'Landing Pages',
    description: 'High-converting pages for launches and campaigns.',
  },
  {
    number: '02',
    title: 'Business Sites',
    description: 'Professional websites that build trust.',
  },
  {
    number: '03',
    title: 'E-Commerce',
    description: 'Online stores that actually sell.',
  },
  {
    number: '04',
    title: 'Redesign',
    description: 'Transform your old site into something new.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 relative">
      <div className="px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            className="text-text-tertiary text-xs tracking-[0.3em] uppercase font-mono mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What We Build
          </motion.p>
          <motion.h2
            className="font-display text-4xl md:text-6xl font-black tracking-tight uppercase"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Our Services
          </motion.h2>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              className="group relative p-6 md:p-8 border border-border hover:border-text-primary transition-colors duration-300 bg-bg-primary h-full min-h-[180px] md:min-h-[220px] flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Number */}
              <span className="text-text-tertiary/30 font-display text-4xl md:text-5xl font-black absolute top-4 right-4 group-hover:text-text-tertiary/50 transition-colors duration-300">
                {service.number}
              </span>

              {/* Content */}
              <div className="relative z-10 mt-auto">
                <h3 className="font-display text-base md:text-lg font-bold uppercase tracking-tight mb-2 text-text-primary">
                  {service.title}
                </h3>
                <p className="text-text-tertiary text-xs md:text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
