import { Config, Namespace } from "./types";
/**
 * Type helper to make it easier to use openapi-codegen.ts.
 */
export declare const defineConfig: (configs: Record<Namespace, Config>) => Record<string, Config>;
