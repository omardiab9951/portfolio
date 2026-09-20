import { Menu, Moon, Sun, X } from 'lucide-react'
import { useState } from 'react'
import { navLinks, site } from '../../data/content'
import { useScrollSpy } from '../../hooks/useScrollSpy'

interface NavbarProps { isDark: boolean; toggleTheme: () => void }

export const Navbar = ({ isDark, toggleTheme }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const activeId = useScrollSpy(navLinks.map((link) => link.href.slice(1)))
  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-xl dark:border-line dark:bg-ink/92" aria-label="Primary navigation">
      <div className="mx-auto flex h-20 w-[min(100%-2rem,1120px)] items-center justify-between sm:w-[min(100%-3rem,1120px)]">
        <a href="#top" className="font-display text-xl tracking-[-0.04em] text-ink dark:text-paper">{site.brand}<span className="text-accent">.</span></a>
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => <a key={link.href} href={link.href} className={`font-mono text-[0.68rem] uppercase tracking-[0.12em] transition hover:text-accent ${activeId === link.href.slice(1) ? 'text-accent' : 'text-muted'}`}>{link.label}</a>)}
          <a href="https://github.com/omardiab9951" target="_blank" rel="noreferrer" className="rounded-full border border-line-strong px-4 py-2 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-accent transition hover:bg-accent hover:text-ink">GitHub ↗</a>
          <button onClick={toggleTheme} className="rounded-full p-2 text-muted transition hover:bg-accent/10 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent" aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>{isDark ? <Sun size={17} /> : <Moon size={17} />}</button>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <button onClick={toggleTheme} className="rounded-full p-2 text-muted" aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>{isDark ? <Sun size={18} /> : <Moon size={18} />}</button>
          <button onClick={() => setIsOpen((open) => !open)} className="rounded-full p-2 text-ink dark:text-paper" aria-label={isOpen ? 'Close menu' : 'Open menu'}>{isOpen ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
      </div>
      {isOpen && <div className="border-t border-line px-4 py-4 md:hidden">{navLinks.map((link) => <a key={link.href} href={link.href} onClick={closeMenu} className="block py-3 font-mono text-xs uppercase tracking-[0.12em] text-ink/70 dark:text-paper/70">{link.label}</a>)}</div>}
    </nav>
  )
}
