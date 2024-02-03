import { AValidator } from "../../../domain/validator/base/AValidator";
import NumberValidatorInterface from "../../../domain/validator/primtive/NumberValidatorInterface";
/**
 * Validator for number-related validations.
 * @template Type - Type of the number.
 */
export default class NumberValidator extends AValidator<number> implements NumberValidatorInterface {
    /**
     * Sets a rule to check if the number is greater than a specified minimum value.
     * @param {number} min - The minimum value for the number.
     * @returns {NumberValidator} - The current NumberValidator instance for chaining.
     */
    greaterThan: (min: number) => NumberValidator;
    /**
     * Sets a rule to check if the number is less than a specified maximum value.
     * @param {number} max - The maximum value for the number.
     * @returns {NumberValidator} - The current NumberValidator instance for chaining.
     */
    lessThan: (max: number) => NumberValidator;
    /**
     * Sets a rule to check if the number is within a specified range.
     * @param {number} min - The minimum value for the number.
     * @param {number} max - The maximum value for the number.
     * @returns {NumberValidator} - The current NumberValidator instance for chaining.
     */
    inRange: (min: number, max: number) => NumberValidator;
    /**
     * Sets a rule to check if the number is positive.
     * @returns {NumberValidator} - The current NumberValidator instance for chaining.
     */
    isPositive: () => NumberValidator;
    /**
     * Sets a rule to check if the number is negative.
     * @returns {NumberValidator} - The current NumberValidator instance for chaining.
     */
    isNegative: () => NumberValidator;
    /**
     * Sets a rule to check if the number is equal to a specified value.
     * @param {number} value - The value to compare with.
     * @returns {NumberValidator} - The current NumberValidator instance for chaining.
     */
    equal: (value: number) => NumberValidator;
    /**
     * Sets a rule to check if the number is not equal to a specified value.
     * @param {number} value - The value to compare with.
     * @returns {NumberValidator} - The current NumberValidator instance for chaining.
     */
    notEqual: (value: number) => NumberValidator;
    /**
     * Sets a rule to check if the number is divisible by a specified divisor.
     * @param {number} divisor - The divisor to check for divisibility.
     * @returns {NumberValidator} - The current NumberValidator instance for chaining.
     */
    isDivisibleBy: (divisor: number) => NumberValidator;
}
