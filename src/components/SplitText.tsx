'use client'

import { motion } from 'framer-motion'

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  staggerDelay?: number
  once?: boolean
}

export default function SplitText({
  text,
  className = '',
  delay = 0,
  staggerDelay = 0.03,
  once = true,
}: SplitTextProps) {
  const words = text.split(' ')

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay * 3,
        delayChildren: delay,
      },
    },
  }

  const wordVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  }

  const letterVariant = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  }

  return (
    <motion.div
      className={`flex flex-wrap overflow-hidden ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {words.map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          className="inline-flex overflow-hidden mr-[0.25em]"
          variants={wordVariant}
        >
          {word.split('').map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              className="inline-block"
              variants={letterVariant}
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </motion.div>
  )
}
