import ts from "typescript";
import type { Import } from "../types";
interface AddImportsOptions {
    /**
     * Original sourceFile
     */
    sourceFile: ts.SourceFile;
    /**
     * List of imports to insert in the file
     */
    importsToInsert: Import[];
    /**
     * List of the existing imports (module name)
     */
    existingImports: string[];
    /**
     * Config property to add
     */
    configProperty: ts.PropertyAssignment;
}
export declare function updateConfig({ sourceFile, existingImports, importsToInsert, configProperty, }: AddImportsOptions): ts.SourceFile;
export {};
