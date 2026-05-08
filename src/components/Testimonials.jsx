import { useState, useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    image: 'https://s10.iimage.su/s/02/giDvru5xuzSiySMbCVL4qWEoFvvYEyO0C29YZ1Str.png',
    glow: 'rgba(0, 98, 255, 0.28)',
  },
  {
    id: 2,
    image: 'https://s10.iimage.su/s/02/g2wnhXIxRHXJIlmgpz7X5hQlDhEvkVb7bUJCJ4Yt9.png',
    glow: 'rgba(124, 58, 237, 0.28)',
  },
  {
    id: 3,
    image: 'https://s10.iimage.su/s/02/g7DNKtlx3pRdCPv7ezt10dd8i8CGVT6Qcl0lG8Jws.png',
    glow: 'rgba(16, 185, 129, 0.28)',
  },
  {
    id: 4,
    image: 'https://s10.iimage.su/s/02/gxufdcFxaqg3Ept0XYypyL7kATzzRqdOhqDUmQAqB.png',
    glow: 'rgba(245, 158, 11, 0.28)',
  },
  {
    id: 5,
    image: 'https://s10.iimage.su/s/02/gYNrLTIxwlo2cUyPZCw0gNEfRbJ4Lk4KoNOc4Ufhe.png',
    glow: 'rgba(0, 212, 255, 0.28)',
  },
  {
    id: 6,
    image: 'https://s10.iimage.su/s/02/gsYU9k3xNtnfAYKzmUpsMbozQor0ACzEjP3Veec3Y.png',
    glow: 'rgba(236, 72, 153, 0.28)',
  },
  {
    id: 7,
    image: 'https://s10.iimage.su/s/02/gN3YjogxhfChfzeWq6a5HsRp1z0TIy3jE7KL4yzTy.png',
    glow: 'rgba(59, 130, 246, 0.28)',
  },
];

