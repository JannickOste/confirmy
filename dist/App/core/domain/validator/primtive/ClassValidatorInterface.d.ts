/**
 * Interface for a class validator with various validation rules.
 * @template T - Type of the class.
 */
export default interface ClassValidatorInterface<T> {
    /**
     * Sets a rule to check if a class has a specified property.
     * @param {keyof T} name - The name of the property to check.
     * @returns {ClassValidatorInterface<T>} - The current ClassValidatorInterface instance for chaining.
     */
    hasProperty(name: keyof T): ClassValidatorInterface<T>;
    /**
     * Sets a rule to check if a class is an instance of a specified class.
     * @param {new (...args: any[]) => T} instanceOfType - The class constructor to check for.
     * @returns {ClassValidatorInterface<T>} - The current ClassValidatorInterface instance for chaining.
     */
    isInstanceOf(instanceOfType: new (...args: any[]) => T): ClassValidatorInterface<T>;
    /**
     * Sets a rule to check if a value is a class.
     * @returns {ClassValidatorInterface<T>} - The current ClassValidatorInterface instance for chaining.
     */
    isClass(): ClassValidatorInterface<T>;
}
