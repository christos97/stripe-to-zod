import { OpenAPIObject } from "openapi3-ts";
/**
 * Util to rename an openAPI component name
 */
export declare const renameComponent: ({ openAPIDocument, from, to, }: {
    /**
     * The openAPI document to transform
     */
    openAPIDocument: OpenAPIObject;
    /**
     * Original component path (eg: `#/components/schemas/Foo`)
     */
    from: string;
    /**
     * Renamed component path (eg: `#/components/schemas/Bar`)
     */
    to: string;
}) => OpenAPIObject;
