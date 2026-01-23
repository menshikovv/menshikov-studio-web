"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Sparkles, Zap, Layers, Check, Palette, ChevronLeft, ChevronRight, Search, Code2, Bot } from "lucide-react"
import { ScrollFade } from "@/components/scroll-fade"
import { useState, useEffect } from "react"

const services = [
  {
    icon: Sparkles,
    title: "Веб-сайты",
    description: "Современные landing pages, корпоративные сайты и интернет-магазины под ключ",
    features: [
      "Адаптивный дизайн для всех устройств",
      "SEO-оптимизация и высокая скорость",
      "Техподдержка 24/7 после запуска",
      "Уникальный дизайн под ваш бренд",
    ],
    popular: false,
    category: "development",
  },
  {
    icon: Zap,
    title: "Telegram Mini Apps",
    description: "Мини-приложения нового поколения с бесшовной интеграцией в Telegram",
    features: [
      "Полная интеграция с Telegram Bot API",
      "Современный UI/UX дизайн",
      "Подключение платежных систем",
      "База данных и backend разработка",
      "Интеграция с Google Excel и т.д",
    ],
    popular: true,
    category: "development",
  },
  {
    icon: Palette,
    title: "Дизайн сайта",
    description: "Профессиональный UI/UX дизайн для веб-сайтов с современным подходом",
    features: [
      "Уникальный дизайн под ваш бренд",
      "Адаптивная верстка для всех устройств",
      "Современные тренды и лучшие практики",
      "Готовые макеты в Figma",
    ],
    popular: false,
    category: "design",
  },
  {
    icon: Layers,
    title: "Все вместе",
    description: "Веб-сайт + Telegram Mini App",
    features: [
      "Единая экосистема для бизнеса",
      "Интеграция всех каналов продаж",
      "Обучение команды работе с системой",
      "Приоритетная техподдержка 90 дней",
    ],
    popular: false,
    category: "development",
  },
  {
    icon: Search,
    title: "SEO продвижение",
    description: "Полное SEO продвижение сайта с выводом в топ поисковых систем",
    features: [
      "Техническая и внутренняя SEO",
      "Подбор и кластеризация ключевых слов",
      "Создание SEO-контента",
      "Полное ведение проекта",
    ],
    popular: false,
    category: "seo",
  },
]

