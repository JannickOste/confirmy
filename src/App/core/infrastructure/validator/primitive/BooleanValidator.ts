import BooleanValidatorInterface from "../../../domain/validator/primtive/BooleanValidatorInterface";
import  ClassValidator  from "./ClassValidator";

export default class BooleanValidator extends ClassValidator<boolean> implements BooleanValidatorInterface
{    
    isTrue: () => BooleanValidator = () => 
    {
        this.addRule<{}>(
            {},
            (flag: boolean | number) => typeof flag === "number" 
                                                ? flag === 1
                                                : flag,
            (flag: boolean) => `Value wasn't true`,
        )
        
        return this;
    }

    isFalse: () => BooleanValidator = () => 
    {
        this.addRule<{}>(
            {},
            (flag: boolean | number) => typeof flag === "number" 
                                        ? flag === 0
                                        : !flag,
            (flag: boolean) => `Value wasn't false`,
        )
        
        return this;
    }
    
}