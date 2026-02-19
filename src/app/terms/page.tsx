'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const sections = [
  {
    title: 'Introduction',
    content: `These Terms of Service ("Terms") govern your use of the services provided by untitled. ("we", "our", or "us"). By accessing or using our services, you agree to be bound by these Terms.`,
  },
  {
    title: 'Acceptance of Terms',
    content: `By accessing and using our services, you accept and agree to be bound by the terms and provisions of this agreement.`,
  },
  {
    title: 'Our Services',
    content: `untitled. provides:`,
    list: [
      'Custom web design and development services',
      'Brand identity and visual design',
      'UX/UI consulting and product design',
      'E-commerce development and integration',
      'Ongoing support and maintenance services',
    ],
  },
  {
    title: 'User Responsibilities',
    content: `You agree to:`,
    list: [
      'Provide accurate and complete information',
      'Use our services in compliance with applicable laws',
      'Not interfere with or disrupt our services',
      'Respect intellectual property rights',
      'Maintain confidentiality of sensitive information',
    ],
  },
  {
    title: 'Intellectual Property',
    content: `All content, features, and functionality of our services — including but not limited to design deliverables, source code, and brand assets produced under a project agreement — are subject to the ownership terms specified in the relevant project contract. Unless otherwise agreed in writing, untitled. retains rights to display completed work in its portfolio.`,
  },
  {
    title: 'Limitation of Liability',
    content: `To the maximum extent permitted by law, untitled. shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.`,
  },
  {
    title: 'Termination',
    content: `We may terminate or suspend your access to our services immediately, without prior notice, for any reason whatsoever, including without limitation if you breach these Terms.`,
  },
  {
    title: 'Changes to Terms',
    content: `We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.`,
  },
  {
    title: 'Contact Information',
    content: `If you have any questions about these Terms, please contact us at:`,
    contact: {
      email: 'hello@untitled.it.com',
      address: 'untitled. — Part of "WhaleGroup" (Poland, NIP 1133186197)',
    },
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 md:pt-48 pb-16 md:pb-24 border-b border-border">
        <div className="px-6 md:px-12 lg:px-24">
          <motion.p
            className="text-text-tertiary text-xs tracking-[0.3em] uppercase font-mono mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Legal
          </motion.p>
          <motion.h1
            className="font-display text-[clamp(3rem,8vw,7rem)] font-black uppercase tracking-tighter leading-[0.85] mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Terms of
            <br />
            <span className="text-stroke">Service</span>
          </motion.h1>
          <motion.p
            className="text-text-tertiary text-sm font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Last updated: January 1, 2025
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-32">
        <div className="px-6 md:px-12 lg:px-24">
          <div className="max-w-3xl">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="mb-16 md:mb-20 pb-16 md:pb-20 border-b border-border last:border-0 last:pb-0"
              >
                <div className="flex items-start gap-6 mb-6">
                  <span className="text-text-tertiary text-xs font-mono mt-1 w-6 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight">
                    {section.title}
                  </h2>
                </div>

                <div className="pl-12">
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {section.content}
                  </p>

                  {section.list && (
                    <ul className="space-y-3">
                      {section.list.map((item, j) => (
                        <li key={j} className="flex items-start gap-4">
                          <span className="w-4 h-[1px] bg-text-tertiary mt-[0.65em] shrink-0" />
                          <span className="text-text-secondary leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.contact && (
                    <div className="mt-2 space-y-3">
                      <div className="flex items-center gap-4">
                        <span className="text-text-tertiary text-xs uppercase tracking-wider w-20 shrink-0">Email</span>
                        <a
                          href={`mailto:${section.contact.email}`}
                          className="text-text-primary hover:text-text-secondary transition-colors underline underline-offset-4"
                        >
                          {section.contact.email}
                        </a>
                      </div>
                      <div className="flex items-start gap-4">
                        <span className="text-text-tertiary text-xs uppercase tracking-wider w-20 shrink-0 mt-0.5">Address</span>
                        <span className="text-text-secondary">{section.contact.address}</span>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
