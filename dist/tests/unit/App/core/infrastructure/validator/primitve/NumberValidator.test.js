"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const NumberValidator_1 = __importDefault(require("../../../../../../../App/core/infrastructure/validator/primitive/NumberValidator"));
(0, globals_1.describe)("NumberValidator tests", () => {
    (0, globals_1.test)("equal: It can validate if a number is equal to another", () => {
        const validator = new NumberValidator_1.default().equal(0);
        (0, globals_1.expect)(validator.validate(0).ok).toBeTruthy();
    });
    (0, globals_1.test)("equal: It can validate if a number is not equal to another", () => {
        const validator = new NumberValidator_1.default().equal(0);
        (0, globals_1.expect)(validator.validate(1).ok).toBeFalsy();
    });
    (0, globals_1.test)("notEqual: It can validate if a number is equal to another", () => {
        const validator = new NumberValidator_1.default().notEqual(0);
        (0, globals_1.expect)(validator.validate(1).ok).toBeTruthy();
    });
    (0, globals_1.test)("notEqual: It can validate if a number is not equal to another", () => {
        const validator = new NumberValidator_1.default().notEqual(1);
        (0, globals_1.expect)(validator.validate(1).ok).toBeFalsy();
    });
    (0, globals_1.test)("greaterThen: It can validate if a number is greater ", () => {
        const validator = new NumberValidator_1.default().greaterThan(0);
        (0, globals_1.expect)(validator.validate(1).ok).toBeTruthy();
    });
    (0, globals_1.test)("greaterThen: It can validate if a number isnt greater ", () => {
        const validator = new NumberValidator_1.default().greaterThan(0);
        (0, globals_1.expect)(validator.validate(-1).ok).toBeFalsy();
    });
    (0, globals_1.test)("lesserThen: It can validate if a number is less then ", () => {
        const validator = new NumberValidator_1.default().lessThan(0);
        (0, globals_1.expect)(validator.validate(-1).ok).toBeTruthy();
    });
    (0, globals_1.test)("lesserThen: It can validate if a number isnt less then ", () => {
        const validator = new NumberValidator_1.default().lessThan(0);
        (0, globals_1.expect)(validator.validate(1).ok).toBeFalsy();
    });
    (0, globals_1.test)("inRange: It can validate if a number is within a range ", () => {
        const validator = new NumberValidator_1.default().inRange(0, 10);
        (0, globals_1.expect)(validator.validate(2).ok).toBeTruthy();
    });
    (0, globals_1.test)("inRange: It can validate if a number is not within a range ", () => {
        const validator = new NumberValidator_1.default().inRange(0, 10);
        (0, globals_1.expect)(validator.validate(11).ok).toBeFalsy();
    });
    (0, globals_1.test)("isDivisibleBy: It can validate if a number is divisible by another ", () => {
        const validator = new NumberValidator_1.default().isDivisibleBy(2);
        (0, globals_1.expect)(validator.validate(2).ok).toBeTruthy();
    });
    (0, globals_1.test)("isDivisibleBy: It can validate if a number is not divisible by another ", () => {
        const validator = new NumberValidator_1.default().isDivisibleBy(3);
        (0, globals_1.expect)(validator.validate(2).ok).toBeFalsy();
    });
    (0, globals_1.test)("isPositive: It can validate if a number is positive ", () => {
        const validator = new NumberValidator_1.default().isPositive();
        (0, globals_1.expect)(validator.validate(2).ok).toBeTruthy();
    });
    (0, globals_1.test)("isPositive: It can validate if a number isn't positive ", () => {
        const validator = new NumberValidator_1.default().isPositive();
        (0, globals_1.expect)(validator.validate(-1).ok).toBeFalsy();
    });
    (0, globals_1.test)("isNegative: It can validate if a number is negative ", () => {
        const validator = new NumberValidator_1.default().isNegative();
        (0, globals_1.expect)(validator.validate(-1).ok).toBeTruthy();
    });
    (0, globals_1.test)("isNegative: It can validate if a number isn't negative ", () => {
        const validator = new NumberValidator_1.default().isNegative();
        (0, globals_1.expect)(validator.validate(1).ok).toBeFalsy();
    });
});
//# sourceMappingURL=NumberValidator.test.js.map