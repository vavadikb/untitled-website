'use client'

import Link from 'next/link'

const socialLinks = [
  { label: 'LinkedIn', href: '#' },
  { label: 'Facebook', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-border">
      {/* Main Footer Content */}
      <div className="px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Contact */}
          <div>
            <h3 className="text-text-primary text-sm font-medium mb-8">
              New Business Inquiries
            </h3>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
                <span className="text-text-secondary w-32">Worldwide</span>
                <a
                  href="mailto:hello@untitled.it.com"
                  className="text-text-primary hover:text-text-secondary transition-colors underline"
                >
                  hello@untitled.it.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - About */}
          <div>
            <h3 className="text-text-primary text-sm font-medium mb-8">
              About
            </h3>
            <p className="text-text-secondary leading-relaxed max-w-xl">
              Based nowhere, working everywhere. We're a collective of designers,
              developers, and strategists who believe the best work happens when
              you cut the bureaucracy and focus on what matters — making great things.
            </p>
          </div>
        </div>
      </div>

      {/* Large Logo */}
      <div className="px-6 md:px-12 lg:px-24 py-12 md:py-16 overflow-hidden">
        <h2 className="font-display text-[20vw] md:text-[18vw] font-black tracking-tight leading-[0.8] text-text-primary select-none">
          untitled<span className="text-text-secondary">.</span>
        </h2>
      </div>

      {/* Bottom Bar */}
      <div className="px-6 md:px-12 lg:px-24 py-6 border-t border-border">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-text-secondary text-sm hover:text-text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-8">
            <Link
              href="/privacy"
              className="text-text-secondary text-sm hover:text-text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-text-secondary text-sm hover:text-text-primary transition-colors"
            >
              Terms of Service
            </Link>
            <span className="text-text-tertiary text-sm">
              © {new Date().getFullYear()} untitled. — Part of &ldquo;WhaleGroup&rdquo; (Poland, NIP&nbsp;1133186197)
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
