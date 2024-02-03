"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClassValidator_1 = __importDefault(require("./ClassValidator"));
class BooleanValidator extends ClassValidator_1.default {
    constructor() {
        super(...arguments);
        this.isTrue = () => {
            this.addRule({}, (flag) => typeof flag === "number"
                ? flag === 1
                : flag, (flag) => `Value wasn't true`);
            return this;
        };
        this.isFalse = () => {
            this.addRule({}, (flag) => typeof flag === "number"
                ? flag === 0
                : !flag, (flag) => `Value wasn't false`);
            return this;
        };
    }
}
exports.default = BooleanValidator;
//# sourceMappingURL=BooleanValidator.js.map