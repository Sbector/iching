/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--color-bg)',
        surface: 'var(--color-bg-elevated)',
        'nav-bg': 'var(--color-bg-nav)',
        foreground: 'var(--color-text)',
        'muted-text': 'var(--color-text-muted)',
        accent: 'var(--color-accent)',
        border: 'var(--color-border)',
        button: {
          bg: 'var(--color-button-bg)',
          text: 'var(--color-button-text)',
          hover: 'var(--color-button-hover)',
        },
      },
      spacing: {
        'header-height': 'var(--color-header-height)',
      },
    },
  },
  plugins: [],
}
