import { Command } from "clipanion";
export declare class InitCommand extends Command {
    static paths: string[][];
    config: string | undefined;
    dryRun: boolean | undefined;
    private prompt;
    private hasDependencyInstalled;
    private getConfigSourceFile;
    private askForFile;
    private askForUrl;
    execute(): Promise<void>;
}
