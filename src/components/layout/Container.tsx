import type { PropsWithChildren } from 'react'

export const Container = ({ children, className = '' }: PropsWithChildren<{ className?: string }>) => (
  <div className={`mx-auto w-[min(100%-2rem,1120px)] sm:w-[min(100%-3rem,1120px)] ${className}`}>{children}</div>
)
