import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  publicDir: "public",
  plugins: [vue(), tailwindcss()],
  server: {
    allowedHosts: ["dev.zulfikar.site"],
    port: 3001,
  },
});
