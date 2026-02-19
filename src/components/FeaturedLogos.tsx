'use client'

import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const logos = [
  { name: 'Google', mark: 'G', accent: 'circle' as const },
  { name: 'Apple', mark: 'A', accent: 'triangle' as const },
  { name: 'Meta', mark: 'M', accent: 'hexagon' as const },
  { name: 'Netflix', mark: 'N', accent: 'square' as const },
  { name: 'Spotify', mark: 'S', accent: 'wave' as const },
  { name: 'Airbnb', mark: 'A', accent: 'diamond' as const },
]

function LogoShape({ accent }: { accent: string }) {
  const cls = "stroke-text-secondary/40 group-hover:stroke-accent transition-colors duration-500"
  switch (accent) {
    case 'circle':
      return <circle cx="20" cy="20" r="18" className={cls} strokeWidth="1" fill="none" />
    case 'triangle':
      return <polygon points="20,2 38,38 2,38" className={cls} strokeWidth="1" fill="none" />
    case 'hexagon':
      return <polygon points="20,2 37,11 37,29 20,38 3,29 3,11" className={cls} strokeWidth="1" fill="none" />
    case 'square':
      return <rect x="4" y="4" width="32" height="32" className={cls} strokeWidth="1" fill="none" />
    case 'wave':
      return (
        <>
          <circle cx="20" cy="20" r="18" className={cls} strokeWidth="1" fill="none" />
          <path d="M8 20 Q14 12, 20 20 T32 20" className={cls} strokeWidth="1" fill="none" />
        </>
      )
    case 'diamond':
      return <polygon points="20,2 38,20 20,38 2,20" className={cls} strokeWidth="1" fill="none" />
    default:
      return null
  }
}

export default function FeaturedLogos() {
  return (
    <section className="py-20 md:py-28 border-y border-white/5">
      <div className="container-custom">
        <ScrollReveal>
          <p className="text-text-secondary text-xs tracking-[0.3em] uppercase text-center mb-12">
            Trusted by industry leaders
          </p>
        </ScrollReveal>

        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {logos.map((logo, i) => (
            <ScrollReveal key={logo.name} delay={i * 0.1}>
              <motion.div
                className="group flex items-center gap-3 cursor-default opacity-40 hover:opacity-100 transition-opacity duration-500"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <svg viewBox="0 0 40 40" className="w-10 h-10">
                  <LogoShape accent={logo.accent} />
                  <text
                    x="20"
                    y="24"
                    textAnchor="middle"
                    className="text-[14px] fill-text-secondary/60 group-hover:fill-accent transition-colors duration-500"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {logo.mark}
                  </text>
                </svg>
                <span className="text-text-secondary text-sm tracking-wider group-hover:text-text-primary transition-colors duration-500 hidden sm:inline">
                  {logo.name}
                </span>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
