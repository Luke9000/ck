'use client'

import { motion, Variants } from "motion/react";



type SlideInProps = {
  direction?: "left" | "right";
  delay?: number;
  duration?: number;
  children: React.ReactNode;
  className?: string;
};

export function SlideIn({
  direction = "left",
  delay = 0,
  duration = 0.5,
  children,
  className = ''
}: SlideInProps) {
 const variants: Variants = {
  hidden: { opacity: 0, x: direction === "left" ? -50 : 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay, duration, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
