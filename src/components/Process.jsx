'use client'

import { motion, useReducedMotion } from 'framer-motion';

const steps = [
  { number: '01', title: 'Заявка',     description: 'Вы рассказываете о задаче, нише и целях.' },
  { number: '02', title: 'Анализ',     description: 'Изучаем проект и предлагаем оптимальный формат решения.' },
  { number: '03', title: 'Структура',  description: 'Продумываем блоки, сценарии и пользовательский путь.' },
  { number: '04', title: 'Дизайн',     description: 'Создаём современный интерфейс под вашу аудиторию.' },
  { number: '05', title: 'Разработка', description: 'Собираем сайт, Mini App, бота или комплексное решение.' },
  { number: '06', title: 'Запуск',     description: 'Проверяем адаптивность, формы, аналитику и публикуем.' },
];

export default function Process() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="bg-black text-white" aria-label="Процесс работы">
      <div className="container-brand pt-24 pb-24">
        {/* Heading — solid white, no outline trick */}
        <motion.h2
          className="font-manrope font-extrabold text-white leading-none mb-20"
          style={{ fontSize: 'clamp(3rem, 9vw, 8rem)', letterSpacing: '-0.04em', lineHeight: 0.92 }}
          initial={prefersReduced ? {} : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Как мы работаем
        </motion.h2>

        <div className="border-t border-white/10">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={prefersReduced ? {} : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group flex items-baseline gap-6 md:gap-16 py-7 md:py-9 border-b border-white/10 hover:pl-4 transition-all duration-300"
            >
              <span className="font-inter text-white/25 text-sm flex-shrink-0 w-7">{step.number}</span>
              <h3
                className="font-manrope font-extrabold text-white group-hover:text-white/60 transition-colors leading-none flex-shrink-0"
                style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.8rem)', letterSpacing: '-0.03em' }}
              >
                {step.title}
              </h3>
              <p className="font-inter text-white/35 text-sm md:text-base leading-relaxed hidden sm:block">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}