import { ComponentsObject, OperationObject } from "openapi3-ts";
/**
 * Check if all the properties are optionals
 */
export declare const isRequestBodyOptional: ({ requestBody, components, }: {
    requestBody?: OperationObject["requestBody"];
    components?: ComponentsObject | undefined;
}) => boolean;
