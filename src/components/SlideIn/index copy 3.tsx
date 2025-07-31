'use client'

import { motion, Variants, useAnimation } from 'motion/react'
import { useRef } from 'react'

type SlideInProps = {
  direction?: 'left' | 'right'
  delay?: number
  duration?: number
  children: React.ReactNode
  className?: string
}

export function SlideIn({
  direction = 'left',
  delay = 0,
  duration = 0.5,
  children,
  className = ''
}: SlideInProps) {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -50 : 50,
      transition: { duration: duration / 2 }
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay, duration, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      // слушаем появление/исчезновение в viewport
      whileInView="visible"
      onViewportEnter={() => controls.start('visible')}
      onViewportLeave={() => controls.start('hidden')}
      viewport={{ once: false, amount: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
