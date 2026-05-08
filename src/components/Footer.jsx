import { motion, useReducedMotion } from 'framer-motion';
import { Send, Mail } from 'lucide-react';

export default function Footer() {
  const prefersReduced = useReducedMotion();

  return (
    <footer className="bg-white border-t border-black/10 py-12" aria-label="Подвал сайта">
      <div className="container-brand">
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2.5">
            <span className="font-manrope font-bold text-black text-base">Menshikov Studio</span>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <a href="https://t.me/menshikovstudio" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 font-inter text-black/40 text-sm hover:text-black transition-colors">
              <Send size={13} className="flex-shrink-0" /> @menshikovstudio
            </a>
            <a href="mailto:hello@menshikov.studio"
              className="flex items-center gap-2 font-inter text-black/40 text-sm hover:text-black transition-colors">
              <Mail size={13} className="flex-shrink-0" /> hello@menshikov.studio
            </a>
          </div>

          <p className="font-inter text-black/30 text-sm">© 2026 Menshikov Studio</p>
        </motion.div>
      </div>
    </footer>
  );
}
