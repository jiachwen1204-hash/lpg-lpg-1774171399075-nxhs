import AnimateIn from '@/components/ui/AnimateIn'
import { Zap, Shield, BarChart3, Layers, Globe, Lock } from 'lucide-react'

// @lpg-hint: Three-column equal cards work well for 3–4 services.
// For 5–7 services, consider a 2-col featured layout (one large card + smaller grid).
// For very different-weight services, consider a numbered list layout instead.
const services = [
  {
    icon: Zap,
    title: 'Intelligent Automation',
    description:
      'Eliminate repetitive work with smart workflows that learn from your processes and scale with your team.',
    tag: 'Most Popular',
  },
  {
    icon: BarChart3,
    title: 'Data Intelligence',
    description:
      'Turn raw data into clear decisions. Real-time analytics, custom dashboards, and actionable insights.',
    tag: null,
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description:
      'Bank-grade encryption, audit logs, and role-based access controls built into every layer of the platform.',
    tag: null,
  },
  {
    icon: Globe,
    title: 'Global Infrastructure',
    description:
      'Deploy to 20+ regions worldwide. Sub-100ms response times and 99.99% uptime guaranteed by SLA.',
    tag: null,
  },
  {
    icon: Layers,
    title: 'Seamless Integrations',
    description:
      'Connect to 200+ tools out of the box. REST API and webhooks for anything not in the library.',
    tag: null,
  },
  {
    icon: Lock,
    title: 'Compliance Ready',
    description:
      'SOC 2 Type II, GDPR, and HIPAA compliant by default. Compliance reports generated automatically.',
    tag: null,
  },
]

// @lpg-hint: Adapt the heading to the company's actual value framing.
// "What We Offer" is generic — something like "Everything Your Team Needs" or
// "The Stack Behind 10,000 Teams" is stronger.
const HEADING = 'Everything You Need'
const SUBTEXT = 'One platform. Every capability your team needs to move faster and work smarter.'

export default function Services() {
  return (
    <section id="services" className="py-section bg-surface relative overflow-hidden">
      {/* Subtle top accent glow */}
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px]
                   bg-gradient-to-r from-transparent via-brand-500/40 to-transparent"
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <AnimateIn className="max-w-2xl mb-16">
          <span className="inline-block bg-brand-500/10 text-brand-500 rounded-pill
                           px-4 py-1.5 text-xs font-medium uppercase tracking-widest mb-4">
            What We Do
          </span>
          <h2 className="font-heading font-black text-display-lg text-content-primary
                         leading-tight tracking-[-0.025em] mb-4">
            {HEADING}
          </h2>
          <p className="text-lg text-content-secondary leading-relaxed">{SUBTEXT}</p>
        </AnimateIn>

        {/* Card grid — 3 cols on lg, 2 on md */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <AnimateIn key={svc.title} delay={i * 80}>
              <div className="group relative h-full rounded-card-lg overflow-hidden
                              bg-surface-raised border border-surface-border/30
                              hover:border-brand-500/30 hover:shadow-card-lg
                              transition-all duration-300 ease-expo-out">
                {/* Top accent line — lights up on hover */}
                <div className="absolute top-0 inset-x-0 h-px
                                bg-gradient-to-r from-transparent via-brand-500/40 to-transparent
                                group-hover:via-brand-500/80 transition-all duration-500" />
                {/* Inner hover glow */}
                <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/[0.03]
                                rounded-card-lg transition-colors duration-300" />

                <div className="relative p-7">
                  {/* Icon + tag row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-11 h-11 rounded-card bg-brand-500/10
                                    flex items-center justify-center
                                    group-hover:bg-brand-500/20 transition-colors duration-300">
                      <svc.icon className="w-5 h-5 text-brand-500" />
                    </div>
                    {svc.tag && (
                      <span className="text-[10px] font-semibold uppercase tracking-widest
                                       text-brand-500 bg-brand-500/10 rounded-pill px-2.5 py-1">
                        {svc.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-content-primary mb-2.5">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-content-secondary leading-relaxed">
                    {svc.description}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
