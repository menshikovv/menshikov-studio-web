'use client'

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

export default function CTA() {
  const prefersReduced = useReducedMotion();

  return (
    <footer id="cta" className="bg-black text-white overflow-hidden" aria-label="Финальный призыв к действию">
      <div className="container-brand pt-24 pb-16">
        <motion.h2
          className="font-manrope font-extrabold text-white leading-none mb-16"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 7rem)', letterSpacing: '-0.04em', lineHeight: 0.92 }}
          initial={prefersReduced ? {} : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Запустим ваш<br />проект вместе
        </motion.h2>

        <motion.div
          className="flex flex-col sm:flex-row items-start gap-4 border-t border-white/10 pt-12 mb-16"
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="https://t.me/menshikovstudio"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-white text-black font-inter font-semibold text-base px-8 py-4 rounded-2xl hover:bg-white/90 transition-all duration-300 min-h-[56px]"
          >
            Написать в Telegram
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="mailto:hello@menshikov.studio"
            className="flex items-center gap-2 border border-white/20 text-white font-inter font-medium text-base px-8 py-4 rounded-2xl hover:border-white/40 hover:bg-white/5 transition-all duration-300 min-h-[56px]"
          >
            <Mail size={16} />
            hello@menshikov.studio
          </a>
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="font-manrope font-bold text-white text-base">Menshikov Studio</span>
          </div>
          <p className="font-inter text-white/30 text-sm">© 2026 Menshikov Studio</p>
        </div>
      </div>
    </footer>
  );
}
