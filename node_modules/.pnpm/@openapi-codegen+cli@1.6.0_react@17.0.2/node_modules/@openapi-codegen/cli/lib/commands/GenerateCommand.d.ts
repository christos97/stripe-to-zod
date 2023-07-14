import { Command } from "clipanion";
export declare class GenerateCommand extends Command {
    config: string | undefined;
    namespace: string;
    source: string | undefined;
    relativePath: string | undefined;
    url: string | undefined;
    method: "get" | "post" | undefined;
    owner: string | undefined;
    repository: string | undefined;
    ref: string | undefined;
    specPath: string | undefined;
    pullRequest: number | boolean | undefined;
    static paths: string[][];
    static usage: import("clipanion").Usage;
    private loadConfigs;
    /**
     * Get `from` options consolidated with cli flags.
     *
     * @param config config from openapi-codegen.config.ts
     * @returns consolidated configuration
     */
    private getFromOptions;
    execute(): Promise<void>;
}