function Card3D({ testimonial, position, onClick }) {
  const isCenter = position === 0;
  const absPos = Math.abs(position);
  const xOffset = position * 300;
  const zOffset = -absPos * 110;
  const rotateY = position * 20;
  const scale = isCenter ? 1 : 1 - absPos * 0.14;
  const opacity = isCenter ? 1 : 1 - absPos * 0.38;

  return (
    <div
      onClick={onClick}
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: `translate(-50%, -50%) translateX(${xOffset}px) translateZ(${zOffset}px) rotateY(${rotateY}deg) scale(${scale})`,
        opacity,
        zIndex: 10 - absPos,
        cursor: isCenter ? 'zoom-in' : 'pointer',
        transition: 'transform 0.6s cubic-bezier(0.34,1.1,0.64,1), opacity 0.4s ease',
        width: 'clamp(320px, 34vw, 380px)',
        maxWidth: '78vw',
      }}
    >
      <motion.div
        layoutId={`testimonial-card-${testimonial.id}`}
        className="rounded-card overflow-hidden border border-white/10 bg-white/5"
        style={{
          boxShadow: isCenter
            ? `0 40px 80px rgba(0,0,0,0.6), 0 0 80px ${testimonial.glow}`
            : '0 8px 24px rgba(0,0,0,0.35)',
        }}
      >
        <div className="relative w-full bg-black/10" style={{ aspectRatio: '3/4' }}>
          <img
            src={testimonial.image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-80"
            draggable={false}
          />
          <div className="absolute inset-0 bg-black/20" />
          <img
            src={testimonial.image}
            alt={`Отзыв клиента ${testimonial.id}`}
            className="relative z-10 w-full h-full object-contain p-3"
            draggable={false}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default function Testimonials() {
  const prefersReduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const [expandedId, setExpandedId] = useState(null);
  const total = testimonials.length;
  const expandedTestimonial = testimonials.find((item) => item.id === expandedId) ?? null;

  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);
  const prevExpanded = () => {
    setExpandedId((current) => {
      const currentIndex = testimonials.findIndex((item) => item.id === current);
      const nextIndex = (currentIndex - 1 + total) % total;
      setActive(nextIndex);
      return testimonials[nextIndex].id;
    });
  };
  const nextExpanded = () => {
    setExpandedId((current) => {
      const currentIndex = testimonials.findIndex((item) => item.id === current);
      const nextIndex = (currentIndex + 1) % total;
      setActive(nextIndex);
      return testimonials[nextIndex].id;
    });
  };

  useEffect(() => {
    if (!expandedId) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setExpandedId(null);
      } else if (event.key === 'ArrowLeft') {
        prevExpanded();
      } else if (event.key === 'ArrowRight') {
        nextExpanded();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [expandedId, total]);

  useEffect(() => {
    if (prefersReduced) return;
    const id = setInterval(next, 5500);
    return () => clearInterval(id);
  }, [prefersReduced]);

  const getPosition = (i) => {
    let diff = i - active;
    if (diff > Math.floor(total / 2)) diff -= total;
    if (diff < -Math.floor(total / 2)) diff += total;
    return diff;
  };

  return (
    <section id="testimonials" className="section-padding bg-void overflow-hidden" aria-label="Отзывы клиентов">
      <div className="container-brand">
        <motion.div
          className="text-center"
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mono-label text-electric mb-4">Отзывы</p>
          <h2
            className="font-manrope font-extrabold text-white leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.02em' }}
          >
            Что говорят клиенты
          </h2>
        </motion.div>

        <div className="relative mx-auto mb-14" style={{ maxWidth: '1240px' }}>
          <button
            onClick={prev}
            className="focus-electric absolute left-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-200"
            aria-label="Предыдущий отзыв"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="focus-electric absolute right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-200"
            aria-label="Следующий отзыв"
          >
            <ChevronRight size={20} />
          </button>

          <div
            style={{
              height: 'clamp(560px, 58vw, 640px)',
              perspective: '1400px',
              transformStyle: 'preserve-3d',
              position: 'relative',
            }}
          >
            {testimonials.map((testimonial, i) => {
              const pos = getPosition(i);
              if (Math.abs(pos) > 2) return null;
              return (
                <Card3D
                  key={testimonial.id}
                  testimonial={testimonial}
                  position={pos}
                  onClick={() => {
                    if (pos === 0) {
                      setExpandedId(testimonial.id);
                      return;
                    }

                    setActive(i);
                  }}
                />
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === active ? 28 : 8,
                height: 8,
                backgroundColor: i === active ? '#0062FF' : 'rgba(255,255,255,0.2)',
              }}
              aria-label={`Перейти к отзыву ${i + 1}`}
            />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="https://t.me/mnshkv_reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-electric inline-flex items-center justify-center rounded-2xl border border-electric/30 bg-electric/10 px-6 py-3 font-inter font-semibold text-sm text-electric transition-all duration-300 hover:border-electric/60 hover:bg-electric/20 min-h-[48px]"
            aria-label="Открыть все отзывы в Telegram"
          >
            Все отзывы
          </a>
        </div>
      </div>

      <AnimatePresence>
        {expandedTestimonial && (
          <motion.div
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/85 px-4 py-6 md:px-8"
            initial={prefersReduced ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={prefersReduced ? {} : { opacity: 0 }}
            transition={{ duration: 0.28 }}
            onClick={() => setExpandedId(null)}
          >
            <motion.button
              type="button"
              className="focus-electric absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/75 transition-colors hover:bg-white/10 hover:text-white md:left-6"
              onClick={(event) => {
                event.stopPropagation();
                prevExpanded();
              }}
              initial={prefersReduced ? {} : { opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={prefersReduced ? {} : { opacity: 0, x: -12 }}
              aria-label="Предыдущий отзыв"
            >
              <ChevronLeft size={22} />
            </motion.button>

            <motion.button
              type="button"
              className="focus-electric absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/75 transition-colors hover:bg-white/10 hover:text-white md:right-6"
              onClick={(event) => {
                event.stopPropagation();
                nextExpanded();
              }}
              initial={prefersReduced ? {} : { opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={prefersReduced ? {} : { opacity: 0, x: 12 }}
              aria-label="Следующий отзыв"
            >
              <ChevronRight size={22} />
            </motion.button>

            <motion.button
              type="button"
              className="focus-electric absolute right-4 top-4 md:right-6 md:top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/75 transition-colors hover:bg-white/10 hover:text-white"
              onClick={() => setExpandedId(null)}
              initial={prefersReduced ? {} : { opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={prefersReduced ? {} : { opacity: 0, scale: 0.92 }}
              aria-label="Закрыть полноэкранный отзыв"
            >
              <X size={18} />
            </motion.button>

            <motion.div
              layoutId={`testimonial-card-${expandedTestimonial.id}`}
              className="w-full max-w-5xl overflow-hidden rounded-[28px] border border-white/10 bg-[#050816] shadow-[0_40px_120px_rgba(0,0,0,0.65)]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={expandedTestimonial.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full scale-105 object-cover blur-3xl opacity-40"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-black/20" />
                <img
                  src={expandedTestimonial.image}
                  alt={`Отзыв клиента ${expandedTestimonial.id}`}
                  className="relative z-10 mx-auto max-h-[90vh] w-full object-contain"
                  draggable={false}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
