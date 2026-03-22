import AnimateIn from '@/components/ui/AnimateIn'
import { ArrowRight, ShieldCheck } from 'lucide-react'

// @lpg-hint: The CTA section is the final push. It should be the most visually intense
// section on the page — stronger glow, bolder headline, maximum contrast.
// The headline should answer "what happens the moment I click?" not just "why buy".
// e.g. "Start building in 5 minutes" > "Transform your business today"
const CONTENT = {
  eyebrow:   'Get Started Today',
  heading:   'Ready to Move\nFaster?',
  subtext:   'Join over 12,000 teams already using the platform. No credit card required — get full access in under 5 minutes.',
  cta:       { label: 'Start Free Trial',  href: '#contact'  },
  secondary: { label: 'Talk to Sales',     href: '#contact'  },
}

// @lpg-hint: Trust signals reduce hesitation at the decision moment.
// Use the 3 most relevant to your buyer's biggest objection:
// SaaS → security + no-lock-in + fast setup
// Agency → portfolio + process + communication
// Finance → compliance + security + track record
const TRUST = [
  { icon: ShieldCheck, label: 'SOC 2 Type II Certified'   },
  { icon: ShieldCheck, label: 'No credit card required'   },
  { icon: ShieldCheck, label: 'Cancel anytime, no lock-in'},
]

export default function CTA() {
  return (
    <section id="contact" className="py-section-lg relative overflow-hidden bg-surface">
      {/* Maximum glow intensity — this is the climax of the page */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[700px] h-[700px] rounded-full bg-brand-500/12 blur-[160px]
                   animate-pulse-glow pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[400px] h-[400px] rounded-full bg-brand-500/8 blur-[80px]
                   pointer-events-none"
      />
      {/* Noise texture */}
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
          <h2 className="font-heading font-black text-display-xl text-content-primary
                         leading-[0.95] tracking-[-0.03em] mb-6 whitespace-pre-line">
            {CONTENT.heading}
          </h2>
        </AnimateIn>

        <AnimateIn delay={160}>
          <p className="text-lg text-content-secondary leading-relaxed mb-10 max-w-xl mx-auto">
            {CONTENT.subtext}
          </p>
        </AnimateIn>

        <AnimateIn delay={240}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            {/* Primary CTA — with glow wrapper */}
            <div className="relative">
              <div className="absolute inset-0 bg-brand-500/30 blur-2xl rounded-pill
                              scale-150 pointer-events-none animate-pulse-glow" />
              <a
                href={CONTENT.cta.href}
                className="relative inline-flex items-center gap-2 px-8 py-4 font-body
                           font-semibold bg-brand-500 text-content-inverse rounded-card
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
                         border border-white/15 text-white/75 rounded-card
                         hover:border-white/35 hover:text-white transition-all ease-expo-out text-base"
            >
              {CONTENT.secondary.label}
            </a>
          </div>
        </AnimateIn>

        {/* Trust strip */}
        <AnimateIn delay={320}>
          <div className="h-px bg-gradient-to-r from-transparent via-surface-border to-transparent mb-8" />
          <div className="flex flex-wrap items-center justify-center gap-6">
            {TRUST.map(t => (
              <div key={t.label} className="flex items-center gap-2 text-xs text-content-muted">
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
