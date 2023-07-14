import { ComponentsObject, OpenAPIObject, ReferenceObject, SchemaObject } from "openapi3-ts";
import ts from "typescript";
declare type RemoveIndex<T> = {
    [P in keyof T as string extends P ? never : number extends P ? never : P]: T[P];
};
export declare type OpenAPIComponentType = Extract<keyof RemoveIndex<ComponentsObject>, "parameters" | "responses" | "schemas" | "requestBodies">;
export declare type Context = {
    openAPIDocument: Pick<OpenAPIObject, "components">;
    /**
     * Current OpenAPI component
     *
     * This is required to correctly resolve types dependencies
     */
    currentComponent: OpenAPIComponentType | null;
};
/**
 * Transform an OpenAPI Schema Object to Typescript Nodes (comment & declaration).
 *
 * @param name  Name of the schema
 * @param schema OpenAPI Schema object
 * @param context Context
 */
export declare const schemaToTypeAliasDeclaration: (name: string, schema: SchemaObject, context: Context) => ts.Node[];
/**
 * Get the type.
 *
 * @param schema OpenAPI Schema
 * @returns ts.TypeNode
 */
export declare const getType: (schema: SchemaObject | ReferenceObject, context: Context) => ts.TypeNode;
export {};
