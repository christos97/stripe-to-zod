"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRequestBodyOptional = void 0;
const lodash_1 = require("lodash");
const openapi3_ts_1 = require("openapi3-ts");
const findCompatibleMediaType_1 = require("./findCompatibleMediaType");
const getReferenceSchema_1 = require("./getReferenceSchema");
/**
 * Check if all the properties are optionals
 */
const isRequestBodyOptional = ({ requestBody, components, }) => {
    if (!requestBody) {
        return true;
    }
    let mediaType = undefined;
    if ((0, openapi3_ts_1.isReferenceObject)(requestBody)) {
        const [hash, topLevel, namespace, _name] = requestBody.$ref.split("/");
        if (hash !== "#" || topLevel !== "components") {
            throw new Error("This library only resolve $ref that are include into `#/components/*` for now");
        }
        if (namespace !== "requestBodies") {
            throw new Error("$ref for requestBody must be on `#/components/requestBodies`");
        }
        const schema = (0, lodash_1.get)(components, requestBody.$ref.replace("#/components/", "").replace("/", "."));
        if (!schema) {
            throw new Error(`${requestBody.$ref} not found!`);
        }
        if ((0, openapi3_ts_1.isReferenceObject)(schema)) {
            return (0, exports.isRequestBodyOptional)({ requestBody: schema, components });
        }
        mediaType = (0, findCompatibleMediaType_1.findCompatibleMediaType)(schema);
    }
    else {
        mediaType = (0, findCompatibleMediaType_1.findCompatibleMediaType)(requestBody);
    }
    if (!mediaType || !mediaType.schema) {
        return true;
    }
    if ((0, openapi3_ts_1.isReferenceObject)(mediaType.schema)) {
        const schema = (0, getReferenceSchema_1.getReferenceSchema)(mediaType.schema.$ref, { components });
        return !schema.required;
    }
    return !mediaType.schema.required;
};
exports.isRequestBodyOptional = isRequestBodyOptional;
//# sourceMappingURL=isRequestBodyOptional.js.map