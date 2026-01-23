"use client"

import { Code2, Smartphone, Bot, Palette, Search, TrendingUp, Megaphone, BarChart3, Target, Users } from "lucide-react"
import { ScrollFade } from "@/components/scroll-fade"
import { AnimatedUnderline } from "@/components/animated-underline"

const services = [
  {
    id: 1,
    icon: Code2,
    title: "Веб-сайт",
    description: "Создаем современные веб-сайты, которые работают на всех устройствах и привлекают клиентов",
    features: [
      "Landing pages с высокой конверсией",
      "Корпоративные сайты и порталы",
      "Интернет-магазины под ключ",
      "Адаптивная верстка и SEO",
    ],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    icon: Smartphone,
    title: "Telegram Mini Apps",
    description: "Разрабатываем мини-приложения для Telegram с полной интеграцией и современным дизайном",
    features: [
      "Интеграция с Telegram Bot API",
      "Платежные системы и БД",
      "Современный UI/UX дизайн",
      "Подключение к внешним сервисам"
    ],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    icon: Bot,
    title: "Telegram боты",
    description: "Создаем умных ботов для автоматизации бизнес-процессов и улучшения клиентского сервиса",
    features: [
      "Автоматизация продаж и поддержки",
      "Интеграция с CRM и БД",
      "Многофункциональные боты-помощники",
      "Аналитика и отчетность"
    ],
    gradient: "from-green-500 to-emerald-500"
  },
  {
    id: 4,
    icon: Palette,
    title: "UI/UX Дизайн",
    description: "Разрабатываем привлекательные и функциональные интерфейсы, которые увеличивают конверсию",
    features: [
      "Дизайн веб-сайтов и приложений",
      "Создание брендинга и фирм. стиля",
      "Прототипирование и UX сценарии",
      "Адаптивный дизайн для всех устройств"
    ],
    gradient: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    icon: Megaphone,
    title: "Яндекс Директ",
    description: "Настраиваем эффективную контекстную рекламу в Яндекс.Директ с максимальной окупаемостью",
    features: [
      "Настройка и оптимизация кампаний",
      "Создание продающих объявлений",
      "A/B тестирование и аналитика",
      "Ретаргетинг и расширение аудитории"
    ],
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    id: 6,
    icon: Search,
    title: "SEO (полное продвижение)",
    description: "Полное продвижение и ведение SEO проектов с выводом в топ поисковых систем",
    features: [
      "Техническая и внутренняя SEO",
      "Подбор и кластеризация ключевых слов",
      "Создание SEO-контента",
      "Полное ведение проекта"
    ],
    gradient: "from-indigo-500 to-blue-500"
  },
  {
    id: 7,
    icon: Target,
    title: "VK реклама",
    description: "Таргетированная реклама ВКонтакте для привлечения целевой аудитории и увеличения продаж",
    features: [
      "Настройка таргетированной рекламы",
      "Создание креативов и объявлений",
      "Аналитика и оптимизация",
      "Ретаргетинг и lookalike аудитории"
    ],
    gradient: "from-blue-600 to-blue-800"
  },
  {
    id: 8,
    icon: TrendingUp,
    title: "Tg Ads",
    description: "Реклама в Telegram Ads для эффективного продвижения в мессенджере",
    features: [
      "Настройка рекламных кампаний",
      "Таргетинг по интересам и поведению",
      "Креативы для Telegram аудитории",
      "Аналитика и оптимизация ROI"
    ],
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    id: 9,
    icon: Users,
    title: "Медиа реклама",
    description: "Реклама через блогеров, телеграм-каналы и другие медиа для максимального охвата",
    features: [
      "Подбор блогеров и ТГК",
      "Создание рекламных интеграций",
      "Контроль размещений",
      "Аналитика эффективности"
    ],
    gradient: "from-pink-500 to-rose-500"
  }
]

