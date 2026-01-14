"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [logoVisible, setLogoVisible] = useState(false)
  const [textVisible, setTextVisible] = useState(false)
  const [typingComplete, setTypingComplete] = useState(false)

  useEffect(() => {
    // Логотип появляется с задержкой и медленнее
    const logoTimer = setTimeout(() => {
      setLogoVisible(true)
    }, 300)

    // Текст появляется быстрее после логотипа
    const textTimer = setTimeout(() => {
      setTextVisible(true)
    }, 1000)

    // Остальные элементы появляются позже
    const visibilityTimer = setTimeout(() => {
      setIsVisible(true)
    }, 1600)

    const typingTimer = setTimeout(() => {
      setTypingComplete(true)
    }, 4000)

    return () => {
      clearTimeout(logoTimer)
      clearTimeout(textTimer)
      clearTimeout(visibilityTimer)
      clearTimeout(typingTimer)
    }
  }, [])

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio-section')
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 py-16 md:py-20 overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181810_1px,transparent_1px),linear-gradient(to_bottom,#18181810_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div
          className={`flex justify-center mb-8 md:mb-10 transition-all duration-2000 ease-out ${logoVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
            }`}
        >
          <img src="/logo.png" alt="Menshikov Studio" width={400} className="md:w-[600px] w-[400px]" />
        </div>

        <h1
          className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-6 md:mb-8 leading-tight transition-all duration-1500 ease-out ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <span className="block bg-gradient-to-r from-white/50 via-white to-white/50 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent cursor-pointer">
            Увеличиваем продажи на 300%
          </span>
        </h1>

        <p className={`hidden md:block text-base md:text-lg text-white/70 mb-8 md:mb-10 max-w-2xl mx-auto transition-all duration-1500 ease-out delay-300 ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          Пока ваши конкуренты теряют клиентов из-за устаревших сайтов, мы создаем продающие решения, которые работают 24/7
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <Button
            size="lg"
            className="w-full sm:w-auto bg-white text-black hover:bg-white hover:text-black text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full font-semibold group transition-all duration-300 cursor-pointer"
            onClick={() => window.open('https://t.me/menshikovv1', '_blank')}
          >
            Начать проект
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto glass-effect border-white/20 text-white hover:text-white hover:bg-transparent hover:border-white/20 text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full font-semibold bg-transparent cursor-pointer"
            onClick={scrollToPortfolio}
          >
            Наши работы
          </Button>
        </div>

        <div
          className={`mt-16 md:mt-20 flex flex-wrap justify-center gap-4 md:gap-8 transition-all duration-1000 ease-out delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {[
            { value: "1-3", label: "Дня на разработку" },
            { value: "300%", label: "Рост продаж" },
          ].map((stat, index) => (
            <div key={index} className="glass-effect p-4 md:p-6 rounded-xl md:rounded-2xl">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white glow-text mb-1 md:mb-2">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
