/**
 * Interface for a boolean validator with additional validation rules.
 */
export default interface BooleanValidatorInterface {
    /**
     * Sets a rule to check if the boolean value is true.
     * @returns {BooleanValidatorInterface} - The current BooleanValidatorInterface instance for chaining.
     */
    isTrue(): BooleanValidatorInterface;

    /**
     * Sets a rule to check if the boolean value is false.
     * @returns {BooleanValidatorInterface} - The current BooleanValidatorInterface instance for chaining.
     */
    isFalse(): BooleanValidatorInterface;
}
