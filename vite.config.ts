import { resolve } from 'path';
import { crx } from '@crxjs/vite-plugin'
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import manifest from './manifest.json'

export default defineConfig({
  build: {
    rollupOptions: {
      // add any html pages here
      input: {
        // output file at '/index.html'
        welcome: resolve(__dirname, 'index.html'),
        // output file at '/src/panel.html'
        panel: resolve(__dirname, 'src/panel.html'),
      },
    },
  },
  plugins: [react(), crx({ manifest })],
});