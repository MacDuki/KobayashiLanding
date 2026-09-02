import FadeIn from './FadeIn'

export default function Location() {
  return (
    <section id="ubicacion" className="bg-dojo-black py-14 md:py-20 px-8 md:px-12">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex flex-col gap-12">
          <FadeIn>
            <p className="text-sm md:text-base tracking-[0.2em] uppercase text-dojo-muted mb-10 text-center">
              Dónde estamos
            </p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight text-dojo-cream mb-8 flex items-center justify-center gap-4">
              <img
                src="./images/optimized/logoCentro de proteccion de choferes.webp"
                alt="Centro Protección de Choferes"
                width="240"
                height="240"
                loading="lazy"
                className="h-12 md:h-16 w-auto"
              />
              <span>Club Centro Protección de Choferes</span>
            </h2>
            <div className="space-y-3 text-dojo-cream/70 text-sm md:text-base leading-relaxed text-center">
              <p>Soriano 1227</p>
              <p>11100 Montevideo, Uruguay</p>
            </div>
            <div className="mt-8 text-center">
              <a
                href="https://www.google.com/maps?ll=-34.9075538,-56.1894163&z=16&t=m&hl=es&gl=US&mapclient=embed&cid=7417570054425066054"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-dojo-cream/20 text-dojo-cream/80 hover:text-dojo-cream hover:border-dojo-cream/40 hover:bg-dojo-cream/3 text-xs tracking-[0.15em] uppercase transition-all duration-500"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Abrir en Google Maps
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative overflow-hidden rounded-lg w-full max-w-4xl mx-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.7!2d-56.1919913!3d-34.9075538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f81cc557106b5%3A0x66f080aa1e94ba46!2sCentro%20Protecci%C3%B3n%20Choferes%20de%20Montevideo%20%22Sede%20Social%22!5e0!3m2!1ses!2suy!4v1680000000000"
                width="100%"
                height="400"
                style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) brightness(1.05) contrast(0.9)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del dojo"
                className="w-full aspect-4/5 md:aspect-auto md:h-105"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
