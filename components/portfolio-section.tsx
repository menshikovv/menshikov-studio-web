"use client"

import Image from "next/image"
import { Code2, Smartphone, ArrowRight } from "lucide-react"
import { useState } from "react"
import { ScrollFade } from "@/components/scroll-fade"
import { AnimatedUnderline } from "@/components/animated-underline"

const projects = [
  {
    id: 1,
    title: "Интернет-магазин премиум часов",
    description: "Полный редизайн и разработка e-commerce платформы с интеграцией платежных систем и CRM",
    category: "website",
    image: "/luxury-watch-ecommerce-website.jpg",
    link: "#",
    duration: "6 недель",
  },
  {
    id: 2,
    title: "Telegram Mini App для фитнес-клуба",
    description: "Мини-приложение для записи на тренировки, отслеживания прогресса и оплаты абонементов",
    category: "telegram",
    image: "/fitness-app-interface.png",
    link: "#",
    duration: "4 недели",
  },
  {
    id: 3,
    title: "Корпоративный портал для IT-компании",
    description: "Многофункциональный сайт с личным кабинетом, блогом и системой управления проектами",
    category: "website",
    image: "/modern-corporate-website-dashboard.jpg",
    link: "#",
    duration: "8 недель",
  },
  {
    id: 4,
    title: "Telegram бот для доставки еды",
    description: "Полнофункциональное мини-приложение с каталогом, корзиной и интеграцией с системой доставки",
    category: "telegram",
    image: "/food-delivery-app-interface.png",
    link: "#",
    duration: "5 недель",
  },
]

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<"all" | "website" | "telegram">("all")

  const filteredProjects = activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="portfolio-section" className="relative py-20 md:py-32 px-4 md:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute top-1/4 left-1/4 w-80 md:w-[500px] h-80 md:h-[500px] bg-white/20 rounded-full blur-[120px] animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 md:w-[600px] h-96 md:h-[600px] bg-white/15 rounded-full blur-[140px] animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <ScrollFade>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 text-white">
              Наши{" "}
              <AnimatedUnderline>
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">кейсы</span>
              </AnimatedUnderline>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              Проекты, которыми мы гордимся. Реальные результаты для реальных бизнесов.
            </p>
          </div>
        </ScrollFade>

        {/* Filter buttons */}
        <ScrollFade delay={100}>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mb-12 md:mb-16">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-6 md:px-8 py-3 md:py-4 rounded-2xl font-medium transition-all duration-300 text-sm md:text-base ${
                activeFilter === "all"
                  ? "bg-gradient-to-r from-white to-gray-200 text-black shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                  : "bg-white/5 backdrop-blur-xl border border-white/10 text-gray-400 hover:border-white/50 hover:text-white"
              }`}
            >
              Все проекты
            </button>
            <button
              onClick={() => setActiveFilter("website")}
              className={`px-6 md:px-8 py-3 md:py-4 rounded-2xl font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base ${
                activeFilter === "website"
                  ? "bg-gradient-to-r from-white to-gray-200 text-black shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                  : "bg-white/5 backdrop-blur-xl border border-white/10 text-gray-400 hover:border-white/50 hover:text-white"
              }`}
            >
              <Code2 className="w-4 h-4 md:w-5 md:h-5" />
              Веб-сайты
            </button>
            <button
              onClick={() => setActiveFilter("telegram")}
              className={`px-6 md:px-8 py-3 md:py-4 rounded-2xl font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base ${
                activeFilter === "telegram"
                  ? "bg-gradient-to-r from-white to-gray-200 text-black shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                  : "bg-white/5 backdrop-blur-xl border border-white/10 text-gray-400 hover:border-white/50 hover:text-white"
              }`}
            >
              <Smartphone className="w-4 h-4 md:w-5 md:h-5" />
              Telegram Mini Apps
            </button>
          </div>
        </ScrollFade>

        {/* Project grid */}
        <ScrollFade delay={200}>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="group relative h-full flex">
                {/* Glass card */}
                <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-white/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] flex flex-col w-full">
                  {/* Project image */}
                  <div className="relative h-64 md:h-80 overflow-hidden flex-shrink-0">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

                    {/* View project button on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="px-6 md:px-8 py-3 md:py-4 rounded-2xl bg-gradient-to-r from-white to-gray-200 text-black font-medium flex items-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.6)] text-sm md:text-base">
                        Смотреть проект
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Project info */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <div className="flex items-start justify-between mb-4 gap-4">
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-white transition-colors duration-300 line-clamp-2 min-h-[3.5rem] md:min-h-[4rem]">
                        {project.title}
                      </h3>
                      <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center flex-shrink-0">
                        {project.category === "website" ? (
                          <Code2 className="w-5 h-5 text-white" />
                        ) : (
                          <Smartphone className="w-5 h-5 text-white" />
                        )}
                      </div>
                    </div>

                    <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-6 leading-relaxed line-clamp-3 min-h-[4.5rem] md:min-h-[4.5rem]">
                      {project.description}
                    </p>

                    {/* Duration */}
                    <div className="mb-4 md:mb-6 pb-4 md:pb-6 border-b border-white/10">
                      <span className="text-gray-500 text-xs md:text-sm">Срок разработки: </span>
                      <span className="text-white font-medium text-xs md:text-sm">{project.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollFade>

        {/* Call to action */}
        <ScrollFade delay={300}>
          <div className="text-center mt-12 md:mt-16 px-4">
            <p className="text-base md:text-lg text-gray-400 mb-4 md:mb-6">Хотите увидеть больше наших работ?</p>
            <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-white font-medium hover:border-white/50 hover:bg-gradient-to-r hover:from-white hover:to-gray-200 hover:text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] text-sm md:text-base" onClick={() => window.open('https://t.me/menshcases', '_blank')}>
              Смотреть полное портфолио
            </button>
          </div>
        </ScrollFade>
      </div>
    </section>
  )
}
