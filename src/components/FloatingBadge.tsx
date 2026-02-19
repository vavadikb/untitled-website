'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function FloatingBadge() {
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  // Listen for custom event to open the form
  useEffect(() => {
    const handleOpenForm = () => setIsOpen(true)
    window.addEventListener('openContactForm', handleOpenForm)
    return () => window.removeEventListener('openContactForm', handleOpenForm)
  }, [])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
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

    setTimeout(() => {
      setIsOpen(false)
      setIsSubmitted(false)
      setFormData({ name: '', email: '', company: '', message: '' })
    }, 2000)
  }

  return (
    <>
      {/* Floating button — hidden on /contact */}
      <motion.button
        onClick={() => { router.push('/contact'); window.scrollTo({ top: 0 }) }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: pathname === '/contact' ? 0 : 1, y: pathname === '/contact' ? 20 : 0, pointerEvents: pathname === '/contact' ? 'none' : 'auto' }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className={`fixed bottom-8 right-8 md:bottom-12 md:right-12 z-50 group${pathname === '/contact' ? ' pointer-events-none' : ''}`}
        aria-hidden={pathname === '/contact'}
      >
        <div className="flex items-center gap-3 px-5 py-3 bg-text-primary text-bg-primary border border-text-primary hover:bg-transparent hover:text-text-primary transition-all duration-300">
          <span className="text-xs md:text-sm font-medium tracking-[0.1em] uppercase">
            Start Project
          </span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            <path
              d="M7 17L17 7M17 7H7M17 7V17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </motion.button>

      {/* Contact form modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-bg-primary"
              onClick={() => setIsOpen(false)}
            />

            {/* Grid pattern */}
            <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

            {/* Form container */}
            <motion.div
              className="relative z-10 w-full max-w-2xl my-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute -top-12 right-0 text-text-secondary hover:text-text-primary transition-colors"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-20"
                  >
                    <div className="w-20 h-20 mx-auto mb-8 border border-text-primary flex items-center justify-center">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-text-primary">
                        <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3 className="font-display text-3xl font-bold uppercase tracking-tight mb-4">Sent</h3>
                    <p className="text-text-secondary">We will get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-8"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="text-center mb-12">
                      <p className="text-text-tertiary text-xs tracking-[0.3em] uppercase font-mono mb-4">
                        Start a project
                      </p>
                      <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight uppercase">
                        Let&apos;s Talk
                      </h2>
                    </div>

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

                    <div className="flex justify-center pt-4">
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
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
