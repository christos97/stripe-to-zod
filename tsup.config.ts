import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  splitting: false,
  treeshake: false,
  format: ["cjs"],
  dts: true,
  minify: true,
  sourcemap: true,
  skipNodeModulesBundle: true,
  clean: true,
  target: "es2020",
  external: ["zod"],
});
