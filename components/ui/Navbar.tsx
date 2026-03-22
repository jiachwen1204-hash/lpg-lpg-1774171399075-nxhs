'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

// @lpg-hint: Nav labels are the only thing to change here.
// The href values are FIXED anchor IDs — they must match the section id attributes.
// Changing a href here without changing the matching section id will break navigation.
//
// Canonical mapping (DO NOT change the href values):
//   #services → <section id="services">  (Services.tsx)
//   #about    → <section id="about">     (About.tsx)
//   #contact  → <section id="contact">   (CTA.tsx)
//
// You may rename the labels to fit the company's language:
//   "Solutions", "What We Do", "Our Work"  →  all valid labels for #services
//   "Our Story", "Who We Are", "The Team"  →  all valid labels for #about
//   "Get Started", "Work With Us"          →  all valid labels for #contact
const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About',    href: '#about'    },
  { label: 'Contact',  href: '#contact'  },
]

// @lpg-hint: Brand name = company name. CTA label = primary action verb.
const BRAND_NAME = 'Acme'
const CTA = { label: 'Get Started', href: '#contact' }

export default function Navbar() {
  const [scrolled, setScrolled]  = useState(false)
  const [open, setOpen]          = useState(false)
  const [activeHash, setActiveHash] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Update active nav link as user scrolls through sections
  useEffect(() => {
    const ids = navLinks.map(l => l.href.replace('#', ''))
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting)
        if (visible.length > 0) {
          setActiveHash('#' + visible[0].target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-surface/90 backdrop-blur-md shadow-card'
          : 'bg-transparent',
      )}
    >
      {/* Bottom gradient line when scrolled */}
      {scrolled && (
        <div className="absolute bottom-0 inset-x-0 h-px
                        bg-gradient-to-r from-transparent via-surface-border to-transparent" />
      )}

      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-nav">
        {/* Brand */}
        <Link
          href="/"
          className="font-heading font-bold text-xl text-content-primary
                     hover:text-brand-500 transition-colors"
        >
          {BRAND_NAME}
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  'px-4 py-2 text-sm rounded-card transition-colors',
                  activeHash === link.href
                    ? 'text-brand-500 bg-brand-500/8'
                    : 'text-content-muted hover:text-content-primary hover:bg-surface-raised',
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={CTA.href}
            className="px-5 py-2 text-sm font-semibold bg-brand-500 text-content-inverse
                       rounded-card hover:bg-brand-600 hover:shadow-glow-sm
                       transition-all ease-expo-out active:scale-[0.97]"
          >
            {CTA.label}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="md:hidden p-2 rounded-card text-content-muted
                     hover:text-content-primary hover:bg-surface-raised transition-colors"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-surface/95 backdrop-blur-md">
          <div className="h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />
          <ul className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'block px-4 py-3 text-sm rounded-card transition-colors',
                    activeHash === link.href
                      ? 'text-brand-500 bg-brand-500/8'
                      : 'text-content-muted hover:text-content-primary hover:bg-surface-raised',
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={CTA.href}
                onClick={() => setOpen(false)}
                className="block px-5 py-3 text-sm font-semibold text-center
                           bg-brand-500 text-content-inverse rounded-card
                           hover:bg-brand-600 transition-colors"
              >
                {CTA.label}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
