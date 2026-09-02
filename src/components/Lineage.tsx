import FadeIn from './FadeIn'

const lineage = [
  {
    name: 'Chatan Yara',
    era: 's. XVII',
    contribution: 'Primero en el registro histórico. Estudió Hsing-I y Chi-Kung en China.',
  },
  {
    name: 'Peichin Takahara',
    era: 's. XVIII',
    contribution: 'Monje Shaolin, maestro de Sakugawa.',
  },
  {
    name: 'Satunuku Sakugawa',
    era: '1733–?',
    contribution: 'Combinó Chuan Fa chino con Okinawa Te. Estructuró el Shuri-Te.',
  },
  {
    name: 'Sokon "Bushi" Matsumura',
    era: '1792–1886',
    contribution: 'Fundó el Shorin-Ryu. Último portador del título Bushi.',
  },
  {
    name: 'Anko Itosu',
    era: '1832–?',
    contribution: 'Incorporó el karate en las escuelas de Okinawa (1903). Creó los kata Piñan.',
  },
  {
    name: 'Chosin Chibana',
    era: '1885–1969',
    contribution: 'Fundador del Kobayashi-Ryu. Orden Imperial al Mérito del Emperador Hirohito.',
    highlight: true,
  },
  {
    name: 'Katsuya Miyahira',
    era: '1918–?',
    contribution: 'Discípulo de Chibana. Fundó el Shidokan. 9no. Dan Hanshi.',
  },
  {
    name: 'Shoei Miyazato',
    era: '1928–2013',
    contribution: 'Expandió el Shorin-Ryu en Sudamérica. Único Hanshi (9no. Dan) fuera de Japón.',
  },
  {
    name: 'Mariano Melfi',
    era: 'Actualidad',
    contribution: '9no. Dan. Máximo referente del Kobayashi-Ryu en América del Sur. Guía de Kobayashi Uruguay.',
    highlight: true,
  },
]

export default function Lineage() {
  return (
    <section className="bg-dojo-black py-24 md:py-36 px-8 md:px-12">
      <div className="max-w-[1800px] mx-auto">
        <FadeIn>
          <p className="text-dojo-muted text-xs tracking-[0.3em] uppercase mb-12">
            Linaje
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-tight text-dojo-cream mb-16 max-w-3xl">
            Nueve generaciones de maestros, desde Okinawa hasta Montevideo.
          </h2>
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-dojo-cream/10" />

          <div className="space-y-0">
            {lineage.map((master, i) => (
              <FadeIn key={master.name} delay={i * 0.06}>
                <div className="grid md:grid-cols-12 gap-4 md:gap-8 py-6 md:py-8 border-b border-dojo-cream/5 last:border-b-0">
                  {/* Era column */}
                  <div className="md:col-span-2">
                    <p className="text-dojo-muted text-xs tracking-wider">
                      {master.era}
                    </p>
                  </div>

                  {/* Name column */}
                  <div className="md:col-span-3">
                    <p className={`text-sm md:text-base font-medium ${master.highlight ? 'text-dojo-yellow' : 'text-dojo-cream'}`}>
                      {master.name}
                    </p>
                  </div>

                  {/* Contribution column */}
                  <div className="md:col-span-7">
                    <p className="text-dojo-cream/60 text-sm leading-relaxed">
                      {master.contribution}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <FadeIn delay={0.6}>
          <div className="mt-20 md:mt-28 grid md:grid-cols-12 gap-8">
            <div className="md:col-span-6 md:col-start-4">
              <p className="font-display text-xl md:text-2xl text-dojo-cream/70 text-balance leading-relaxed">
                Cada clase en el dojo es la continuación de un camino transmitido durante más de tres siglos. Un linaje ininterrumpido que llegó desde las costas de Okinawa hasta Montevideo.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
