'use client'

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Send, CheckCircle2, Loader2 } from 'lucide-react';

const serviceOptions = [
  { id: 'web',     label: 'Сайт / лендинг' },
  { id: 'miniapp', label: 'Telegram Mini App' },
  { id: 'bot',     label: 'Telegram-бот' },
  { id: 'design',  label: 'UI/UX-дизайн' },
  { id: 'seo',     label: 'SEO / реклама' },
  { id: 'complex', label: 'Под ключ' },
];

const budgetOptions = [
  'До 10 000 ₽',
  '10 000 – 30 000 ₽',
  '30 000 – 70 000 ₽',
  'Свыше 70 000 ₽',
  'Обсудим',
];

export default function Pricing() {
  const prefersReduced = useReducedMotion();
  const [selected, setSelected] = useState([]);
  const [budget, setBudget] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleService = (id) => {
    setSelected((prev) => prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !contact) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="bg-white border-t border-black/10" id="pricing" aria-label="Форма заявки">
      <div className="container-brand pt-24 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-28">
            <motion.h2
              className="font-manrope font-extrabold text-black leading-none mb-8"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', letterSpacing: '-0.04em', lineHeight: 0.92 }}
              initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              Расскажите о проекте
            </motion.h2>
            <motion.p
              className="font-inter text-black/45 text-base leading-relaxed mb-10"
              initial={prefersReduced ? {} : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Каждый проект индивидуален. Оставьте заявку — мы свяжемся в течение нескольких часов и предложим оптимальное решение.
            </motion.p>
            <motion.div
              className="flex flex-col gap-3"
              initial={prefersReduced ? {} : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {['Бесплатная консультация', 'Оценка за несколько часов', 'Без скрытых платежей'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-black/30 flex-shrink-0" />
                  <span className="font-inter text-black/60 text-sm">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <div className="bg-black rounded-3xl p-10 flex flex-col items-center justify-center text-center min-h-[400px] gap-6">
                <CheckCircle2 size={40} className="text-white" />
                <div>
                  <h3 className="font-manrope font-bold text-white text-2xl mb-2">Заявка отправлена!</h3>
                  <p className="font-inter text-white/50 text-base">Свяжемся в ближайшее время.</p>
                </div>
                <a href="https://t.me/menshikovstudio" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/60 font-inter text-sm hover:text-white transition-colors">
                  <Send size={13} /> @menshikovstudio
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="border border-black/10 rounded-3xl p-8 md:p-10 flex flex-col gap-7">
                <div>
                  <label className="mono-label text-black/40 mb-3 block">Что нужно?</label>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map((opt) => (
                      <button key={opt.id} type="button" onClick={() => toggleService(opt.id)}
                        className={`px-4 py-2 rounded-xl font-inter text-sm font-medium transition-all duration-200 border ${
                          selected.includes(opt.id)
                            ? 'bg-black border-black text-white'
                            : 'border-black/15 text-black/50 hover:border-black/40 hover:text-black'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="mono-label text-black/40 mb-3 block">Бюджет</label>
                  <div className="flex flex-wrap gap-2">
                    {budgetOptions.map((opt) => (
                      <button key={opt} type="button" onClick={() => setBudget(opt)}
                        className={`px-4 py-2 rounded-xl font-inter text-sm font-medium transition-all duration-200 border ${
                          budget === opt
                            ? 'bg-black border-black text-white'
                            : 'border-black/15 text-black/50 hover:border-black/40 hover:text-black'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="mono-label text-black/40 mb-2 block" htmlFor="req-name">Имя</label>
                    <input id="req-name" type="text" required value={name} onChange={(e) => setName(e.target.value)}
                      placeholder="Иван Иванов"
                      className="w-full border border-black/15 rounded-2xl px-4 py-3 font-inter text-black text-sm placeholder:text-black/25 focus:outline-none focus:border-black/40 transition-colors bg-white"
                    />
                  </div>
                  <div>
                    <label className="mono-label text-black/40 mb-2 block" htmlFor="req-contact">Telegram / телефон</label>
                    <input id="req-contact" type="text" required value={contact} onChange={(e) => setContact(e.target.value)}
                      placeholder="@username"
                      className="w-full border border-black/15 rounded-2xl px-4 py-3 font-inter text-black text-sm placeholder:text-black/25 focus:outline-none focus:border-black/40 transition-colors bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="mono-label text-black/40 mb-2 block" htmlFor="req-desc">О проекте</label>
                  <textarea id="req-desc" rows={3} value={description} onChange={(e) => setDescription(e.target.value)}
                    placeholder="Расскажите о задаче…"
                    className="w-full border border-black/15 rounded-2xl px-4 py-3 font-inter text-black text-sm placeholder:text-black/25 focus:outline-none focus:border-black/40 transition-colors resize-none bg-white"
                  />
                </div>

                <button type="submit" disabled={loading}
                  className="group flex items-center justify-center gap-2 bg-black text-white font-inter font-semibold text-base px-8 py-4 rounded-2xl hover:bg-black/80 transition-all duration-300 min-h-[56px] disabled:opacity-60"
                >
                  {loading ? <Loader2 size={18} className="animate-spin" /> : (
                    <><span>Отправить заявку</span><ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></>
                  )}
                </button>

                <p className="font-inter text-black/30 text-xs text-center">
                  Или напрямую:{' '}
                  <a href="https://t.me/menshikovstudio" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
                    @menshikovstudio
                  </a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
