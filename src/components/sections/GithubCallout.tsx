import { ArrowUpRight } from 'lucide-react'
import { Section } from '../layout/Section'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'

export const GithubCallout = () => <Section><Reveal><div className="grid items-center gap-7 rounded-2xl border border-line-strong bg-card p-7 md:grid-cols-[1fr_auto] md:p-9"><div><h3 className="font-display text-3xl tracking-[-0.035em] text-paper">More experiments on GitHub.</h3><p className="mt-3 max-w-2xl text-sm leading-7 text-muted">My GitHub contains my projects, experiments and learning work across AI/ML, data science, application development and programming.</p></div><Button href="https://github.com/omardiab9951" target="_blank" rel="noreferrer">github.com/omardiab9951 <ArrowUpRight size={15} /></Button></div></Reveal></Section>
