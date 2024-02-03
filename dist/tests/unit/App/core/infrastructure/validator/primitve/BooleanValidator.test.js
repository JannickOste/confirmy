"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BooleanValidator_1 = __importDefault(require("../../../../../../../App/core/infrastructure/validator/primitive/BooleanValidator"));
describe("BooleanValidator tests", () => {
    test("isTrue: it can validate or a value is true", () => {
        const validator = new BooleanValidator_1.default()
            .isTrue();
        expect(validator.validate(1).ok).toBeTruthy();
    });
    test("isTrue: it can validate or a value isnt true", () => {
        const validator = new BooleanValidator_1.default()
            .isTrue();
        expect(validator.validate(false).ok).toBeFalsy();
    });
    test("isFalse: it can validate or a value is false", () => {
        const validator = new BooleanValidator_1.default()
            .isFalse();
        expect(validator.validate(false).ok).toBeTruthy();
    });
    test("isFalse: it can validate or a value isnt false", () => {
        const validator = new BooleanValidator_1.default()
            .isFalse();
        expect(validator.validate(true).ok).toBeFalsy();
    });
});
//# sourceMappingURL=BooleanValidator.test.js.map