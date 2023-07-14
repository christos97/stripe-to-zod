interface File {
    sourceText: string;
    relativePath: string;
}
export interface ValidateGeneratedTypesProps {
    sourceTypes: File;
    zodSchemas: File;
    integrationTests: File;
    skipParseJSDoc: boolean;
}
/**
 * Use typescript compiler to validate the generated zod schemas.
 */
export declare function validateGeneratedTypes({ sourceTypes, zodSchemas, integrationTests, skipParseJSDoc, }: ValidateGeneratedTypesProps): string[];
export {};
