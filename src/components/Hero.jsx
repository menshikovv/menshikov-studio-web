import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const heroImage = 'https://i.pinimg.com/736x/2e/3c/b4/2e3cb407dc7e1873debf2c5b8e92659c.jpg';

export default function Hero() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      className="relative flex min-h-screen flex-col overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url("${heroImage}")` }}
      aria-label="Главный экран"
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/15 to-black/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-white/15" />

      <div className="container-brand relative z-10 flex flex-1 flex-col justify-end pb-16 pt-32">
        <div className="mb-8 overflow-hidden md:mb-12">
          <motion.h1
            className="font-manrope text-white leading-none font-extrabold"
            style={{ fontSize: 'clamp(3.5rem, 12vw, 11rem)', letterSpacing: '-0.04em', lineHeight: 0.92 }}
            initial={prefersReduced ? {} : { y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            Menshikov
          </motion.h1>
        </div>
        <div className="mb-12 overflow-hidden md:mb-16">
          <motion.h1
            className="font-manrope leading-none font-extrabold"
            style={{
              fontSize: 'clamp(3.5rem, 12vw, 11rem)',
              letterSpacing: '-0.04em',
              lineHeight: 0.92,
              WebkitTextStroke: '2px rgba(255,255,255,0.95)',
              color: 'transparent',
            }}
            initial={prefersReduced ? {} : { y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            Studio
          </motion.h1>
        </div>

        <motion.div
          className="flex flex-col items-start justify-between gap-8 border-t border-white/15 pt-8 sm:flex-row sm:items-end"
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="max-w-sm font-inter text-base leading-relaxed text-white/80 md:text-lg">
            Сайты, Telegram Mini Apps
            <br />
            и боты под ключ.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex min-h-[56px] items-center gap-2 rounded-2xl bg-white px-7 py-4 font-inter text-base font-semibold text-black transition-all duration-300 hover:bg-white/85"
            >
              Обсудить проект
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex min-h-[56px] items-center gap-2 rounded-2xl border border-white/30 px-7 py-4 font-inter text-base font-medium text-white transition-all duration-300 hover:border-white/55 hover:bg-white/10"
            >
              Портфолио
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute right-8 top-1/4 bottom-1/4 w-px bg-white/20 md:right-16"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: 'top' }}
      />
    </section>
  );
}
