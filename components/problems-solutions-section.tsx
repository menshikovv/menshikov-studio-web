"use client"

import { ScrollFade } from "@/components/scroll-fade"
import { X, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const problems = [
  {
    problem: "Сайт не приносит клиентов",
    solution: "Создаем продающие сайты с конверсией до 20-40%"
  },
  {
    problem: "Долгая разработка (месяцы ожидания)",
    solution: "Запускаем готовые решения за 1-3 дня"
  },
  {
    problem: "Высокая стоимость разработки",
    solution: "Фиксированная цена от 6 500₽ без скрытых доплат"
  },
  {
    problem: "Нет технической поддержки",
    solution: "Бесплатная поддержка 24/7 после запуска"
  }
]

export function ProblemsSolutionsSection() {
  return (
    <section className="relative py-20 md:py-32 px-4 md:px-8">
      <div className="absolute top-1/4 right-1/4 w-80 md:w-[500px] h-80 md:h-[500px] bg-red-500/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-96 md:w-[600px] h-96 md:h-[600px] bg-green-500/10 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="max-w-6xl mx-auto">
        <ScrollFade>
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white glow-text mb-6">
              Хватит терять клиентов!
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
              Мы решаем главные проблемы бизнеса в digital-сфере
            </p>
          </div>
        </ScrollFade>

        <div className="grid gap-6 md:gap-8 mb-12 md:mb-16">
          {problems.map((item, index) => (
            <ScrollFade key={index} delay={index * 100}>
              <div className="glass-effect p-6 md:p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500">
                <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-8 items-center">
                  {/* Problem */}
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <X className="w-4 h-4 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-red-400 mb-2">
                        Проблема:
                      </h3>
                      <p className="text-white/80 text-base md:text-lg">
                        {item.problem}
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:flex justify-center">
                    <ArrowRight className="w-8 h-8 text-white/40" />
                  </div>

                  {/* Solution */}
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-green-400 mb-2">
                        Наше решение:
                      </h3>
                      <p className="text-white/80 text-base md:text-lg">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollFade>
          ))}
        </div>

        <ScrollFade delay={400}>
          <div className="text-center">
            <Button
              size="lg"
              className="px-6 md:px-8 py-3 md:py-4 rounded-2xl bg-gradient-to-r from-white to-gray-200 text-black font-medium shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:shadow-[0_0_40px_rgba(255,255,255,0.8)] transition-all duration-300 cursor-pointer text-sm md:text-base"
              onClick={() => window.open('https://t.me/menshikovv1', '_blank')}
            >
              Решить проблемы прямо сейчас
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </Button>
            <p className="text-sm text-white/60 mt-4">
              Бесплатная консультация • Без обязательств
            </p>
          </div>
        </ScrollFade>
      </div>
    </section>
  )
}