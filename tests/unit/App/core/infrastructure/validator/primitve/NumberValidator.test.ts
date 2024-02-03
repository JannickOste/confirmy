
import {describe, expect, test} from '@jest/globals';
import NumberValidator from '../../../../../../../src/App/core/infrastructure/validator/primitive/NumberValidator';

describe("NumberValidator tests", () => 
{
    test("equal: It can validate if a number is equal to another", () => {
        const validator = new NumberValidator().equal(0);

        expect(validator.validate(0).ok).toBeTruthy();
    });

    test("equal: It can validate if a number is not equal to another", () => {
        const validator = new NumberValidator().equal(0);

        expect(validator.validate(1).ok).toBeFalsy();
    });

    test("notEqual: It can validate if a number is equal to another", () => {
        const validator = new NumberValidator().notEqual(0);

        expect(validator.validate(1).ok).toBeTruthy();
    });

    test("notEqual: It can validate if a number is not equal to another", () => {
        const validator = new NumberValidator().notEqual(1);

        expect(validator.validate(1).ok).toBeFalsy();
    });

    test("greaterThen: It can validate if a number is greater ", () => {
        const validator = new NumberValidator().greaterThan(0);

        expect(validator.validate(1).ok).toBeTruthy();
    });

    test("greaterThen: It can validate if a number isnt greater ", () => {
        const validator = new NumberValidator().greaterThan(0);

        expect(validator.validate(-1).ok).toBeFalsy();
    });

    test("lesserThen: It can validate if a number is less then ", () => {
        const validator = new NumberValidator().lessThan(0);

        expect(validator.validate(-1).ok).toBeTruthy();
    });

    test("lesserThen: It can validate if a number isnt less then ", () => {
        const validator = new NumberValidator().lessThan(0);

        expect(validator.validate(1).ok).toBeFalsy();
    });

    test("inRange: It can validate if a number is within a range ", () => {
        const validator = new NumberValidator().inRange(0, 10);

        expect(validator.validate(2).ok).toBeTruthy();
    });
    
    test("inRange: It can validate if a number is not within a range ", () => {
        const validator = new NumberValidator().inRange(0, 10);

        expect(validator.validate(11).ok).toBeFalsy();
    });
    
    test("isDivisibleBy: It can validate if a number is divisible by another ", () => {
        const validator = new NumberValidator().isDivisibleBy(2);

        expect(validator.validate(2).ok).toBeTruthy();
    });

    test("isDivisibleBy: It can validate if a number is not divisible by another ", () => {
        const validator = new NumberValidator().isDivisibleBy(3);

        expect(validator.validate(2).ok).toBeFalsy();
    });
    
    test("isPositive: It can validate if a number is positive ", () => {
        const validator = new NumberValidator().isPositive();

        expect(validator.validate(2).ok).toBeTruthy();
    });

    test("isPositive: It can validate if a number isn't positive ", () => {
        const validator = new NumberValidator().isPositive();

        expect(validator.validate(-1).ok).toBeFalsy();
    });
    
    test("isNegative: It can validate if a number is negative ", () => {
        const validator = new NumberValidator().isNegative();

        expect(validator.validate(-1).ok).toBeTruthy();
    });

    test("isNegative: It can validate if a number isn't negative ", () => {
        const validator = new NumberValidator().isNegative();

        expect(validator.validate(1).ok).toBeFalsy();
    });
});