export const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.1,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export const slideInLeftVariants = {
  hidden: { x: -60, opacity: 0 },
  visible: (delay: number = 0) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export const slideInRightVariants = {
  hidden: { x: 60, opacity: 0 },
  visible: (delay: number = 0) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export const scaleUpVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: (delay: number = 0) => ({
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

export const letterVariants = {
  hidden: {
    y: 100,
    opacity: 0,
    rotateX: -90,
  },
  visible: (i: number = 0) => ({
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.03,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export const clipRevealVariants = {
  hidden: {
    clipPath: 'inset(0 0 100% 0)',
  },
  visible: (delay: number = 0) => ({
    clipPath: 'inset(0 0 0% 0)',
    transition: {
      duration: 1,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export const imageRevealVariants = {
  hidden: {
    clipPath: 'inset(0 100% 0 0)',
  },
  visible: (delay: number = 0) => ({
    clipPath: 'inset(0 0% 0 0)',
    transition: {
      duration: 1.2,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}
