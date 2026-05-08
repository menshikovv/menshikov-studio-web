import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqItems = [
  { question: 'Сколько стоит сайт?', answer: 'Базовые проекты начинаются от 6 500 ₽. Точная стоимость зависит от объёма, дизайна, функционала и интеграций.' },
  { question: 'Можно ли сделать сайт за 1 день?', answer: 'Да, если это простой лендинг или небольшой сайт с готовой структурой. Более сложные проекты требуют больше времени.' },
  { question: 'Вы делаете только сайты?', answer: 'Нет. Мы также создаём Telegram Mini Apps, ботов, дизайн, SEO и рекламные кампании.' },
  { question: 'Можно заказать только дизайн?', answer: 'Да, можем подготовить макеты в Figma без разработки.' },
  { question: 'Можно подключить оплату?', answer: 'Да, для сайтов и Telegram Mini Apps можно подключить платёжные системы.' },
  { question: 'Вы помогаете после запуска?', answer: 'Да, помогаем с правками, техническими вопросами и развитием проекта.' },
];

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false);
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="border-b border-subtle last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="focus-electric w-full flex items-center justify-between gap-4 py-6 text-left group min-h-[64px]"
        aria-expanded={open}
        aria-label={item.question}
      >
        <span className="font-manrope font-bold text-cobalt text-base md:text-lg group-hover:text-electric transition-colors leading-snug">
          {item.question}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${open ? 'bg-electric border-electric text-white' : 'border-subtle text-muted-brand group-hover:border-electric/40 group-hover:text-electric'}`}>
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={prefersReduced ? {} : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={prefersReduced ? {} : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="font-inter text-muted-brand text-base leading-relaxed pb-6">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="section-padding bg-white" aria-label="Часто задаваемые вопросы">
      <div className="container-brand">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20">
          <div>
            <motion.p className="mono-label text-electric mb-4" initial={prefersReduced ? {} : { opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
              FAQ
            </motion.p>
            <motion.h2 className="font-manrope font-extrabold text-cobalt leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.02em' }} initial={prefersReduced ? {} : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              Частые вопросы
            </motion.h2>
            <motion.p className="font-inter text-muted-brand text-base leading-relaxed mb-8" initial={prefersReduced ? {} : { opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }}>
              Не нашли ответ? Напишите нам в Telegram — ответим быстро.
            </motion.p>
            <motion.a href="https://t.me/menshikovstudio" target="_blank" rel="noopener noreferrer" className="focus-electric inline-flex items-center gap-2 bg-electric text-white font-inter font-semibold text-sm px-6 py-3.5 rounded-2xl hover:bg-blue-500 transition-all duration-200 min-h-[48px]" initial={prefersReduced ? {} : { opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 }} aria-label="Написать в Telegram">
              Написать в Telegram
            </motion.a>
          </div>
          <div>
            {faqItems.map((item, i) => (
              <FAQItem key={item.question} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}