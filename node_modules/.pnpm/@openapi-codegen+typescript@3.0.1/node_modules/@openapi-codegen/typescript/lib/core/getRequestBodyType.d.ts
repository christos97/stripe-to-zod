import ts from "typescript";
import { ComponentsObject, ReferenceObject, RequestBodyObject } from "openapi3-ts";
/**
 * Extract types from request body
 */
export declare const getRequestBodyType: ({ requestBody, components, }: {
    requestBody?: ReferenceObject | RequestBodyObject | undefined;
    components?: ComponentsObject | undefined;
}) => ts.TypeNode;
