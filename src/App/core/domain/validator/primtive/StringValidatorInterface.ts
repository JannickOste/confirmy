import { AValidator } from "../base/AValidator";

/**
 * Interface for validating string values.
 * @extends AValidator<string>
 */
export default interface StringValidatorInterface extends AValidator<string> {
    /**
     * Sets a minimum length validation rule for the string.
     * @param {number} min - The minimum length allowed.
     * @returns {StringValidatorInterface} - The current StringValidatorInterface instance for chaining.
     */
    minLength(min: number): StringValidatorInterface;

    /**
     * Sets a maximum length validation rule for the string.
     * @param {number} max - The maximum length allowed.
     * @returns {StringValidatorInterface} - The current StringValidatorInterface instance for chaining.
     */
    maxLength(max: number): StringValidatorInterface;

    /**
     * Sets a validation rule for the string length to be within a specified range.
     * @param {number} min - The minimum length allowed.
     * @param {number} max - The maximum length allowed.
     * @returns {StringValidatorInterface} - The current StringValidatorInterface instance for chaining.
     */
    lengthInRange(min: number, max: number): StringValidatorInterface;

    /**
     * Sets an equality validation rule for the string.
     * @param {string} equal - The string to compare for equality.
     * @returns {StringValidatorInterface} - The current StringValidatorInterface instance for chaining.
     */
    equal(equal: string): StringValidatorInterface;

    /**
     * Sets a non-equality validation rule for the string.
     * @param {string} notEqual - The string to compare for non-equality.
     * @returns {StringValidatorInterface} - The current StringValidatorInterface instance for chaining.
     */
    notEqual(notEqual: string): StringValidatorInterface;

    /**
     * Sets a pattern matching validation rule for the string.
     * @param {RegExp} pattern - The regular expression pattern to match.
     * @returns {StringValidatorInterface} - The current StringValidatorInterface instance for chaining.
     */
    matchPattern(pattern: RegExp): StringValidatorInterface;

    /**
     * Sets a contains validation rule for the string.
     * @param {string} substring - The substring to check for containment.
     * @returns {StringValidatorInterface} - The current StringValidatorInterface instance for chaining.
     */
    contains(substring: string): StringValidatorInterface;

    /**
     * Sets a rule to check if the string ends with a specified substring.
     * @param {string} substring - The substring to check for at the end of the string.
     * @returns {StringValidatorInterface} - The current StringValidatorInterface instance for chaining.
     */
    endsWith(substring: string): StringValidatorInterface;

    /**
     * Sets a rule to check if the string starts with a specified substring.
     * @param {string} substring - The substring to check for at the start of the string.
     * @returns {StringValidatorInterface} - The current StringValidatorInterface instance for chaining.
     */
    startsWith(substring: string): StringValidatorInterface;

    /**
     * Sets a rule to check if the string is a palindrome.
     * @returns {StringValidatorInterface} - The current StringValidatorInterface instance for chaining.
     */
    isPalindrome(): StringValidatorInterface;

    /**
     * Sets a rule to check if the string is a valid email address.
     * @returns {StringValidatorInterface} - The current StringValidatorInterface instance for chaining.
     */
    isEmail(): StringValidatorInterface;

    /**
     * Sets a rule to check if the string is a valid URL.
     * @returns {StringValidatorInterface} - The current StringValidatorInterface instance for chaining.
     */
    isURL(): StringValidatorInterface;

    /**
     * Sets a rule to check if the string is a valid UUID.
     * @returns {StringValidatorInterface} - The current StringValidatorInterface instance for chaining.
     */
    isUUID(): StringValidatorInterface;
}
