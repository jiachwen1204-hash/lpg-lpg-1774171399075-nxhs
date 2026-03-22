import AnimateIn from '@/components/ui/AnimateIn'
import { Sparkles, TrendingUp, ShieldCheck, CreditCard, Wallet, Brain } from 'lucide-react'

const services = [
  {
    icon: Sparkles,
    title: 'Automated Budgeting',
    description:
      'Intelligent automation that categorizes expenses, tracks spending patterns, and creates personalized budgets that adapt to your financial behavior in real time.',
    tag: null,
  },
  {
    icon: Brain,
    title: 'Smart Investment Recommendations',
    description:
      'AI-powered insights that analyze market trends and your risk profile to deliver personalized investment strategies aligned with your financial goals.',
    tag: 'Core Service',
  },
  {
    icon: ShieldCheck,
    title: 'Fraud Detection',
    description:
      'Advanced machine learning algorithms continuously monitor transactions to identify anomalies, prevent unauthorized access, and protect your assets 24/7.',
    tag: null,
  },
  {
    icon: TrendingUp,
    title: 'Credit Scoring',
    description:
      'Dynamic credit assessment that evaluates multiple financial data points to provide accurate, fair, and transparent credit scoring for better loan outcomes.',
    tag: null,
  },
  {
    icon: CreditCard,
    title: 'Digital Payment Optimization',
    description:
      'Streamlined payment processing with intelligent routing, fee optimization, and predictive cash flow management for businesses of all sizes.',
    tag: null,
  },
  {
    icon: Wallet,
    title: 'Wealth Growth Intelligence',
    description:
      'Personalized savings strategies and wealth accumulation plans powered by predictive analytics to maximize your financial potential over time.',
    tag: null,
  },
]

const HEADING = 'AI-Powered Financial Intelligence'
const SUBTEXT =
  'Transforming complex financial processes into seamless digital experiences — helping individuals and businesses save time, reduce risk, and unlock better financial opportunities through advanced AI technology.'

export default function Services() {
  return (
    <section id="services" className="py-section bg-surface relative overflow-hidden">
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px]
                   bg-gradient-to-r from-transparent via-brand-500/40 to-transparent"
      />

      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn className="max-w-2xl mb-16">
          <span className="inline-block bg-brand-500/10 text-brand-500 rounded-pill
                           px-4 py-1.5 text-xs font-medium uppercase tracking-widest mb-4">
            Our Capabilities
          </span>
          <h2 className="font-heading font-black text-display-lg text-content-primary
                         leading-tight tracking-[-0.025em] mb-4">
            {HEADING}
          </h2>
          <p className="text-lg text-content-secondary leading-relaxed">{SUBTEXT}</p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <AnimateIn key={svc.title} delay={i * 80}>
              <div className="group relative h-full rounded-card-lg overflow-hidden
                              bg-surface-raised border border-surface-border/30
                              hover:border-brand-500/30 hover:shadow-card-lg
                              transition-all duration-300 ease-expo-out">
                <div className="absolute top-0 inset-x-0 h-px
                                bg-gradient-to-r from-transparent via-brand-500/40 to-transparent
                                group-hover:via-brand-500/80 transition-all duration-500" />
                <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/[0.03]
                                rounded-card-lg transition-colors duration-300" />

                <div className="relative p-7">
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