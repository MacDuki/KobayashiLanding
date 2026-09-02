import FadeIn from './FadeIn'

const schedule = [
  { label: 'Karate (4 a 13 años)', time: '17:30 – 18:15' },
  { label: 'Kobudo', time: '18:15 – 18:45' },
  { label: 'Karate (+13 años)', time: '18:45 – 20:00' },
]

const sharedBenefits = [
  'Sin matrícula',
  'Primera clase gratuita',
  'Acceso a clases de Karate',
  'Acceso a clases de Kobudo',
]

const plans = [
  {
    name: 'Cuota Social',
    price: '1.000',
    benefits: sharedBenefits,
    highlight: false,
  },
  {
    name: 'Cuota Deportiva',
    price: '3.000',
    benefits: [...sharedBenefits, 'Incluye cuota del club'],
    highlight: true,
  },
]

export default function SchedulePricing() {
  return (
    <section id="planes" className="bg-dojo-black py-24 md:py-36 px-8 md:px-12">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-7">
            <FadeIn>
              <p className="text-sm md:text-base tracking-[0.2em] uppercase text-dojo-muted mb-8 text-center">Planes</p>

              <div className="grid sm:grid-cols-2 gap-5">
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className={`relative border rounded-2xl px-6 py-10 flex flex-col text-center ${
                      plan.highlight
                        ? 'border-dojo-yellow/30 bg-dojo-yellow/[0.04] shadow-[0_8px_40px_-12px_rgba(247,194,0,0.12)]'
                        : 'border-dojo-cream/10 bg-dojo-cream/[0.02] shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)]'
                    }`}
                  >
                    {plan.highlight && (
                      <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-dojo-yellow text-dojo-black text-[10px] tracking-[0.2em] uppercase px-4 py-1 rounded-full font-medium">
                        Recomendado
                      </span>
                    )}

                    <p className="text-dojo-cream text-sm uppercase tracking-[0.15em] mb-2">
                      {plan.name}
                    </p>
                    <div className="flex items-baseline justify-center gap-1 mb-1">
                      <span className="text-dojo-muted text-xs">UYU</span>
                      <span className="font-display text-4xl md:text-5xl text-dojo-cream leading-none">
                        {plan.price}
                      </span>
                    </div>
                    <p className="text-dojo-muted text-xs mb-6">por mes</p>

                    <ul className="space-y-3 mb-8 flex-1">
                      {plan.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center justify-center gap-2 text-dojo-cream/70 text-xs leading-relaxed">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F7C200" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="https://wa.me/59897492208"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full text-center py-3 rounded-xl text-xs tracking-[0.15em] uppercase font-medium transition-all duration-500 ${
                        plan.highlight
                          ? 'bg-dojo-yellow text-dojo-black hover:bg-dojo-yellow/90 shadow-[0_4px_20px_-4px_rgba(247,194,0,0.3)]'
                          : 'border border-dojo-cream/20 text-dojo-cream hover:border-dojo-cream/40 hover:bg-dojo-cream/[0.03]'
                      }`}
                    >
                      Elegir plan
                    </a>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <div className="md:col-span-5">
            <FadeIn delay={0.2}>
              <p className="text-sm md:text-base tracking-[0.2em] uppercase text-dojo-muted mb-8 text-center">Horarios</p>
              <div className="border border-dojo-cream/10 rounded-2xl bg-dojo-cream/[0.02] shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)] overflow-hidden">
                {schedule.map((item, i) => (
                  <div
                    key={item.label}
                    className={`flex items-baseline justify-between px-6 py-4 ${i < schedule.length - 1 ? 'border-b border-dojo-cream/5' : ''}`}
                  >
                    <p className="text-dojo-cream text-sm md:text-base">{item.label}</p>
                    <p className="text-dojo-muted text-sm ml-4 whitespace-nowrap">{item.time}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
