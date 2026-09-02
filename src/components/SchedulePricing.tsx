import FadeIn from './FadeIn'

const schedule = [
  { label: 'Karate (4 a 13 años)', time: '17:30 – 18:15' },
  { label: 'Kobudo', time: '18:15 – 18:45' },
  { label: 'Karate (+13 años)', time: '18:45 – 20:00' },
]

const deportiva = {
  name: 'Cuota Deportiva',
    price: '1.000',
  benefits: [
    'Sin matrícula',
    'Primera clase gratuita',
    'Acceso a clases de Karate',
    'Acceso a clases de Kobudo',
    'Incluye acceso al gym del club',
  ],
}

export default function SchedulePricing() {

  return (
    <section id="planes" className="bg-dojo-black py-24 md:py-36 px-8 md:px-12">
      <div className="max-w-[1800px] mx-auto">
        <FadeIn>
          <p className="text-sm md:text-base tracking-[0.3em] uppercase text-dojo-cream mb-16 text-center font-medium">
            Planes y Horarios
          </p>
        </FadeIn>

        <div className="flex flex-col gap-16">
          <FadeIn>
            <div className="w-1/3 mx-auto">
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
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="w-1/5 mx-auto">
              <div className="relative border border-dojo-yellow/30 rounded-2xl px-6 py-10 flex flex-col text-center bg-dojo-yellow/[0.04] shadow-[0_8px_40px_-12px_rgba(247,194,0,0.12)]">
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-dojo-yellow text-dojo-black text-[10px] tracking-[0.2em] uppercase px-4 py-1 rounded-full font-medium">
                  Recomendado
                </span>

                <p className="text-dojo-cream text-sm uppercase tracking-[0.15em] mb-2">
                  {deportiva.name}
                </p>
                <div className="flex items-baseline justify-center gap-1 mb-1">
                  <span className="text-dojo-muted text-xs">UYU</span>
                  <span className="font-display text-4xl md:text-5xl text-dojo-cream leading-none">
                    {deportiva.price}
                  </span>
                </div>
                <p className="text-dojo-muted text-xs mb-6">por mes</p>

                <ul className="space-y-3 mb-8 flex-1">
                  {deportiva.benefits.map((benefit) => (
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
                  className="flex items-center justify-center gap-2 w-full text-center py-3 rounded-xl text-xs tracking-[0.15em] uppercase font-medium transition-all duration-500 bg-[#25D366] text-white hover:bg-[#20BD5A] shadow-[0_4px_20px_-4px_rgba(37,211,102,0.3)]"
                >
                  Elegir plan
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
