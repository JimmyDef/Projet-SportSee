import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path"; // ← à décommenter
import { fileURLToPath } from "url";
const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"), // ← accès avec "@/components/..."
    },
  },

  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/tests/setup.js",
    env: {
      IS_REACT_ACT_ENVIRONMENT: "true",
    },
  },
});
