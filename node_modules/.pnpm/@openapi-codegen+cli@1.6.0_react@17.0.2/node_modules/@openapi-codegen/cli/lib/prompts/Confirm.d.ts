/// <reference types="react" />
export declare type ConfirmProps = {
    message: string;
    defaultValue?: boolean;
    onSubmit: (value: boolean) => void;
};
export declare const Confirm: ({ message, defaultValue, onSubmit }: ConfirmProps) => JSX.Element;
