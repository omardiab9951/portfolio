import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#2B1D48',
        paper: '#F8F6FF',
        accent: '#F8F6FF',
        soft: '#D8D2E6',
        muted: '#B8B2C5',
        card: 'rgba(43, 29, 72, 0.82)',
        solid: '#2B1D48',
        line: 'rgba(43, 29, 72, 0.42)',
        'line-strong': 'rgba(43, 29, 72, 0.7)',
      },
      fontFamily: {
        display: ['DM Serif Display', 'Georgia', 'serif'],
        sans: ['Manrope', 'ui-sans-serif', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'monospace'],
      },
      maxWidth: { page: '1120px' },
      spacing: { 18: '4.5rem', 22: '5.5rem', 30: '7.5rem' },
      boxShadow: {
        glow: '0 0 60px rgba(248, 246, 255, 0.14)',
        dot: '0 0 0 5px rgba(248, 246, 255, 0.15), 0 0 14px rgba(248, 246, 255, 0.75)',
        card: '0 18px 60px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
} satisfies Config
