export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}', './cv.json'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        panel: 'var(--panel)',
        border: 'var(--border)',
        text: 'var(--text)',
        secondary: 'var(--secondary)',
        muted: 'var(--muted)',
        rule: 'var(--rule)',
        primary: 'var(--primary)',
        accent: 'var(--accent)',
        ember: 'var(--ember)',
      },
      fontFamily: {
        sans: ['Archivo', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['B612 Mono', 'ui-monospace', 'SF Mono', 'Menlo', 'monospace'],
      },
      fontSize: {
        xs: ['0.8125rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.55' }],
        base: ['1rem', { lineHeight: '1.65' }],
        lg: ['1.125rem', { lineHeight: '1.55' }],
        xl: ['1.25rem', { lineHeight: '1.35' }],
        '2xl': ['1.375rem', { lineHeight: '1.25' }],
        '3xl': ['1.75rem', { lineHeight: '1.15' }],
        '4xl': ['2.75rem', { lineHeight: '1.05' }],
      },
    },
  },
};
