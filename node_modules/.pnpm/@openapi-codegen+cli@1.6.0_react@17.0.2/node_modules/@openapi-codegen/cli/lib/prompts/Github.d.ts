/// <reference types="react" />
import type { GithubOptions } from "../types";
export declare type GithubProps = {
    token: string;
    onSubmit: (value: GithubOptions) => void;
};
export declare const Github: ({ onSubmit, token }: GithubProps) => JSX.Element | null;
