import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const services = [
  { id: 'web', title: 'Сайт', sub: 'Лендинг, корпоративный, магазин', num: '01' },
  { id: 'miniapp', title: 'Mini App', sub: 'Telegram: продажи, каталоги, квизы', num: '02' },
  { id: 'bot', title: 'Telegram-бот', sub: 'Заявки, заказы, автоматизация', num: '03' },
  { id: 'design', title: 'Дизайн', sub: 'UI/UX, Figma, прототипирование', num: '04' },
  { id: 'seo', title: 'Трафик', sub: 'SEO, Яндекс, VK, Telegram Ads', num: '05' },
  { id: 'complex', title: 'Под ключ', sub: 'Сайт + бот + аналитика + поддержка', num: '06' },
];

export default function Services() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="services" className="bg-white" aria-label="Наши услуги">
      <div className="container-brand pt-24 pb-12 border-t border-black/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.h2
            className="font-manrope font-extrabold text-black leading-none"
            style={{ fontSize: 'clamp(3rem, 9vw, 8rem)', letterSpacing: '-0.04em', lineHeight: 0.92 }}
            initial={prefersReduced ? {} : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Услуги
          </motion.h2>
          <motion.p
            className="font-inter text-black/40 text-sm max-w-xs leading-relaxed"
            initial={prefersReduced ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Всё, что нужно для присутствия в интернете - от идеи до запуска.
          </motion.p>
        </div>
      </div>

      <div className="container-brand pb-24">
        <div className="border-t border-black/10">
          {services.map((s, i) => (
            <motion.a
              key={s.id}
              href="https://t.me/menshikovstudio"
              target="_blank"
              rel="noopener noreferrer"
              initial={prefersReduced ? {} : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group flex items-center justify-between gap-6 py-6 md:py-8 border-b border-black/10 hover:pl-4 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-baseline gap-5 md:gap-10">
                <span className="mono-label text-black/25 w-7 flex-shrink-0">{s.num}</span>
                <span
                  className="font-manrope font-extrabold text-black group-hover:text-black/60 transition-colors leading-none"
                  style={{ fontSize: 'clamp(1.6rem, 4vw, 3.5rem)', letterSpacing: '-0.03em' }}
                >
                  {s.title}
                </span>
              </div>
              <div className="flex items-center gap-4 flex-shrink-0">
                <span className="font-inter text-black/40 text-sm hidden md:block">{s.sub}</span>
                <ArrowUpRight
                  size={20}
                  className="text-black/30 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
