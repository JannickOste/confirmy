"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AValidator_1 = require("../../../domain/validator/base/AValidator");
/**
 * Validator for class-related validations.
 * @template T - Type of the class.
 */
class ClassValidator extends AValidator_1.AValidator {
    constructor() {
        super(...arguments);
        this.hasProperty = (name) => {
            this.addRule({ propertyName: name }, (target, { propertyName }) => Object.getOwnPropertyDescriptor(target, propertyName) !== undefined, (target, { propertyName }) => `Class doesn't have the property ${propertyName}`);
            return this;
        };
        this.isInstanceOf = (instanceOfType) => {
            this.addRule({ instanceOf: instanceOfType }, (target, { instanceOf }) => target instanceof instanceOf, (target, { instanceOf }) => `Class is not an instance of ${instanceOf.name}`);
            return this;
        };
        this.isClass = () => {
            this.addRule({}, (target) => {
                var _a;
                return (typeof target === 'function' && target.prototype.constructor !== undefined)
                    || (typeof target === "object" && `${target.constructor}`.toLowerCase().includes(`class ${(_a = target.constructor.name) === null || _a === void 0 ? void 0 : _a.toLowerCase()}`));
            }, (target) => `Value ${`${target.constructor.name}`.toLowerCase()} is not a class`);
            return this;
        };
    }
}
exports.default = ClassValidator;
//# sourceMappingURL=ClassValidator.js.map