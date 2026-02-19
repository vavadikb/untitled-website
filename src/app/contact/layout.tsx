import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Let's Talk",
  description: "Have a project in mind? Get in touch with untitled. and let's build something remarkable together. Fast turnaround, transparent pricing.",
  alternates: {
    canonical: 'https://untitled.it.com/contact',
  },
  openGraph: {
    title: "Let's Talk — untitled.",
    description: "Have a project in mind? Get in touch and let's build something remarkable together.",
    url: 'https://untitled.it.com/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
