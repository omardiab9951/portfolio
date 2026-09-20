import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'
import { GithubCallout } from './components/sections/GithubCallout'
import { Hero } from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { useTheme } from './hooks/useTheme'

export const App = () => {
  const { isDark, toggleTheme } = useTheme()
  return <div className="min-h-screen bg-paper text-ink transition-colors dark:bg-ink dark:text-paper"><Navbar isDark={isDark} toggleTheme={toggleTheme} /><main><Hero /><Projects /><About /><Skills /><GithubCallout /><Contact /></main><Footer /></div>
}
