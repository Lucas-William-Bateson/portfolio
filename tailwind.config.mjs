export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}', './cv.json'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        panel: 'var(--panel)',
        border: 'var(--border)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        primary: 'var(--primary)',
        accent: 'var(--accent)',
      },
      borderRadius: {
        xl: '0px',
        lg: '0px',
        md: '0px',
        sm: '0px',
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.4' }],
        sm: ['0.875rem', { lineHeight: '1.5' }],
        base: ['0.9375rem', { lineHeight: '1.6' }],
        lg: ['1.0625rem', { lineHeight: '1.5' }],
        xl: ['1.125rem', { lineHeight: '1.4' }],
        '2xl': ['1.25rem', { lineHeight: '1.3' }],
        '3xl': ['1.5rem', { lineHeight: '1.2' }],
      },
    },
  },
};
