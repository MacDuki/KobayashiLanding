import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import FadeIn from './FadeIn'

const weapons = [
  { name: 'Bo (Kun)', desc: 'Bastón de ~1,80 m. El arma principal.', image: './images/optimized/Bo (Kun).webp' },
  { name: 'Sai', desc: 'Tridente metálico. Usado en pares o de a tres.', image: './images/optimized/sai.webp' },
  { name: 'Nunchaku', desc: 'Dos piezas unidas por cuerda o cadena.', image: './images/optimized/Nunchaku.webp' },
  { name: 'Tonfa', desc: 'Mango de mortero. Base de los bastones policiales modernos.', image: './images/optimized/Tonfa.webp' },
  { name: 'Kama', desc: 'Hoz agrícola. Se usa en pares.', image: './images/optimized/Kama.webp' },
  { name: 'Eiku', desc: 'Remo de pescador. Comparte técnicas con el Bo.', image: './images/optimized/Eiku.webp' },
]

export default function Disciplines() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((i) => (i - 1 + weapons.length) % weapons.length)
  const next = () => setCurrent((i) => (i + 1) % weapons.length)

  const weapon = weapons[current]

  return (
    <section className="bg-dojo-black py-14 md:py-20 px-8 md:px-12">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-start">
          {/* Karate-Do */}
          <div>
            <FadeIn>
              <p className="text-sm md:text-base tracking-[0.2em] uppercase text-dojo-yellow mb-8">Karate-Do</p>
              <h2 className="font-display text-4xl md:text-6xl leading-none text-dojo-cream mb-8">
                空手道
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="space-y-5 text-dojo-cream/70 text-base md:text-lg leading-relaxed">
                <p className="text-dojo-cream/90 text-xl md:text-2xl font-display italic">
                  "El camino de las manos vacías"
                </p>
                <p>
                  <em>Kara</em> = vacío, <em>te</em> = mano, <em>do</em> = camino. El Karate-Do es un arte marcial orientado al desarrollo del carácter. Desarrolla fuerza, potencia, agilidad, velocidad, reacción, flexibilidad, postura y respiración.
                </p>
                <p>
                  Sus técnicas se controlan mediante la fuerza de voluntad. El énfasis espiritual siempre fue mayor que el técnico. El objetivo no es vencer al oponente, sino el desarrollo propio.
                </p>
              </div>
            </FadeIn>

            {/* Image break */}
            <FadeIn delay={0.4}>
              <img
                src="./images/optimized/caminoDeLasManosVacias.webp"
                alt="El camino de las manos vacías"
                width="1000"
                height="667"
                loading="lazy"
                className="w-full mt-28 aspect-[16/9] object-cover rounded-2xl"
              />
            </FadeIn>
          </div>

          {/* Kobudo */}
          <div>
            <FadeIn>
              <p className="text-sm md:text-base tracking-[0.2em] uppercase text-dojo-yellow mb-8">Kobudo — Jinbukai Internacional</p>
              <h2 className="font-display text-4xl md:text-6xl leading-none text-dojo-cream mb-8">
                古武道
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-dojo-cream/90 text-xl md:text-2xl font-display italic mb-5">
                "El camino antiguo de las armas"
              </p>
              <p className="text-dojo-cream/70 text-base md:text-lg leading-relaxed mb-12">
                <em>Ko</em> = viejo, <em>bu</em> = arma, <em>dō</em> = camino.
                El Kobudo de Okinawa es el arte marcial tradicional de las armas. Muchas de ellas derivan de herramientas cotidianas de agricultores y pescadores que, ante la prohibición de portar armas, transformaron sus instrumentos de trabajo en medios de defensa.
              </p>
            </FadeIn>

            {/* Weapon carousel */}
            <FadeIn delay={0.3}>
              <div className="mb-8">
                <div className="flex items-center justify-between gap-4">
                  <button
                    onClick={prev}
                    aria-label="Arma anterior"
                    className="w-11 h-11 rounded-full border border-dojo-cream/20 flex items-center justify-center text-dojo-cream/70 hover:text-dojo-cream hover:border-dojo-cream/40 transition-colors duration-300"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>

                  <div className="flex-1 min-w-0 text-center">
                    <p className="text-dojo-cream text-base md:text-lg font-medium">{weapon.name}</p>
                    <p className="text-dojo-muted text-sm mt-1">{weapon.desc}</p>
                  </div>

                  <button
                    onClick={next}
                    aria-label="Arma siguiente"
                    className="w-11 h-11 rounded-full border border-dojo-cream/20 flex items-center justify-center text-dojo-cream/70 hover:text-dojo-cream hover:border-dojo-cream/40 transition-colors duration-300"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </div>

                {/* Dots */}
                <div className="flex items-center justify-center gap-2 mt-6">
                  {weapons.map((w, i) => (
                    <button
                      key={w.name}
                      onClick={() => setCurrent(i)}
                      aria-label={w.name}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === current ? 'w-6 bg-dojo-yellow' : 'w-1.5 bg-dojo-cream/20 hover:bg-dojo-cream/40'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl aspect-[16/9]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={weapon.image}
                    src={weapon.image}
                    alt={weapon.name}
                    width="900"
                    height="600"
                    loading="lazy"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
