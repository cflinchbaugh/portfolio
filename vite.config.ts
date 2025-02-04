import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { configDefaults } from "vitest/config";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "production" ? "/portfolio-v2/" : "/", // Only set base in production
  build: {
    outDir: "dist",
  },
  test: {
    globals: true, // Allows using 'describe' and 'it' without importing
    environment: "jsdom", // Simulates a browser environment
    setupFiles: "./src/setupTests.ts", // Where we configure extra utilities
    exclude: [...configDefaults.exclude, "e2e/**"], // Excludes e2e tests
    coverage: {
      provider: "v8",
      exclude: ["src/main.tsx", "dist/*", "*.config.*", "src/vite-env.d.ts"],
    },
  },
}));
