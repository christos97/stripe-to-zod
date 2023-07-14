/// <reference types="react" />
import { Observable } from "rxjs";
import { InputProps } from "./Input.js";
import { SelectProps } from "./Select.js";
import { ConfirmProps } from "./Confirm.js";
import { GithubProps } from "./Github.js";
import { GithubTokenProps } from "./GithubToken.js";
import { GithubPullRequestProps } from "./GithubPullRequest.js";
export declare type PromptUnit = ({
    type: "input";
} & InputProps) | ({
    type: "select";
} & SelectProps<any>) | ({
    type: "confirm";
} & ConfirmProps) | ({
    type: "github";
} & GithubProps) | ({
    type: "githubToken";
} & GithubTokenProps) | ({
    type: "githubPullRequest";
} & GithubPullRequestProps);
declare type AppProps = {
    state: Observable<PromptUnit>;
};
export declare function App({ state }: AppProps): JSX.Element | null;
export {};
