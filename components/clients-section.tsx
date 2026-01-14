"use client"

import Image from "next/image"
import { ScrollFade } from "@/components/scroll-fade"
import { AnimatedUnderline } from "@/components/animated-underline"

const clients = [
  {
    id: 1,
    name: "Stomart",
    logo: "https://www.stomart.ru/local/templates/stomart/images/share.png?v=1768406691",
    url: "https://www.stomart.ru"
  },
  {
    id: 2,
    name: "FastBuy365",
    logo: "https://fastbuy365.by/wp-content/uploads/2025/01/logo.webp",
    url: "https://fastbuy365.by"
  },
  {
    id: 3,
    name: "Ice Face",
    logo: "https://ice-face.ru/wp-content/uploads/2022/12/cropped-favicon-270x270.jpg",
    url: "https://ice-face.ru"
  },
  {
    id: 4,
    name: "Hotel Ring",
    logo: "https://hotel-ring.ru/app/uploads/2019/04/cropped-%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-1-2-1-270x270.jpg",
    url: "https://hotel-ring.ru"
  }
]

export function ClientsSection() {
  return (
    <section className="relative py-20 md:py-32 px-4 md:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
      <div className="absolute top-1/3 right-1/4 w-96 md:w-[600px] h-96 md:h-[600px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
      <div
        className="absolute bottom-1/3 left-1/4 w-80 md:w-[500px] h-80 md:h-[500px] bg-purple-500/10 rounded-full blur-[140px] animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <ScrollFade>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 text-white">
              Наши{" "}
              <AnimatedUnderline gradientFrom="blue-400" gradientTo="purple-400">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">клиенты</span>
              </AnimatedUnderline>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              по СЕО, директу и маркетингу
            </p>
          </div>
        </ScrollFade>

        {/* Clients grid */}
        <ScrollFade delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {clients.map((client, index) => (
              <ScrollFade key={client.id} delay={100 + index * 50}>
                <a
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] p-6 md:p-8 aspect-square flex items-center justify-center">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={client.logo}
                        alt={`${client.name} logo`}
                        width={120}
                        height={120}
                        className="w-auto h-auto max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                      />
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl md:rounded-3xl" />
                  </div>
                  
                  {/* Client name - visible on hover */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-black/80 backdrop-blur-md rounded-lg px-3 py-1 text-white text-sm font-medium whitespace-nowrap">
                      {client.name}
                    </div>
                  </div>
                </a>
              </ScrollFade>
            ))}
          </div>
        </ScrollFade>

        {/* Stats */}
        <ScrollFade delay={200}>
          <div className="mt-16 md:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-400 text-sm md:text-base">Довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">200%</div>
                <div className="text-gray-400 text-sm md:text-base">Средний рост трафика</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400 text-sm md:text-base">Поддержка клиентов</div>
              </div>
            </div>
          </div>
        </ScrollFade>
      </div>
    </section>
  )
}