"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AValidator = void 0;
class AValidator {
    constructor(rules = []) {
        this.rules = rules;
        if (!Array.isArray(rules)) {
            this.rules = [];
        }
    }
    validate(value) {
        let errors = [];
        for (const { options, check, formatError } of this.rules) {
            if (check(value, options))
                continue;
            errors.push(formatError(value, options));
        }
        return {
            ok: errors.length === 0,
            errors: errors
        };
    }
    addRule(options, validationCallback, formatError) {
        this.rules.push({
            options: options,
            check: validationCallback,
            formatError: formatError
        });
    }
    protected() {
        this.rules = [];
    }
}
exports.AValidator = AValidator;
//# sourceMappingURL=AValidator.js.map