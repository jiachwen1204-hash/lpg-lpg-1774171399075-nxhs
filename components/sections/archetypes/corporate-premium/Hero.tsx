import AnimateIn from '@/components/ui/AnimateIn'

// @lpg: Replace all CONTENT values with real company-specific copy
const CONTENT = {
  eyebrow:   'Global Advisory',
  headline:  'Trusted Expertise.',
  headline2: 'Measurable Results.',
  subline:   'Strategic advisory and professional services for organisations that demand excellence. We deliver outcomes, not promises.',
  cta:       { label: 'Get in Touch',  href: '#contact'  },
  secondary: { label: 'Our Services',  href: '#services' },
  stats: [
    { value: '25+',   label: 'Years of excellence',   accent: false },
    { value: '$2.4B', label: 'Client value delivered', accent: true  },
    { value: '98%',   label: 'Client retention rate',  accent: false },
    { value: '40+',   label: 'Countries served',       accent: false },
  ],
  credentials: ['ISO 9001 Certified', 'Forbes Top 50', 'AA+ Credit Rating'],
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-surface pt-nav"
    >
      {/* Subtle diagonal gradient */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{ background: 'linear-gradient(135deg, transparent 60%, var(--surface-raised) 100%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-section-lg w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left — primary content */}
          <div className="lg:col-span-7">
            <AnimateIn delay={0}>
              <p className="text-xs font-body font-medium tracking-[0.25em] uppercase text-accent mb-8">
                {CONTENT.eyebrow}
              </p>
            </AnimateIn>

            <AnimateIn delay={80}>
              <h1 className="font-heading font-bold text-display-xl md:text-display-2xl text-content-primary leading-tight tracking-tight mb-2">
                {CONTENT.headline}
              </h1>
              <h1 className="font-heading font-bold text-display-xl md:text-display-2xl text-content-primary leading-tight tracking-tight mb-10">
                {CONTENT.headline2}
              </h1>
            </AnimateIn>

            <AnimateIn delay={160}>
              <p className="max-w-xl text-lg text-content-secondary font-body leading-relaxed mb-10">
                {CONTENT.subline}
              </p>
            </AnimateIn>

            <AnimateIn delay={240}>
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <a
                  href={CONTENT.cta.href}
                  className="px-8 py-4 font-body font-medium bg-content-primary text-surface hover:bg-brand-700 hover:text-content-inverse transition-all duration-300 ease-expo-out active:scale-[0.97]"
                >
                  {CONTENT.cta.label}
                </a>
                <a
                  href={CONTENT.secondary.href}
                  className="px-8 py-4 font-body font-medium border border-content-primary text-content-primary hover:bg-content-primary hover:text-surface transition-all duration-300"
                >
                  {CONTENT.secondary.label}
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-6">
                {CONTENT.credentials.map(c => (
                  <span key={c} className="text-xs font-body text-content-muted tracking-wide">{c}</span>
                ))}
              </div>
            </AnimateIn>
          </div>

          {/* Right — stats panel */}
          <AnimateIn delay={200} className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-px bg-surface-border">
              {CONTENT.stats.map((stat) => (
                <div key={stat.label} className="p-8 bg-surface">
                  <div className={
                    'font-heading font-bold text-display-lg mb-2 ' +
                    (stat.accent ? 'text-accent' : 'text-content-primary')
                  }>
                    {stat.value}
                  </div>
                  <div className="text-sm font-body text-content-muted leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>

        {/* Bottom divider */}
        <AnimateIn delay={400}>
          <div className="mt-section-sm border-t border-surface-border" />
        </AnimateIn>
      </div>
    </section>
  )
}
