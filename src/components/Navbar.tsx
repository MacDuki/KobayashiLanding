import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { whatsappUrl } from '../constants'

const links = [
  { label: 'Clases', href: '#clases' },
  { label: 'Horarios', href: '#planes' },
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

  const handleMobileLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault()
    const target = document.getElementById(href.slice(1))

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.replaceState(null, '', href)
    }

    setMenuOpen(false)
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
            className="flex items-center gap-2 md:gap-3 font-display text-lg md:text-2xl tracking-[0.15em] text-dojo-cream hover:text-white transition-colors duration-500"
          >
            <img
              src="./images/optimized/logoKOBAYASHI.webp"
              alt="Kobayashi"
              width="320"
              height="316"
              loading="eager"
              decoding="async"
              className="h-16  md:h-20 w-auto mt-2"
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
                className="text-dojo-cream/60 hover:text-dojo-cream text-xs tracking-[0.15em] uppercase transition-colors duration-500"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            className="md:hidden flex flex-col items-center justify-center gap-1.5 w-10 h-10"
          >
            <span className={`block w-6 h-px bg-dojo-cream transition-transform duration-300 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block w-6 h-px bg-dojo-cream transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-px bg-dojo-cream transition-transform duration-300 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="md:hidden bg-dojo-black/95 backdrop-blur-sm border-t border-dojo-cream/10">
              <div className="flex flex-col px-5 py-4 gap-1">
                {links.map(({ label, href }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={(event) => handleMobileLinkClick(event, href)}
                    className="text-dojo-cream/70 hover:text-dojo-cream py-3 text-sm tracking-[0.15em] uppercase transition-colors duration-500 border-b border-dojo-cream/5 last:border-0"
                  >
                    {label}
                  </a>
                ))}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="mt-3 bg-dojo-yellow text-dojo-black text-center py-3 text-xs tracking-[0.15em] uppercase rounded-lg"
                >
                  Reservar clase gratis
                </a>
              </div>
          </div>
        )}

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
