import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // generate manifest.json in outDir
    manifestst: true,
    rollupOptions: {
      // overwrite default .html entry
      input: "./src/main.jsx",
    },
  },
  plugins: [
    react(),
    VitePWA({
      injectRegister: "inline",

      workbox: {
        clientsClaim: true,
        skipWaiting: true,
      },
    }),
  ],
});
