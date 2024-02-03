"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AValidator_1 = require("../../../domain/validator/base/AValidator");
/**
 * Validator for number-related validations.
 * @template Type - Type of the number.
 */
class NumberValidator extends AValidator_1.AValidator {
    constructor() {
        super(...arguments);
        /**
         * Sets a rule to check if the number is greater than a specified minimum value.
         * @param {number} min - The minimum value for the number.
         * @returns {NumberValidator} - The current NumberValidator instance for chaining.
         */
        this.greaterThan = (min) => {
            this.addRule({ minAmount: min }, (n, { minAmount }) => minAmount < n, (n, { minAmount }) => `Number was below the expected result`);
            return this;
        };
        /**
         * Sets a rule to check if the number is less than a specified maximum value.
         * @param {number} max - The maximum value for the number.
         * @returns {NumberValidator} - The current NumberValidator instance for chaining.
         */
        this.lessThan = (max) => {
            this.addRule({ maxAmount: max }, (n, { maxAmount }) => maxAmount > n, (n, { maxAmount }) => `Number was above the expected result`);
            return this;
        };
        /**
         * Sets a rule to check if the number is within a specified range.
         * @param {number} min - The minimum value for the number.
         * @param {number} max - The maximum value for the number.
         * @returns {NumberValidator} - The current NumberValidator instance for chaining.
         */
        this.inRange = (min, max) => {
            this.addRule({ minAmount: min, maxAmount: max }, (n, { minAmount, maxAmount }) => n >= minAmount && n <= maxAmount, (n, { minAmount, maxAmount }) => `Number wasn't in the expected range`);
            return this;
        };
        /**
         * Sets a rule to check if the number is positive.
         * @returns {NumberValidator} - The current NumberValidator instance for chaining.
         */
        this.isPositive = () => {
            this.addRule({}, (n, {}) => n > 0, (n, options) => `Number isn't positive`);
            return this;
        };
        /**
         * Sets a rule to check if the number is negative.
         * @returns {NumberValidator} - The current NumberValidator instance for chaining.
         */
        this.isNegative = () => {
            this.addRule({}, (n, {}) => n < 0, (n, options) => `Number isn't negative`);
            return this;
        };
        /**
         * Sets a rule to check if the number is equal to a specified value.
         * @param {number} value - The value to compare with.
         * @returns {NumberValidator} - The current NumberValidator instance for chaining.
         */
        this.equal = (value) => {
            this.addRule({ equal: value }, (n, { equal }) => n === equal, (n, { equal }) => `Number didn't match the expected output`);
            return this;
        };
        /**
         * Sets a rule to check if the number is not equal to a specified value.
         * @param {number} value - The value to compare with.
         * @returns {NumberValidator} - The current NumberValidator instance for chaining.
         */
        this.notEqual = (value) => {
            this.addRule({ notEqualTo: value }, (n, { notEqualTo }) => n !== notEqualTo, (n, { notEqualTo }) => `Number matched an output that wasn't allowed`);
            return this;
        };
        /**
         * Sets a rule to check if the number is divisible by a specified divisor.
         * @param {number} divisor - The divisor to check for divisibility.
         * @returns {NumberValidator} - The current NumberValidator instance for chaining.
         */
        this.isDivisibleBy = (divisor) => {
            this.addRule({ divisor }, (n, { divisor }) => n % divisor === 0, (n, { divisor }) => `Number must be divisible by ${divisor}`);
            return this;
        };
    }
}
exports.default = NumberValidator;
//# sourceMappingURL=NumberValidator.js.map