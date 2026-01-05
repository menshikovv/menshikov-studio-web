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
      { threshold: 0.1 },
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
      className={`transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"} ${className}`}
    >
      {children}
    </div>
  )
}
