import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import icon from 'astro-icon';

import tailwindcss from '@tailwindcss/vite';

const isDev = process.env.NODE_ENV === 'development';

// https://astro.build/config
export default defineConfig({
  output: 'static',

  integrations: [
    react(),
    markdoc(),

    // Keystatic only during `npm run dev`
    ...(isDev ? [keystatic()] : []),

    icon(),
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});