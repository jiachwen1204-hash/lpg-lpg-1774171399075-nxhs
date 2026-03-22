'use client'
import { useEffect, useState } from 'react'
import AnimateIn from '@/components/ui/AnimateIn'
import { ArrowRight, TrendingUp, Users, Zap } from 'lucide-react'

// @lpg-hint: This is a tech/SaaS-style hero with a dashboard mockup on the right.
// For a services business, swap the right column for a testimonial card or process diagram.
// For a product company, show the product UI. The left/right split is a strong pattern —
// but you could also do a full-width centered hero for a more editorial feel.
const CONTENT = {
  badge:     'Now in public beta',
  headline:  'Build Faster.',
  highlight: 'Ship Smarter.',
  subline:   'The platform that turns your ideas into production-ready products — without the overhead.',
  cta:       { label: 'Get Started Free', href: '#contact' },
  secondary: { label: 'See How It Works', href: '#services' },
  proof:     [
    { value: '10k+',  label: 'Teams' },
    { value: '99.9%', label: 'Uptime' },
    { value: '<100ms',label: 'Latency' },
  ],
}

// @lpg-hint: The right-column mockup should reflect the company's actual product or service.
// A fintech company could show a transaction dashboard; a logistics company a tracking map;
// a consulting firm a project timeline. Make it feel real and industry-specific.
const MOCK_METRICS = [
  { label: 'Active Users',   value: '12,483', delta: '+18%',   color: 'text-green-400'  },
  { label: 'Revenue Today',  value: '$48.2K', delta: '+$4.1K', color: 'text-green-400'  },
  { label: 'Avg. Response',  value: '94ms',   delta: '−12ms',  color: 'text-brand-500'  },
]

