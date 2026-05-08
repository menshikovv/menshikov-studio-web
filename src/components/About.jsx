import { motion, useReducedMotion } from 'framer-motion';

const stats = [
  { value: '50+', label: 'проектов запущено' },
  { value: '7', label: 'направлений работы' },
  { value: '1-3', label: 'дня на простой сайт' },
  { value: '24/7', label: 'на связи по проектам' },
];

const advantages = [
  { title: 'Погружаемся в бизнес', description: 'Перед разработкой разбираем задачу, аудиторию, продукт и путь клиента.' },
  { title: 'Работаем по этапам', description: 'Фиксируем структуру, сроки, задачи и показываем промежуточный результат.' },
  { title: 'Думаем о конверсии', description: 'Делаем не просто красивый интерфейс, а систему, которая ведёт к действию.' },
  { title: 'Поддерживаем после', description: 'Помогаем с правками, техническими вопросами и развитием проекта.' },
];

export default function About() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="about" className="bg-white border-t border-black/10" aria-label="О нас">
      <div className="container-brand pt-24 pb-24">
        <motion.h2
          className="font-manrope font-extrabold text-black leading-none mb-20"
          style={{ fontSize: 'clamp(3rem, 9vw, 8rem)', letterSpacing: '-0.04em', lineHeight: 0.92 }}
          initial={prefersReduced ? {} : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          О студии
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black/10 border border-black/10 rounded-3xl overflow-hidden mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white p-8 md:p-10"
            >
              <div
                className="font-manrope font-extrabold text-black leading-none mb-3"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.04em' }}
              >
                {stat.value}
              </div>
              <p className="font-inter text-black/40 text-sm leading-snug">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10 border border-black/10 rounded-3xl overflow-hidden">
          {advantages.map((item, i) => (
            <motion.div
              key={item.title}
              initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 md:p-10"
            >
              <div className="font-manrope font-extrabold text-black text-2xl md:text-3xl leading-tight mb-3" style={{ letterSpacing: '-0.02em' }}>
                {item.title}
              </div>
              <p className="font-inter text-black/45 text-base leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
