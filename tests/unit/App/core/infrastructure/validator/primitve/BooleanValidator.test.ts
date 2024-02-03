import BooleanValidator from "../../../../../../../src/App/core/infrastructure/validator/primitive/BooleanValidator"

describe("BooleanValidator tests", () => {
    test("isTrue: it can validate or a value is true", () => {
        const validator = new BooleanValidator()
                                .isTrue();

        expect(validator.validate(1).ok).toBeTruthy();
    });

    test("isTrue: it can validate or a value isnt true", () => {
        const validator = new BooleanValidator()
                                .isTrue();

        expect(validator.validate(false).ok).toBeFalsy();
    });

    test("isFalse: it can validate or a value is false", () => {
        const validator = new BooleanValidator()
                            .isFalse();

        expect(validator.validate(false).ok).toBeTruthy();
    });

    test("isFalse: it can validate or a value isnt false", () => {
        const validator = new BooleanValidator()
                            .isFalse();

        expect(validator.validate(true).ok).toBeFalsy();
    });
})