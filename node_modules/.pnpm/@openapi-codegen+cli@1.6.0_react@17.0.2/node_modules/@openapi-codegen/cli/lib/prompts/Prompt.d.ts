import type { GithubOptions } from "src/types";
import { Choice } from "./Select.js";
import { GithubPullRequestProps, PullRequest } from "./GithubPullRequest.js";
export declare type InputOptions = {
    message: string;
    hint?: string;
    defaultValue?: string;
};
export declare type ConfirmOptions = {
    message: string;
    defaultValue?: boolean;
};
export declare type SelectOptions<TChoice> = {
    choices: Choice<TChoice>[];
    message: string;
    hint?: string;
};
export declare class Prompt {
    private state;
    /**
     * Ink render instance.
     */
    private app;
    /**
     * Close the prompt session.
     */
    close(): void;
    /**
     * Ask a question to the user.
     *
     * @example
     * const name = await prompt.input("What’s your name?")
     */
    input(message: string): Promise<string>;
    input(options: InputOptions): Promise<string>;
    /**
     * Show a list of options to the user.
     *
     * @example
     * const gender = await prompt.select({
     *   choices: [
     *    { label: "Male", value: "m" as const },
     *    { label: "Female", value: "f" as const }
     *   ],
     *   message: "What’s your gender?"
     * })
     */
    select<TChoice>(props: SelectOptions<TChoice>): Promise<TChoice>;
    /**
     * Ask a question with yes or no expected answer.
     *
     * @example
     * const withSauce = await prompt.confirm("Do you want sauce?")
     */
    confirm(message: string): Promise<boolean>;
    confirm(options: ConfirmOptions): Promise<boolean>;
    /**
     * Smart prompt for selecting a github file.
     */
    github(token: string): Promise<GithubOptions>;
    /**
     * Retrieve github token. This will ask if the token is not already stored.
     */
    githubToken(): Promise<string>;
    /**
     * Select a pull-request.
     *
     * @returns The ref of the pull-request
     */
    githubPullRequest(options: Omit<GithubPullRequestProps, "onSubmit">): Promise<PullRequest>;
}
