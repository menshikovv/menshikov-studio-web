"use client"

import Image from "next/image"
import { Code2, Smartphone, ArrowRight, Bot, ChevronLeft, ChevronRight, X } from "lucide-react"
import { useState } from "react"
import { ScrollFade } from "@/components/scroll-fade"
import { AnimatedUnderline } from "@/components/animated-underline"
import { projects } from "./constants/my-cases"

export function PortfolioSection() {
  // Состояние для активного фильтра
  const [activeFilter, setActiveFilter] = useState<"all" | "website" | "telegram" | "bot">("all")
  
  // Фильтрация проектов
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  // Состояние для текущего изображения каждого проекта
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({})

  // Состояние для полноэкранного просмотра
  const [fullscreenImage, setFullscreenImage] = useState<{
    projectId: number
    images: string[]
    currentIndex: number
    title: string
  } | null>(null)

  const nextImage = (projectId: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % totalImages
    }))
  }

  const prevImage = (projectId: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + totalImages) % totalImages
    }))
  }

  const openFullscreen = (project: any) => {
    setFullscreenImage({
      projectId: project.id,
      images: project.images || ["/placeholder.svg"],
      currentIndex: currentImageIndex[project.id] || 0,
      title: project.title
    })
  }

  const closeFullscreen = () => {
    setFullscreenImage(null)
  }

  const nextFullscreenImage = () => {
    if (!fullscreenImage) return
    const newIndex = (fullscreenImage.currentIndex + 1) % fullscreenImage.images.length
    setFullscreenImage(prev => prev ? { ...prev, currentIndex: newIndex } : null)
  }

  const prevFullscreenImage = () => {
    if (!fullscreenImage) return
    const newIndex = (fullscreenImage.currentIndex - 1 + fullscreenImage.images.length) % fullscreenImage.images.length
    setFullscreenImage(prev => prev ? { ...prev, currentIndex: newIndex } : null)
  }

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
            <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-4 mb-6">
              Проекты, которыми мы гордимся
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Все проекты сданы в срок</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>100% довольных клиентов</span>
              </div>
            </div>
          </div>
        </ScrollFade>

        {/* Filter tabs */}
        <ScrollFade delay={50}>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 md:mb-16 px-4">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl font-medium transition-all duration-300 text-sm md:text-base relative overflow-hidden group focus:outline-none ${
                activeFilter === "all"
                  ? "bg-gradient-to-r from-white to-gray-200 text-black shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                  : "bg-white/5 backdrop-blur-xl border border-white/10 text-gray-400 hover:border-white/30 hover:text-white hover:bg-white/10"
              }`}
            >
              <span className="relative z-10">Все проекты</span>
              {activeFilter !== "all" && (
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </button>
            
            <button
              onClick={() => setActiveFilter("website")}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base relative overflow-hidden group focus:outline-none ${
                activeFilter === "website"
                  ? "bg-gradient-to-r from-white to-gray-200 text-black shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                  : "bg-white/5 backdrop-blur-xl border border-white/10 text-gray-400 hover:border-white/30 hover:text-white hover:bg-white/10"
              }`}
            >
              <Code2 className="w-4 h-4 md:w-5 md:h-5" />
              <span className="relative z-10">Сайты</span>
              {activeFilter !== "website" && (
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </button>
            
            <button
              onClick={() => setActiveFilter("telegram")}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base relative overflow-hidden group focus:outline-none ${
                activeFilter === "telegram"
                  ? "bg-gradient-to-r from-white to-gray-200 text-black shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                  : "bg-white/5 backdrop-blur-xl border border-white/10 text-gray-400 hover:border-white/30 hover:text-white hover:bg-white/10"
              }`}
            >
              <Smartphone className="w-4 h-4 md:w-5 md:h-5" />
              <span className="relative z-10">Telegram Mini Apps</span>
              {activeFilter !== "telegram" && (
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </button>
            
            <button
              onClick={() => setActiveFilter("bot")}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base relative overflow-hidden group focus:outline-none ${
                activeFilter === "bot"
                  ? "bg-gradient-to-r from-white to-gray-200 text-black shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                  : "bg-white/5 backdrop-blur-xl border border-white/10 text-gray-400 hover:border-white/30 hover:text-white hover:bg-white/10"
              }`}
            >
              <Bot className="w-4 h-4 md:w-5 md:h-5" />
              <span className="relative z-10">Боты</span>
              {activeFilter !== "bot" && (
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </button>
          </div>
        </ScrollFade>

        {/* Project grid */}
        <ScrollFade delay={100}>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {filteredProjects.map((project, index) => (
              <ScrollFade key={project.id} delay={100 + index * 30}>
                <div className="group relative h-full flex">
                  {/* Glass card */}
                  <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-white/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] flex flex-col w-full">
                    {project.layout && (
                      <div className="absolute top-0 right-0 bg-gradient-to-br from-orange-500 to-orange-600 text-white text-sm font-bold px-4 md:px-6 py-2 md:py-3 rounded-bl-3xl z-10">
                        МАКЕТ
                      </div>
                    )}
                    {/* Project image */}
                    <div
                      className="relative h-64 md:h-80 overflow-hidden flex-shrink-0 group/image cursor-pointer"
                      onClick={() => openFullscreen(project)}
                    >
                      {/* Blurred background */}
                      <Image
                        src={project.images?.[currentImageIndex[project.id] || 0] || "/placeholder.svg"}
                        alt={`${project.title} background`}
                        fill
                        className="object-cover blur-md scale-110"
                      />
                      {/* Main image centered */}
                      <div className="absolute inset-0 flex items-start justify-center p-4">
                        <Image
                          src={project.images?.[currentImageIndex[project.id] || 0] || "/placeholder.svg"}
                          alt={project.title}
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="w-auto h-auto max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>

                      {/* Navigation arrows - only show if multiple images */}
                      {project.images && project.images.length > 1 && (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              prevImage(project.id, project.images!.length)
                            }}
                            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300 z-20"
                          >
                            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              nextImage(project.id, project.images!.length)
                            }}
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300 z-20"
                          >
                            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                          </button>

                          {/* Image counter */}
                          <div className="absolute bottom-2 right-2 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 text-white text-xs transition-opacity duration-300 z-20">
                            {(currentImageIndex[project.id] || 0) + 1} / {project.images.length}
                          </div>
                        </>
                      )}
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
                          ) : project.category === "bot" ? (
                            <Bot className="w-5 h-5 text-white" />
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

                      {/* View project button - moved here from hover overlay */}
                      <div className="mt-auto">
                        <button
                          className="w-full px-6 md:px-8 py-3 md:py-4 rounded-2xl bg-gradient-to-r from-white to-gray-200 text-black font-medium flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.6)] text-sm md:text-base hover:shadow-[0_0_40px_rgba(255,255,255,0.8)] transition-all duration-300 cursor-pointer"
                          onClick={() => window.open(project.link, '_blank')}
                        >
                          Смотреть проект
                          <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollFade>
            ))}
          </div>
        </ScrollFade>

        {/* Call to action */}
        <ScrollFade delay={150}>
          <div className="text-center mt-12 md:mt-16 px-4">
            <p className="text-base md:text-lg text-gray-400 mb-4 md:mb-6">Хотите увидеть больше наших работ?</p>
            <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-white font-medium hover:border-white/50 hover:bg-gradient-to-r hover:from-white hover:to-gray-200 hover:text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] text-sm md:text-base" onClick={() => window.open('https://t.me/menshcases', '_blank')}>
              Смотреть полное портфолио
            </button>
          </div>
        </ScrollFade>
      </div>

      {/* Fullscreen modal */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={closeFullscreen}
        >
          <div className="relative max-w-4xl max-h-full w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="relative w-full h-full max-w-3xl max-h-[90vh] animate-in zoom-in-95 duration-300">
              <Image
                src={fullscreenImage.images[fullscreenImage.currentIndex]}
                alt={`${fullscreenImage.title} - ${fullscreenImage.currentIndex + 1}`}
                fill
                className="object-contain rounded-lg"
                quality={100}
              />

              {/* Navigation arrows positioned relative to image - only show if multiple images */}
              {fullscreenImage.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      prevFullscreenImage()
                    }}
                    className="absolute -left-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300 z-60"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      nextFullscreenImage()
                    }}
                    className="absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300 z-60"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Image counter - only show if multiple images */}
            {fullscreenImage.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md rounded-full px-4 py-2 text-white text-sm">
                {fullscreenImage.currentIndex + 1} / {fullscreenImage.images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
