import { motion, useReducedMotion } from 'framer-motion';

const clients = [
  { name: 'Mentup', niche: 'Gaming' },
  { name: 'AtlantTech', niche: 'Software' },
  { name: 'Hotel Ring', niche: 'Hospitality' },
  { name: 'Premium Brand', niche: 'E-commerce' },
  { name: 'Ethos Select', niche: 'Retail' },
  { name: 'Гимназия Лидер', niche: 'Education' },
  { name: 'News.Mentup', niche: 'Media' },
];

const stats = [
  { value: '50+', label: 'проектов' },
  { value: '7', label: 'направлений' },
  { value: '1 день', label: 'до запуска' },
];

export default function TrustedBy() {
  const prefersReduced = useReducedMotion();
  // Duplicate for seamless loop
  const doubled = [...clients, ...clients];

  return (
    <section className="py-16 md:py-20 bg-void overflow-hidden relative" aria-label="Наши клиенты">
      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,98,255,0.25), transparent)' }} />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,98,255,0.25), transparent)' }} />

      <div className="container-brand mb-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <motion.p
            className="mono-label text-white/30"
            initial={prefersReduced ? {} : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Нам доверяют
          </motion.p>
          <motion.div
            className="flex items-center gap-8"
            initial={prefersReduced ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-0.5">
                <span className="font-manrope font-extrabold text-white text-xl leading-none" style={{ letterSpacing: '-0.03em' }}>{s.value}</span>
                <span className="font-inter text-white/30 text-xs">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Left gradient mask */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(90deg, #020617, transparent)' }} />
        {/* Right gradient mask */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(270deg, #020617, transparent)' }} />

        <div
          className="flex gap-4 w-max"
          style={{
            animation: prefersReduced ? 'none' : 'marquee 28s linear infinite',
          }}
        >
          {doubled.map((client, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-6 py-3 rounded-2xl border border-white/8 bg-white/5 flex-shrink-0"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-electric" />
              <span className="font-manrope font-bold text-white/80 text-sm whitespace-nowrap">{client.name}</span>
              <span className="font-inter text-white/25 text-xs whitespace-nowrap">{client.niche}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}