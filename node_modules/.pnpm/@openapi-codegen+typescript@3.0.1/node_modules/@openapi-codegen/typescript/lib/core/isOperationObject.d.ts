import { OperationObject } from "openapi3-ts";
/**
 * Type guard for `OperationObject`
 *
 * @param obj
 */
export declare const isOperationObject: (obj: any) => obj is OperationObject & {
    operationId: string;
};
