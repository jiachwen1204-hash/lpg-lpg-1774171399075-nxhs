import AnimateIn from '@/components/ui/AnimateIn'

// @lpg: Replace all CONTENT values with real company-specific copy
const CONTENT = {
  eyebrow:   'Creative Direction & Brand Experience',
  headline:  'We Make',
  highlight: 'Bold Things',
  subline:   'A creative studio building brands, campaigns, and digital experiences that demand attention.',
  cta:       { label: 'See Our Work',   href: '#services' },
  secondary: { label: 'Get in Touch',   href: '#contact'  },
  marquee:   ['Branding', 'Motion', 'Web', 'Identity', 'Campaign', 'Strategy', 'Digital', 'Editorial'],
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-surface"
    >
      {/* Full-bleed background gradient mesh */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-surface via-surface to-surface-raised opacity-80" />
        <div className="absolute top-1/4 right-0 w-[700px] h-[700px] rounded-full bg-brand-500/8 blur-[160px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      {/* Top eyebrow — rotated side label */}
      <div className="absolute top-40 left-8 hidden lg:block">
        <p
          className="text-xs font-body tracking-[0.3em] uppercase text-content-muted"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          {CONTENT.eyebrow}
        </p>
      </div>

      {/* Main content — bottom-anchored editorial layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-section pt-nav w-full">
        {/* Massive display headline */}
        <AnimateIn delay={0}>
          <h1 className="font-heading font-black text-display-2xl md:text-display-hero text-content-primary leading-none tracking-tight mb-0">
            {CONTENT.headline}
          </h1>
        </AnimateIn>
        <AnimateIn delay={100}>
          <h1 className="font-heading font-black text-display-2xl md:text-display-hero leading-none tracking-tight mb-10">
            <span className="bg-gradient-to-r from-brand-500 to-accent bg-clip-text text-transparent">
              {CONTENT.highlight}
            </span>
          </h1>
        </AnimateIn>

        {/* Bottom row: subline + CTAs */}
        <AnimateIn delay={200}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 border-t border-surface-border pt-8">
            <p className="max-w-md text-base md:text-lg text-content-secondary font-body leading-relaxed">
              {CONTENT.subline}
            </p>
            <div className="flex items-center gap-4 shrink-0">
              <a
                href={CONTENT.cta.href}
                className="px-8 py-4 font-body font-medium bg-content-primary text-surface hover:bg-brand-500 hover:text-content-inverse transition-all duration-300 ease-expo-out active:scale-[0.97]"
              >
                {CONTENT.cta.label}
              </a>
              <a
                href={CONTENT.secondary.href}
                className="px-8 py-4 font-body font-medium border border-surface-border text-content-muted hover:text-content-primary hover:border-content-primary transition-all duration-300"
              >
                {CONTENT.secondary.label}
              </a>
            </div>
          </div>
        </AnimateIn>
      </div>

      {/* Scrolling discipline marquee */}
      <div className="relative z-10 overflow-hidden border-t border-surface-border py-4 bg-surface-raised/40">
        <div className="flex gap-12 animate-marquee w-max">
          {[...CONTENT.marquee, ...CONTENT.marquee, ...CONTENT.marquee].map((item, i) => (
            <span key={i} className="whitespace-nowrap text-sm font-body tracking-widest uppercase text-content-muted px-2">
              {item} <span className="text-brand-500 mx-2">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
