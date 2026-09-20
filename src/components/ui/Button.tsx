import type { AnchorHTMLAttributes } from 'react'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary'
}

export const Button = ({ variant = 'primary', className = '', children, ...props }: ButtonProps) => (
  <a
    className={`inline-flex items-center justify-center rounded-full px-5 py-3 font-mono text-[0.7rem] uppercase tracking-[0.08em] transition duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${variant === 'primary' ? 'bg-accent text-ink shadow-glow hover:bg-soft' : 'border border-line-strong text-ink hover:border-accent hover:text-ink dark:border-line-strong dark:text-paper'} ${className}`}
    {...props}
  >
    {children}
  </a>
)
