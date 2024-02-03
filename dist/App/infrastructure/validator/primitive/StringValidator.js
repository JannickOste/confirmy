"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringValidator = void 0;
const AValidator_1 = require("../../../domain/validator/AValidator");
class StringValidator extends AValidator_1.AValidator {
    constructor() {
        super(...arguments);
        this.minLength = (min) => {
            this.addRule({ minLength: min }, (str, { minLength }) => str.length >= minLength, (str, { minLength }) => `Length must be greater or equal to ${minLength}`);
            return this;
        };
        this.maxLength = (max) => {
            this.addRule({ maxLength: max }, (str, { maxLength }) => str.length <= maxLength, (str, { maxLength }) => `Length must be lesser or equal to ${maxLength}`);
            return this;
        };
        this.equal = (equal) => {
            this.addRule({ equalTo: equal }, (str, { equalTo }) => str === equalTo, (str, { equalTo }) => `String is not equal to expected result`);
            return this;
        };
        this.notEqual = (notEqual) => {
            this.addRule({ notEqualTo: notEqual }, (str, { notEqualTo }) => str !== notEqualTo, (str, { notEqualTo }) => `String didn't match the expected result`);
            return this;
        };
        this.matchPattern = (pattern) => {
            this.addRule({ regexPattern: pattern }, (str, { regexPattern }) => regexPattern.test(str), (str, { regexPattern }) => `String didn't match the expected pattern`);
            return this;
        };
    }
}
exports.StringValidator = StringValidator;
//# sourceMappingURL=StringValidator.js.map