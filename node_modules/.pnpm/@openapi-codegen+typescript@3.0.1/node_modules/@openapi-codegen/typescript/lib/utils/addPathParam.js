"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPathParam = void 0;
const lodash_1 = require("lodash");
/**
 * Util to add a path param to an openAPI operation
 */
const addPathParam = ({ openAPIDocument, pathParam, required, condition: filter = () => true, }) => {
    return {
        ...openAPIDocument,
        paths: (0, lodash_1.mapValues)(openAPIDocument.paths, (value, key) => filter(key, value)
            ? {
                ...value,
                parameters: [
                    ...(value.parameters ?? []),
                    {
                        name: pathParam,
                        in: "path",
                        required,
                        schema: { type: "string" },
                    },
                ],
            }
            : value),
    };
};
exports.addPathParam = addPathParam;
//# sourceMappingURL=addPathParam.js.map