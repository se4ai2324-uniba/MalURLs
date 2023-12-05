import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    proxy: {
      "/api": "http://172.18.0.2:5000", // Cambia l'URL se il server Flask è in esecuzione su una porta diversa
    },
  },
});
