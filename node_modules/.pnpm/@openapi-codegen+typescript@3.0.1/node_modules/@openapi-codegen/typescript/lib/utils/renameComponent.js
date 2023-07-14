"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renameComponent = void 0;
const lodash_1 = require("lodash");
/**
 * Util to rename an openAPI component name
 */
const renameComponent = ({ openAPIDocument, from, to, }) => {
    const renamedOpenAPIDocument = JSON.parse(JSON.stringify(openAPIDocument).replace(new RegExp(`"${from}"`, "g"), `"${to}"`));
    const fromPath = from.slice("#/".length).replace(/\//g, ".");
    const toPath = to.slice("#/".length).replace(/\//g, ".");
    const schema = (0, lodash_1.get)(openAPIDocument, fromPath);
    (0, lodash_1.set)(renamedOpenAPIDocument, toPath, schema);
    (0, lodash_1.unset)(renamedOpenAPIDocument, fromPath);
    return renamedOpenAPIDocument;
};
exports.renameComponent = renameComponent;
//# sourceMappingURL=renameComponent.js.map