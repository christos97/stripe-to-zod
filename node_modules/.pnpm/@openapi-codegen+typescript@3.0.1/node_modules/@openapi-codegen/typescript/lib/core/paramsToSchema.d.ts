import { ParameterObject, SchemaObject } from "openapi3-ts";
/**
 * Convert a list of params in an object schema.
 *
 * @param params Parameters list
 * @param optionalKeys Override the key to be optional
 * @returns An openAPI object schemas with the parameters as properties
 */
export declare const paramsToSchema: (params: ParameterObject[], optionalKeys?: string[]) => SchemaObject;
