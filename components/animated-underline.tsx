"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface AnimatedUnderlineProps {
  children: React.ReactNode
}

export function AnimatedUnderline({ children }: AnimatedUnderlineProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const element = ref.current

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.5,
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
  }, [])

  return (
    <span ref={ref} className="relative inline-block">
      {children}
      <span
        className={`absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-white to-gray-300 rounded-full transition-all duration-[1800ms] ease-out ${
          isVisible ? "w-full" : "w-0"
        }`}
      />
    </span>
  )
}
