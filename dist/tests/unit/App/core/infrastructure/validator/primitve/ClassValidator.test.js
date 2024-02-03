"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const ClassValidator_1 = __importDefault(require("../../../../../../../App/core/infrastructure/validator/primitive/ClassValidator"));
class TestObject {
    constructor() {
        this.someProperty = "hello world";
        this.someFunction = () => { };
    }
}
(0, globals_1.describe)("ClassValidator tests", () => {
    (0, globals_1.test)('isClass: It can validate if an object is a class', () => {
        const validator = new ClassValidator_1.default()
            .isClass();
        (0, globals_1.expect)(validator.validate(new TestObject())).toBeTruthy();
        (0, globals_1.expect)(validator.validate(TestObject)).toBeTruthy();
    });
    (0, globals_1.test)('isClass: It can validate if an object is not a class', () => {
        const validator = new ClassValidator_1.default()
            .isClass();
        (0, globals_1.expect)(validator.validate({}).ok).toBeFalsy();
        (0, globals_1.expect)(validator.validate(1).ok).toBeFalsy();
        (0, globals_1.expect)(validator.validate(false).ok).toBeFalsy();
        (0, globals_1.expect)(validator.validate("").ok).toBeFalsy();
    });
    (0, globals_1.test)('hasProperty: It can validate if a class has a property', () => {
        const validator = new ClassValidator_1.default()
            .hasProperty("someProperty");
        (0, globals_1.expect)(validator.validate(new TestObject()).ok).toBeTruthy();
    });
    (0, globals_1.test)('hasProperty: It can validate if a class doesn\'t have a property', () => {
        const validator = new ClassValidator_1.default()
            .hasProperty("noneExistend");
        (0, globals_1.expect)(validator.validate(new TestObject()).ok).toBeFalsy();
    });
    (0, globals_1.test)('isInstanceOf: It can validate if it is the correct class instance', () => {
        const validator = new ClassValidator_1.default()
            .isInstanceOf(TestObject);
        (0, globals_1.expect)(validator.validate(new TestObject()).ok).toBeTruthy();
    });
    (0, globals_1.test)('isInstanceOf: It can validate if it isn\'t the correct class instance ', () => {
        const validator = new ClassValidator_1.default()
            .isInstanceOf((ClassValidator_1.default));
        (0, globals_1.expect)(validator.validate(new TestObject()).ok).toBeFalsy();
    });
});
//# sourceMappingURL=ClassValidator.test.js.map