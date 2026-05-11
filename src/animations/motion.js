export const transitions = {
  smooth: {
    duration: 0.42,
    ease: [0.22, 1, 0.36, 1],
  },
  quick: {
    duration: 0.22,
    ease: [0.22, 1, 0.36, 1],
  },
}

export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 18,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: transitions.smooth,
  },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
}

export const modalBackdrop = {
  hidden: {
    opacity: 0,
    backdropFilter: 'blur(0px)',
  },
  visible: {
    opacity: 1,
    backdropFilter: 'blur(10px)',
    transition: transitions.quick,
  },
  exit: {
    opacity: 0,
    backdropFilter: 'blur(0px)',
    transition: transitions.quick,
  },
}

export const modalPanel = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: transitions.smooth,
  },
  exit: {
    opacity: 0,
    y: 16,
    scale: 0.985,
    transition: transitions.quick,
  },
}
