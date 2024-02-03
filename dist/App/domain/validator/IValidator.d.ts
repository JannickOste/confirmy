import { IValidationResult } from "./IValidationResult";
export interface IValidator {
    validate(rules: any): IValidationResult;
}
