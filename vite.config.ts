import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  resolve: {
    alias: [
      { find: "@", replacement: "./src" },
      { find: "@components", replacement: "/src/components" },
      { find: "@headers", replacement: "/src/components/headers" },
      { find: "@pages", replacement: "/src/pages" },
    ],
  },
});
