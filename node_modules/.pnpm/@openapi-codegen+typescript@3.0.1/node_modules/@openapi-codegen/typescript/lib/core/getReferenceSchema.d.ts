import { OpenAPIObject, SchemaObject } from "openapi3-ts";
/**
 * Get the SchemaObject from a $ref.
 *
 * @param $ref Path of the reference
 * @param context Context
 * @returns The resolved SchemaObject
 */
export declare const getReferenceSchema: ($ref: string, openAPIDocument: Pick<OpenAPIObject, "components">) => SchemaObject;
