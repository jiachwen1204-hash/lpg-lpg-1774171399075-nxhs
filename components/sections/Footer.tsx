import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'

// @lpg-hint: Footer is a trust anchor — don't let it be an afterthought.
// The brand column should reinforce the tagline and make it easy to reach out.
// Social links should only appear if the company actually has active profiles.
const BRAND = {
  name:    'Acme Platform',
  tagline: 'The fastest way to build, ship, and scale — without the overhead.',
  email:   'hello@acme.io',
  address: '340 Pine Street, Suite 800\nSan Francisco, CA 94104',
}

// @lpg-hint: Footer nav label can differ from the main nav label.
// e.g. Main nav: "Solutions" → Footer nav: "Services" (more descriptive in context).
// For 5-page sites, expand this to include all 5 pages.
const NAV = [
  { label: 'Services',  href: '#services' },
  { label: 'About',     href: '#about'    },
  { label: 'Contact',   href: '#contact'  },
]

const LEGAL = [
  { label: 'Privacy Policy',   href: '/privacy' },
  { label: 'Terms of Service', href: '/terms'   },
]

// @lpg-hint: Only include social links the company actively maintains.
// An empty Twitter feed does more damage than no link at all.
const SOCIAL = [
  {
    label: 'X / Twitter',
    href: 'https://twitter.com',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.258 5.63 5.906-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-surface">
      {/* Gradient divider — no hard border */}
      <div className="h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">

          {/* Brand column — wider */}
          <div className="md:col-span-5">
            <Link
              href="/"
              className="font-heading font-bold text-xl text-content-primary
                         hover:text-brand-500 transition-colors"
            >
              {BRAND.name}
            </Link>
            <p className="mt-3 text-sm text-content-muted leading-relaxed max-w-xs">
              {BRAND.tagline}
            </p>

            {/* Contact info */}
            <div className="mt-6 space-y-2">
              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-2 text-sm text-content-muted
                           hover:text-brand-500 transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                {BRAND.email}
              </a>
              <div className="flex items-start gap-2 text-sm text-content-muted">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span className="whitespace-pre-line">{BRAND.address}</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-6">
              {SOCIAL.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-card flex items-center justify-center
                             text-content-muted bg-surface-raised border border-surface-border/30
                             hover:text-brand-500 hover:border-brand-500/40
                             transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-7">
            <h3 className="font-heading font-semibold text-sm text-content-primary
                           uppercase tracking-wider mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAV.map(l => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-content-muted hover:text-brand-500 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-3">
            <h3 className="font-heading font-semibold text-sm text-content-primary
                           uppercase tracking-wider mb-5">
              Legal
            </h3>
            <ul className="space-y-3">
              {LEGAL.map(l => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-content-muted hover:text-brand-500 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="h-px bg-gradient-to-r from-transparent via-surface-border to-transparent mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4
                        text-xs text-content-muted">
          <span>© {year} {BRAND.name}. All rights reserved.</span>
          <span className="text-content-muted/50">Made with care for the teams that build things.</span>
        </div>
      </div>
    </footer>
  )
}
