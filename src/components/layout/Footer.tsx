import { site } from '../../data/content'
import { Container } from './Container'

export const Footer = () => <footer className="border-t border-line py-7"><Container><p className="text-center font-mono text-[0.65rem] uppercase tracking-[0.08em] text-muted">{site.name} · {site.location} · Data Science & AI · 2026</p></Container></footer>
