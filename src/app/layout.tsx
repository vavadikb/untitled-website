import type { Metadata } from 'next'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'
import FloatingBadge from '@/components/FloatingBadge'

export const metadata: Metadata = {
  title: 'untitled studio — Digital Design Agency',
  description: 'We create bold digital experiences. Design, development, and strategy for brands that refuse to blend in.',
  keywords: ['web design', 'web development', 'branding', 'digital agency', 'UI/UX design', 'creative studio'],
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
        </ThemeProvider>
        <div className="noise-overlay" />
      </body>
    </html>
  )
}
