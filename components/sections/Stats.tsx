'use client'
import { useEffect, useRef, useState } from 'react'
import AnimateIn from '@/components/ui/AnimateIn'

// @lpg-hint: Stats work best when they tell a progression story.
// Order them: volume → quality → speed → scale.
// "12B+ transactions" then "99.9% accuracy" then "<100ms latency" tells a better
// story than four unrelated numbers. Make each stat answer a buyer question.
const stats = [
  { value: 12000, suffix: 'B+', label: 'Transactions Processed', prefix: '' },
  { value: 99.9,  suffix: '%',  label: 'Platform Uptime',        prefix: '' },
  { value: 47,    suffix: '%',  label: 'Faster Than Alternatives',prefix: '' },
  { value: 180,   suffix: '+',  label: 'Countries Served',        prefix: '' },
]

// IMPORTANT: CountUp is the ONLY number rendered. Never add a static copy of
// the same number as a background element — it creates visible duplicates.
function CountUp({ target, suffix, prefix }: { target: number; suffix: string; prefix: string }) {
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
      {/* Dot grid texture for section background variation */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Center ambient glow */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[500px] h-[300px] rounded-full bg-brand-500/8 blur-[120px]
                   pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* @lpg-hint: The section label here is intentionally minimal —
            let the numbers speak. You can add a small heading if the stats
            need context, e.g. "Numbers That Define Us" or "The Scale We Operate At". */}
        <AnimateIn className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-content-muted">
            Our Impact
          </p>
        </AnimateIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 100}>
              <div className="group relative rounded-card-lg border border-surface-border/30
                              bg-surface-raised p-8 text-center overflow-hidden
                              hover:border-brand-500/30 hover:shadow-card-lg
                              transition-all duration-300">
                {/* Top accent line */}
                <div className="absolute top-0 inset-x-0 h-px
                                bg-gradient-to-r from-transparent via-brand-500/40 to-transparent
                                group-hover:via-brand-500/80 transition-all duration-500" />

                {/* CountUp value — min-h prevents layout shift during animation */}
                <div className="font-heading font-black text-display-md text-brand-500
                                mb-2 min-h-[3.5rem] flex items-center justify-center">
                  <CountUp target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                </div>
                <div className="text-xs text-content-muted uppercase tracking-wider leading-snug">
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
