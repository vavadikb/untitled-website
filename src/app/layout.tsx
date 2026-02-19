import type { Metadata } from 'next'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'
import FloatingBadge from '@/components/FloatingBadge'
import CookieBanner from '@/components/CookieBanner'

const SITE_URL = 'https://untitled.it.com'
const SITE_NAME = 'untitled.'
const DEFAULT_TITLE = 'untitled. — Web Development Agency'
const DEFAULT_DESCRIPTION = 'We create bold digital experiences. Design, development, and strategy for brands that refuse to blend in.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s — ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: ['web design', 'web development', 'branding', 'digital agency', 'UI/UX design', 'creative studio', 'WhaleGroup', 'Poland'],
  authors: [{ name: 'untitled.', url: SITE_URL }],
  creator: 'untitled.',
  publisher: 'untitled.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'untitled. — Web Development Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ['/og-image.png'],
    creator: '@untitledit',
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') ||
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.setAttribute('data-theme', theme);
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider defaultTheme="dark">
          {children}
          <FloatingBadge />
          <CookieBanner />
        </ThemeProvider>
        <div className="noise-overlay" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://untitled.it.com/#organization',
                  name: 'untitled.',
                  url: 'https://untitled.it.com',
                  logo: {
                    '@type': 'ImageObject',
                    url: 'https://untitled.it.com/favicon.png',
                  },
                  contactPoint: {
                    '@type': 'ContactPoint',
                    email: 'hello@untitled.it.com',
                    contactType: 'customer service',
                  },
                  sameAs: [
                    'https://www.linkedin.com/company/untitledit',
                    'https://www.facebook.com/untitledit',
                  ],
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://untitled.it.com/#website',
                  url: 'https://untitled.it.com',
                  name: 'untitled.',
                  description: 'We create bold digital experiences. Design, development, and strategy for brands that refuse to blend in.',
                  publisher: { '@id': 'https://untitled.it.com/#organization' },
                },
                {
                  '@type': 'ProfessionalService',
                  '@id': 'https://untitled.it.com/#service',
                  name: 'untitled.',
                  url: 'https://untitled.it.com',
                  description: 'Web design, web development, branding, and digital strategy for ambitious brands.',
                  areaServed: 'Worldwide',
                  priceRange: '$$',
                  serviceType: ['Web Design', 'Web Development', 'Branding', 'UI/UX Design'],
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
