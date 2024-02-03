import {describe, expect, test} from '@jest/globals';
import ClassValidator from '../../../../../../../App/core/infrastructure/validator/primitive/ClassValidator';

class TestObject 
{
    someProperty: string = "hello world";
    someFunction: () => void = () => {}
}

describe("ClassValidator tests", () => 
{
    test('isClass: It can validate if an object is a class', () => {
        const validator = new ClassValidator<TestObject>()
                            .isClass();
    
        expect(validator.validate(new TestObject())).toBeTruthy();
        expect(validator.validate(TestObject)).toBeTruthy();
    });
    
    test('isClass: It can validate if an object is not a class', () => {
        const validator = new ClassValidator<TestObject>()
                            .isClass();
    
        expect(validator.validate({}).ok).toBeFalsy();
        expect(validator.validate(1).ok).toBeFalsy();
        expect(validator.validate(false).ok).toBeFalsy();
        expect(validator.validate("").ok).toBeFalsy();
    });
    
    test('hasProperty: It can validate if a class has a property', () => {
        const validator = new ClassValidator<TestObject>()
                            .hasProperty("someProperty");
    
        expect(validator.validate(new TestObject()).ok).toBeTruthy();
    });
    
    test('hasProperty: It can validate if a class doesn\'t have a property', () => {
        const validator = new ClassValidator<{noneExistend: false}>()
                            .hasProperty("noneExistend");
    
        expect(validator.validate(new TestObject()).ok).toBeFalsy();
    });
    
    test('isInstanceOf: It can validate if it is the correct class instance', () => {
        const validator = new ClassValidator<TestObject>()
                            .isInstanceOf(TestObject)
    
        expect(validator.validate(new TestObject()).ok).toBeTruthy();
    });
    
    test('isInstanceOf: It can validate if it isn\'t the correct class instance ', () => {
        const validator = new ClassValidator<ClassValidator<any>>()
                            .isInstanceOf(ClassValidator<any>);
    
        expect(validator.validate(new TestObject()).ok).toBeFalsy();
    });
})