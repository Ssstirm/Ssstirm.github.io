import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Source Serif Pro"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'Menlo', 'monospace'],
      },
      // Driven by CSS custom properties in global.css so light/dark swap
      // without needing a `dark:` variant on every element.
      colors: {
        ink: {
          DEFAULT: 'rgb(var(--fg) / <alpha-value>)',
          soft: 'rgb(var(--fg-soft) / <alpha-value>)',
          muted: 'rgb(var(--fg-muted) / <alpha-value>)',
        },
        paper: 'rgb(var(--bg) / <alpha-value>)',
        raised: 'rgb(var(--bg-raised) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
      },
      maxWidth: {
        prose: '42rem',
        page: '48rem',
      },
    },
  },
  plugins: [typography],
};
