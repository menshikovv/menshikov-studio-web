"use client"

import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ScrollFade } from "@/components/scroll-fade"
import { useState } from "react"
import { X } from "lucide-react"

const testimonials = [
  { id: 1, photo: "https://i.imgur.com/oASsSLO.png" },
  { id: 2, photo: "https://i.imgur.com/H5h94v5.png" },
  { id: 3, photo: "https://i.imgur.com/U9pjBpK.png" },
  { id: 4, photo: "https://i.imgur.com/EVA4kRV.png" }
]

export function TestimonialsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const openFullscreen = (imageSrc: string) => {
    setSelectedImage(imageSrc)
  }

  const closeFullscreen = () => {
    setSelectedImage(null)
  }

  return (
    <>
      <section className="relative py-20 md:py-32 px-4 md:px-8">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-white/5 to-black" />

        <div
          className="absolute top-1/3 left-1/4 w-72 md:w-[450px] h-72 md:h-[450px] bg-white/20 rounded-full blur-[120px] animate-pulse"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-80 md:w-[500px] h-80 md:h-[500px] bg-white/15 rounded-full blur-[140px] animate-pulse"
          style={{ animationDelay: "1s", animationDuration: "4s" }}
        />

        {/* Decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-white/10 rounded-full blur-[150px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section header */}
          <ScrollFade>
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 text-white">
                Отзывы{" "}
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">клиентов</span>
              </h2>
            </div>
          </ScrollFade>

          {/* Carousel */}
          <ScrollFade delay={50}>
            <div className="relative px-4 md:px-16">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-4 md:-ml-6">
                  {testimonials.map((testimonial) => (
                    <CarouselItem key={testimonial.id} className="pl-4 md:pl-6 basis-full md:basis-1/2 lg:basis-1/3">
                      <div className="group">
                        {/* Glass card with single image */}
                        <div 
                          className="relative h-full rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] overflow-hidden cursor-pointer"
                          onClick={() => openFullscreen(testimonial.photo)}
                        >
                          <div className="relative w-full aspect-[4/5] md:aspect-[3/4] bg-gradient-to-br from-white/10 to-white/5">
                            {/* Blurred background */}
                            <Image
                              src={testimonial.photo || "/placeholder.svg"}
                              alt={`${testimonial.id} background`}
                              fill
                              className="object-cover blur-md scale-110"
                            />
                            {/* Main image centered */}
                            <div className="absolute inset-0 flex items-center justify-center p-4">
                              <Image
                                src={testimonial.photo || "/placeholder.svg"}
                                alt={`Отзыв ${testimonial.id}`}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-auto h-auto max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                              />
                            </div>
                            {/* Photo overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                            
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <div className="text-white text-sm font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                                Нажмите для увеличения
                              </div>
                            </div>
                          </div>

                          {/* Glow effect */}
                          <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br from-white/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className={`flex left-0 md:-left-12 bg-black/60 backdrop-blur-sm border-white/20 text-white hover:bg-white/80 hover:border-white/50 hover:text-black transition-all w-10 h-10 md:w-12 md:h-12 ${testimonials.length <= 3 ? 'hidden' : ''}`} />
                <CarouselNext className={`flex right-0 md:-right-12 bg-black/60 backdrop-blur-sm border-white/20 text-white hover:bg-white/80 hover:border-white/50 hover:text-black transition-all w-10 h-10 md:w-12 md:h-12 ${testimonials.length <= 3 ? 'hidden' : ''}`} />
              </Carousel>
            </div>
          </ScrollFade>

          {/* Bottom CTA */}
          <ScrollFade delay={100}>
            <div className="text-center mt-12 md:mt-16 px-4">
              <a
                href='https://t.me/mnshkv_reviews'
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 md:px-8 py-3 md:py-4 rounded-full bg-gradient-to-r from-white to-gray-200 text-black font-semibold hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transition-all duration-300 hover:scale-105"
              >
                Все отзывы
              </a>
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {selectedImage && (
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
                src={selectedImage}
                alt="Отзыв в полном размере"
                fill
                className="object-contain rounded-lg"
                quality={100}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}