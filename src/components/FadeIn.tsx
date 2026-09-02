import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: 'up' | 'none'
}

export default function FadeIn({ children, className = '', delay = 0, duration = 1, direction = 'up' }: FadeInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px 200px 0px' })
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reducedMotion ? false : { opacity: 0, y: direction === 'up' ? 24 : 0 }}
      animate={reducedMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: direction === 'up' ? 24 : 0 }}
      transition={{ duration: reducedMotion ? 0 : duration, delay: reducedMotion ? 0 : delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}
