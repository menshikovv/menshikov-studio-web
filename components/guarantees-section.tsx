"use client"

import { ScrollFade } from "@/components/scroll-fade"
import { Clock, Repeat, HeadphonesIcon } from "lucide-react"

const guarantees = [
  {
    icon: Clock,
    title: "Соблюдение сроков",
    description: "Сдаем проект точно в срок. За каждый день просрочки — скидка 10%"
  },
  {
    icon: Repeat,
    title: "3 бесплатные правки",
    description: "Внесем любые изменения в течение 30 дней после сдачи проекта"
  },
  {
    icon: HeadphonesIcon,
    title: "Техподдержка 24/7",
    description: "Решаем любые технические вопросы в течение 2 часов"
  }
]

export function GuaranteesSection() {
  return (
    <section id="guarantees-section" className="relative py-20 md:py-32 px-4 md:px-8">
      <div className="absolute top-1/4 left-1/4 w-80 md:w-[500px] h-80 md:h-[500px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 md:w-[600px] h-96 md:h-[600px] bg-purple-500/10 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="max-w-6xl mx-auto">
        <ScrollFade>
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white glow-text mb-6">
              Наши гарантии
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
              Мы настолько уверены в качестве, что готовы дать железные гарантии
            </p>
          </div>
        </ScrollFade>

        {/* Первые два элемента в сетке */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
          {guarantees.slice(0, 2).map((guarantee, index) => {
            const Icon = guarantee.icon
            return (
              <ScrollFade key={index} delay={index * 100}>
                <div className="glass-effect p-6 md:p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] group h-full">
                  <div className="flex items-start gap-4 h-full">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/20 to-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex flex-col justify-start">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                        {guarantee.title}
                      </h3>
                      <p className="text-white/70 text-base md:text-lg leading-relaxed">
                        {guarantee.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollFade>
            )
          })}
        </div>

        {/* Последний элемент на всю ширину */}
        {guarantees.slice(2).map((guarantee, index) => {
          const Icon = guarantee.icon
          return (
            <ScrollFade key={index + 2} delay={(index + 2) * 100}>
              <div className="glass-effect p-6 md:p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/20 to-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                      {guarantee.title}
                    </h3>
                    <p className="text-white/70 text-base md:text-lg leading-relaxed">
                      {guarantee.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollFade>
          )
        })}
      </div>
    </section>
  )
}