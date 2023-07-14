import { MediaTypeObject, RequestBodyObject, ResponseObject } from "openapi3-ts";
/**
 * Returns the first compatible media type.
 *
 * @param requestBodyOrResponseObject
 * @returns
 */
export declare const findCompatibleMediaType: (requestBodyOrResponseObject: RequestBodyObject | ResponseObject) => MediaTypeObject | undefined;
