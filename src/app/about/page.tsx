'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const values = [
  {
    title: 'Speed',
    description: 'We believe great work does not need to take months. Our streamlined process delivers results in days, not weeks.',
  },
  {
    title: 'Quality',
    description: 'We never compromise on quality. Every pixel, every line of code is crafted with care and attention to detail.',
  },
  {
    title: 'Transparency',
    description: 'No hidden fees, no surprises. We communicate clearly and honestly throughout every project.',
  },
  {
    title: 'Partnership',
    description: 'We are not just vendors, we are partners. Your success is our success, and we are invested in your growth.',
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 md:pt-48 pb-24 md:pb-32">
        <div className="px-6 md:px-12 lg:px-24">
          <motion.p
            className="text-text-tertiary text-xs tracking-[0.3em] uppercase font-mono mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Us
          </motion.p>
          <motion.h1
            className="font-display text-[clamp(3rem,10vw,10rem)] font-black uppercase tracking-tighter leading-[0.85]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            We build
            <br />
            <span className="text-stroke">websites</span>
            <br />
            that sell.
          </motion.h1>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 md:py-32 border-y border-border">
        <div className="px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight mb-8">
                Our Mission
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                We founded untitled. with a simple belief: great websites should not take months to build.
                We saw too many businesses waiting endlessly for agencies, missing opportunities while
                their competitors moved ahead.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                Our 7-day process is not about cutting corners. It is about cutting waste.
                No endless meetings, no committee decisions, no scope creep. Just focused work
                from experienced professionals who know exactly what they are doing.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                The result? Beautiful, functional websites delivered in record time, without
                sacrificing quality or attention to detail.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32">
        <div className="px-6 md:px-12 lg:px-24">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-text-tertiary text-xs tracking-[0.3em] uppercase font-mono mb-4">
              What We Believe
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight">
              Our Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                className="border border-border p-8 md:p-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight mb-4">
                  {value.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
