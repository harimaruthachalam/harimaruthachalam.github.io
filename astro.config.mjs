// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://harimaruthachalam.github.io',
  integrations: [
    sitemap({
      // Astro's sitemap integration only includes routed pages by default.
      // The two LLM-discovery files live in /public so we add them by hand.
      customPages: [
        'https://harimaruthachalam.github.io/llms.txt',
        'https://harimaruthachalam.github.io/llms-full.txt',
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
