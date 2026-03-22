import AnimateIn from '@/components/ui/AnimateIn'
import { ArrowRight, Lock, BarChart3, Zap } from 'lucide-react'

const CONTENT = {
  eyebrow: 'Start Your Financial Transformation',
  heading: 'Unlock Smarter\nFinancial Decisions',
  subtext: 'AI Money combines intelligent automation with real-time data processing to deliver personalized financial insights. Experience the future of money management — faster decisions, reduced risk, and better opportunities.',
  cta: { label: 'Get Started Now', href: '#contact' },
  secondary: { label: 'Schedule a Demo', href: '#contact' },
}

const TRUST = [
  { icon: Lock, label: 'Bank-grade 256-bit encryption' },
  { icon: BarChart3, label: 'AI-driven predictive analytics' },
  { icon: Zap, label: 'Real-time data processing' },
]

export default function CTA() {
  return (
    <section id="contact" className="py-section-lg relative overflow-hidden bg-[#0a0d14]">
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[700px] h-[700px] rounded-full bg-brand-500/15 blur-[160px]
                   animate-pulse-glow pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[400px] h-[400px] rounded-full bg-brand-500/10 blur-[80px]
                   pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <AnimateIn delay={0}>
          <span className="inline-block bg-brand-500/10 text-brand-500 rounded-pill
                           px-4 py-1.5 text-xs font-medium uppercase tracking-widest mb-6">
            {CONTENT.eyebrow}
          </span>
        </AnimateIn>

        <AnimateIn delay={80}>
          <h2 className="font-heading font-black text-display-xl text-white
                         leading-[0.95] tracking-[-0.03em] mb-6 whitespace-pre-line">
            {CONTENT.heading}
          </h2>
        </AnimateIn>

        <AnimateIn delay={160}>
          <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-xl mx-auto font-body">
            {CONTENT.subtext}
          </p>
        </AnimateIn>

        <AnimateIn delay={240}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-500/30 blur-2xl rounded-pill
                              scale-150 pointer-events-none animate-pulse-glow" />
              <a
                href={CONTENT.cta.href}
                className="relative inline-flex items-center gap-2 px-8 py-4 font-body
                           font-semibold bg-brand-500 text-white rounded-md
                           hover:bg-brand-600 hover:shadow-glow transition-all ease-expo-out
                           active:scale-[0.97] text-base"
              >
                {CONTENT.cta.label}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <a
              href={CONTENT.secondary.href}
              className="inline-flex items-center gap-2 px-8 py-4 font-body font-medium
                         border border-white/15 text-white/75 rounded-md
                         hover:border-white/35 hover:text-white transition-all ease-expo-out text-base"
            >
              {CONTENT.secondary.label}
            </a>
          </div>
        </AnimateIn>

        <AnimateIn delay={320}>
          <div className="h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent mb-8" />
          <div className="flex flex-wrap items-center justify-center gap-6">
            {TRUST.map(t => (
              <div key={t.label} className="flex items-center gap-2 text-xs text-white/50">
                <t.icon className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                {t.label}
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}