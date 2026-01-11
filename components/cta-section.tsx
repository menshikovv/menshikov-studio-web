"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"
import { ScrollFade } from "@/components/scroll-fade"

export function CTASection() {
  return (
    <section id="cta-section" className="relative py-20 md:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <ScrollFade>
          <div className="glass-effect p-6 md:p-12 lg:p-16 rounded-3xl text-center relative overflow-hidden border border-white/20">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-green-500/30 to-blue-500/30 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-500/30 to-pink-500/30 rounded-full blur-[100px]" />

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white glow-text mb-4 md:mb-6 leading-tight px-2">
                Начните зарабатывать больше уже завтра
              </h2>

              <p className="text-lg sm:text-xl md:text-2xl text-white/70 mb-6 max-w-3xl mx-auto leading-relaxed px-2">
                Получите бесплатную консультацию и узнайте, как увеличить продажи на 300%
              </p>

              <div className="text-sm sm:text-base text-white/60 mb-8 max-w-2xl mx-auto px-2 space-y-2 sm:space-y-0">
                <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-6 space-y-1 sm:space-y-0">
                  <span>✓ Анализ вашей ниши</span>
                  <span>✓ Готовое решение за 1-3 дня</span>
                  <span>✓ Гарантия результата</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 px-2">
                <Button
                  size="lg"
                  className="w-full sm:w-auto max-w-md mx-auto sm:mx-0 px-6 sm:px-8 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-white to-gray-200 text-black font-bold shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:shadow-[0_0_50px_rgba(255,255,255,0.9)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer text-sm sm:text-base flex items-center justify-center gap-2 sm:gap-3 min-h-[60px] sm:min-h-[64px] touch-manipulation"
                  onClick={() => window.open('https://t.me/menshikovv1', '_blank')}
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="whitespace-nowrap">Получить консультацию</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center px-2">
                <div className="glass-effect p-4 md:p-6 rounded-2xl border border-white/10">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">15 мин</div>
                  <div className="text-sm md:text-base text-white/60">Время ответа</div>
                </div>
                <div className="glass-effect p-4 md:p-6 rounded-2xl border border-white/10">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">1-3 дня</div>
                  <div className="text-sm md:text-base text-white/60">Срок разработки</div>
                </div>
                <div className="glass-effect p-4 md:p-6 rounded-2xl border border-white/10">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">100%</div>
                  <div className="text-sm md:text-base text-white/60">Гарантия качества</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollFade>
      </div>
    </section>
  )
}
