"use client"

import { ScrollFade } from "@/components/scroll-fade"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "Почему так быстро? Не пострадает ли качество?",
    answer: "Мы используем готовые проверенные шаблоны и компоненты, которые адаптируем под ваш бизнес. Это позволяет сохранить высокое качество при быстрой разработке. У нас есть библиотека из 50+ готовых решений."
  },
  {
    question: "Что если мне не понравится результат?",
    answer: "Мы даем 100% гарантию качества. Если результат не устроит — переделаем бесплатно или вернем деньги. Также предоставляем 3 бесплатные правки в течение 30 дней."
  },
  {
    question: "Сколько стоит поддержка после запуска?",
    answer: "Первые 30 дней поддержка абсолютно бесплатна. Далее — от 1000₽/месяц за техническую поддержку или разовые правки по 500₽ за задачу."
  },
  {
    question: "Можете ли вы интегрировать с моей CRM/платежной системой?",
    answer: "Да, мы интегрируем с любыми популярными системами: AmoCRM, Bitrix24, ЮKassa, Сбербанк, Stripe, PayPal и другими. Стоимость интеграции — от 2000₽."
  },
  {
    question: "А если у меня очень специфичный бизнес?",
    answer: "Мы работали с 50+ различными нишами: от стоматологии до криптовалют. Если у нас нет готового решения — создадим индивидуальное за 3-7 дней."
  },
  {
    question: "Как происходит оплата?",
    answer: "50% предоплата для старта работ, 50% после сдачи проекта. Принимаем оплату картой, переводом на карту, через СБП или криптовалютой."
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative py-20 md:py-32 px-4 md:px-8">
      <div className="absolute top-1/4 left-1/4 w-80 md:w-[500px] h-80 md:h-[500px] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 md:w-[600px] h-96 md:h-[600px] bg-cyan-500/10 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="max-w-4xl mx-auto">
        <ScrollFade>
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white glow-text mb-6">
              Частые вопросы
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
              Отвечаем на самые популярные вопросы наших клиентов
            </p>
          </div>
        </ScrollFade>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollFade key={index} delay={index * 50}>
              <div className="glass-effect rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 md:p-8 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-white" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-white" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 md:px-8 pb-6 md:pb-8 animate-in slide-in-from-top-2 duration-300">
                    <p className="text-white/70 text-base md:text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            </ScrollFade>
          ))}
        </div>
      </div>
    </section>
  )
}