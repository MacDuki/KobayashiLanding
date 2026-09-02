import FadeIn from './FadeIn'

export default function TrainingExperience() {
  return (
    <section id="clases" className="bg-dojo-black py-20 md:py-32 px-8 md:px-12">
      <div className="max-w-[1800px] mx-auto">
        <FadeIn>
          <p className="text-sm md:text-base tracking-[0.2em] uppercase text-dojo-muted mb-10 md:mb-14">
            La clase
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-center">
          {/* Left: image w-2/3 */}
          <div className="md:col-span-8">
            <FadeIn delay={0.1}>
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/images/profe_leopoldo_con_alumna.png"
                  alt="Sensei Leopoldo instruyendo a una alumna"
                  loading="lazy"
                  className="w-full aspect-[4/3] md:aspect-[16/10] object-cover"
                />
              </div>
            </FadeIn>
          </div>

          {/* Right: text */}
          <div className="md:col-span-4">
            <FadeIn delay={0.3}>
              <h2 className="font-display text-2xl md:text-4xl leading-tight text-dojo-cream mb-8">
                Desde los 4 años.
                <br />
                Sin límite de edad.
                <br />
                Sin experiencia previa.
              </h2>
              <div className="space-y-4 text-dojo-cream/70 text-sm md:text-base leading-relaxed">
                <p>
                  Nuestras clases se dividen en grupos según la edad y el nivel de cada alumno, asegurando que todos reciban la atención adecuada.
                </p>
                <p>
                  Los niños entrenan de 17:30 a 18:15 hs, mientras que los jóvenes y adultos lo hacen de 18:45 a 20:00 hs.
                </p>
                <p>
                  No es necesario tener el karate-gi para tu primera clase. Ropa deportiva cómoda y una botella de agua es todo lo que necesitás.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
