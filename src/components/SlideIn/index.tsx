'use client'

import { motion, Variants, useAnimation, useInView } from 'motion/react'
import { ReactNode, useRef, useEffect } from 'react'

interface SlideInProps {
  direction?: 'left' | 'right'
  delay?: number
  duration?: number
  children: ReactNode
  className?: string
}

export function SlideIn({
  direction = 'left',
  delay = 0,
  duration = 0.5,
  children,
  className = '',
}: SlideInProps) {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.1 })

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -50 : 50,
      transition: { duration: duration / 2 },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay, duration, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  useEffect(() => {
    controls.start(inView ? 'visible' : 'hidden')
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
