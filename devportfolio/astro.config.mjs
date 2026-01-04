// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site lives at https://itumor.github.io/Me
  site: "https://itumor.github.io/Me",
  base: "/Me",
  vite: {
    plugins: [tailwindcss()],
  },
});
