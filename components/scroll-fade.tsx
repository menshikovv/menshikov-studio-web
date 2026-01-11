"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface ScrollFadeProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function ScrollFade({ children, className = "", delay = 0 }: ScrollFadeProps) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current

    // Определяем, мобильное ли устройство
    const isMobile = window.innerWidth < 768

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true)
            }, delay)
          }
        })
      },
      { 
        threshold: isMobile ? 0.05 : 0.1, // Меньший порог для мобилки
        rootMargin: isMobile ? "50px 0px" : "20px 0px" // Больший отступ для мобилки
      },
    )

    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [delay])

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-500 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} ${className}`}
    >
      {children}
    </div>
  )
}
