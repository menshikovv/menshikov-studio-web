"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [typingComplete, setTypingComplete] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const timer = setTimeout(() => {
      setTypingComplete(true)
    }, 3500)
    return () => clearTimeout(timer)
  }, [])

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
          className={`flex justify-center mb-8 md:mb-10 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
          <img src="/logo.png" alt="Menshikov Studio" width={400} className="md:w-[600px] w-[400px]" />
        </div>

        <h1
          className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-10 md:mb-12 leading-tight ${isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
          <span
            className={`block ${!typingComplete
              ? "text-white/70 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-white/70 cursor-pointer"
              : "bg-gradient-to-r from-white/50 via-white to-white/50 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent cursor-pointer"
              }`}
            style={!typingComplete ? { width: "fit-content", margin: "0 auto" } : {}}
          >
            Создаём Digital Будущее
          </span>
        </h1>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <Button
            size="lg"
            className="w-full sm:w-auto bg-white text-black hover:bg-white hover:text-black text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full font-semibold group transition-all duration-300 cursor-pointer"
            onClick={() => window.open('https://t.me/mnshkv_studio', '_blank')}
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
          className={`mt-16 md:mt-20 flex flex-wrap justify-center gap-4 md:gap-8 transition-opacity duration-1000 delay-800 ${isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
          {[
            { value: "100%", label: "Качество" },
            { value: "24/7", label: "Поддержка" },
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
