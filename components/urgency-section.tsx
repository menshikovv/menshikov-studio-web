"use client"

import { ScrollFade } from "@/components/scroll-fade"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Gift } from "lucide-react"
import { useState, useEffect } from "react"

export function UrgencySection() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else {
          return { hours: 23, minutes: 59, seconds: 59 }
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative py-20 md:py-32 px-4 md:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-orange-500/10 to-yellow-500/10" />
      <div className="absolute top-1/4 left-1/4 w-80 md:w-[500px] h-80 md:h-[500px] bg-orange-500/20 rounded-full blur-[120px] animate-pulse" />

      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollFade>
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-full px-6 py-3 mb-6">
              <Clock className="w-5 h-5 text-red-400" />
              <span className="text-red-400 font-semibold">Ограниченное предложение</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white glow-text mb-6">
              Скидка 30% на первый проект
            </h2>
            
            <p className="text-lg md:text-xl text-white/70 mb-8">
              Только для новых клиентов. Предложение действует ограниченное время!
            </p>

            {/* Countdown Timer */}
            <div className="flex justify-center gap-4 mb-8">
              {[
                { value: timeLeft.hours, label: "часов" },
                { value: timeLeft.minutes, label: "минут" },
                { value: timeLeft.seconds, label: "секунд" }
              ].map((time, index) => (
                <div key={index} className="glass-effect p-4 md:p-6 rounded-2xl border border-red-500/30">
                  <div className="text-2xl md:text-4xl font-bold text-red-400 mb-1">
                    {time.value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs md:text-sm text-white/60">{time.label}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollFade>

        <ScrollFade delay={100}>
          <div className="glass-effect p-8 md:p-12 rounded-3xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-red-500/10 text-center">
            <div className="flex justify-center mb-6">
              <Gift className="w-16 h-16 text-orange-400" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Что входит в акцию:
            </h3>
            
            <ul className="text-left max-w-md mx-auto space-y-3 mb-8 text-white/80">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                Скидка 30% на любой проект
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                Бесплатная консультация (обычно 2000₽)
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                Техподдержка 90 дней вместо 30
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                Приоритетная очередь разработки
              </li>
            </ul>

            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-8 py-6 rounded-full text-lg shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:shadow-[0_0_40px_rgba(249,115,22,0.6)] transition-all duration-300 cursor-pointer animate-pulse hover:animate-none"
              onClick={() => window.open('https://t.me/mnshkv_studio', '_blank')}
            >
              Получить скидку 30%
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <p className="text-sm text-white/60 mt-4">
              Осталось мест: 3 из 10 • Торопитесь!
            </p>
          </div>
        </ScrollFade>
      </div>
    </section>
  )
}