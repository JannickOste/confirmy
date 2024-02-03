import { AValidator } from "../../../domain/validator/base/AValidator";
import StringValidatorInterface from "../../../domain/validator/primtive/StringValidatorInterface";

export default class StringValidator extends AValidator<String> implements StringValidatorInterface {
    minLength: (min: number) => StringValidator = (min: number): StringValidator => {
        type MinLengthOptions = { minLength: number }

        this.addRule<MinLengthOptions>(
            { minLength: min },

            (str: string, { minLength }: MinLengthOptions) => str.length >= minLength,
            (str: string, { minLength }: MinLengthOptions) => `Length must be greater or equal to ${minLength}`,
        );

        return this;
    }

    maxLength: (max: number) => StringValidator = (max: number): StringValidator => {
        type MaxLengthOptions = { maxLength: number }

        this.addRule<MaxLengthOptions>(
            { maxLength: max },

            (str: string, { maxLength }: MaxLengthOptions) => str.length <= maxLength,
            (str: string, { maxLength }: MaxLengthOptions) => `Length must be lesser or equal to ${maxLength}`,
        );

        return this;
    }

    equal: (equal: string) => StringValidator = (equal: string): StringValidator => {
        type EqualOptions = { equalTo: string }

        this.addRule<EqualOptions>(
            { equalTo: equal },

            (str: string, { equalTo }: EqualOptions) => str === equalTo,
            (str: string, { equalTo }: EqualOptions) => `String is not equal to expected result`,
        );

        return this;
    }

    notEqual: (notEqual: string) => StringValidator = (notEqual: string): StringValidator => {
        type NotEqualOptions = { notEqualTo: string }

        this.addRule<NotEqualOptions>(
            { notEqualTo: notEqual },

            (str: string, { notEqualTo }: NotEqualOptions) => str !== notEqualTo,
            (str: string, { notEqualTo }: NotEqualOptions) => `String didn't match the expected result`,
        );

        return this;
    }

    matchPattern: (pattern: RegExp) => StringValidator = (pattern: RegExp): StringValidator => {
        type PatternOptions = { regexPattern: RegExp }

        this.addRule<PatternOptions>(
            { regexPattern: pattern },

            (str: string, { regexPattern }: PatternOptions) => regexPattern.test(str),
            (str: string, { regexPattern }: PatternOptions) => `String didn't match the expected pattern`,
        );

        return this;
    }

    contains: (substring: string) => StringValidator = (substring: string): StringValidator => {
        type ContainsOptions = {
            substring: string
        }

        this.addRule<ContainsOptions>(
            { substring },
            (str: string, { substring }: ContainsOptions) => str.includes(substring),
            (str: string, { substring }: ContainsOptions) => `String must contain the substring '${substring}'`,
        );

        return this;
    }

    endsWith: (substring: string) => StringValidator = (substring: string): StringValidator => {
        type EndsWithOptions = {
            substring: string
        }

        this.addRule<EndsWithOptions>(
            { substring },
            (str: string, { substring }: EndsWithOptions) => str.endsWith(substring),
            (str: string, { substring }: EndsWithOptions) => `String must end with the substring '${substring}'`,
        );

        return this;
    }

    startsWith: (substring: string) => StringValidator = (substring: string): StringValidator => {
        type StartsWithOptions = {
            substring: string
        }

        this.addRule<StartsWithOptions>(
            { substring },
            (str: string, { substring }: StartsWithOptions) => str.startsWith(substring),
            (str: string, { substring }: StartsWithOptions) => `String must start with the substring '${substring}'`,
        );

        return this;
    }
}