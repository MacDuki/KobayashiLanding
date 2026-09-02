import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Historia', href: '#historia' },
  { label: 'Clases', href: '#clases' },
  { label: 'Senseis', href: '#senseis' },
  { label: 'Planes', href: '#planes' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Ubicación', href: '#ubicacion' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-700 ${
          scrolled ? 'bg-dojo-black/95 backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-8 md:px-12 h-20 max-w-[1800px] mx-auto">
          <a href="#" onClick={(e) => scrollTo(e, '#')} className="font-display text-xl md:text-2xl tracking-[0.15em] text-dojo-cream hover:text-white transition-colors duration-500">
            KOBAYASHI <span className="text-dojo-muted font-body text-xs tracking-[0.3em] align-middle ml-2">Uruguay</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => scrollTo(e, href)}
                className="text-dojo-cream/60 hover:text-dojo-cream text-xs tracking-[0.15em] uppercase transition-colors duration-500"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
        {scrolled && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className="h-px bg-dojo-cream/10 origin-left"
          />
        )}
      </motion.nav>
    </AnimatePresence>
  )
}
