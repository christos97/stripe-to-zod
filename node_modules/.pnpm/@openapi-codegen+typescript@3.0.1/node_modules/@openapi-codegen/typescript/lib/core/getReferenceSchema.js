"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReferenceSchema = void 0;
const lodash_1 = require("lodash");
const openapi3_ts_1 = require("openapi3-ts");
/**
 * Get the SchemaObject from a $ref.
 *
 * @param $ref Path of the reference
 * @param context Context
 * @returns The resolved SchemaObject
 */
const getReferenceSchema = ($ref, openAPIDocument) => {
    const [hash, ...refPath] = $ref.split("/");
    if (hash !== "#") {
        throw new Error("This library only resolve local $ref");
    }
    const referenceSchema = (0, lodash_1.get)(openAPIDocument, refPath.join("."));
    if (!referenceSchema) {
        throw new Error(`${$ref} not found!`);
    }
    if ((0, openapi3_ts_1.isReferenceObject)(referenceSchema)) {
        return (0, exports.getReferenceSchema)(referenceSchema.$ref, openAPIDocument);
    }
    if (!(0, openapi3_ts_1.isSchemaObject)(referenceSchema)) {
        throw new Error(`${$ref} can’t be resolved`);
    }
    return referenceSchema;
};
exports.getReferenceSchema = getReferenceSchema;
//# sourceMappingURL=getReferenceSchema.js.map