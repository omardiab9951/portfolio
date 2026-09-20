import { useEffect, useState } from 'react'

const getInitialTheme = (): boolean => {
  const stored = localStorage.getItem('theme')
  return stored ? stored === 'dark' : true
}

export const useTheme = () => {
  const [isDark, setIsDark] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return { isDark, toggleTheme: () => setIsDark((current) => !current) }
}
