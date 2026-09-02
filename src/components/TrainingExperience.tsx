import FadeIn from './FadeIn'

export default function TrainingExperience() {
  return (
    <section id="clases" className="bg-dojo-black py-20 md:py-32 px-8 md:px-12">
      <div className="max-w-[1800px] mx-auto">


        <div className="flex flex-col gap-12">
          {/* Text */}
          <FadeIn delay={0.1} className="text-center">
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

          {/* Image */}
          <FadeIn delay={0.3}>
            <div className="relative overflow-hidden rounded-2xl w-1/2 mx-auto">
              <img
                src="/images/profe_leopoldo_con_alumna.png"
                alt="Sensei Leopoldo instruyendo a una alumna"
                loading="lazy"
                className="w-full aspect-[4/3] md:aspect-[16/10] object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
