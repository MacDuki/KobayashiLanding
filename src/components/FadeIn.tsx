import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: 'up' | 'none'
}

export default function FadeIn({ children, className = '', delay = 0, duration = 1, direction = 'up' }: FadeInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: direction === 'up' ? 24 : 0 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: direction === 'up' ? 24 : 0 }}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}
