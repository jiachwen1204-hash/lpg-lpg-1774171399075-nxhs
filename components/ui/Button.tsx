'use client'
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center gap-2 font-body font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none',
        {
          'bg-brand-500 text-content-inverse hover:bg-brand-700 hover:shadow-glow-sm active:scale-[0.97]':
            variant === 'primary',
          'border border-surface-border text-content-primary hover:border-brand-500 hover:text-brand-500 active:scale-[0.97]':
            variant === 'secondary',
          'text-content-muted hover:text-content-primary hover:bg-surface-raised':
            variant === 'ghost',
        },
        {
          'text-sm px-4 py-2 rounded-card':     size === 'sm',
          'text-sm px-5 py-2.5 rounded-card':   size === 'md',
          'text-base px-7 py-3.5 rounded-card': size === 'lg',
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  ),
)

Button.displayName = 'Button'
export default Button
