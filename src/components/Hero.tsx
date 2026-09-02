import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoReady, setVideoReady] = useState(false)
  const [muted, setMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleReady = () => setVideoReady(true)
    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    if (video.readyState >= 3) {
      setVideoReady(true)
    } else {
      video.addEventListener('canplay', handleReady, { once: true })
    }
    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)

    video.play().catch(() => {})

    return () => {
      video.removeEventListener('canplay', handleReady)
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
    }
  }, [])

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (videoRef.current) {
      videoRef.current.muted = !muted
      setMuted(!muted)
    }
  }

  const togglePlayPause = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play().catch(() => {})
    } else {
      video.pause()
    }
  }

  return (
    <section className="relative min-h-screen bg-dojo-black overflow-hidden">
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-12 lg:px-20 pt-32 md:pt-0 order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <p className="text-dojo-muted text-xs md:text-sm tracking-[0.3em] uppercase mb-6 md:mb-8">
              Karate tradicional Okinawense
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-none tracking-tight text-dojo-cream"
          >
            Kobayashi
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.9 }}
            className="flex items-center gap-4 mt-8 md:mt-12"
          >
            <span className="w-12 h-px bg-dojo-yellow" />
            <p className="font-display italic text-dojo-cream/70 text-lg md:text-2xl">
              Estilo Shorin Ryu
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.3 }}
            className="mt-10 md:mt-16"
          >
            <a
              href="https://wa.me/59897492208"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-dojo-cream/80 hover:text-dojo-yellow text-sm tracking-[0.2em] uppercase transition-colors duration-500 pb-2 border-b border-dojo-cream/20 hover:border-dojo-yellow/50"
            >
              Primera clase gratuita
            </a>
          </motion.div>
        </div>

        {/* Right: Video */}
        <div className="md:w-[38%] lg:w-[35%] xl:w-[30%] relative order-1 md:order-2 flex items-center justify-center py-10 md:py-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: videoReady ? 1 : 0, scale: videoReady ? 1 : 0.98 }}
            transition={{ duration: 1.6, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative w-[70%] md:w-[85%] aspect-[9/16] max-h-[75vh] overflow-hidden rounded-2xl cursor-pointer group"
            onClick={togglePlayPause}
          >
            <video
              ref={videoRef}
              src="/videos/video_presentacion_vertical.mp4"
              autoPlay
              muted={muted}
              loop
              playsInline
              disableRemotePlayback
              preload="auto"
              className="w-full h-full object-cover"
            />

            {/* Play/Pause overlay indicator */}
            <div className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
              <div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white">
                {isPlaying ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="6,4 20,12 6,20" />
                  </svg>
                )}
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-dojo-black/80 via-transparent to-dojo-black/20 pointer-events-none" />

            {/* Sound toggle button */}
            <button
              onClick={toggleSound}
              className="absolute bottom-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white hover:bg-black/70 transition-all duration-300"
              aria-label={muted ? 'Activar sonido' : 'Silenciar'}
            >
              {muted ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" />
                  <path d="M19.07 4.93a10 10 0 010 14.14" />
                  <path d="M15.54 8.46a5 5 0 010 7.07" />
                </svg>
              )}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-px h-12 bg-dojo-cream/20 mx-auto" />
      </motion.div>
    </section>
  )
}
