'use client'
import { useState } from 'react'
import AnimateIn from '@/components/ui/AnimateIn'

// @lpg: Replace all CONTENT values with real company-specific copy
const CONTENT = {
  badge:     'Now in public beta',
  headline:  'Ship faster with',
  highlight: 'AI-powered tools',
  subline:   'The developer platform that eliminates boilerplate. Build, test, and deploy at the speed of thought.',
  cta:       { label: 'Start for free',    href: '#contact' },
  secondary: { label: 'View docs',         href: '#services' },
  features:  ['No credit card', 'Free tier forever', 'SOC 2 compliant'],
  stats: [
    { value: '50k+',   label: 'Developers' },
    { value: '99.9%',  label: 'Uptime SLA' },
    { value: '<50ms',  label: 'Avg latency' },
  ],
  // @lpg: Replace with a realistic UI mockup or dashboard data relevant to this product
  mockupLines: [
    { type: 'comment', text: '// Initialising AI pipeline...' },
    { type: 'code',    text: 'const result = await ai.run({' },
    { type: 'code',    text: '  model: "turbo-v2",' },
    { type: 'code',    text: '  input: userQuery,' },
    { type: 'code',    text: '  stream: true' },
    { type: 'code',    text: '})' },
    { type: 'success', text: '✓ Deployed in 1.2s' },
  ],
}

export default function Hero() {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-surface pt-nav"
    >
      {/* Ambient glow system */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-brand-500/10 blur-[180px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/8 blur-[140px]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(var(--content-primary) 1px, transparent 1px), linear-gradient(90deg, var(--content-primary) 1px, transparent 1px)', backgroundSize: '64px 64px' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-section w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <div>
            <AnimateIn delay={0}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-pill border border-brand-500/30 bg-brand-500/8 text-xs font-body text-brand-500 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
                {CONTENT.badge}
              </div>
            </AnimateIn>

            <AnimateIn delay={80}>
              <h1 className="font-heading font-black text-display-xl md:text-display-2xl text-content-primary leading-tight mb-6">
                {CONTENT.headline}{' '}
                <span className="bg-gradient-to-r from-brand-500 via-accent to-brand-300 bg-clip-text text-transparent">
                  {CONTENT.highlight}
                </span>
              </h1>
            </AnimateIn>

            <AnimateIn delay={160}>
              <p className="text-lg text-content-secondary mb-8 leading-relaxed max-w-lg">
                {CONTENT.subline}
              </p>
            </AnimateIn>

            <AnimateIn delay={240}>
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <a
                  href={CONTENT.cta.href}
                  className="px-8 py-4 font-body font-medium bg-brand-500 text-content-inverse rounded-pill hover:bg-brand-700 hover:shadow-glow transition-all ease-expo-out active:scale-[0.97]"
                >
                  {CONTENT.cta.label}
                </a>
                <a
                  href={CONTENT.secondary.href}
                  className="px-8 py-4 font-body font-medium border border-surface-border text-content-muted rounded-pill hover:border-brand-500 hover:text-brand-500 transition-all ease-expo-out"
                >
                  {CONTENT.secondary.label}
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                {CONTENT.features.map(f => (
                  <span key={f} className="flex items-center gap-1.5 text-sm text-content-muted">
                    <span className="text-brand-500">✓</span> {f}
                  </span>
                ))}
              </div>
            </AnimateIn>

            {/* Stats row */}
            <AnimateIn delay={320}>
              <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-surface-border">
                {CONTENT.stats.map(s => (
                  <div key={s.label}>
                    <div className="font-heading font-black text-display-sm text-brand-500">{s.value}</div>
                    <div className="text-xs text-content-muted uppercase tracking-widest mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>

          {/* Right — code/dashboard mockup */}
          <AnimateIn delay={120} className="hidden lg:block">
            <div className="relative">
              {/* Glow behind card */}
              <div className="absolute -inset-4 bg-brand-500/10 blur-[60px] rounded-card-lg" />
              <div className="relative rounded-card-lg border border-surface-border bg-surface-raised shadow-card-xl overflow-hidden">
                {/* Window chrome */}
                <div className="flex items-center gap-2 px-5 py-4 border-b border-surface-border bg-surface">
                  <span className="w-3 h-3 rounded-full bg-red-500/60" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <span className="w-3 h-3 rounded-full bg-green-500/60" />
                  <span className="ml-4 text-xs font-mono text-content-muted">terminal</span>
                  <button
                    onClick={handleCopy}
                    className="ml-auto text-xs font-mono text-content-muted hover:text-brand-500 transition-colors"
                  >
                    {copied ? 'copied!' : 'copy'}
                  </button>
                </div>
                {/* Code lines */}
                <div className="p-6 font-mono text-sm space-y-2">
                  {CONTENT.mockupLines.map((line, i) => (
                    <div
                      key={i}
                      className={
                        line.type === 'comment' ? 'text-content-muted' :
                        line.type === 'success'  ? 'text-green-400 font-medium mt-4' :
                        'text-content-primary'
                      }
                    >
                      {line.text}
                    </div>
                  ))}
                  {/* Blinking cursor */}
                  <div className="flex items-center gap-0 text-brand-500">
                    <span>$</span>
                    <span className="ml-2 w-2 h-4 bg-brand-500 animate-pulse" />
                  </div>
                </div>
              </div>
              {/* Floating status badge */}
              <div className="absolute -bottom-4 -right-4 flex items-center gap-2 px-4 py-2 rounded-pill border border-surface-border bg-surface-raised shadow-card-lg animate-float">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-body text-content-primary font-medium">All systems operational</span>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
