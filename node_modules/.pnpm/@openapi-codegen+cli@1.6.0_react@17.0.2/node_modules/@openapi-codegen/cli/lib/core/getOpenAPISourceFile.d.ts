import { FromOptions, OpenAPISourceFile } from "../types";
/**
 * Retrieve the OpenAPI source.
 *
 * @param options
 */
export declare const getOpenAPISourceFile: (options: FromOptions) => Promise<OpenAPISourceFile>;
/**
 * Get the format of the specifications (yaml or json)
 *
 * @param extension
 */
export declare const getFormat: (extension: string) => "json" | "yaml";
