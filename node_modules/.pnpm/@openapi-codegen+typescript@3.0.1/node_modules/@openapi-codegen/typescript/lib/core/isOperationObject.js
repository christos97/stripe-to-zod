"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOperationObject = void 0;
/**
 * Type guard for `OperationObject`
 *
 * @param obj
 */
const isOperationObject = (obj) => typeof obj === "object" && typeof obj.operationId === "string";
exports.isOperationObject = isOperationObject;
//# sourceMappingURL=isOperationObject.js.map