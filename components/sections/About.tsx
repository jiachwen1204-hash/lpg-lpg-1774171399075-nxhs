import AnimateIn from '@/components/ui/AnimateIn'
import { CheckCircle, Cpu, Shield, Zap, BarChart3 } from 'lucide-react'

const CONTENT = {
  label:   'About AI Money',
  heading: 'Intelligence Meets\nFinancial Innovation',
  body: [
    'AI Money was founded on a singular vision: to democratize access to intelligent financial services. By combining cutting-edge artificial intelligence with deep financial expertise, we transform complex financial processes into seamless digital experiences.',
    'Our platform empowers individuals and businesses to make smarter decisions — from automated budgeting and investment recommendations to fraud detection and risk assessment — all powered by real-time data processing and predictive analytics.',
  ],
  values: [
    'Intelligent automation that eliminates manual financial complexity',
    'Predictive analytics delivering actionable insights in real-time',
    'Enterprise-grade security with user-friendly accessibility',
    'Personalized financial intelligence adapted to your unique needs',
  ],
  cta: { label: 'Get Started Now', href: '#contact' },
}

const FLOAT_STATS = [
  { icon: BarChart3, value: '99.7%', label: 'Analysis accuracy rate',    color: 'text-brand-500' },
  { icon: Zap,       value: '3.2s',  label: 'Avg. processing time',     color: 'text-brand-500' },
  { icon: Shield,     value: '89%',   label: 'Risk reduction achieved',  color: 'text-brand-500' },
  { icon: Cpu,       value: '50ms',  label: 'Real-time latency',        color: 'text-brand-500' },
]

const STATS = [
  { value: '10k+', label: 'Active Users Worldwide' },
  { value: '$500M+', label: 'Transactions Processed'  },
  { value: '99.9%', label: 'Platform Uptime'          },
  { value: '180+',  label: 'Countries Served'        },
]

export default function About() {
  return (
    <section id="about" className="py-section bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">

          {/* ── Left: Visual panel ─────────────────────────────────────── */}
          <AnimateIn direction="left">
            <div className="relative">
              {/* Main panel */}
              <div className="relative rounded-2xl border border-surface-border/40 bg-surface-raised
                              shadow-card p-8 min-h-[380px] flex flex-col justify-center">
                {/* Background gradient accent */}
                <div aria-hidden
                     className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-500/[0.03] to-transparent pointer-events-none" />
                {/* Central brand mark */}
                <div className="text-center">
                  <img
                    src="https://u5ft5besqtymo1lf.public.blob.vercel-storage.com/logos/1774171397790-relax.png"
                    alt="AI Money logo"
                    className="h-16 w-auto object-contain mx-auto mb-4"
                  />
                  <p className="text-sm text-content-muted">AI-Powered Financial Intelligence</p>
                  <p className="text-xs text-content-muted mt-1">B5-1-3, Forest Green Condominium<br />Bandar Sungai Long, Malaysia</p>
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
                    <div className="rounded-xl border border-surface-border/40 bg-surface-raised
                                    backdrop-blur-md p-3 flex items-center gap-2.5 shadow-card-lg
                                    min-w-[150px]">
                      <div className="w-8 h-8 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0">
                        <s.icon className={`w-4 h-4 ${s.color}`} />
                      </div>
                      <div>
                        <div className={`text-sm font-semibold ${s.color} leading-none`}>{s.value}</div>
                        <div className="text-xs text-content-muted mt-0.5">{s.label}</div>
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
            <h2 className="font-heading font-bold text-display-lg text-content-primary
                           leading-tight tracking-[-0.025em] mb-6 whitespace-pre-line">
              {CONTENT.heading}
            </h2>
            {CONTENT.body.map((p, i) => (
              <p key={i} className="text-content-secondary leading-relaxed mb-4 max-w-2xl">
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
              <div className="absolute inset-0 bg-brand-500/25 blur-xl rounded-md
                              scale-125 pointer-events-none" />
              <a
                href={CONTENT.cta.href}
                className="relative inline-flex items-center gap-2 px-6 py-3 font-body
                           font-semibold bg-brand-500 text-content-inverse rounded-md
                           hover:bg-brand-600 hover:shadow-glow transition-all ease-expo-out"
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
                <div className="font-heading font-bold text-display-md text-brand-500 mb-1">
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