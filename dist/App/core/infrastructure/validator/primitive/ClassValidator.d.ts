import { AValidator } from "../../../domain/validator/base/AValidator";
import ClassValidatorInterface from "../../../domain/validator/primtive/ClassValidatorInterface";
/**
 * Validator for class-related validations.
 * @template T - Type of the class.
 */
export default class ClassValidator<T> extends AValidator<new (...args: any[]) => T> implements ClassValidatorInterface<T> {
    hasProperty: (name: keyof T) => ClassValidator<T>;
    isInstanceOf: (instanceOfType: new (...args: any[]) => T) => ClassValidator<T>;
    isClass: () => ClassValidator<T>;
}
