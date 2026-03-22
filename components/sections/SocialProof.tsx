import AnimateIn from '@/components/ui/AnimateIn'

const clients = [
  'J.P. Morgan',
  'Goldman Sachs',
  'HSBC',
  'Citi Group',
  'Bloomberg',
  'MSCI',
  'Fidelity',
  'BlackRock',
]

interface Testimonial {
  quote: string
  author: string
  role: string
  org: string
  initials: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    quote:
      'AI Money transformed our risk assessment pipeline. What once took our quant team weeks now happens in real time — and the predictive accuracy has meaningfully improved our portfolio performance.',
    author: 'Sarah Chen',
    role: 'Head of Quantitative Strategy',
    org: 'Meridian Capital',
    initials: 'SC',
    rating: 5,
  },
  {
    quote:
      'The fraud detection capabilities are genuinely best-in-class. We identified systemic vulnerabilities in our transaction monitoring that our previous vendors had overlooked for years.',
    author: 'Marcus Williams',
    role: 'Chief Risk Officer',
    org: 'Apex Financial Group',
    initials: 'MW',
    rating: 5,
  },
  {
    quote:
      'Implementation was seamless and the ROI was evident within the first quarter. Our credit scoring models now process applications 12x faster with improved default prediction accuracy.',
    author: 'Priya Nair',
    role: 'Chief Technology Officer',
    org: 'Solara Wealth Management',
    initials: 'PN',
    rating: 5,
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5 mb-5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-accent" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function SocialProof() {
  return (
    <section className="py-section bg-surface-raised overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <AnimateIn className="text-center mb-16">
          <span className="inline-block bg-brand-500/10 text-brand-500 rounded-pill px-4 py-1.5 text-xs font-medium uppercase tracking-widest mb-6">
            Trusted by Industry Leaders
          </span>
          <h2 className="font-heading text-display-lg text-content-primary tracking-tight max-w-2xl mx-auto leading-tight">
            Powering smarter financial decisions for enterprise clients worldwide
          </h2>
        </AnimateIn>

        {/* Marquee */}
        <div className="relative mb-20 overflow-hidden">
          {/* Fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface-raised to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface-raised to-transparent z-10 pointer-events-none" />

          <div className="flex gap-6 animate-marquee w-max">
            {[...clients, ...clients].map((name, i) => (
              <div
                key={i}
                className="whitespace-nowrap px-6 py-3 rounded-md bg-surface border border-surface-border/40
                           text-content-secondary font-medium text-sm font-body"
              >
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimateIn key={t.author} delay={i * 100}>
              <div className="group relative h-full rounded-card-lg border border-surface-border/30
                              bg-surface p-8 hover:border-brand-500/40 hover:shadow-card-lg
                              transition-all duration-300">
                {/* Top accent line */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />
                <StarRating count={t.rating} />
                <p className="text-content-secondary leading-relaxed mb-8 text-base font-body">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-surface-border/30">
                  <div className="w-11 h-11 rounded-full bg-brand-500/10 flex items-center
                                  justify-center text-sm font-bold text-brand-500 shrink-0 font-heading">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-content-primary font-body">{t.author}</div>
                    <div className="text-xs text-content-muted font-body">{t.role}</div>
                    <div className="text-xs text-accent font-medium font-body">{t.org}</div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  )
}