import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  splitting: false,
  format: ["cjs"],
  dts: true,
  minify: true,
  sourcemap: "inline",
  clean: true,
  target: "es2020",
  external: ["zod"],
});
