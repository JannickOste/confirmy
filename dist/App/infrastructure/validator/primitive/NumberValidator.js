"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberValidator = void 0;
const AValidator_1 = require("../../../domain/validator/AValidator");
class NumberValidator extends AValidator_1.AValidator {
    constructor() {
        super(...arguments);
        this.greaterThen = (min) => {
            this.addRule({ minAmount: min }, (n, { minAmount }) => minAmount <= n, (n, { minAmount }) => `Number was below expected result`);
            return this;
        };
        this.lesserThen = (max) => {
            this.addRule({ maxAmount: max }, (n, { maxAmount }) => maxAmount >= n, (n, { maxAmount }) => `Number was above expected result`);
            return this;
        };
        this.equal = (n) => {
            this.addRule({ equal: n }, (n, { equal }) => n === equal, (n, { equal }) => `Number didnt match the expected output`);
            return this;
        };
        this.notEqual = (n) => {
            this.addRule({ notEqualTo: n }, (n, { notEqualTo }) => n === notEqualTo, (n, { notEqualTo }) => `Number matched an output that wasn't allowed`);
            return this;
        };
    }
}
exports.NumberValidator = NumberValidator;
//# sourceMappingURL=NumberValidator.js.map