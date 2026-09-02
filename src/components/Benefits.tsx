import {
  PiArrowsOut,
  PiBrain,
  PiHandsPraying,
  PiHeartbeat,
  PiPersonSimpleRun,
  PiShieldCheck,
  PiSword,
  PiTrendUp,
} from "react-icons/pi";
import FadeIn from "./FadeIn";

const benefits = [
  { text: "Acondicionamiento físico integral", icon: PiPersonSimpleRun },
  { text: "Mayor coordinación y reflejos", icon: PiArrowsOut },
  { text: "Incremento de la concentración", icon: PiBrain },
  { text: "Desarrollo de la confianza y la autoestima", icon: PiShieldCheck },
  { text: "Fomento del respeto y la disciplina", icon: PiHandsPraying },
  { text: "Mejor control emocional y reducción del estrés", icon: PiHeartbeat },
  {
    text: "Aprendizaje de técnicas tradicionales de Karate y Kobudo",
    icon: PiSword,
  },
  {
    text: "Crecimiento personal mediante la superación constante",
    icon: PiTrendUp,
  },
];

export default function Benefits() {
  return (
    <section className="bg-dojo-black py-14 md:py-20 px-8 md:px-12">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-center">
          <div className="md:col-span-5 md:translate-x-28">
            <FadeIn>
              <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-2xl">
                <img
                  src="./images/optimized/alumno_1_final.webp"
                  alt="Alumno de Kobayashi Uruguay"
                  width="700"
                  height="1050"
                  loading="lazy"
                  className="w-full h-auto object-contain"
                />
                <div className="absolute inset-0 bg-dojo-black/20" />
              </div>
            </FadeIn>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <FadeIn delay={0.2}>
              <p className="text-sm md:text-base tracking-[0.25em] uppercase text-dojo-muted mb-8">
                Beneficios del entrenamiento
              </p>
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-tight text-dojo-cream mb-14">
                Más que un arte marcial,
                <br />
                un camino de desarrollo personal.
              </h2>
            </FadeIn>

            <div className="space-y-0">
              {benefits.map(({ text, icon: Icon }, i) => (
                <FadeIn key={i} delay={0.3 + i * 0.08}>
                  <div className="flex items-center gap-2 py-3 border-b border-dojo-cream/5 last:border-b-0 group">
                    <span className="text-dojo-yellow/60 group-hover:text-dojo-yellow transition-colors duration-500 shrink-0">
                      <Icon size={22} />
                    </span>
                    <p className="text-dojo-cream/70 group-hover:text-dojo-cream/90 text-base md:text-lg leading-relaxed transition-colors duration-500">
                      {text}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
