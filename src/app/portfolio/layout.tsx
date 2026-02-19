import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Work',
  description: 'Explore the portfolio of untitled. — web design, branding, and digital experiences crafted for brands that refuse to blend in.',
  alternates: {
    canonical: 'https://untitled.it.com/portfolio',
  },
  openGraph: {
    title: 'Our Work — untitled.',
    description: 'Explore the portfolio of untitled. — web design, branding, and digital experiences for ambitious brands.',
    url: 'https://untitled.it.com/portfolio',
  },
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children
}
