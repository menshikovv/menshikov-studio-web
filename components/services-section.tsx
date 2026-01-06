"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, Zap, Layers, Check } from "lucide-react"
import { ScrollFade } from "@/components/scroll-fade"

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
    price: "от 6 500 ₽",
    priceDetails: "Срок: 1-3 дня",
    popular: false,
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
      "Аналитика и отслеживание метрик",
    ],
    price: "от 7 500 ₽",
    priceDetails: "Срок: 1-3 дня",
    popular: true,
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
    price: "от 15 000₽",
    priceDetails: "Срок: 1-7 дней",
    popular: false,
  },
]

export function ServicesSection() {
  return (
    <section className="relative py-20 md:py-32 px-4 md:px-8" id="services">
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
              Выберите готовое решение или закажите индивидуальный проект
            </p>
          </div>
        </ScrollFade>

        <ScrollFade delay={100}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className={`glass-effect p-6 md:p-8 hover:bg-white/5 transition-all duration-500 group cursor-pointer relative overflow-hidden flex flex-col h-full ${
                    service.popular ? "border-white/50 shadow-[0_0_30px_rgba(255,255,255,0.3)]" : ""
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
                    <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed line-clamp-2 h-10 md:h-12">
                      {service.description}
                    </p>
                  </div>

                  <div className="mb-6 md:mb-8 h-16 md:h-20">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-3xl md:text-4xl font-bold text-white">{service.price}</span>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground">{service.priceDetails}</p>
                  </div>

                  <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8 flex-grow">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 md:gap-3 text-xs md:text-sm text-muted-foreground"
                      >
                        <Check className="w-4 h-4 md:w-5 md:h-5 text-white flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => window.open('https://t.me/menshikovv1', '_blank')}
                    className={`w-full cursor-pointer ${
                      service.popular
                        ? "bg-gradient-to-r from-white to-gray-200 text-black hover:from-gray-100 hover:to-gray-300"
                        : "bg-white/10 hover:bg-white/20"
                    } ${
                      service.popular ? "text-black" : "text-white"
                    } font-semibold py-5 md:py-6 transition-all duration-300 group-hover:scale-105`}
                  >
                    Заказать проект
                  </Button>
                </Card>
              )
            })}
          </div>
        </ScrollFade>

        <ScrollFade delay={200}>
          <div className="text-center mt-12 md:mt-16 px-4">
            <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 text-pretty">
              Не нашли подходящий вариант? Мы создадим индивидуальное решение под ваши задачи
            </p>
            <Button
              variant="outline"
              className="w-full sm:w-auto border-white/50 text-white cursor-pointer"
            >
              Обсудить индивидуальный проект
            </Button>
          </div>
        </ScrollFade>
      </div>
    </section>
  )
}
