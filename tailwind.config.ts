import type { Config } from 'tailwindcss'

// All color tokens reference CSS variables set by app/globals.css.
// This means the design system changes (brand color, bg, surface, etc.)
// only require updating CSS variables — not this config file.

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50:  'var(--brand-50)',
          100: 'var(--brand-100)',
          200: 'var(--brand-200)',
          300: 'var(--brand-300)',
          400: 'var(--brand-400)',
          500: 'var(--brand-500)',
          600: 'var(--brand-600)',
          700: 'var(--brand-700)',
          800: 'var(--brand-800)',
          900: 'var(--brand-900)',
          950: 'var(--brand-950)',
        },
        surface: {
          DEFAULT:       'var(--surface-default)',
          raised:        'var(--surface-raised)',
          overlay:       'var(--surface-overlay)',
          border:        'var(--surface-border)',
          'border-strong': 'var(--surface-border-strong)',
        },
        content: {
          primary:   'var(--content-primary)',
          secondary: 'var(--content-secondary)',
          muted:     'var(--content-muted)',
          inverse:   'var(--content-inverse)',
        },
        accent: 'var(--accent)',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body:    ['var(--font-body)',    'sans-serif'],
        mono:    ['var(--font-mono)',    'monospace'],
      },
      fontSize: {
        'display-hero': ['6rem',    { lineHeight: '0.93', letterSpacing: '-0.03em' }],
        'display-2xl':  ['4.5rem',  { lineHeight: '1',    letterSpacing: '-0.025em' }],
        'display-xl':   ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg':   ['3rem',    { lineHeight: '1.1',  letterSpacing: '-0.02em' }],
        'display-md':   ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'display-sm':   ['1.875rem',{ lineHeight: '1.2',  letterSpacing: '-0.01em' }],
      },
      spacing: {
        nav:          '4.5rem',
        section:      '7rem',
        'section-lg': '10rem',
        'section-sm': '4rem',
      },
      keyframes: {
        'fade-up':       { '0%': { opacity: '0', transform: 'translateY(32px)' },   '100%': { opacity: '1', transform: 'translateY(0)' } },
        'fade-in':       { '0%': { opacity: '0' },                                   '100%': { opacity: '1' } },
        'fade-left':     { '0%': { opacity: '0', transform: 'translateX(32px)' },   '100%': { opacity: '1', transform: 'translateX(0)' } },
        'scale-in':      { '0%': { opacity: '0', transform: 'scale(0.92)' },        '100%': { opacity: '1', transform: 'scale(1)' } },
        'slide-up-mask': { '0%': { transform: 'translateY(110%)' },                  '100%': { transform: 'translateY(0)' } },
        'clip-reveal':   { '0%': { clipPath: 'inset(0 100% 0 0)' },                  '100%': { clipPath: 'inset(0 0% 0 0)' } },
        'float':         { '0%,100%': { transform: 'translateY(0)' },               '50%': { transform: 'translateY(-16px)' } },
        'marquee':       { '0%': { transform: 'translateX(0)' },                     '100%': { transform: 'translateX(-50%)' } },
        'marquee-rev':   { '0%': { transform: 'translateX(-50%)' },                  '100%': { transform: 'translateX(0)' } },
        'pulse-glow':    { '0%,100%': { opacity: '0.4' },                           '50%': { opacity: '1' } },
      },
      animation: {
        'fade-up':       'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in':       'fade-in 0.6s ease-out forwards',
        'fade-left':     'fade-left 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'scale-in':      'scale-in 0.6s cubic-bezier(0.16,1,0.3,1) forwards',
        'slide-up-mask': 'slide-up-mask 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'clip-reveal':   'clip-reveal 1.1s cubic-bezier(0.76,0,0.24,1) forwards',
        'float':         'float 4s ease-in-out infinite',
        'marquee':       'marquee 30s linear infinite',
        'marquee-rev':   'marquee-rev 30s linear infinite',
        'pulse-glow':    'pulse-glow 2s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':  'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        card:    '1rem',
        'card-lg': '1.5rem',
        pill:    '9999px',
      },
      boxShadow: {
        card:    '0 1px 3px 0 rgb(0 0 0/.1), 0 1px 2px -1px rgb(0 0 0/.1)',
        'card-lg': '0 20px 60px -15px rgb(0 0 0/.35)',
        'card-xl': '0 40px 80px -20px rgb(0 0 0/.45)',
        glow:    '0 0 60px -15px var(--brand-glow)',
        'glow-sm': '0 0 30px -10px var(--brand-glow)',
      },
      transitionTimingFunction: {
        'expo-out':   'cubic-bezier(0.16, 1, 0.3, 1)',
        'expo-in':    'cubic-bezier(0.7, 0, 0.84, 0)',
        'expo-inout': 'cubic-bezier(0.87, 0, 0.13, 1)',
      },
    },
  },
}

export default config
