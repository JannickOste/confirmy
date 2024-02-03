import { AValidator } from "../../../domain/validator/base/AValidator";
import ClassValidatorInterface from "../../../domain/validator/primtive/ClassValidatorInterface";

/**
 * Validator for class-related validations.
 * @template T - Type of the class.
 */
export default class ClassValidator<T> extends AValidator<new (...args: any[]) => T> implements ClassValidatorInterface<T> {
    hasProperty: (name: keyof T) => ClassValidator<T> = (name: keyof T): ClassValidator<T> => {
        type PropertyNameOptions = { propertyName: string }

        this.addRule<PropertyNameOptions>(
            { propertyName: name as string },
            (target: any, { propertyName }: PropertyNameOptions) => Object.getOwnPropertyDescriptor(target, propertyName) !== undefined,
            (target: unknown, { propertyName }: PropertyNameOptions) => `Class doesn't have the property ${propertyName}`,
        );

        return this;
    }

    isInstanceOf: (instanceOfType: new (...args: any[]) => T) => ClassValidator<T> = (instanceOfType: new (...args: any[]) => T): ClassValidator<T> => {
        type InstanceOfOptions = {
            instanceOf: new (...args: any[]) => T;
        };

        this.addRule<InstanceOfOptions>(
            { instanceOf: instanceOfType },
            (target: any, { instanceOf }: InstanceOfOptions) => target instanceof instanceOf,
            (target: unknown, { instanceOf }: InstanceOfOptions) => `Class is not an instance of ${instanceOf.name}`,
        );

        return this;
    }

    isClass: () => ClassValidator<T> = (): ClassValidator<T> => {
        this.addRule<{}>(
            {},
            (target: any) => (typeof target === 'function' && target.prototype.constructor !== undefined)
                            || (typeof target === "object" && `${target.constructor}`.toLowerCase().includes(`class ${target.constructor.name?.toLowerCase()}`)),
            (target: any) => `Value ${`${target.constructor.name}`.toLowerCase()} is not a class`,
        );

        return this;
    }
}