/// <reference types="react" />
export declare type GithubTokenProps = {
    onSubmit: (token: string) => void;
};
/**
 * Retrieve github token, ask if not already set.
 */
export declare const GithubToken: ({ onSubmit }: GithubTokenProps) => JSX.Element | null;
