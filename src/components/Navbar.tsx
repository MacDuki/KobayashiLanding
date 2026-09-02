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
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMenuOpen(false)
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
          scrolled || menuOpen ? 'bg-dojo-black/95 backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-5 md:px-12 h-20 max-w-[1800px] mx-auto">
          <a
            href="#"
            onClick={(e) => scrollTo(e, '#')}
            className="flex items-center gap-2 md:gap-3 font-display text-lg md:text-2xl tracking-[0.15em] text-dojo-cream hover:text-white transition-colors duration-500"
          >
            <img
              src="/images/logoKOBAYASHI.png"
              alt="Kobayashi"
              className="h-8 md:h-10 w-auto"
            />
            <span>
              KOBAYASHI <span className="text-dojo-muted font-body text-[10px] md:text-xs tracking-[0.3em] align-middle ml-1 md:ml-2">Uruguay</span>
            </span>
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

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            className="md:hidden flex flex-col items-center justify-center gap-1.5 w-10 h-10"
          >
            <span className={`block w-6 h-px bg-dojo-cream transition-transform duration-300 ${menuOpen ? 'translate-y-[3.5px] rotate-45' : ''}`} />
            <span className={`block w-6 h-px bg-dojo-cream transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-px bg-dojo-cream transition-transform duration-300 ${menuOpen ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
          </button>
        </div>

        {/* Mobile dropdown menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-dojo-black/95 backdrop-blur-sm border-t border-dojo-cream/10"
            >
              <div className="flex flex-col px-5 py-4 gap-1">
                {links.map(({ label, href }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={(e) => scrollTo(e, href)}
                    className="text-dojo-cream/70 hover:text-dojo-cream py-3 text-sm tracking-[0.15em] uppercase transition-colors duration-500 border-b border-dojo-cream/5 last:border-0"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {scrolled && !menuOpen && (
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
