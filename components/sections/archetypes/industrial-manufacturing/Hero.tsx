import AnimateIn from '@/components/ui/AnimateIn'

// @lpg: Replace all CONTENT values with real company-specific copy
const CONTENT = {
  eyebrow:   'Industrial Solutions',
  headline:  'Built to',
  highlight: 'Perform.',
  subline:   'Precision engineering and manufacturing solutions for industries that cannot afford compromise. Strength. Reliability. Scale.',
  cta:       { label: 'Request a Quote', href: '#contact'  },
  secondary: { label: 'Our Capabilities', href: '#services' },
  specs: [
    { label: 'ISO 9001:2015',     desc: 'Quality certified'   },
    { label: '24 / 7',            desc: 'Operations uptime'   },
    { label: '50+ Countries',     desc: 'Global footprint'    },
    { label: '30 Years',          desc: 'Industry experience' },
  ],
  capabilities: ['Heavy Fabrication', 'Precision Machining', 'Quality Assurance', 'On-site Installation'],
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end overflow-hidden bg-surface pt-nav"
    >
      {/* Industrial grid background */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(var(--content-primary) 1px, transparent 1px), linear-gradient(90deg, var(--content-primary) 1px, transparent 1px)', backgroundSize: '80px 80px' }}
        />
        {/* Accent glow — bottom left industrial light source */}
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-accent/6 blur-[150px]" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-brand-500/8 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full">
        {/* Main content */}
        <div className="max-w-7xl mx-auto px-6 pb-section pt-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            {/* Left — headline */}
            <div>
              <AnimateIn delay={0}>
                <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-accent mb-6">
                  {CONTENT.eyebrow}
                </p>
              </AnimateIn>

              <AnimateIn delay={80}>
                <h1 className="font-heading font-black text-display-xl md:text-display-2xl text-content-primary leading-none tracking-tight">
                  {CONTENT.headline}
                </h1>
                <h1 className="font-heading font-black text-display-xl md:text-display-2xl leading-none tracking-tight mb-8">
                  <span className="text-accent">{CONTENT.highlight}</span>
                </h1>
              </AnimateIn>

              <AnimateIn delay={160}>
                <p className="text-base md:text-lg text-content-secondary font-body leading-relaxed max-w-lg mb-10">
                  {CONTENT.subline}
                </p>
              </AnimateIn>

              <AnimateIn delay={240}>
                <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                  <a
                    href={CONTENT.cta.href}
                    className="px-8 py-4 font-body font-medium bg-accent text-surface-raised hover:brightness-110 transition-all duration-300 ease-expo-out active:scale-[0.97]"
                  >
                    {CONTENT.cta.label}
                  </a>
                  <a
                    href={CONTENT.secondary.href}
                    className="px-8 py-4 font-body font-medium border border-surface-border text-content-muted hover:border-content-primary hover:text-content-primary transition-all duration-300"
                  >
                    {CONTENT.secondary.label}
                  </a>
                </div>

                {/* Capability tags */}
                <div className="flex flex-wrap gap-3">
                  {CONTENT.capabilities.map(c => (
                    <span
                      key={c}
                      className="px-4 py-2 text-xs font-body font-medium tracking-wide uppercase text-content-muted border border-surface-border hover:border-accent hover:text-accent transition-colors duration-200"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </AnimateIn>
            </div>

            {/* Right — spec grid */}
            <AnimateIn delay={200}>
              <div className="grid grid-cols-2 gap-4">
                {CONTENT.specs.map((spec, i) => (
                  <div
                    key={spec.label}
                    className={'p-6 border border-surface-border bg-surface-raised hover:border-accent transition-colors duration-300 ' + (i === 0 ? 'col-span-2 md:col-span-1' : '')}
                  >
                    <div className="font-heading font-black text-display-sm text-accent mb-1">
                      {spec.label}
                    </div>
                    <div className="text-sm font-body text-content-muted uppercase tracking-widest">
                      {spec.desc}
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>

        {/* Bottom accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-accent via-brand-500 to-transparent" />
      </div>
    </section>
  )
}
