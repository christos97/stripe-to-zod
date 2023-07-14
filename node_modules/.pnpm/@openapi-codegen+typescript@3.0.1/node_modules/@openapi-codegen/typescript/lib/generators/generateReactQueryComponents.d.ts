import { ConfigBase, Context } from "./types";
export declare type Config = ConfigBase & {
    /**
     * Generated files paths from `generateSchemaTypes`
     */
    schemasFiles: {
        requestBodies: string;
        schemas: string;
        parameters: string;
        responses: string;
    };
    /**
     * List of headers injected in the custom fetcher
     *
     * This will mark the header as optional in the component API
     */
    injectedHeaders?: string[];
};
export declare const generateReactQueryComponents: (context: Context, config: Config) => Promise<void>;
