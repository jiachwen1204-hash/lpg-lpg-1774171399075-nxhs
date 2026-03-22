import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'

const BRAND = {
  name:    'AI Money',
  tagline: 'Smarter money decisions through AI-powered insights',
  description: 'AI Money is a smart financial technology platform that leverages artificial intelligence to simplify how individuals and businesses manage, grow, and optimize their money. It combines intelligent automation, predictive analytics, and real-time data processing to deliver personalized financial insights, faster decision-making, and more efficient money management.',
  email:   'jiachwen99@gmail.com',
  address: 'B5-1-3, Forest Green Condominium\nBandar Sungai Long',
}

const NAV = [
  { label: 'Services',  href: '#services' },
  { label: 'About',     href: '#about'    },
  { label: 'Contact',   href: '#contact'  },
]

const LEGAL = [
  { label: 'Privacy Policy',   href: '/privacy' },
  { label: 'Terms of Service', href: '/terms'   },
]

const SOCIAL = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'X / Twitter',
    href: 'https://twitter.com',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.258 5.63 5.906-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-surface">
      <div className="h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-section">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">

          {/* Brand column — wider for Corporate Premium */}
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
            <p className="mt-4 text-xs text-content-muted/80 leading-relaxed max-w-sm">
              {BRAND.description.substring(0, 180)}...
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
                  className="w-9 h-9 rounded-md flex items-center justify-center
                             text-content-muted bg-brand-500/10
                             hover:text-brand-500 hover:bg-brand-500/20
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
          <span>&copy; {year} {BRAND.name}. All rights reserved.</span>
          <span className="text-content-muted/50">Corporate Premium Financial Technology</span>
        </div>
      </div>
    </footer>
  )
}