export default interface IValidatorRule {
    options: { [key: string]: any; };
    check: (value: any, options: any) => boolean;
    formatError: (value: any, options: any) => string;
}
