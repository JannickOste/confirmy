import { AValidator } from "../../../domain/validator/base/AValidator";
import NumberValidatorInterface from "../../../domain/validator/primtive/NumberValidatorInterface";

export default class NumberValidator extends AValidator<number> implements NumberValidatorInterface {
    greaterThan: (min: number) => NumberValidator = (min: number): NumberValidator => {
        type GreaterThanOptions = { minAmount: number };

        this.addRule<GreaterThanOptions>(
            { minAmount: min },
            (n: number, { minAmount }: GreaterThanOptions) => minAmount < n,
            (n: number, { minAmount }: GreaterThanOptions) => `Number was below the expected result`,
        );

        return this;
    }

    lessThan: (max: number) => NumberValidator = (max: number): NumberValidator => {
        type LessThanOptions = { maxAmount: number };

        this.addRule<LessThanOptions>(
            { maxAmount: max },
            (n: number, { maxAmount }: LessThanOptions) => maxAmount > n,
            (n: number, { maxAmount }: LessThanOptions) => `Number was above the expected result`,
        );

        return this;
    }

    inRange: (min: number, max: number) => NumberValidator = (min: number, max: number): NumberValidator => {
        type RangeOptions = { minAmount: number, maxAmount: number };

        this.addRule<RangeOptions>(
            { minAmount: min, maxAmount: max },
            (n: number, { minAmount, maxAmount }: RangeOptions) => n >= minAmount && n <= maxAmount,
            (n: number, { minAmount, maxAmount }: RangeOptions) => `Number wasn't in the expected range`,
        )

        return this;
    }

    isPositive: () => NumberValidator = (): NumberValidator => {
        type PositiveOptions = {}

        this.addRule<PositiveOptions>(
            {},
            (n: number, {}: PositiveOptions) => n > 0,
            (n: number, options: PositiveOptions) => `Number isn't positive`
        )

        return this;
    }

    isNegative: () => NumberValidator = (): NumberValidator => {
        type NegativeOptions = {}

        this.addRule<NegativeOptions>(
            {},
            (n: number, {}: NegativeOptions) => n < 0,
            (n: number, options: NegativeOptions) => `Number isn't negative`
        )

        return this;
    }

    equal: (value: number) => NumberValidator = (value) =>
    {
        type EqualOptions = { equal: number }

        this.addRule<EqualOptions>(
            { equal: value },
            (n: number, { equal }: EqualOptions) => n === equal,
            (n: number, { equal }: EqualOptions) => `Number didn't match the expected output`,
        );

        return this;
    }

    notEqual: (value: number) => NumberValidator = (value) =>
    {
        type NotEqualOptions = { notEqualTo: number }

        this.addRule<NotEqualOptions>(
            { notEqualTo: value },
            (n: number, { notEqualTo }: NotEqualOptions) => n !== notEqualTo,
            (n: number, { notEqualTo }: NotEqualOptions) => `Number matched an output that wasn't allowed`,
        )

        return this;
    }

    isDivisibleBy: (divisor: number) => NumberValidator = (divisor: number) => {
        type DivisibilityOptions = { divisor: number };

        this.addRule<DivisibilityOptions>(
            { divisor },
            (n: number, { divisor }: DivisibilityOptions) => n % divisor === 0,
            (n: number, { divisor }: DivisibilityOptions) => `Number must be divisible by ${divisor}`,
        );

        return this;
    }
}