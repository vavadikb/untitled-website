import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about untitled. — a bold digital agency built on speed, quality, and transparency. We partner with ambitious brands to craft standout web experiences.',
  alternates: {
    canonical: 'https://untitled.it.com/about',
  },
  openGraph: {
    title: 'About Us — untitled.',
    description: 'Learn about untitled. — a bold digital agency built on speed, quality, and transparency.',
    url: 'https://untitled.it.com/about',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
