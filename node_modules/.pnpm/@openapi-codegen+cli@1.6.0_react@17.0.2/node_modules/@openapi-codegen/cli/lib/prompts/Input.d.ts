/// <reference types="react" />
export declare type InputProps = {
    message: string;
    hint?: string;
    defaultValue?: string;
    onSubmit: (value: string) => void;
};
export declare const Input: ({ message, hint, defaultValue, onSubmit, }: InputProps) => JSX.Element;
