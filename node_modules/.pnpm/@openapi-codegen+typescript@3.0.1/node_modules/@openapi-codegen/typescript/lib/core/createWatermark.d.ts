import { InfoObject } from "openapi3-ts";
/**
 * Generate a JSDoc comment with the generated watermark and `info.version`
 *
 * @param info OpenAPI info object
 * @returns ts.node with the watermark
 */
export declare const createWatermark: (info: InfoObject) => import("typescript").JSDoc;
