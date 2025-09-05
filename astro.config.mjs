import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
export default defineConfig({
  site: 'https://l3s.me',
  integrations: [tailwind()],
});