export function ServicesOverviewSection() {
  return (
    <section className="relative py-20 md:py-32 px-4 md:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />
      <div className="absolute top-1/4 left-1/3 w-96 md:w-[600px] h-96 md:h-[600px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-[120px] animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/3 w-80 md:w-[500px] h-80 md:h-[500px] bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-full blur-[140px] animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <ScrollFade>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 text-white">
              Услуги, которые мы{" "}
              <AnimatedUnderline gradientFrom="emerald-400" gradientTo="cyan-400">
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">предоставляем</span>
              </AnimatedUnderline>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              Полный спектр digital-услуг для развития вашего бизнеса в интернете
            </p>
          </div>
        </ScrollFade>

        {/* Services by categories */}
        <div className="space-y-16 md:space-y-20">
          {/* Разработка */}
          <ScrollFade delay={100}>
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 md:mb-12 text-left px-4 md:px-0">
                Разработка
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {services.filter(service => [1, 2, 3].includes(service.id)).map((service, index) => {
                  const IconComponent = service.icon
                  return (
                    <ScrollFade key={service.id} delay={100 + index * 50}>
                      <div className="group relative h-[550px] md:h-[600px]">
                        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] p-6 md:p-8 h-full flex flex-col">
                          {/* Icon with gradient background */}
                          <div className={`inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-r ${service.gradient} bg-opacity-20 group-hover:scale-110 transition-transform duration-300 w-fit`}>
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>

                          {/* Title */}
                          <h4 className="text-lg md:text-xl font-bold text-white mb-4 group-hover:text-white transition-colors duration-300">
                            {service.title}
                          </h4>

                          {/* Description */}
                          <p className="text-sm md:text-base text-gray-400 mb-6 leading-relaxed flex-grow">
                            {service.description}
                          </p>

                          {/* Features list - прижат к низу */}
                          <div className="mt-auto">
                            <ul className="space-y-2 text-xs md:text-sm text-gray-500">
                              {service.features.slice(0, 3).map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mt-2 flex-shrink-0`} />
                                  <span className="leading-tight break-words hyphens-auto">{feature}</span>
                                </li>
                              ))}
                              {service.features.length > 3 && (
                                <li className="flex items-start gap-2 text-gray-600">
                                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mt-2 flex-shrink-0`} />
                                  <span className="leading-tight">и многое другое...</span>
                                </li>
                              )}
                            </ul>
                          </div>

                          {/* Hover overlay */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl md:rounded-3xl`} />
                        </div>
                      </div>
                    </ScrollFade>
                  )
                })}
              </div>
            </div>
          </ScrollFade>

          {/* Дизайн */}
          <ScrollFade delay={150}>
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 md:mb-12 text-left px-4 md:px-0">
                Дизайн
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {services.filter(service => [4].includes(service.id)).map((service, index) => {
                  const IconComponent = service.icon
                  return (
                    <ScrollFade key={service.id} delay={150 + index * 50}>
                      <div className="group relative h-[550px] md:h-[600px]">
                        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] p-6 md:p-8 h-full flex flex-col">
                          {/* Icon with gradient background */}
                          <div className={`inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-r ${service.gradient} bg-opacity-20 group-hover:scale-110 transition-transform duration-300 w-fit`}>
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>

                          {/* Title */}
                          <h4 className="text-lg md:text-xl font-bold text-white mb-4 group-hover:text-white transition-colors duration-300">
                            {service.title}
                          </h4>

                          {/* Description */}
                          <p className="text-sm md:text-base text-gray-400 mb-6 leading-relaxed flex-grow">
                            {service.description}
                          </p>

                          {/* Features list - прижат к низу */}
                          <div className="mt-auto">
                            <ul className="space-y-2 text-xs md:text-sm text-gray-500">
                              {service.features.slice(0, 3).map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mt-2 flex-shrink-0`} />
                                  <span className="leading-tight break-words hyphens-auto">{feature}</span>
                                </li>
                              ))}
                              {service.features.length > 3 && (
                                <li className="flex items-start gap-2 text-gray-600">
                                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mt-2 flex-shrink-0`} />
                                  <span className="leading-tight">и многое другое...</span>
                                </li>
                              )}
                            </ul>
                          </div>

                          {/* Hover overlay */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl md:rounded-3xl`} />
                        </div>
                      </div>
                    </ScrollFade>
                  )
                })}
              </div>
            </div>
          </ScrollFade>

          {/* Маркетинг */}
          <ScrollFade delay={200}>
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 md:mb-12 text-left px-4 md:px-0">
                Маркетинг
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {services.filter(service => [5, 6, 7, 8, 9].includes(service.id)).map((service, index) => {
                  const IconComponent = service.icon
                  return (
                    <ScrollFade key={service.id} delay={200 + index * 50}>
                      <div className="group relative h-[550px] md:h-[600px]">
                        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] p-6 md:p-8 h-full flex flex-col">
                          {/* Icon with gradient background */}
                          <div className={`inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-r ${service.gradient} bg-opacity-20 group-hover:scale-110 transition-transform duration-300 w-fit`}>
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>

                          {/* Title */}
                          <h4 className="text-lg md:text-xl font-bold text-white mb-4 group-hover:text-white transition-colors duration-300">
                            {service.title}
                          </h4>

                          {/* Description */}
                          <p className="text-sm md:text-base text-gray-400 mb-6 leading-relaxed flex-grow">
                            {service.description}
                          </p>

                          {/* Features list - прижат к низу */}
                          <div className="mt-auto">
                            <ul className="space-y-2 text-xs md:text-sm text-gray-500">
                              {service.features.slice(0, 3).map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mt-2 flex-shrink-0`} />
                                  <span className="leading-tight break-words hyphens-auto">{feature}</span>
                                </li>
                              ))}
                              {service.features.length > 3 && (
                                <li className="flex items-start gap-2 text-gray-600">
                                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mt-2 flex-shrink-0`} />
                                  <span className="leading-tight">и многое другое...</span>
                                </li>
                              )}
                            </ul>
                          </div>

                          {/* Hover overlay */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl md:rounded-3xl`} />
                        </div>
                      </div>
                    </ScrollFade>
                  )
                })}
              </div>
            </div>
          </ScrollFade>
        </div>

        {/* Call to action */}
        <ScrollFade delay={200}>
          <div className="text-center mt-16 md:mt-20 px-4">
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Готовы начать проект?
              </h3>
              <p className="text-base md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                Обсудим ваши задачи и подберем оптимальное решение для развития бизнеса
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="w-full sm:w-auto max-w-md mx-auto sm:mx-0 px-6 sm:px-8 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-white to-gray-200 text-black font-bold shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:shadow-[0_0_50px_rgba(255,255,255,0.9)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer text-sm sm:text-base flex items-center justify-center gap-2 sm:gap-3 min-h-[60px] sm:min-h-[64px] touch-manipulation"
                  onClick={() => window.open('https://t.me/M_Studio10', '_blank')}
                >
                  Получить консультацию
                </button>
                <button
                  className="px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300 cursor-pointer"
                  onClick={() => window.open('https://t.me/mnshkv_cases', '_blank')}
                >
                  Посмотреть кейсы
                </button>
              </div>
            </div>
          </div>
        </ScrollFade>
      </div>
    </section>
  )
}