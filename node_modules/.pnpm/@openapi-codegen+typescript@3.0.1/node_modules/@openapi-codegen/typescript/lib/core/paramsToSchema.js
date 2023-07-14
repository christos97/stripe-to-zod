"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paramsToSchema = void 0;
const case_1 = require("case");
/**
 * Convert a list of params in an object schema.
 *
 * @param params Parameters list
 * @param optionalKeys Override the key to be optional
 * @returns An openAPI object schemas with the parameters as properties
 */
const paramsToSchema = (params, optionalKeys = []) => {
    const formatKey = params[0].in === "path" ? case_1.camel : (key) => key;
    return {
        type: "object",
        properties: params.reduce((mem, param) => {
            return {
                ...mem,
                [formatKey(param.name)]: {
                    ...param.schema,
                    description: param.description,
                },
            };
        }, {}),
        required: params
            .filter((p) => p.required && !optionalKeys.includes(formatKey(p.name)))
            .map((p) => formatKey(p.name)),
    };
};
exports.paramsToSchema = paramsToSchema;
//# sourceMappingURL=paramsToSchema.js.map