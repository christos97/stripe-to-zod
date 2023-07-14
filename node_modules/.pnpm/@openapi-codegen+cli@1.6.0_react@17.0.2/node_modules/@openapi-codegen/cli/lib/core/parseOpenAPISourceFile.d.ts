import { OpenAPIObject } from "openapi3-ts";
import type { OpenAPISourceFile } from "../types";
/**
 * Parse an openAPI source file to an openAPI object.
 *
 * This method will convert legacy swagger 2 specs to openapi 3.0
 *
 * @param text raw data of the spec
 * @param format format of the spec
 */
export declare const parseOpenAPISourceFile: ({ text, format, }: OpenAPISourceFile) => Promise<OpenAPIObject>;
