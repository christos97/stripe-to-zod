import { ComponentsObject, OperationObject, ParameterObject } from "openapi3-ts";
/**
 * Resolve $ref and group parameters by `type`.
 *
 * @param parameters Operation parameters
 * @param components #/components
 */
export declare const getParamsGroupByType: (parameters?: OperationObject["parameters"], components?: ComponentsObject) => {
    queryParams: ParameterObject[];
    pathParams: ParameterObject[];
    headerParams: ParameterObject[];
};
