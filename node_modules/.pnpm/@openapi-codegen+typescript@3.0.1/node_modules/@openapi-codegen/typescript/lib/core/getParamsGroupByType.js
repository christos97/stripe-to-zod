"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getParamsGroupByType = void 0;
const lodash_1 = require("lodash");
const openapi3_ts_1 = require("openapi3-ts");
/**
 * Resolve $ref and group parameters by `type`.
 *
 * @param parameters Operation parameters
 * @param components #/components
 */
const getParamsGroupByType = (parameters = [], components = {}) => {
    const { query: queryParams = [], path: pathParams = [], header: headerParams = [], } = (0, lodash_1.groupBy)([...parameters].map((p) => {
        if ((0, openapi3_ts_1.isReferenceObject)(p)) {
            const schema = (0, lodash_1.get)(components, p.$ref.replace("#/components/", "").replace("/", "."));
            if (!schema) {
                throw new Error(`${p.$ref} not found!`);
            }
            return schema;
        }
        else {
            return p;
        }
    }), "in");
    return { queryParams, pathParams, headerParams };
};
exports.getParamsGroupByType = getParamsGroupByType;
//# sourceMappingURL=getParamsGroupByType.js.map