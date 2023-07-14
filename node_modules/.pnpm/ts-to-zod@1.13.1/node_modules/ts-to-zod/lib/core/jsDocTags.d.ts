import ts from "typescript";
/**
 * List of formats that can be translated in zod functions.
 */
declare const formats: ("url" | "email" | "uuid")[];
declare type TagWithError<T> = {
    value: T;
    errorMessage?: string;
};
/**
 * JSDoc special tags that can be converted in zod flags.
 */
export interface JSDocTags {
    minimum?: TagWithError<number>;
    maximum?: TagWithError<number>;
    default?: number | string | boolean;
    minLength?: TagWithError<number>;
    maxLength?: TagWithError<number>;
    format?: TagWithError<typeof formats[-1]>;
    pattern?: string;
}
/**
 * Return parsed JSTags.
 *
 * @param nodeType
 * @param sourceFile
 * @returns Tags list
 */
export declare function getJSDocTags(nodeType: ts.Node, sourceFile: ts.SourceFile): JSDocTags;
export declare type ZodProperty = {
    identifier: string;
    expressions?: ts.Expression[];
};
/**
 * Convert a set of jsDocTags to zod properties
 *
 * @param jsDocTags
 * @param isOptional
 * @param isPartial
 * @param isRequired
 * @param isNullable
 */
export declare function jsDocTagToZodProperties(jsDocTags: JSDocTags, isOptional: boolean, isPartial: boolean, isRequired: boolean, isNullable: boolean): ZodProperty[];
export {};
