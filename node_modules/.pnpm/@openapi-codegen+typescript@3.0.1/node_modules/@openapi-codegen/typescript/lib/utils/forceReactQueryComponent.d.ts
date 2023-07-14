import { OpenAPIObject } from "openapi3-ts";
export declare const forceReactQueryComponent: <OperationId extends string>({ openAPIDocument, operationId, component, }: {
    /**
     * The openAPI document to transform
     */
    openAPIDocument: OpenAPIObject;
    /**
     * OperationId to force
     */
    operationId: OperationId;
    /**
     * Component to use
     */
    component: "useMutate" | "useQuery";
}) => OpenAPIObject;
