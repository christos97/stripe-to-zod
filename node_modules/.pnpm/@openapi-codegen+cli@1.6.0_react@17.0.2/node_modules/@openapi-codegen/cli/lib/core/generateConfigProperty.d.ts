import ts from "typescript";
import type { Config, Import, Plugin } from "../types";
export declare type GenerateConfigOptions = {
    /**
     * New configuration key
     */
    namespace: string;
    /**
     * Configuration options
     */
    options: Pick<Config, "from" | "outputDir"> & {
        plugin: Plugin;
    };
};
/**
 * Generate the configuration `PropertyAssignment` node.
 */
export declare function generateConfigProperty({ namespace, options, }: GenerateConfigOptions): ts.PropertyAssignment;
/**
 * Get list of required imports regarding the plugin
 *
 * @param plugin
 * @returns
 */
export declare function getImports(plugin: Plugin): Import[];
