import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-dojo-black overflow-hidden">
      {/* Sensei Lucas - left side */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="hidden lg:flex flex-col items-center absolute left-0 bottom-0 z-10"
      >
        <img
          src="/images/profe_lucas_final.png"
          alt="Sensei Lucas Le Pera"
          className="h-[50vh] lg:h-[55vh] xl:h-[80vh] w-auto object-contain mix-blend-lighten"
        />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
          <p className="font-display text-lg xl:text-2xl text-dojo-cream leading-tight">
            Lucas Le Pera
          </p>
          <p className="text-dojo-yellow text-[10px] xl:text-xs tracking-[0.25em] uppercase mt-1">
            1er Dan
          </p>
        </div>
      </motion.div>

      {/* Sensei Leopoldo - right side */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="hidden lg:flex flex-col items-center absolute right-0 bottom-0 z-10"
      >
        <img
          src="/images/profe_leopoldo_hero.png"
          alt="Sensei Leopoldo Schiavone"
          className="h-[50vh] lg:h-[55vh] xl:h-[80vh] w-auto object-contain mix-blend-lighten"
        />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
          <p className="font-display text-lg xl:text-2xl text-dojo-cream leading-tight">
            Leopoldo Schiavone
          </p>
          <p className="text-dojo-yellow text-[10px] xl:text-xs tracking-[0.25em] uppercase mt-1">
            3er Dan
          </p>
        </div>
      </motion.div>

      {/* Central enso circle with text */}
      <div className="relative min-h-screen flex items-center justify-center px-6 md:px-12 pt-28 md:pt-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative w-[80vw] sm:w-[70vw] md:w-[55vw] lg:w-[36vw] xl:w-[42vw] aspect-square rounded-full overflow-hidden flex items-center justify-center"
        >
          <img
            src="/images/bg_hero_central.png"
            alt="Kobayashi Karate Dojo"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dojo-black/55" />
          <div className="relative px-6 sm:px-10 md:px-16 text-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-dojo-yellow text-[10px] md:text-xs tracking-[0.35em] uppercase mb-3 md:mb-5"
            >
              Karate tradicional Okinawense
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none tracking-tight text-dojo-cream"
            >
              Kobayashi
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.7 }}
              className="flex items-center justify-center gap-3 mt-4 md:mt-6"
            >
              <span className="w-8 md:w-10 h-px bg-dojo-yellow" />
              <p className="font-display italic text-dojo-cream/70 text-sm md:text-lg">
                Estilo Shorin Ryu
              </p>
              <span className="w-8 md:w-10 h-px bg-dojo-yellow" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 2 }}
              className="mt-6 md:mt-8"
            >
              <a
                href="https://wa.me/59897492208"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-dojo-cream/80 hover:text-dojo-yellow text-xs md:text-sm tracking-[0.2em] uppercase transition-colors duration-500 pb-2 border-b border-dojo-cream/20 hover:border-dojo-yellow/50"
              >
                Primera clase gratuita
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

    </section>
  )
}
