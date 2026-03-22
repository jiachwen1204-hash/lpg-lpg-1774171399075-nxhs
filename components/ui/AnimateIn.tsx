'use client'
import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface AnimateInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
  threshold?: number
}

export default function AnimateIn({
  children,
  className,
  delay = 0,
  direction = 'up',
  threshold = 0.12,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const t = setTimeout(() => setVisible(true), delay)
          observer.unobserve(el)
          return () => clearTimeout(t)
        }
      },
      { threshold },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, threshold])

  const hidden: Record<string, string> = {
    up:    'opacity-0 translate-y-8',
    down:  'opacity-0 -translate-y-8',
    left:  'opacity-0 translate-x-8',
    right: 'opacity-0 -translate-x-8',
    fade:  'opacity-0',
  }

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out will-change-transform',
        visible ? 'opacity-100 translate-x-0 translate-y-0' : hidden[direction],
        className,
      )}
    >
      {children}
    </div>
  )
}