export function ServicesSection() {
  const [api, setApi] = useState<any>()
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const [activeTab, setActiveTab] = useState<"all" | "development" | "design" | "seo">("all")

  // Фильтрация услуг по активному табу
  const filteredServices = activeTab === "all" 
    ? services 
    : services.filter(service => service.category === activeTab)

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }

    onSelect()
    api.on("select", onSelect)

    return () => {
      api.off("select", onSelect)
    }
  }, [api])
  return (
    <section className="relative py-20 md:py-32 px-4 md:px-8" id="services">
      {/* Затемнение фона */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
      
      <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-white/20 rounded-full blur-[120px] animate-pulse" />
      <div
        className="absolute bottom-1/3 right-1/4 w-80 md:w-[500px] h-80 md:h-[500px] bg-white/15 rounded-full blur-[140px] animate-pulse"
        style={{ animationDelay: "2s", animationDuration: "4s" }}
      />

      <div className="max-w-7xl mx-auto">
        <ScrollFade>
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white glow-text mb-4 md:mb-6 text-balance">
              Наши услуги
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty px-4">
              Выберите готовое решение или закажите индивидуальный проект. Стоимость обсуждается индивидуально
            </p>
          </div>
        </ScrollFade>

        {/* Табы фильтрации */}
        <ScrollFade delay={25}>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 md:mb-16 px-4">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl font-medium transition-all duration-300 text-sm md:text-base relative overflow-hidden group focus:outline-none ${
                activeTab === "all"
                  ? "bg-gradient-to-r from-white to-gray-200 text-black shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                  : "bg-white/5 backdrop-blur-xl border border-white/10 text-gray-400 hover:border-white/30 hover:text-white hover:bg-white/10"
              }`}
            >
              <span className="relative z-10">Все проекты</span>
              {activeTab !== "all" && (
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </button>
            
            <button
              onClick={() => setActiveTab("development")}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base relative overflow-hidden group focus:outline-none ${
                activeTab === "development"
                  ? "bg-gradient-to-r from-white to-gray-200 text-black shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                  : "bg-white/5 backdrop-blur-xl border border-white/10 text-gray-400 hover:border-white/30 hover:text-white hover:bg-white/10"
              }`}
            >
              <Code2 className="w-4 h-4 md:w-5 md:h-5" />
              <span className="relative z-10">Разработка</span>
              {activeTab !== "development" && (
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </button>
            
            <button
              onClick={() => setActiveTab("design")}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base relative overflow-hidden group focus:outline-none ${
                activeTab === "design"
                  ? "bg-gradient-to-r from-white to-gray-200 text-black shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                  : "bg-white/5 backdrop-blur-xl border border-white/10 text-gray-400 hover:border-white/30 hover:text-white hover:bg-white/10"
              }`}
            >
              <Palette className="w-4 h-4 md:w-5 md:h-5" />
              <span className="relative z-10">Дизайн</span>
              {activeTab !== "design" && (
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </button>
            
            <button
              onClick={() => setActiveTab("seo")}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base relative overflow-hidden group focus:outline-none ${
                activeTab === "seo"
                  ? "bg-gradient-to-r from-white to-gray-200 text-black shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                  : "bg-white/5 backdrop-blur-xl border border-white/10 text-gray-400 hover:border-white/30 hover:text-white hover:bg-white/10"
              }`}
            >
              <Search className="w-4 h-4 md:w-5 md:h-5" />
              <span className="relative z-10">SEO</span>
              {activeTab !== "seo" && (
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </button>
          </div>
        </ScrollFade>

        <ScrollFade delay={50}>
          <div className="relative px-4 md:px-16">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4 md:-ml-6">
                {filteredServices.map((service, index) => {
                  const Icon = service.icon
                  return (
                    <CarouselItem key={index} className="pl-4 md:pl-6 basis-full md:basis-1/2 lg:basis-1/3">
                      <Card
                        className={`glass-effect p-6 md:p-8 hover:bg-white/5 transition-all duration-500 group cursor-pointer relative overflow-hidden flex flex-col h-full ${service.popular ? "border-white/50" : ""
                          }`}
                      >
                        {service.popular && (
                          <div className="absolute top-0 right-0 bg-gradient-to-br from-white to-gray-200 text-black text-xs font-bold px-3 md:px-4 py-1.5 md:py-2 rounded-bl-2xl">
                            ПОПУЛЯРНО
                          </div>
                        )}

                        <div className="mb-6">
                          <div className="inline-flex p-3 md:p-4 bg-white/10 rounded-2xl group-hover:bg-white/20 transition-colors mb-4">
                            <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors h-8 md:h-9 flex items-center">
                            {service.title}
                          </h3>
                          <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed min-h-[3rem] md:min-h-[3.5rem]">
                            {service.description}
                          </p>
                        </div>

                        <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8 flex-grow min-h-[8rem] md:min-h-[10rem]">
                          {service.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 md:gap-3 text-xs md:text-sm text-muted-foreground"
                            >
                              <Check className="w-4 h-4 md:w-5 md:h-5 text-white flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <Button
                          onClick={() => window.open('https://t.me/M_Studio10', '_blank')}
                          className={`w-full cursor-pointer ${service.popular
                            ? "bg-gradient-to-r from-white to-gray-200 text-black hover:from-gray-100 hover:to-gray-300"
                            : "bg-white/10 hover:bg-white/20"
                            } ${service.popular ? "text-black" : "text-white"
                            } font-semibold py-5 md:py-6 transition-all duration-300 group-hover:scale-105`}
                        >
                          Узнать стоимость
                        </Button>
                      </Card>
                    </CarouselItem>
                  )
                })}
              </CarouselContent>
              
              {/* Кастомные кнопки навигации */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 bg-black/60 backdrop-blur-sm border-white/20 text-white hover:bg-white/80 hover:border-white/50 hover:text-black transition-all w-10 h-10 md:w-12 md:h-12 rounded-full"
                onClick={() => api?.scrollPrev()}
                disabled={!canScrollPrev}
              >
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 bg-black/60 backdrop-blur-sm border-white/20 text-white hover:bg-white/80 hover:border-white/50 hover:text-black transition-all w-10 h-10 md:w-12 md:h-12 rounded-full"
                onClick={() => api?.scrollNext()}
                disabled={!canScrollNext}
              >
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </Button>
            </Carousel>
          </div>
        </ScrollFade>

        <ScrollFade delay={100}>
          <div className="text-center mt-12 md:mt-16 px-4">
            <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 text-pretty">
              Не нашли подходящий вариант? Мы создадим индивидуальное решение под ваши задачи
            </p>
            <Button
              variant="outline"
              className="w-full sm:w-auto border-white/50 text-white cursor-pointer"
              onClick={() => window.open('https://t.me/M_Studio10', '_blank')}
            >
              Обсудить индивидуальный проект
            </Button>
          </div>
        </ScrollFade>
      </div>
    </section>
  )
}
