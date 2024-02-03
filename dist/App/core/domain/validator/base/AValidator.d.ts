import IValidationResult from "./IValidationResult";
export declare abstract class AValidator<TargetType> {
    private rules;
    validate(toValidate: unknown): IValidationResult;
    validateSafe(toValidate: TargetType): IValidationResult;
    protected addRule<OptionsType extends {
        [key: string]: any;
    }>(options: OptionsType, validationCallback: (value: any, options: OptionsType) => boolean, formatError: (value: any, options: OptionsType) => string): void;
    protected clear(): void;
}
