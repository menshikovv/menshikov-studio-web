"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, MessageCircle, Phone, Clock } from "lucide-react"
import { ScrollFade } from "@/components/scroll-fade"

export function CTASection() {
  return (
    <section id="cta-section" className="relative py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <ScrollFade>
          <div className="glass-effect p-12 md:p-16 rounded-3xl text-center relative overflow-hidden border border-white/20">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-green-500/30 to-blue-500/30 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-500/30 to-pink-500/30 rounded-full blur-[100px]" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white glow-text mb-6">
                Начните зарабатывать больше уже завтра
              </h2>

              <p className="text-lg md:text-xl text-white/70 mb-4 max-w-3xl mx-auto leading-relaxed">
                Получите бесплатную консультацию и узнайте, как увеличить продажи на 300%
              </p>

              <p className="text-base text-white/60 mb-10 max-w-2xl mx-auto">
                ✓ Анализ вашей ниши ✓ Готовое решение за 1-3 дня ✓ Гарантия результата
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="px-6 md:px-8 py-3 md:py-4 rounded-2xl bg-gradient-to-r from-white to-gray-200 text-black font-medium shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:shadow-[0_0_40px_rgba(255,255,255,0.8)] transition-all duration-300 cursor-pointer text-sm md:text-base flex items-center justify-center gap-2"
                  onClick={() => window.open('https://t.me/menshikovv1', '_blank')}
                >
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                  Получить консультацию БЕСПЛАТНО
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="glass-effect p-4 rounded-2xl border border-white/10">
                  <div className="text-2xl font-bold text-white mb-1">15 мин</div>
                  <div className="text-sm text-white/60">Время ответа</div>
                </div>
                <div className="glass-effect p-4 rounded-2xl border border-white/10">
                  <div className="text-2xl font-bold text-white mb-1">1-3 дня</div>
                  <div className="text-sm text-white/60">Срок разработки</div>
                </div>
                <div className="glass-effect p-4 rounded-2xl border border-white/10">
                  <div className="text-2xl font-bold text-white mb-1">100%</div>
                  <div className="text-sm text-white/60">Гарантия качества</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollFade>
      </div>
    </section>
  )
}
