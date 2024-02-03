"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const NumberValidator_1 = require("./App/infrastructure/validator/primitive/NumberValidator");
const StringValidator_1 = require("./App/infrastructure/validator/primitive/StringValidator");
const validatorsTest = () => {
    const successStrValid = new StringValidator_1.StringValidator()
        .minLength(1)
        .equal("hello")
        .notEqual("hellos")
        .maxLength(10);
    console.dir(successStrValid.validate("hello"));
    const numValidator = new NumberValidator_1.NumberValidator()
        .equal(1)
        .greaterThen(0)
        .lesserThen(2);
    console.dir(numValidator.validate(1));
};
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    validatorsTest();
});
main();
//# sourceMappingURL=index.js.map