import AnimateIn from '@/components/ui/AnimateIn'
import CountUp from '@/components/ui/CountUp'
import { cn } from '@/lib/utils'

const CONTENT = {
  eyebrow: 'AI-Powered Financial Intelligence',
  headline: 'Smarter money decisions',
  headline2: 'through AI-powered insights',
  subline: 'AI Money leverages artificial intelligence to simplify how individuals and businesses manage, grow, and optimise their money. Intelligent automation, predictive analytics, and real-time data processing deliver personalised financial insights, faster decision-making, and more efficient money management.',
  cta: { label: 'Get Started Now', href: '#contact' },
  secondary: { label: 'Our Solutions', href: '#services' },
  stats: [
    { value: 500, prefix: '$', suffix: 'M+', label: 'Transaction volume' },
    { value: 50000, suffix: '+', label: 'Users protected' },
    { value: 99.9, suffix: '%', label: 'Platform uptime' },
    { value: 15, suffix: '+', label: 'Countries served' },
  ],
  credentials: ['SOC 2 Certified', '256-bit Encryption', 'FCA Regulated'],
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#0f1a27] pt-nav">
      {/* Mesh glow orbs */}
      <div aria-hidden className="absolute top-[-15%] left-[-8%] w-[800px] h-[800px] rounded-full bg-brand-500/10 blur-[200px] animate-pulse-glow pointer-events-none" />
      <div aria-hidden className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-brand-500/8 blur-[160px] pointer-events-none" />
      <div aria-hidden className="absolute top-[40%] right-[20%] w-[400px] h-[400px] rounded-full bg-accent/8 blur-[120px] pointer-events-none" />

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
              <span className="inline-block bg-accent/10 text-accent rounded px-4 py-1.5 text-xs font-medium uppercase tracking-widest mb-6">
                {CONTENT.eyebrow}
              </span>
            </AnimateIn>

            <AnimateIn delay={100}>
              <h1 className="font-heading font-black text-[clamp(3.5rem,7vw,6.5rem)] leading-[0.92] tracking-[-0.04em] text-white mb-2">
                {CONTENT.headline}
              </h1>
              <h1 className="font-heading font-black text-[clamp(3.5rem,7vw,6.5rem)] leading-[0.92] tracking-[-0.04em] text-white mb-2">
                <span className="bg-gradient-to-r from-accent to-amber-500 bg-clip-text text-transparent">
                  {CONTENT.headline2}
                </span>
              </h1>
            </AnimateIn>

            <AnimateIn delay={200}>
              <p className="max-w-xl text-lg text-white/60 font-body leading-relaxed mb-10 mt-8">
                {CONTENT.subline}
              </p>
            </AnimateIn>

            <AnimateIn delay={300}>
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
                <div className="relative inline-flex">
                  <div className="absolute inset-0 bg-accent/25 blur-xl rounded-md scale-110 pointer-events-none" />
                  <a
                    href={CONTENT.cta.href}
                    className="relative px-8 py-4 font-body font-semibold bg-accent text-[#0f1a27] rounded-md hover:bg-accent/90 transition-all duration-300 ease-expo-out active:scale-[0.97]"
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
            </AnimateIn>

            <AnimateIn delay={350}>
              <div className="flex flex-wrap items-center gap-6">
                {CONTENT.credentials.map(c => (
                  <span key={c} className="text-xs font-body text-white/40 tracking-wide">{c}</span>
                ))}
              </div>
            </AnimateIn>
          </div>

          {/* Right — dashboard mockup */}
          <AnimateIn delay={250} className="lg:col-span-5">
            <div className="relative">
              {/* Main dashboard card */}
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
                        ? 'linear-gradient(to top, #c9a84c, #d4af61)'
                        : 'linear-gradient(to top, rgba(201,168,76,0.3), rgba(212,175,97,0.2))',
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
                    <div className="text-xs text-accent mt-0.5">Excellent</div>
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
          </AnimateIn>
        </div>

        {/* Stats row */}
        <div className="mt-20 pt-10 border-t border-white/10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {CONTENT.stats.map((stat, i) => (
              <AnimateIn key={stat.label} delay={400 + i * 100}>
                <div className="text-center lg:text-left">
                  <div className="font-heading font-bold text-[clamp(2rem,4vw,3rem)] text-accent mb-2 min-h-[3rem] flex items-center justify-center lg:justify-start">
                    {stat.prefix && <span className="text-accent/70 mr-1">{stat.prefix}</span>}
                    <CountUp target={stat.value} decimals={stat.value % 1 !== 0 ? 1 : 0} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm font-body text-white/50 tracking-wide uppercase">{stat.label}</div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}