import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read the terms of service of untitled. — the rules and conditions that govern your use of our services.',
  alternates: {
    canonical: 'https://untitled.it.com/terms',
  },
  robots: {
    index: true,
    follow: false,
  },
  openGraph: {
    title: 'Terms of Service — untitled.',
    description: 'The rules and conditions that govern your use of untitled. services.',
    url: 'https://untitled.it.com/terms',
  },
}

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children
}
