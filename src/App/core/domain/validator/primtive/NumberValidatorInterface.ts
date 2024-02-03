
/**
 * Interface for a number validator with various validation rules.
 */
export default interface NumberValidatorInterface {
    /**
     * Sets a rule to check if the number is greater than a specified minimum value.
     * @param {number} min - The minimum value for the number.
     * @returns {NumberValidatorInterface} - The current NumberValidatorInterface instance for chaining.
     */
    greaterThan(min: number): NumberValidatorInterface;

    /**
     * Sets a rule to check if the number is less than a specified maximum value.
     * @param {number} max - The maximum value for the number.
     * @returns {NumberValidatorInterface} - The current NumberValidatorInterface instance for chaining.
     */
    lessThan(max: number): NumberValidatorInterface;

    /**
     * Sets a rule to check if the number is within a specified range.
     * @param {number} min - The minimum value for the number.
     * @param {number} max - The maximum value for the number.
     * @returns {NumberValidatorInterface} - The current NumberValidatorInterface instance for chaining.
     */
    inRange(min: number, max: number): NumberValidatorInterface;

    /**
     * Sets a rule to check if the number is positive.
     * @returns {NumberValidatorInterface} - The current NumberValidatorInterface instance for chaining.
     */
    isPositive(): NumberValidatorInterface;

    /**
     * Sets a rule to check if the number is negative.
     * @returns {NumberValidatorInterface} - The current NumberValidatorInterface instance for chaining.
     */
    isNegative(): NumberValidatorInterface;

    /**
     * Sets a rule to check if the number is equal to a specified value.
     * @param {number} value - The value to compare with.
     * @returns {NumberValidatorInterface} - The current NumberValidatorInterface instance for chaining.
     */
    equal(value: number): NumberValidatorInterface;

    /**
     * Sets a rule to check if the number is not equal to a specified value.
     * @param {number} value - The value to compare with.
     * @returns {NumberValidatorInterface} - The current NumberValidatorInterface instance for chaining.
     */
    notEqual(value: number): NumberValidatorInterface;

    /**
     * Sets a rule to check if the number is divisible by a specified divisor.
     * @param {number} divisor - The divisor to check for divisibility.
     * @returns {NumberValidatorInterface} - The current NumberValidatorInterface instance for chaining.
     */
    isDivisibleBy(divisor: number): NumberValidatorInterface;
}
