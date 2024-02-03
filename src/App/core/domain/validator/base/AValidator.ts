import IValidationResult from "./IValidationResult";
import IValidatorRule from "./IValidatorRule";

export abstract class AValidator<TargetType>
{
    private rules: IValidatorRule[] = [];

    public validate(
        toValidate: unknown
    ): IValidationResult
    {
        let errors: string[] = [];
        
        for(const {options, check: validationCallback, formatError} of this.rules)
        {
            if(validationCallback(toValidate, options))
                continue;

            errors.push(formatError(toValidate, options));
        }

        return {
            ok: errors.length === 0,
            errors: errors
        }
    }   

    public validateSafe(
        toValidate: TargetType
    ): IValidationResult
    {
        return this.validate(toValidate);
    }

    protected addRule<OptionsType extends {[key:string]:any}>(
        options: OptionsType, 
        validationCallback: (value: any, options: OptionsType) => boolean,
        formatError: (value: any, options: OptionsType) => string
    ): void
    {
        this.rules.push({
                options: options,
                check: validationCallback,
                formatError: formatError
        });
    }

    protected clear(): void 
    {
        this.rules = [];
    }
}