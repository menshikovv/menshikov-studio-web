"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, MessageCircle } from "lucide-react"
import { ScrollFade } from "@/components/scroll-fade"

export function CTASection() {
  return (
    <section id="cta-section" className="relative py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollFade>
          <div className="glass-effect p-12 md:p-16 rounded-3xl text-center relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-[100px]" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white glow-text mb-6">Готовы начать проект?</h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                Свяжитесь с нами сегодня, и мы обсудим, как воплотить вашу идею в жизнь. Бесплатная консультация и
                оценка проекта.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-white hover:text-black text-lg px-8 py-6 rounded-full font-semibold group transition-all duration-300 cursor-pointer"
                  onClick={() => window.open('https://t.me/menshikovv1', '_blank')}
                >
                  <Mail className="mr-2 w-5 h-5" />
                  Написать нам
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="glass-effect border-white/20 text-white text-lg px-8 py-6 rounded-full font-semibold bg-transparent cursor-pointer hover:text-white hover:bg-transparent hover:border-white/20"
                  onClick={() => window.open('https://t.me/mnshkv_studio', '_blank')}
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Telegram канал
                </Button>
              </div>
            </div>
          </div>
        </ScrollFade>
      </div>
    </section>
  )
}
