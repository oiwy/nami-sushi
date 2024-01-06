import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve("src"),
      "@/app": path.resolve("src/app"),
      "@/entities": path.resolve("src/entities"),
      "@/features": path.resolve("src/features"),
      "@/pages": path.resolve("src/pages"),
      "@/processes": path.resolve("src/processes"),
      "@/shared": path.resolve("src/shared"),
      "@/widgets": path.resolve("src/widgets"),
    },
  },
});
