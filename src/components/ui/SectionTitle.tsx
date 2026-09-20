import type { PropsWithChildren } from 'react'

export const SectionTitle = ({ eyebrow, description, children }: PropsWithChildren<{ eyebrow: string; description?: string }>) => (
  <div className="mb-10 flex flex-col justify-between gap-5 md:mb-12 md:flex-row md:items-end">
    <div>
      <p className="mb-3 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-accent">{eyebrow}</p>
      <h2 className="font-display text-4xl leading-none tracking-[-0.04em] text-ink dark:text-paper sm:text-5xl">{children}</h2>
    </div>
    {description && <p className="max-w-md text-sm leading-7 text-muted">{description}</p>}
  </div>
)
