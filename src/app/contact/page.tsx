'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      <Navigation />

      <section className="pt-32 md:pt-48 pb-24 md:pb-32">
        <div className="px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl">
            <motion.p
              className="text-text-tertiary text-xs tracking-[0.3em] uppercase font-mono mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Contact
            </motion.p>
            <motion.h1
              className="font-display text-[clamp(3rem,10vw,8rem)] font-black uppercase tracking-tighter leading-[0.85] mb-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Let's
              <br />
              <span className="text-stroke">talk</span>
            </motion.h1>
            <motion.p
              className="text-text-secondary text-lg md:text-xl max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ready to start your project? Send us a message and we will get back to you within 24 hours.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {isSubmitted ? (
                <div className="py-16 text-center">
                  <div className="w-20 h-20 mx-auto mb-8 border border-text-primary flex items-center justify-center">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-text-primary">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-display text-3xl font-bold uppercase tracking-tight mb-4">Message Sent</h3>
                  <p className="text-text-secondary">We will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-text-tertiary text-xs uppercase tracking-wider mb-3">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-transparent border-b border-border py-3 text-text-primary focus:border-text-primary outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-text-tertiary text-xs uppercase tracking-wider mb-3">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent border-b border-border py-3 text-text-primary focus:border-text-primary outline-none transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-text-tertiary text-xs uppercase tracking-wider mb-3">
                        Company
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-transparent border-b border-border py-3 text-text-primary focus:border-text-primary outline-none transition-colors"
                        placeholder="Company Inc."
                      />
                    </div>
                    <div>
                      <label className="block text-text-tertiary text-xs uppercase tracking-wider mb-3">
                        Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-transparent border-b border-border py-3 text-text-primary focus:border-text-primary outline-none transition-colors cursor-pointer"
                      >
                        <option value="" className="bg-bg-primary text-text-primary">Select budget</option>
                        <option value="5-10k" className="bg-bg-primary text-text-primary">$5,000 - $10,000</option>
                        <option value="10-25k" className="bg-bg-primary text-text-primary">$10,000 - $25,000</option>
                        <option value="25-50k" className="bg-bg-primary text-text-primary">$25,000 - $50,000</option>
                        <option value="50k+" className="bg-bg-primary text-text-primary">$50,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-text-tertiary text-xs uppercase tracking-wider mb-3">
                      Tell us about your project *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent border-b border-border py-3 text-text-primary focus:border-text-primary outline-none transition-colors resize-none"
                      placeholder="Describe your project, goals, and timeline..."
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-5 h-5 border-2 border-bg-primary/30 border-t-bg-primary rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-12"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div>
                <h3 className="text-text-tertiary text-xs uppercase tracking-[0.2em] mb-4">
                  Email
                </h3>
                <a
                  href="mailto:hello@untitled.studio"
                  className="text-text-primary text-2xl md:text-3xl font-display font-bold hover:text-text-secondary transition-colors"
                >
                  hello@untitled.studio
                </a>
              </div>

              <div>
                <h3 className="text-text-tertiary text-xs uppercase tracking-[0.2em] mb-4">
                  Location
                </h3>
                <p className="text-text-primary text-lg">
                  Worldwide
                </p>
                <p className="text-text-secondary text-sm mt-2">
                  We work remotely with clients across the globe.
                </p>
              </div>

              <div>
                <h3 className="text-text-tertiary text-xs uppercase tracking-[0.2em] mb-4">
                  Response Time
                </h3>
                <p className="text-text-primary text-lg">
                  Within 24 hours
                </p>
                <p className="text-text-secondary text-sm mt-2">
                  We respond to all inquiries quickly.
                </p>
              </div>

              <div className="pt-8 border-t border-border">
                <h3 className="text-text-tertiary text-xs uppercase tracking-[0.2em] mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-6">
                  <a href="#" className="text-text-secondary hover:text-text-primary transition-colors">Instagram</a>
                  <a href="#" className="text-text-secondary hover:text-text-primary transition-colors">LinkedIn</a>
                  <a href="#" className="text-text-secondary hover:text-text-primary transition-colors">X</a>
                  <a href="#" className="text-text-secondary hover:text-text-primary transition-colors">Dribbble</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