export default function Hero() {
  const [pulse, setPulse] = useState(false)
  useEffect(() => {
    const t = setInterval(() => setPulse(p => !p), 2000)
    return () => clearInterval(t)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-surface pt-nav"
    >
      {/* ── Background depth layers ─────────────────────────────────────── */}
      {/* Primary glow orb — brand color always */}
      <div
        aria-hidden
        className="absolute top-[-10%] left-[-5%] w-[700px] h-[700px] rounded-full
                   bg-brand-500/10 blur-[200px] animate-pulse-glow pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute bottom-[-15%] right-[-5%] w-[600px] h-[600px] rounded-full
                   bg-brand-700/8 blur-[180px] pointer-events-none"
      />
      {/* Dot grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 90% 80% at 50% 50%, black, transparent)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-section-lg w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Content ───────────────────────────────────────────── */}
          <div>
            <AnimateIn delay={0}>
              <div className="inline-flex items-center gap-2 bg-brand-500/10 text-brand-500
                              rounded-pill px-4 py-1.5 text-xs font-medium uppercase tracking-widest mb-8">
                <span className={`w-2 h-2 rounded-full bg-brand-500 transition-opacity duration-700 ${pulse ? 'opacity-100' : 'opacity-30'}`} />
                {CONTENT.badge}
              </div>
            </AnimateIn>

            <AnimateIn delay={80}>
              <h1 className="font-heading font-black text-[clamp(3.2rem,6.5vw,6rem)]
                             leading-[0.92] tracking-[-0.04em] text-content-primary mb-2">
                {CONTENT.headline}
              </h1>
              <h1 className="font-heading font-black text-[clamp(3.2rem,6.5vw,6rem)]
                             leading-[0.92] tracking-[-0.04em] mb-8">
                <span className="bg-gradient-to-r from-brand-500 to-brand-400
                                 bg-clip-text text-transparent italic">
                  {CONTENT.highlight}
                </span>
              </h1>
            </AnimateIn>

            <AnimateIn delay={160}>
              <p className="text-lg md:text-xl text-content-secondary font-light leading-relaxed
                            max-w-md mb-10">
                {CONTENT.subline}
              </p>
            </AnimateIn>

            <AnimateIn delay={240}>
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
                {/* Primary CTA with glow behind */}
                <div className="relative">
                  <div className="absolute inset-0 bg-brand-500/25 blur-xl rounded-pill
                                  scale-125 pointer-events-none" />
                  <a
                    href={CONTENT.cta.href}
                    className="relative inline-flex items-center gap-2 px-7 py-3.5 font-body
                               font-semibold bg-brand-500 text-content-inverse rounded-card
                               hover:bg-brand-600 hover:shadow-glow transition-all ease-expo-out
                               active:scale-[0.97]"
                  >
                    {CONTENT.cta.label}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                <a
                  href={CONTENT.secondary.href}
                  className="inline-flex items-center gap-2 px-7 py-3.5 font-body font-medium
                             border border-white/15 text-white/75 rounded-card
                             hover:border-white/35 hover:text-white transition-all ease-expo-out"
                >
                  {CONTENT.secondary.label}
                </a>
              </div>
            </AnimateIn>

            {/* Inline proof strip */}
            <AnimateIn delay={320}>
              <div className="flex items-center gap-8 pt-8 border-t border-white/8">
                {CONTENT.proof.map(p => (
                  <div key={p.label}>
                    <div className="font-heading font-black text-2xl text-content-primary">
                      {p.value}
                    </div>
                    <div className="text-xs text-content-muted mt-0.5 uppercase tracking-wider">
                      {p.label}
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>

          {/* ── Right: Floating UI mockup ────────────────────────────────── */}
          {/* @lpg-hint: Replace this mockup with something that reflects the company's
              actual product or core value prop. A metrics dashboard works for B2B SaaS.
              A before/after comparison works for agencies. A timeline works for services. */}
          <AnimateIn delay={200} className="hidden lg:block">
            <div className="relative">
              {/* Main dashboard card */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.04]
                              backdrop-blur-sm shadow-card-xl overflow-hidden">
                {/* Window chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8 bg-white/[0.02]">
                  <span className="w-3 h-3 rounded-full bg-red-500/60" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <span className="w-3 h-3 rounded-full bg-green-500/60" />
                  <span className="ml-4 text-xs text-white/30 font-mono">dashboard.app</span>
                </div>
                <div className="p-6">
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {MOCK_METRICS.map(m => (
                      <div
                        key={m.label}
                        className="rounded-xl bg-white/[0.04] border border-white/6 p-3"
                      >
                        <div className="text-xs text-white/40 mb-1">{m.label}</div>
                        <div className="font-heading font-bold text-white text-lg leading-none">
                          {m.value}
                        </div>
                        <div className={`text-xs mt-1 ${m.color}`}>{m.delta}</div>
                      </div>
                    ))}
                  </div>
                  {/* Fake sparkline chart */}
                  <div className="flex items-end gap-1 h-20 mb-4">
                    {[30,52,38,70,45,80,60,90,65,85,72,100].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm"
                        style={{
                          height: `${h}%`,
                          background: `linear-gradient(to top, var(--brand-700), var(--brand-500))`,
                          opacity: 0.25 + (i / 11) * 0.75,
                        }}
                      />
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/30">Last 12 months</span>
                    <span className="text-xs text-brand-500 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> +24% vs last year
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating badge — top right */}
              <div className="absolute -top-4 -right-4 animate-float">
                <div className="rounded-xl border border-white/10 bg-white/[0.08]
                                backdrop-blur-md p-3 flex items-center gap-2.5 shadow-card-lg">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Users className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">New signup</div>
                    <div className="text-xs text-white/40">just now</div>
                  </div>
                </div>
              </div>

              {/* Floating metric — bottom left */}
              <div className="absolute -bottom-4 -left-4 animate-float [animation-delay:1.8s]">
                <div className="rounded-xl border border-white/10 bg-white/[0.08]
                                backdrop-blur-md p-3 flex items-center gap-2.5 shadow-card-lg">
                  <div className="w-8 h-8 rounded-full bg-brand-500/20 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-brand-500" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">94ms avg response</div>
                    <div className="text-xs text-brand-500">↓ 12ms from last week</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  )
}
