import AnimateIn from '@/components/ui/AnimateIn'

// @lpg-hint: Use real client/partner names from the company description.
// For B2B: list recognisable company names. For B2C: use category descriptors
// like "Healthcare", "Retail", "Finance" if real names aren't available.
const clients = [
  'Stripe',
  'Shopify',
  'Notion',
  'Linear',
  'Vercel',
  'Figma',
  'Loom',
  'Intercom',
]

// @lpg-hint: Testimonials are the most trust-building element on a landing page.
// Write them to answer the buyer's specific objection. Quote #1: results (ROI/time saved).
// Quote #2: ease of adoption. Quote #3: emotional outcome (peace of mind, confidence).
// If the company has no real testimonials yet, make them credible + industry-specific.
const testimonials = [
  {
    quote:
      'We cut our onboarding time from three weeks to four days. The automation layer is genuinely exceptional — it handles edge cases our previous tool couldn\'t even detect.',
    author: 'Sarah Chen',
    role:   'VP of Engineering',
    org:    'Meridian Labs',
    initials: 'SC',
    rating: 5,
  },
  {
    quote:
      'The data intelligence features alone paid for the annual contract in the first quarter. Our team went from drowning in spreadsheets to making confident decisions in real time.',
    author: 'Marcus Williams',
    role:   'Chief Operating Officer',
    org:    'Apex Financial',
    initials: 'MW',
    rating: 5,
  },
  {
    quote:
      'I was sceptical about yet another platform. Within two weeks I was recommending it to every founder I know. It just works — and the support team is genuinely best-in-class.',
    author: 'Priya Nair',
    role:   'Founder & CEO',
    org:    'Solara Health',
    initials: 'PN',
    rating: 5,
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-brand-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
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
        <AnimateIn className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-content-muted mb-6">
            Trusted by forward-thinking teams
          </p>
        </AnimateIn>

        {/* Marquee */}
        {/* @lpg-hint: The marquee creates social proof through familiarity.
            If the company has real client logos, use them. If not, use company name text
            chips like below — they look intentional, not like placeholder content. */}
        <div className="relative mb-20 overflow-hidden">
          {/* Fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface-raised to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface-raised to-transparent z-10 pointer-events-none" />

          <div className="flex gap-4 animate-marquee w-max">
            {[...clients, ...clients].map((name, i) => (
              <div
                key={i}
                className="whitespace-nowrap px-5 py-2.5 rounded-pill bg-surface
                           text-content-muted font-medium text-sm"
              >
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <AnimateIn key={t.author} delay={i * 100}>
              <div className="group h-full rounded-card-lg border border-surface-border/30
                              bg-surface p-7 hover:border-brand-500/40 hover:shadow-card-lg
                              transition-all duration-300">
                <StarRating count={t.rating} />
                <p className="text-content-secondary leading-relaxed mb-6 text-sm">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-9 h-9 rounded-full bg-brand-500/15 flex items-center
                                  justify-center text-xs font-bold text-brand-500 shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-content-primary">{t.author}</div>
                    <div className="text-xs text-content-muted">{t.role}, {t.org}</div>
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
