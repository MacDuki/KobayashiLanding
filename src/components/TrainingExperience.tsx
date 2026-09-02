import FadeIn from './FadeIn'

export default function TrainingExperience() {
  return (
    <section id="clases" className="bg-dojo-black py-14 md:py-20 px-8 md:px-12">
      <div className="max-w-[1800px] mx-auto">


        <div className="flex flex-col gap-12">
          {/* Text */}
          <FadeIn delay={0.1} className="text-center">
            <h2 className="font-display text-3xl md:text-5xl leading-tight text-dojo-cream mb-5">
              Entrená a tu ritmo,
              <br />
              desde el primer día.
            </h2>
            <p className="text-dojo-yellow text-sm md:text-base tracking-[0.12em] uppercase mb-7">
              Desde los 4 años · Sin límite de edad · Sin experiencia previa
            </p>
            <div className="max-w-2xl mx-auto space-y-4 text-dojo-cream/70 text-sm md:text-base leading-relaxed">
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
            <div className="relative overflow-hidden rounded-2xl w-full max-w-3xl mx-auto">
              <img
                src="/images/optimized/profe_leopoldo_con_alumna.webp"
                alt="Sensei Leopoldo instruyendo a una alumna"
                width="1000"
                height="1333"
                loading="lazy"
                className="w-full aspect-4/3 md:aspect-16/10 object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
