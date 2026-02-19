'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const sections = [
  {
    title: 'Introduction',
    content: `untitled. ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.`,
  },
  {
    title: 'Information We Collect',
    content: `We may collect information about you in a variety of ways. The information we may collect includes:`,
    list: [
      'Personal Data: Name, email address, phone number, and other contact information you voluntarily provide.',
      'Usage Data: Information about how you use our website, including your IP address, browser type, and pages visited.',
      'Cookies: We use cookies and similar tracking technologies to enhance your experience on our website.',
    ],
  },
  {
    title: 'How We Use Your Information',
    content: `We use the information we collect to:`,
    list: [
      'Provide, operate, and maintain our services',
      'Improve, personalize, and expand our services',
      'Understand and analyze how you use our services',
      'Communicate with you about our services',
      'Send you updates, marketing communications, and other information',
    ],
  },
  {
    title: 'Information Sharing',
    content: `We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.`,
  },
  {
    title: 'Data Security',
    content: `We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.`,
  },
  {
    title: 'Your Rights',
    content: `You have the right to:`,
    list: [
      'Access the personal information we hold about you',
      'Request correction of inaccurate information',
      'Request deletion of your personal information',
      'Object to or restrict our processing of your information',
    ],
  },
  {
    title: 'Contact Us',
    content: `If you have any questions about this Privacy Policy, please contact us at:`,
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

export default function PrivacyPage() {
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
            Privacy
            <br />
            <span className="text-stroke">Policy</span>
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
                {/* Section number + title */}
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
