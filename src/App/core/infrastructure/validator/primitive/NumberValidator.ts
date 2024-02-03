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
    greaterThan: (min: number) => NumberValidator = (min: number): NumberValidator => {
        type GreaterThanOptions = { minAmount: number };

        this.addRule<GreaterThanOptions>(
            { minAmount: min },
            (n: number, { minAmount }: GreaterThanOptions) => minAmount < n,
            (n: number, { minAmount }: GreaterThanOptions) => `Number was below the expected result`,
        );

        return this;
    }

    /**
     * Sets a rule to check if the number is less than a specified maximum value.
     * @param {number} max - The maximum value for the number.
     * @returns {NumberValidator} - The current NumberValidator instance for chaining.
     */
    lessThan: (max: number) => NumberValidator = (max: number): NumberValidator => {
        type LessThanOptions = { maxAmount: number };

        this.addRule<LessThanOptions>(
            { maxAmount: max },
            (n: number, { maxAmount }: LessThanOptions) => maxAmount > n,
            (n: number, { maxAmount }: LessThanOptions) => `Number was above the expected result`,
        );

        return this;
    }

    /**
     * Sets a rule to check if the number is within a specified range.
     * @param {number} min - The minimum value for the number.
     * @param {number} max - The maximum value for the number.
     * @returns {NumberValidator} - The current NumberValidator instance for chaining.
     */
    inRange: (min: number, max: number) => NumberValidator = (min: number, max: number): NumberValidator => {
        type RangeOptions = { minAmount: number, maxAmount: number };

        this.addRule<RangeOptions>(
            { minAmount: min, maxAmount: max },
            (n: number, { minAmount, maxAmount }: RangeOptions) => n >= minAmount && n <= maxAmount,
            (n: number, { minAmount, maxAmount }: RangeOptions) => `Number wasn't in the expected range`,
        )

        return this;
    }

    /**
     * Sets a rule to check if the number is positive.
     * @returns {NumberValidator} - The current NumberValidator instance for chaining.
     */
    isPositive: () => NumberValidator = (): NumberValidator => {
        type PositiveOptions = {}

        this.addRule<PositiveOptions>(
            {},
            (n: number, {}: PositiveOptions) => n > 0,
            (n: number, options: PositiveOptions) => `Number isn't positive`
        )

        return this;
    }

    /**
     * Sets a rule to check if the number is negative.
     * @returns {NumberValidator} - The current NumberValidator instance for chaining.
     */
    isNegative: () => NumberValidator = (): NumberValidator => {
        type NegativeOptions = {}

        this.addRule<NegativeOptions>(
            {},
            (n: number, {}: NegativeOptions) => n < 0,
            (n: number, options: NegativeOptions) => `Number isn't negative`
        )

        return this;
    }

    /**
     * Sets a rule to check if the number is equal to a specified value.
     * @param {number} value - The value to compare with.
     * @returns {NumberValidator} - The current NumberValidator instance for chaining.
     */
    equal: (value: number) => NumberValidator = (value) =>
    {
        type EqualOptions = { equal: number }

        this.addRule<EqualOptions>(
            { equal: value },
            (n: number, { equal }: EqualOptions) => n === equal,
            (n: number, { equal }: EqualOptions) => `Number didn't match the expected output`,
        );

        return this;
    }

    /**
     * Sets a rule to check if the number is not equal to a specified value.
     * @param {number} value - The value to compare with.
     * @returns {NumberValidator} - The current NumberValidator instance for chaining.
     */
    notEqual: (value: number) => NumberValidator = (value) =>
    {
        type NotEqualOptions = { notEqualTo: number }

        this.addRule<NotEqualOptions>(
            { notEqualTo: value },
            (n: number, { notEqualTo }: NotEqualOptions) => n !== notEqualTo,
            (n: number, { notEqualTo }: NotEqualOptions) => `Number matched an output that wasn't allowed`,
        )

        return this;
    }

    /**
     * Sets a rule to check if the number is divisible by a specified divisor.
     * @param {number} divisor - The divisor to check for divisibility.
     * @returns {NumberValidator} - The current NumberValidator instance for chaining.
     */
    isDivisibleBy: (divisor: number) => NumberValidator = (divisor: number) => {
        type DivisibilityOptions = { divisor: number };

        this.addRule<DivisibilityOptions>(
            { divisor },
            (n: number, { divisor }: DivisibilityOptions) => n % divisor === 0,
            (n: number, { divisor }: DivisibilityOptions) => `Number must be divisible by ${divisor}`,
        );

        return this;
    }
}