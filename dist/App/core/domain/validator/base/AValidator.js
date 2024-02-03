"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AValidator = void 0;
class AValidator {
    constructor() {
        this.rules = [];
    }
    validate(toValidate) {
        let errors = [];
        for (const { options, check: validationCallback, formatError } of this.rules) {
            if (validationCallback(toValidate, options))
                continue;
            errors.push(formatError(toValidate, options));
        }
        return {
            ok: errors.length === 0,
            errors: errors
        };
    }
    validateSafe(toValidate) {
        return this.validate(toValidate);
    }
    addRule(options, validationCallback, formatError) {
        this.rules.push({
            options: options,
            check: validationCallback,
            formatError: formatError
        });
    }
    clear() {
        this.rules = [];
    }
}
exports.AValidator = AValidator;
//# sourceMappingURL=AValidator.js.map