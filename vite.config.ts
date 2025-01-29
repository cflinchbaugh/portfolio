import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "production" ? "/portfolio-v2/" : "/", // Only set base in production
  build: {
    outDir: "dist",
  },
}));
