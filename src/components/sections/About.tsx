import { aboutParagraphs } from '../../data/content'
import { Section } from '../layout/Section'
import { SectionTitle } from '../ui/SectionTitle'
import { Reveal } from '../ui/Reveal'

export const About = () => <Section id="about"><SectionTitle eyebrow="02 / About">Data → models → products.</SectionTitle><div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20"><Reveal><div className="space-y-5 text-base leading-8 text-muted">{aboutParagraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div></Reveal><Reveal><div className="rounded-2xl border border-line-strong bg-card p-7"><p className="mb-4 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-accent">Education</p><h3 className="font-display text-2xl leading-tight text-paper">ElSewedy University of Technology</h3><p className="mt-2 text-sm text-muted">Polytechnic of Egypt</p><p className="mt-6 font-mono text-xs leading-6 text-soft">B.Tech · Computer Science Technology<br />Major: Data Science & Artificial Intelligence</p></div></Reveal></div></Section>
