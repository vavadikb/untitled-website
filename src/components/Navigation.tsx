'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from './ThemeProvider'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Fixed navigation bar */}
      <motion.nav
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
          isScrolled ? 'py-4 bg-bg-primary/80 backdrop-blur-md' : 'py-6 md:py-8'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="px-6 md:px-12 lg:px-24 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-2xl md:text-4xl font-black tracking-tight text-text-primary hover:opacity-60 transition-opacity duration-300"
          >
            untitled<span className="text-text-secondary">.</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm uppercase tracking-[0.15em] transition-colors duration-300 ${
                  pathname === item.href ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
              aria-label="Toggle theme"
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
            </button>

            {/* Menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              aria-label="Toggle menu"
            >
              <motion.span
                className="block w-5 h-[1.5px] bg-text-primary"
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 4.5 : 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-5 h-[1.5px] bg-text-primary"
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -4.5 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[999] bg-bg-primary md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="h-full px-6 flex flex-col pt-32 pb-12">
              <div className="flex flex-col gap-6">
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="font-display text-4xl font-bold uppercase tracking-tight text-text-primary hover:text-text-secondary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="text-text-tertiary text-xs uppercase tracking-wider mb-4">
                    Email
                  </p>
                  <a
                    href="mailto:hello@untitled.studio"
                    className="text-text-primary text-lg hover:text-text-secondary transition-colors"
                  >
                    hello@untitled.studio
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
