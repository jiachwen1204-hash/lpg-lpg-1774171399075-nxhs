'use client'
import { useEffect, useRef, useState } from 'react'
import AnimateIn from '@/components/ui/AnimateIn'

interface StatItem {
  value: number
  suffix: string
  label: string
  prefix?: string
}

const stats: StatItem[] = [
  { value: 2.4, suffix: 'B+', label: 'Transaction Value Managed', prefix: '$' },
  { value: 99.7, suffix: '%', label: 'Prediction Accuracy' },
  { value: 340, suffix: '%', label: 'Average ROI Increase' },
  { value: 50, suffix: 'K+', label: 'Active Users', prefix: '' },
]

function CountUp({ target, suffix, prefix = '' }: { target: number; suffix: string; prefix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.unobserve(el)
        const duration = 1800
        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          const current = target < 100
            ? Math.round(eased * target * 10) / 10
            : Math.round(eased * target)
          setCount(current)
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="py-section bg-surface relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[700px] h-[400px] rounded-full bg-brand-500/6 blur-[140px]
                   pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <AnimateIn className="text-center mb-16">
          <span className="inline-block bg-brand-500/10 text-brand-500 rounded-md
                           px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-5">
            By the Numbers
          </span>
          <h2 className="font-heading font-bold text-display-lg text-content-primary tracking-tight">
            Performance That Speaks for Itself
          </h2>
          <p className="mt-4 text-content-secondary max-w-2xl mx-auto leading-relaxed">
            AI Money&apos;s intelligent platform delivers measurable results across every dimension of financial management.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 100}>
              <div className="group relative rounded-card-lg bg-surface-raised p-8 text-center
                              shadow-card border border-surface-border/40
                              hover:shadow-card-lg hover:border-brand-500/40
                              transition-all duration-500 ease-out">
                <div className="absolute top-0 inset-x-0 h-px
                                bg-gradient-to-r from-transparent via-brand-500/30 to-transparent
                                group-hover:via-brand-500/60 group-hover:h-[2px]
                                transition-all duration-500" />

                <div className="font-heading font-bold text-display-md text-brand-500
                                mb-3 min-h-[3.5rem] flex items-center justify-center
                                group-hover:scale-105 transition-transform duration-300">
                  <CountUp target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                </div>
                <div className="text-sm text-content-secondary font-medium leading-relaxed">
                  {stat.label}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}