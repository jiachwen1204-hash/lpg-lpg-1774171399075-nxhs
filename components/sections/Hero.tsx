import AnimateIn from '@/components/ui/AnimateIn'
import { cn } from '@/lib/utils'

const CONTENT = {
  eyebrow: 'AI-Powered Financial Intelligence',
  headline: 'Smarter money decisions',
  headline2: 'through AI-powered insights',
  subline: 'AI Money leverages artificial intelligence to simplify how individuals and businesses manage, grow, and optimise their money. Intelligent automation, predictive analytics, and real-time data processing deliver personalised financial insights, faster decision-making, and more efficient money management.',
  cta: { label: 'Get Started Now', href: '#contact' },
  secondary: { label: 'Our Solutions', href: '#services' },
  stats: [
    { value: '$500M+', label: 'Transaction volume', accent: true },
    { value: '50,000+', label: 'Users protected', accent: false },
    { value: '99.9%', label: 'Platform uptime', accent: true },
    { value: '15+', label: 'Countries served', accent: false },
  ],
  credentials: ['SOC 2 Certified', '256-bit Encryption', 'FCA Regulated'],
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#0f1a27] pt-nav">
      {/* Mesh glow orbs */}
      <div aria-hidden className="absolute top-[-15%] left-[-8%] w-[800px] h-[800px] rounded-full bg-brand-500/10 blur-[200px] animate-pulse-glow pointer-events-none" />
      <div aria-hidden className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-brand-500/8 blur-[160px] pointer-events-none" />
      <div aria-hidden className="absolute top-[40%] right-[20%] w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      {/* Dot grid texture */}
      <div aria-hidden className="absolute inset-0 pointer-events-none opacity-[0.08]" style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-section-lg w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left — primary content */}
          <div className="lg:col-span-7">
            <AnimateIn delay={0}>
              <p className="text-xs font-body font-medium tracking-[0.25em] uppercase text-accent mb-8">
                {CONTENT.eyebrow}
              </p>
            </AnimateIn>

            <AnimateIn delay={100}>
              <h1 className="font-heading font-black text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.03em] text-white mb-2">
                <span className="bg-gradient-to-r from-brand-400 via-brand-500 to-brand-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">
                  {CONTENT.headline}
                </span>
              </h1>
              <h1 className="font-heading font-black text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.03em] text-white mb-10">
                {CONTENT.headline2}
              </h1>
            </AnimateIn>

            <AnimateIn delay={200}>
              <p className="max-w-xl text-lg text-white/60 font-body leading-relaxed mb-10">
                {CONTENT.subline}
              </p>
            </AnimateIn>

            <AnimateIn delay={300}>
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <div className="relative inline-flex">
                  <div className="absolute inset-0 bg-brand-500/30 blur-xl rounded-md scale-110 pointer-events-none" />
                  <a
                    href={CONTENT.cta.href}
                    className="relative px-8 py-4 font-body font-semibold bg-brand-500 text-white rounded-md hover:bg-brand-600 transition-all duration-300 ease-expo-out active:scale-[0.97]"
                  >
                    {CONTENT.cta.label}
                  </a>
                </div>
                <a
                  href={CONTENT.secondary.href}
                  className="px-8 py-4 font-body font-medium border border-white/15 text-white/80 rounded-md hover:border-white/30 hover:text-white transition-all duration-300"
                >
                  {CONTENT.secondary.label}
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-6">
                {CONTENT.credentials.map(c => (
                  <span key={c} className="text-xs font-body text-white/40 tracking-wide">{c}</span>
                ))}
              </div>
            </AnimateIn>
          </div>

          {/* Right — stats panel */}
          <AnimateIn delay={250} className="lg:col-span-5">
            <div className="relative">
              {/* Dashboard mockup */}
              <div className="rounded-lg border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 shadow-card-lg">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <img src="https://u5ft5besqtymo1lf.public.blob.vercel-storage.com/logos/1774171397790-relax.png" alt="AI Money logo" className="h-8 w-auto object-contain" />
                  </div>
                  <span className="text-xs text-green-400/80 bg-green-400/10 px-2 py-1 rounded">Live</span>
                </div>

                {/* Mock chart */}
                <div className="flex items-end gap-1 h-24 mb-6">
                  {[35, 55, 45, 70, 60, 85, 72, 90, 78, 95, 82, 100].map((h, i) => (
                    <div key={i} className="flex-1 rounded-sm" style={{
                      height: `${h}%`,
                      background: i === 11
                        ? 'linear-gradient(to top, #7C3AED, #818cf8)'
                        : 'linear-gradient(to top, rgba(124,58,237,0.3), rgba(129,140,248,0.2))',
                    }} />
                  ))}
                </div>

                {/* Metrics row */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-md bg-white/[0.03] p-3 border border-white/5">
                    <div className="text-xs text-white/40 mb-1 font-body">Portfolio</div>
                    <div className="font-heading font-bold text-white text-lg">$47,892</div>
                    <div className="text-xs text-green-400/80 mt-0.5">+12.4%</div>
                  </div>
                  <div className="rounded-md bg-white/[0.03] p-3 border border-white/5">
                    <div className="text-xs text-white/40 mb-1 font-body">AI Score</div>
                    <div className="font-heading font-bold text-white text-lg">94/100</div>
                    <div className="text-xs text-brand-400 mt-0.5">Excellent</div>
                  </div>
                  <div className="rounded-md bg-white/[0.03] p-3 border border-white/5">
                    <div className="text-xs text-white/40 mb-1 font-body">Savings</div>
                    <div className="font-heading font-bold text-white text-lg">$3,241</div>
                    <div className="text-xs text-accent/80 mt-0.5">This month</div>
                  </div>
                </div>
              </div>

              {/* Floating security badge */}
              <div className="absolute -top-4 -right-4 rounded-md border border-white/10 bg-[#0f1a27]/80 backdrop-blur-sm p-3 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Secured</div>
                    <div className="text-xs text-white/40">256-bit</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats grid below dashboard */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              {CONTENT.stats.map((stat) => (
                <div key={stat.label} className="p-5 rounded-md bg-white/[0.02] border border-white/5">
                  <div className={cn(
                    'font-heading font-bold text-display-sm mb-1',
                    stat.accent ? 'text-accent' : 'text-white'
                  )}>
                    {stat.value}
                  </div>
                  <div className="text-xs font-body text-white/40 leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>

        {/* Bottom divider */}
        <AnimateIn delay={400}>
          <div className="mt-16 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </AnimateIn>
      </div>
    </section>
  )
}