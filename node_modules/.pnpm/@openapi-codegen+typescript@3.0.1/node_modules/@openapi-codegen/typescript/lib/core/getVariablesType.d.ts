import ts from "typescript";
/**
 * Get fetcher variables types from the operation types
 */
export declare const getVariablesType: ({ requestBodyType, requestBodyOptional, headersType, headersOptional, pathParamsType, pathParamsOptional, queryParamsType, queryParamsOptional, }: {
    requestBodyType: ts.TypeNode;
    requestBodyOptional: boolean;
    headersType: ts.TypeNode;
    headersOptional: boolean;
    pathParamsType: ts.TypeNode;
    pathParamsOptional: boolean;
    queryParamsType: ts.TypeNode;
    queryParamsOptional: boolean;
}) => ts.TypeLiteralNode | ts.KeywordTypeNode<ts.SyntaxKind.VoidKeyword>;
