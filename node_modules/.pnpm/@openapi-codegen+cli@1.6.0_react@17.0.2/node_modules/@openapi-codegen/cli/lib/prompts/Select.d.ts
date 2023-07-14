/// <reference types="react" />
export declare type Choice<T> = {
    value: T;
    label: string;
    hint?: string;
};
export declare type SelectProps<TChoice> = {
    message?: string;
    choices: Choice<TChoice>[];
    onSubmit: (value: TChoice) => void;
};
export declare function Select<TChoice>({ message, choices, onSubmit, }: SelectProps<TChoice>): JSX.Element;
