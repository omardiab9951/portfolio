import { skills } from '../../data/content'
import { Section } from '../layout/Section'
import { SectionTitle } from '../ui/SectionTitle'
import { Reveal } from '../ui/Reveal'

export const Skills = () => <Section id="skills"><SectionTitle eyebrow="03 / Technical Skills" description="Technologies and concepts I've been using across coursework, projects, competitions and experimentation.">My toolkit.</SectionTitle><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{skills.map((skill) => <Reveal key={skill.name}><article className="h-full rounded-2xl border border-line bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-line-strong"><div className="mb-8 flex h-10 w-10 items-center justify-center rounded-lg border border-line-strong bg-accent/10 font-mono text-[0.66rem] text-accent">{skill.icon}</div><h3 className="font-display text-2xl tracking-[-0.03em] text-paper">{skill.name}</h3><p className="mt-3 text-sm leading-7 text-muted">{skill.description}</p></article></Reveal>)}</div></Section>
