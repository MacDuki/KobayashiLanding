import FadeIn from './FadeIn'

export default function Tradition() {
  return (
    <section id="historia" className="bg-dojo-black py-24 md:py-36 px-8 md:px-12">
      <div className="max-w-[1800px] mx-auto">
        <FadeIn>
          <p className="text-sm md:text-base tracking-[0.2em] uppercase text-dojo-muted mb-10 md:mb-14">
            Nuestra historia
          </p>
          <div className="relative overflow-hidden rounded-2xl mb-20 md:mb-32">
            <img
              src="/images/clase_ejemplo_conAlumnosPequenos.png"
              alt="Clase de karate con niños"
              loading="lazy"
              className="w-full h-[50vh] md:h-[70vh] object-cover"
            />
            <div className="absolute inset-0 bg-dojo-black/30" />
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-5">
            <FadeIn delay={0.2}>
              <p className="font-display text-2xl md:text-4xl lg:text-5xl leading-tight text-dojo-cream text-balance">
                Un camino transmitido de maestro a alumno durante generaciones, desde las costas de Okinawa hasta Montevideo.
              </p>
            </FadeIn>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <FadeIn delay={0.4}>
              <div className="space-y-6 text-dojo-cream/70 text-base md:text-lg leading-relaxed">
                <p>
                  Kobayashi Uruguay forma parte de una de las escuelas más grandes de Karate Shorin-Ryu en Latinoamérica, con presencia en Uruguay, Argentina, Brasil y Chile.
                </p>
                <p>
                  El karate nació en Okinawa a partir de la síntesis entre las artes de combate locales y la influencia del Templo Shaolin. De esa fusión nació el To-Te —"Puño Chino"—, antecedente directo del karate que hoy enseñamos.
                </p>
                <p>
                  Cada clase en nuestro dojo es la continuación de una tradición viva: Shorin-Ryu Kobayashi, bajo la dirección del Sensei Mariano Melfi, 9no. Dan, y la profunda herencia del Kobudo Jinbukai.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
