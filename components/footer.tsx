"use client"

import { Mail, MessageCircle, Phone, MapPin } from "lucide-react"

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative border-t border-white/10 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12">
          {/* Компания */}
          <div className="text-center md:text-left">
            <div className="mb-6">
              <img src="/logo.png" alt="Menshikov Studio" width={200} className="mx-auto md:mx-0" />
            </div>
            <p className="text-sm text-white/70 mb-4 leading-relaxed">
              Создаём современные веб-сайты и Telegram Mini Apps, которые увеличивают продажи на 300%
            </p>
            <div className="flex justify-center md:justify-start gap-4 items-center">
              <div className="glass-effect p-2 rounded-lg border border-white/10 flex items-center justify-center h-8">
                <span className="text-xs text-white/60">1-3 дня</span>
              </div>
              <div className="glass-effect p-2 rounded-lg border border-white/10 flex items-center justify-center h-8">
                <span className="text-xs text-white/60">300% рост продаж</span>
              </div>
            </div>
          </div>

          {/* Услуги */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Услуги</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-sm text-white/70 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Веб-сайты
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-sm text-white/70 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Telegram Mini Apps
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-sm text-white/70 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Комплексные решения
                </button>
              </li>
              <li>
                <a 
                  href="https://t.me/menshikovv1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Консультация
                </a>
              </li>
            </ul>
          </div>

          {/* Компания */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Компания</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio-section')}
                  className="text-sm text-white/70 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Портфолио
                </button>
              </li>
              <li>
                <a 
                  href="https://t.me/mnshkv_cases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Все кейсы
                </a>
              </li>
              <li>
                <a 
                  href="https://t.me/mnshkv_reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Отзывы клиентов
                </a>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('guarantees-section')}
                  className="text-sm text-white/70 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Гарантии
                </button>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Контакты</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://t.me/menshikovv1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors group"
                >
                  <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Менеджер
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <MapPin className="w-4 h-4" />
                  Работаем удаленно
                </div>
              </li>
            </ul>

            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-xs text-white/60 mb-2">Время работы:</p>
              <p className="text-sm text-white/70">Пн-Вс: 8:00 - 00:00 (МСК)</p>
              <p className="text-xs text-white/60 mt-1">Отвечаем в течение 15 минут</p>
            </div>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-white/60">
                © 2025 Menshikov Studio. Все права защищены.
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <a 
                href="https://t.me/mnshkv_studio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white/60 hover:text-white/80 transition-colors"
              >
                Telegram канал
              </a>
              <span className="text-white/30">•</span>
              <span className="text-xs text-white/60">
                Сделано с ❤️ в России
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
