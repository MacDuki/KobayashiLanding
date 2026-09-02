import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import FadeIn from './FadeIn'

const faqs = [
  {
    question: '¿Necesito experiencia previa?',
    answer:
      'No. Cualquiera puede entrenar sin importar su nivel en artes marciales ni su punto de partida físico. El karate se adapta a las posibilidades de cada persona.',
  },
  {
    question: '¿Con qué edad puedo entrenar?',
    answer: 'Desde los 4 años en adelante.',
  },
  {
    question: '¿Qué debo llevar a la primera clase?',
    answer:
      'Ropa deportiva cómoda, no jeans. No es obligatorio tener el karate-gi para comenzar. Se recomienda traer botella de agua.',
  },
  {
    question: '¿Hay clase de prueba?',
    answer: 'Sí. La primera clase es gratuita.',
  },
  {
    question: '¿Cuánto cuesta?',
    answer:
      'Cuota Social UYU 1.000 o Cuota Deportiva UYU 3.000. Ambas habilitan la práctica de Karate y Kobudo. Los precios pueden modificarse; consultar ante dudas.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-dojo-black py-24 md:py-36 px-8 md:px-12">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex flex-col gap-12">
          <FadeIn>
            <p className="text-sm md:text-base tracking-[0.2em] uppercase text-dojo-muted mb-8 text-center">
              Preguntas frecuentes
            </p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight text-dojo-cream text-center">
              Lo que necesitás saber antes de venir.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="border border-dojo-cream/10 rounded-2xl bg-dojo-cream/[0.02] shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)] w-1/2 mx-auto overflow-hidden">
              {faqs.map((faq, i) => (
                <div key={i} className={i < faqs.length - 1 ? 'border-b border-dojo-cream/5' : ''}>
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left group"
                  >
                    <span className="text-dojo-cream text-sm md:text-base pr-4 group-hover:text-dojo-cream/90 transition-colors duration-300">
                      {faq.question}
                    </span>
                    <span className={`text-dojo-muted text-lg transition-transform duration-500 shrink-0 ${openIndex === i ? 'rotate-45' : ''}`}>
                      +
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="overflow-hidden"
                      >
                        <p className="text-dojo-cream/60 text-sm leading-relaxed pb-5 px-6">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
