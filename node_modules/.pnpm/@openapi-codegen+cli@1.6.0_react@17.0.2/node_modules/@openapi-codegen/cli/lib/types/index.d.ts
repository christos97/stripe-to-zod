import { OpenAPIObject } from "openapi3-ts";
/**
 * OpenAPI source file.
 */
export declare type OpenAPISourceFile = {
    /**
     * Raw text
     */
    text: string;
    /**
     * File format
     */
    format: "json" | "yaml";
};
export declare type FileOptions = {
    source: "file";
    /**
     * Relative path of the spec file
     */
    relativePath: string;
};
export declare type UrlOptions = {
    source: "url";
    /**
     * URL of the spec file
     */
    url: string;
    /**
     * Additional headers
     */
    headers?: {
        [key: string]: string;
    };
    /**
     * HTTP Method
     */
    method?: "get" | "post";
};
export declare type GithubOptions = {
    source: "github";
    /**
     * Owner of the repository
     */
    owner: string;
    /**
     * Repository name
     */
    repository: string;
    /**
     * Git reference (branch name, commit sha or tag)
     */
    ref: string;
    /**
     * OpenAPI specs file path
     */
    specPath: string;
};
export declare type FromOptions = FileOptions | UrlOptions | GithubOptions;
export declare type Context = {
    openAPIDocument: OpenAPIObject;
    outputDir: string;
    writeFile: (file: string, data: string) => Promise<void>;
    readFile: (file: string) => Promise<string>;
    existsFile: (file: string) => boolean;
};
/**
 * Namespace of your api.
 *
 * This will be used to call the config
 *
 * example:
 * $ openapi-codegen gen {namespace}
 */
export declare type Namespace = string;
export declare type Config = {
    from: FromOptions;
    outputDir: string;
    to: (context: Context) => Promise<void>;
};
export declare type Import = {
    namedImports: string[];
    module: string;
};
export declare type Plugin = "typescript/types-only" | "typescript/react-query" | "typescript/fetch";
