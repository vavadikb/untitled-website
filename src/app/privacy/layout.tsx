import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read the privacy policy of untitled. — how we collect, use, and protect your personal information.',
  alternates: {
    canonical: 'https://untitled.it.com/privacy',
  },
  robots: {
    index: true,
    follow: false,
  },
  openGraph: {
    title: 'Privacy Policy — untitled.',
    description: 'How untitled. collects, uses, and protects your personal information.',
    url: 'https://untitled.it.com/privacy',
  },
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children
}
