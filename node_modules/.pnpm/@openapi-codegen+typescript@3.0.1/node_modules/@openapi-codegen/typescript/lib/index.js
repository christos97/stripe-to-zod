"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPathParam = exports.forceReactQueryComponent = exports.renameComponent = exports.generateFetchers = exports.generateReactQueryComponents = exports.generateSchemaTypes = void 0;
// Generators
var generateSchemaTypes_1 = require("./generators/generateSchemaTypes");
Object.defineProperty(exports, "generateSchemaTypes", { enumerable: true, get: function () { return generateSchemaTypes_1.generateSchemaTypes; } });
var generateReactQueryComponents_1 = require("./generators/generateReactQueryComponents");
Object.defineProperty(exports, "generateReactQueryComponents", { enumerable: true, get: function () { return generateReactQueryComponents_1.generateReactQueryComponents; } });
var generateFetchers_1 = require("./generators/generateFetchers");
Object.defineProperty(exports, "generateFetchers", { enumerable: true, get: function () { return generateFetchers_1.generateFetchers; } });
// Utils
var renameComponent_1 = require("./utils/renameComponent");
Object.defineProperty(exports, "renameComponent", { enumerable: true, get: function () { return renameComponent_1.renameComponent; } });
var forceReactQueryComponent_1 = require("./utils/forceReactQueryComponent");
Object.defineProperty(exports, "forceReactQueryComponent", { enumerable: true, get: function () { return forceReactQueryComponent_1.forceReactQueryComponent; } });
var addPathParam_1 = require("./utils/addPathParam");
Object.defineProperty(exports, "addPathParam", { enumerable: true, get: function () { return addPathParam_1.addPathParam; } });
//# sourceMappingURL=index.js.map