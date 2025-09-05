export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}',
    './cv.json',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        panel: 'var(--panel)',
        border: 'var(--border)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        primary: 'var(--primary)',
        accent: 'var(--accent)'
      },
      borderRadius: {
        xl: '14px',
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica',
          'Arial',
          'Apple Color Emoji',
          'Segoe UI Emoji',
        ]
      }
    },
  },
  darkMode: ['class', '[data-theme="dark"]'],
};
