import { AValidator } from "../../../domain/validator/AValidator";
export declare class StringValidator extends AValidator<StringValidator> {
    minLength: (min: number) => StringValidator;
    maxLength: (max: number) => StringValidator;
    equal: (equal: string) => StringValidator;
    notEqual: (notEqual: string) => StringValidator;
    matchPattern: (pattern: RegExp) => StringValidator;
}
