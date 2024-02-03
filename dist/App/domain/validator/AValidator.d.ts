export type ValidatorRule<T> = {
    options: {
        [key: string]: any;
    };
    check: (value: any, options: any) => boolean;
    formatError: (value: any, options: any) => string;
};
export declare abstract class AValidator<ValidatorChildType> {
    private rules;
    constructor(rules?: ValidatorRule<ValidatorChildType>[]);
    validate(value: unknown): {
        ok: boolean;
        errors: string[];
    };
    protected addRule<OptionsType>(options: {
        [key: string]: any;
    }, validationCallback: (value: any, options: OptionsType) => boolean, formatError: (value: any, options: OptionsType) => string): void;
    protected(): void;
}
