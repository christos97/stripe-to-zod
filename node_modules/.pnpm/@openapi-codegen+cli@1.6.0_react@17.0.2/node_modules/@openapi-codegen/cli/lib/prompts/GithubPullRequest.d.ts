/// <reference types="react" />
export declare type PullRequest = {
    ref: string;
    owner: string;
    repository: string;
};
export declare type GithubPullRequestProps = {
    /**
     * If provided, the prompt will just resolve the branch name without asking anything else.
     */
    pullRequestNumber?: number;
    token: string;
    repository: string;
    owner: string;
    onSubmit: (head: PullRequest) => void;
};
export declare const GithubPullRequest: ({ token, repository, pullRequestNumber, owner, onSubmit, }: GithubPullRequestProps) => JSX.Element | null;
