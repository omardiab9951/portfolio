import type { PropsWithChildren } from 'react'
import { Container } from './Container'

export const Section = ({ id, children, className = '' }: PropsWithChildren<{ id?: string; className?: string }>) => (
  <section id={id} className={`border-t border-line py-16 dark:border-line md:py-24 ${className}`}>
    <Container>{children}</Container>
  </section>
)
