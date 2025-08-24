import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

    server: {
    proxy: {
      'api/games': {
        target: 'https://www.freetogame.com/',
        changeOrigin: true,
        secure: false, // You may need this for HTTPS
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});

