"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forceReactQueryComponent = void 0;
const lodash_1 = require("lodash");
const isOperationObject_1 = require("../core/isOperationObject");
const isVerb_1 = require("../core/isVerb");
const forceReactQueryComponent = ({ openAPIDocument, operationId, component, }) => {
    let extensionPath;
    // Find the component
    Object.entries(openAPIDocument.paths).forEach(([route, verbs]) => {
        Object.entries(verbs).forEach(([verb, operation]) => {
            if (!(0, isVerb_1.isVerb)(verb) || !(0, isOperationObject_1.isOperationObject)(operation))
                return;
            if (operation.operationId === operationId) {
                extensionPath = `paths.${route}.${verb}.x-openapi-codegen-component`;
            }
        });
    });
    if (!extensionPath) {
        throw new Error(`[forceReactQueryComponent] Operation with the operationId "${operationId}" not found`);
    }
    return (0, lodash_1.set)((0, lodash_1.cloneDeep)(openAPIDocument), extensionPath, component);
};
exports.forceReactQueryComponent = forceReactQueryComponent;
//# sourceMappingURL=forceReactQueryComponent.js.map