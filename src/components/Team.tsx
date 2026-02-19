'use client'

import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const teamMembers = [
  {
    name: 'Alex Turner',
    role: 'Founder & Creative Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&q=80',
  },
  {
    name: 'Sofia Chen',
    role: 'Head of Design',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=600&fit=crop&q=80',
  },
  {
    name: 'Daniel Kim',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=600&fit=crop&q=80',
  },
  {
    name: 'Maya Patel',
    role: 'Brand Strategist',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=600&fit=crop&q=80',
  },
  {
    name: 'Marcus Johnson',
    role: 'Motion Designer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=600&fit=crop&q=80',
  },
  {
    name: 'Elena Rivera',
    role: 'UX Researcher',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=600&fit=crop&q=80',
  },
]

export default function Team() {
  return (
    <section className="section-padding-sm md:section-padding relative">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container-custom relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-8 md:mb-24">
          <ScrollReveal>
            <div>
              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                <span className="text-text-tertiary text-xs tracking-[0.2em] uppercase font-mono">
                  05
                </span>
                <div className="w-8 md:w-12 h-[1px] bg-border" />
                <span className="text-text-secondary text-xs tracking-[0.2em] uppercase">
                  Team
                </span>
              </div>
              <h2 className="font-display text-heading font-black tracking-tight uppercase">
                The People
                <br />
                <span className="text-stroke">Behind It</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-text-secondary text-sm max-w-xs md:text-right">
              A collective of rebels, misfits, and perfectionists.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
          {teamMembers.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.1}>
              <div className="group cursor-default">
                <div className="relative aspect-[5/6] overflow-hidden bg-bg-secondary mb-3 md:mb-6">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover img-grayscale"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 border border-border group-hover:border-text-primary transition-colors duration-500" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-bg-primary/0 group-hover:bg-bg-primary/60 transition-colors duration-500 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-display text-lg font-bold uppercase tracking-tight">
                      {member.role.split(' ')[0]}
                    </span>
                  </div>

                  {/* Index */}
                  <div className="absolute top-4 left-4 font-mono text-xs text-text-tertiary">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                </div>

                <h3 className="font-display text-base md:text-xl font-bold uppercase tracking-tight text-text-primary group-hover:text-text-secondary transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-text-tertiary text-xs md:text-sm mt-1 tracking-wide uppercase">
                  {member.role}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
