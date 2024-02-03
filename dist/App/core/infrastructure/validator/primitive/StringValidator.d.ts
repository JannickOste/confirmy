import { AValidator } from "../../../domain/validator/base/AValidator";
import StringValidatorInterface from "../../../domain/validator/primtive/StringValidatorInterface";
export default class StringValidator extends AValidator<String> implements StringValidatorInterface {
    minLength: (min: number) => StringValidator;
    maxLength: (max: number) => StringValidator;
    equal: (equal: string) => StringValidator;
    notEqual: (notEqual: string) => StringValidator;
    matchPattern: (pattern: RegExp) => StringValidator;
    contains: (substring: string) => StringValidator;
    endsWith: (substring: string) => StringValidator;
    startsWith: (substring: string) => StringValidator;
}
