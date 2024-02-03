import { AValidator } from "../../../domain/validator/AValidator";
export declare class NumberValidator extends AValidator<NumberValidator> {
    greaterThen: (min: number) => NumberValidator;
    lesserThen: (max: number) => NumberValidator;
    equal: (n: number) => NumberValidator;
    notEqual: (n: number) => NumberValidator;
}
