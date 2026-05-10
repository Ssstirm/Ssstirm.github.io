import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Source Serif Pro"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'monospace'],
      },
      colors: {
        ink: {
          DEFAULT: '#18181b',
          soft: '#52525b',
          muted: '#a1a1aa',
        },
        paper: '#fafaf9',
        accent: '#1d4ed8',
      },
      maxWidth: {
        prose: '42rem',
      },
    },
  },
  plugins: [typography],
};
