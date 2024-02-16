import { AValidator } from "../../../domain/validator/base/AValidator";
import StringValidatorInterface from "../../../domain/validator/primtive/StringValidatorInterface";

export default class StringValidator extends AValidator<string> implements StringValidatorInterface {
    minLength: (min: number) => StringValidatorInterface = (min: number): StringValidatorInterface => {
        type MinLengthOptions = { minLength: number }

        this.addRule<MinLengthOptions>(
            { minLength: min },

            (str: string, { minLength }: MinLengthOptions) => str.length >= minLength,
            (str: string, { minLength }: MinLengthOptions) => `Length must be greater or equal to ${minLength}`,
        );

        return this;
    }

    maxLength: (max: number) => StringValidatorInterface = (max: number): StringValidator => {
        type MaxLengthOptions = { maxLength: number }

        this.addRule<MaxLengthOptions>(
            { maxLength: max },

            (str: string, { maxLength }: MaxLengthOptions) => str.length <= maxLength,
            (str: string, { maxLength }: MaxLengthOptions) => `Length must be lesser or equal to ${maxLength}`,
        );

        return this;
    }

    lengthInRange: (min: number, max: number) => StringValidatorInterface = (min: number, max: number): StringValidatorInterface => {
        type InRangeOptions = { minLength: number, maxLength: number}

        this.addRule<InRangeOptions>(
            { minLength: min , maxLength: max },

            (str: string, { minLength, maxLength }: InRangeOptions) => str.length >= minLength && str.length <= maxLength,
            (str: string, { minLength, maxLength }: InRangeOptions) => `Length must be greater or equal to ${minLength}`,
        );

        return this;
    }

    equal: (equal: string) => StringValidatorInterface = (equal: string): StringValidator => {
        type EqualOptions = { equalTo: string }

        this.addRule<EqualOptions>(
            { equalTo: equal },

            (str: string, { equalTo }: EqualOptions) => str === equalTo,
            (str: string, { equalTo }: EqualOptions) => `String is not equal to expected result`,
        );

        return this;
    }

    notEqual: (notEqual: string) => StringValidatorInterface = (notEqual: string): StringValidator => {
        type NotEqualOptions = { notEqualTo: string }

        this.addRule<NotEqualOptions>(
            { notEqualTo: notEqual },

            (str: string, { notEqualTo }: NotEqualOptions) => str !== notEqualTo,
            (str: string, { notEqualTo }: NotEqualOptions) => `String didn't match the expected result`,
        );

        return this;
    }

    matchPattern: (pattern: RegExp) => StringValidatorInterface = (pattern: RegExp): StringValidator => {
        type PatternOptions = { regexPattern: RegExp }

        this.addRule<PatternOptions>(
            { regexPattern: pattern },

            (str: string, { regexPattern }: PatternOptions) => regexPattern.test(str),
            (str: string, { regexPattern }: PatternOptions) => `String didn't match the expected pattern`,
        );

        return this;
    }

    contains: (substring: string) => StringValidatorInterface = (substring: string): StringValidator => {
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

    endsWith: (substring: string) => StringValidatorInterface = (substring: string): StringValidator => {
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

    startsWith: (substring: string) => StringValidatorInterface = (substring: string): StringValidator => {
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

    isPalindrome: () => StringValidatorInterface = (): StringValidator => {
        type IsPalindromeOptions = {};

        this.addRule<IsPalindromeOptions>(
            {},
            (str: string) => {
                const reversedStr = str.split('').reverse().join('');
                return str === reversedStr;
            },
            () => `String is not a palindrome`,
        );

        return this;
    }
    
    isEmail(): StringValidatorInterface {
        this.matchPattern(
            /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/);
        return this;
    }
    
    isURL(): StringValidatorInterface {
        this.addRule(
            {},
            (str: string) => {
                let uri: URL | undefined;

                try 
                {
                    uri = new URL(str);
                } 
                catch
                {

                }
                finally 
                {
                    return uri !== undefined;
                }
            },
            () => "Given value is not a URI"
        )
        return this;
    }
    
    isUUID(): StringValidatorInterface
    {
        this.matchPattern(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/);
        return this;
    }
    
}