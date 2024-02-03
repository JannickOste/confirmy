import BooleanValidatorInterface from "../../../domain/validator/primtive/BooleanValidatorInterface";
import ClassValidator from "./ClassValidator";
export default class BooleanValidator extends ClassValidator<boolean> implements BooleanValidatorInterface {
    isTrue: () => BooleanValidator;
    isFalse: () => BooleanValidator;
}
