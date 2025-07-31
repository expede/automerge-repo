import { defineConfig } from "vitest/config"
import viteConfig from "./vite.config"
import path from "path"

export default defineConfig({
  ...viteConfig,
  test: {
    globals: true,
    setupFiles: [path.join(__dirname, "./testSetup.ts")],
    environment: "jsdom",
    coverage: {
      provider: "v8",
      reporter: ["lcov", "text", "html"],
      skipFull: true,
      exclude: [
        "**/fuzz",
        "**/helpers",
        "**/coverage",
        "examples/**/*",
        "docs/**/*",
        "**/test/**/*",
      ],
    },
  },
})
