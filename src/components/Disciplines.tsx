import FadeIn from './FadeIn'

const weapons = [
  { name: 'Bo (Kun)', desc: 'Bastón de ~1,80 m. El arma principal.' },
  { name: 'Sai', desc: 'Tridente metálico. Usado en pares o de a tres.' },
  { name: 'Nunchaku', desc: 'Dos piezas unidas por cuerda o cadena.' },
  { name: 'Tonfa', desc: 'Mango de mortero. Base de los bastones policiales modernos.' },
  { name: 'Kama', desc: 'Hoz agrícola. Se usa en pares.' },
  { name: 'Eiku', desc: 'Remo de pescador. Comparte técnicas con el Bo.' },
]

export default function Disciplines() {
  return (
    <section className="bg-dojo-black py-24 md:py-36 px-8 md:px-12">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-20">
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
                src="/images/caminoDeLasManosVacias.png"
                alt="El camino de las manos vacías"
                loading="lazy"
                className="w-full mt-12 aspect-[16/9] object-cover rounded-2xl"
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
              <div className="space-y-5 text-dojo-cream/70 text-base md:text-lg leading-relaxed mb-12">
                <p>
                  El Kobudo de Okinawa es el arte marcial tradicional de las armas. Muchas de ellas derivan de herramientas cotidianas de agricultores y pescadores que, ante la prohibición de portar armas, transformaron sus instrumentos de trabajo en medios de defensa.
                </p>
                <p className="text-dojo-cream/90 text-lg font-display italic">
                  Jinbu Fusatsu: "el sabio con arte marcial vence sin matar y triunfa sin enfrentamiento."
                </p>
              </div>
            </FadeIn>

            {/* Weapons grid - editorial, not cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
              {weapons.map((weapon, i) => (
                <FadeIn key={weapon.name} delay={0.3 + i * 0.08}>
                  <div className="py-4 border-b border-dojo-cream/5">
                    <p className="text-dojo-cream text-sm md:text-base font-medium">{weapon.name}</p>
                    <p className="text-dojo-muted text-sm mt-0.5">{weapon.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Image break */}
            <FadeIn delay={0.5}>
              <img
                src="/images/alumno_4.jpg"
                alt="Alumno de kobudo"
                loading="lazy"
                className="w-full mt-12 aspect-[16/9] object-cover rounded-2xl"
              />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
