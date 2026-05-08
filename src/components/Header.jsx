import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const scrollToCTA = () => {
    setMenuOpen(false);
    document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'border-b border-black/10 bg-white/95 backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <div className="container-brand">
          <div className="flex h-16 items-center justify-between md:h-20">
            <a href="#" className="flex items-center gap-2.5" aria-label="Menshikov Studio - на главную">
              <span
                className={`font-manrope text-lg font-bold tracking-tight transition-colors duration-500 ${
                  scrolled ? 'text-black' : 'text-white'
                }`}
              >
                Menshikov Studio
              </span>
            </a>

            <div className="hidden items-center gap-6 md:flex">
              <a
                href="https://t.me/menshikovstudio"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-inter text-sm transition-colors duration-500 ${
                  scrolled ? 'text-black/40 hover:text-black' : 'text-white/70 hover:text-white'
                }`}
              >
                @menshikovstudio
              </a>
              <button
                onClick={scrollToCTA}
                className={`min-h-[44px] rounded-xl px-5 py-2.5 font-inter text-sm font-medium transition-all duration-300 ${
                  scrolled ? 'bg-black text-white hover:bg-black/80' : 'bg-white text-black hover:bg-white/85'
                }`}
              >
                Получить консультацию
              </button>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`rounded-lg p-2 transition-colors duration-500 md:hidden ${
                scrolled ? 'text-black hover:bg-black/5' : 'text-white hover:bg-white/10'
              }`}
              aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
              aria-expanded={menuOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={22} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={22} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-white px-6"
          >
            <a
              href="https://t.me/menshikovstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-sm text-black/40"
            >
              @menshikovstudio
            </a>
            <button
              onClick={scrollToCTA}
              className="min-h-[56px] w-full max-w-xs rounded-2xl bg-black px-8 py-4 font-inter text-base font-medium text-white"
            >
              Получить консультацию
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
