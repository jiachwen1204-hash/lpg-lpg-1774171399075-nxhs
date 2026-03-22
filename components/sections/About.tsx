import AnimateIn from '@/components/ui/AnimateIn'
import { CheckCircle, TrendingUp, Users, Award, Globe } from 'lucide-react'

// @lpg-hint: The About section tells the "why we exist" story, not a feature list.
// Think: founding moment, mission, what makes the team uniquely qualified.
// The left visual should reinforce the brand's personality — a dashboard for SaaS,
// a portfolio grid for agencies, a process diagram for consultancies.
const CONTENT = {
  label:   'About Us',
  heading: 'Built by Practitioners,\nfor Practitioners',
  body: [
    'We started this company because we kept running into the same problem: powerful tools existed, but none of them worked the way humans actually think.',
    'We obsessed over every detail until we had something we\'d genuinely use ourselves — then opened it up to the world.',
  ],
  values: [
    'Automation-first — eliminate manual work at the root',
    'Data you can trust, presented the way you think',
    'User experience that respects your time and intelligence',
    'Enterprise security without enterprise complexity',
  ],
  cta: { label: 'Meet the Team', href: '#contact' },
}

// @lpg-hint: These floating metric cards appear on the left visual panel.
// Replace them with real company milestones or platform metrics.
// Use specific, credible numbers — "47% faster" is better than "much faster".
const FLOAT_STATS = [
  { icon: TrendingUp, value: '47%',   label: 'Average time saved',      color: 'text-green-400' },
  { icon: Users,      value: '12k+',  label: 'Active teams worldwide',   color: 'text-brand-500' },
  { icon: Award,      value: '4.9★',  label: 'G2 customer rating',       color: 'text-yellow-400' },
  { icon: Globe,      value: '99.9%', label: 'Uptime SLA',               color: 'text-brand-400' },
]

// @lpg-hint: These are the bottom stat cards. Keep them to 4 max.
// Use the most impressive, most credible numbers the company has.
const STATS = [
  { value: '12k+', label: 'Teams Using Platform' },
  { value: '$2B+', label: 'Revenue Processed'     },
  { value: '99.9%', label: 'Platform Uptime'      },
  { value: '180+', label: 'Countries Served'      },
]

export default function About() {
  return (
    <section id="about" className="py-section bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">

          {/* ── Left: Visual panel ─────────────────────────────────────── */}
          {/* @lpg-hint: This panel should feel like a window into the product or brand.
              For a design agency: a portfolio thumbnail grid. For a law firm: an awards shelf.
              For a restaurant: a signature dish image with ingredient labels floating around it. */}
          <AnimateIn direction="left">
            <div className="relative">
              {/* Main panel */}
              <div className="relative rounded-2xl border border-white/10 bg-white/[0.03]
                              backdrop-blur-sm p-8 min-h-[380px] flex flex-col justify-center">
                {/* Background brand glow */}
                <div aria-hidden
                     className="absolute inset-0 rounded-2xl bg-brand-500/5 pointer-events-none" />
                {/* Central brand mark */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl
                                  bg-brand-500/15 border border-brand-500/20 mb-4">
                    <span className="font-heading font-black text-3xl text-brand-500">A</span>
                  </div>
                  <p className="text-sm text-content-muted">Founded 2019 · San Francisco</p>
                </div>
              </div>

              {/* Floating metric chips */}
              {FLOAT_STATS.map((s, i) => {
                const positions = [
                  '-top-4 -left-4',
                  '-top-4 -right-4',
                  '-bottom-4 -left-4',
                  '-bottom-4 -right-4',
                ]
                const delays = ['0s', '1.2s', '2.4s', '3.6s']
                return (
                  <div
                    key={s.label}
                    className={`absolute ${positions[i]} animate-float`}
                    style={{ animationDelay: delays[i] }}
                  >
                    <div className="rounded-xl border border-white/10 bg-white/[0.08]
                                    backdrop-blur-md p-3 flex items-center gap-2.5 shadow-card-lg
                                    min-w-[150px]">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                        <s.icon className={`w-4 h-4 ${s.color}`} />
                      </div>
                      <div>
                        <div className={`text-sm font-bold ${s.color} leading-none`}>{s.value}</div>
                        <div className="text-xs text-white/40 mt-0.5">{s.label}</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </AnimateIn>

          {/* ── Right: Story + values ──────────────────────────────────── */}
          <AnimateIn direction="right">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest
                             text-brand-500 bg-brand-500/10 rounded-pill px-4 py-1.5 mb-4">
              {CONTENT.label}
            </span>
            <h2 className="font-heading font-black text-display-lg text-content-primary
                           leading-tight tracking-[-0.025em] mb-6 whitespace-pre-line">
              {CONTENT.heading}
            </h2>
            {CONTENT.body.map((p, i) => (
              <p key={i} className="text-content-secondary leading-relaxed mb-4">
                {p}
              </p>
            ))}

            <ul className="mt-6 space-y-3 mb-8">
              {CONTENT.values.map(v => (
                <li key={v} className="flex items-start gap-3 text-sm text-content-primary">
                  <CheckCircle className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                  <span>{v}</span>
                </li>
              ))}
            </ul>

            <div className="relative inline-flex">
              <div className="absolute inset-0 bg-brand-500/20 blur-lg rounded-card
                              scale-110 pointer-events-none" />
              <a
                href={CONTENT.cta.href}
                className="relative inline-flex items-center gap-2 px-6 py-3 font-body
                           font-semibold bg-brand-500 text-content-inverse rounded-card
                           hover:bg-brand-600 hover:shadow-glow-sm transition-all ease-expo-out"
              >
                {CONTENT.cta.label}
              </a>
            </div>
          </AnimateIn>
        </div>

        {/* ── Bottom stats row ───────────────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((s, i) => (
            <AnimateIn key={s.label} delay={i * 80}>
              <div className="relative rounded-card-lg border border-surface-border/30
                              bg-surface-raised p-6 text-center overflow-hidden group
                              hover:border-brand-500/30 transition-all duration-300">
                <div className="absolute top-0 inset-x-0 h-px
                                bg-gradient-to-r from-transparent via-brand-500/40 to-transparent
                                group-hover:via-brand-500/70 transition-all duration-500" />
                <div className="font-heading font-black text-display-md text-brand-500 mb-1">
                  {s.value}
                </div>
                <div className="text-xs text-content-muted uppercase tracking-wider">{s.label}</div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
