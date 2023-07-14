import { OpenAPIObject, OperationObject, PathItemObject } from "openapi3-ts";
import ts from "typescript";
export declare type GetOperationTypesOptions = {
    operationId: string;
    operation: OperationObject;
    openAPIDocument: OpenAPIObject;
    injectedHeaders?: string[];
    pathParameters?: PathItemObject["parameters"];
    printNodes: (nodes: ts.Node[]) => string;
    variablesExtraPropsType: ts.TypeNode;
};
export declare type GetOperationTypesOutput = {
    dataType: ts.TypeNode;
    errorType: ts.TypeNode;
    requestBodyType: ts.TypeNode;
    pathParamsType: ts.TypeNode;
    variablesType: ts.TypeNode;
    queryParamsType: ts.TypeNode;
    headersType: ts.TypeNode;
    declarationNodes: ts.Node[];
};
/**
 * Get operation types (data, error, params) and associated declaration nodes.
 */
export declare const getOperationTypes: ({ operationId, operation, openAPIDocument, printNodes, pathParameters, injectedHeaders, variablesExtraPropsType, }: GetOperationTypesOptions) => GetOperationTypesOutput;
