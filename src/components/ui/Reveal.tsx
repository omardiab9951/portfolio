import type { PropsWithChildren } from 'react'

export const Reveal = ({ children, className = '' }: PropsWithChildren<{ className?: string }>) => (
  <div className={`animate-reveal motion-reduce:animate-none ${className}`}>{children}</div>
)
