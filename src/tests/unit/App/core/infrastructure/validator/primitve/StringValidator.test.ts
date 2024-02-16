import StringValidatorInterface from "../../../../../../../App/core/domain/validator/primtive/StringValidatorInterface";
import StringValidator from "../../../../../../../App/core/infrastructure/validator/primitive/StringValidator";
import { test as nativeTest } from "@jest/globals";

describe("StringValidator tests", () => {
  const getValidator: () => StringValidatorInterface = () => new StringValidator();
  const test = (
    functionName: keyof StringValidatorInterface,
    description: string,
    testCallback: () => void
  ) => nativeTest(`${functionName}: ${description}`, testCallback);

  test("minLength", "it Can validator or a string is above the min length", () => {
    const validator: StringValidatorInterface = getValidator().minLength(3);

    expect(validator.validate("hello@hotmail.com").ok).toBeTruthy();
    expect(validator.validate("hello@d0main.com").ok).toBeTruthy();
    expect(validator.validate("hel").ok).toBeTruthy();
  });

  test("minLength", "it can invalidate a string below the minimum length", () => {
    const validator: StringValidatorInterface = getValidator().minLength(3);

    expect(validator.validate("").ok).toBeFalsy();
    expect(validator.validate("1").ok).toBeFalsy();
    expect(validator.validate("22").ok).toBeFalsy();
  });

  test("maxLength", "it can validate or a string is below the max length", () => {
    const validator: StringValidatorInterface = getValidator().maxLength(10);

    expect(validator.validate("999999999").ok).toBeTruthy();
    expect(validator.validate("1010101010").ok).toBeTruthy();
  });

  test("maxLength", "it can invalidate the length of a string is above the max length", () => {
    const validator: StringValidatorInterface = getValidator().maxLength(10);

    expect(validator.validate("11,11,11,11").ok).toBeFalsy();
    expect(validator.validate("121212121212").ok).toBeFalsy();
  });

  test("lengthInRange", "it can validate or the length of a string is within a range", () => {
    const validator: StringValidatorInterface = getValidator().lengthInRange(4, 10);

    expect(validator.validate("4444").ok).toBeTruthy();
    expect(validator.validate("1010101010").ok).toBeTruthy();
  });

  test("lengthInRange", "it can invalidate or the length of a string is not within a range", () => {
    const validator: StringValidatorInterface = getValidator().lengthInRange(4, 10);

    expect(validator.validate("333").ok).toBeFalsy();
    expect(validator.validate("11,11,11,11").ok).toBeFalsy();
  });

  test("equal", "it can validate or a string is equal to a given string", () => {
    const validator: StringValidatorInterface = getValidator().equal("test");

    expect(validator.validate("test").ok).toBeTruthy();
  });

  test("equal", "it can invalidate or a string is not equal to a given string", () => {
    const validator: StringValidatorInterface = getValidator().equal("test");

    expect(validator.validate("!test").ok).toBeFalsy();
  });

  test("notEqual", "it can validate or a string is not equal to a given string", () => {
    const validator: StringValidatorInterface = getValidator().notEqual("notTest");

    expect(validator.validate("test").ok).toBeTruthy();
  });

  test("notEqual", "it can invalidate or a string is a match with a given value", () => {
    const validator: StringValidatorInterface = getValidator().notEqual("notTest");

    expect(validator.validate("notTest").ok).toBeFalsy();
  });

  test("matchPattern", "it can validate or a given value matches a pattern", () => {
    const validator: StringValidatorInterface = getValidator().matchPattern(/[a-z]{3}/); 

    expect(validator.validate("abc").ok).toBeTruthy();
    expect(validator.validate("zna").ok).toBeTruthy();
  })

  test("matchPattern", "it can invalidate or a string doesn't match a pattern", () => {
    const validator: StringValidatorInterface = getValidator().matchPattern(/[a-z]{3}/); 

    expect(validator.validate("ab").ok).toBeFalsy();
    expect(validator.validate("ABC").ok).toBeFalsy();
  })

  test("contains", "it can validate or a string contains a substring", () => {
    const validator: StringValidatorInterface = getValidator().contains("string");

    expect(validator.validate("some_string_with_a_test_in_it").ok).toBeTruthy();
  });

  test("contains", "it can invalidate or a string contains a substring", () => {
    const validator: StringValidatorInterface = getValidator().contains("notcontained");

    expect(validator.validate("some_string_with_a_test_in_it").ok).toBeFalsy();
  });

  test("startsWith", "it can validate or a string ends with a suffix", () => {
    const validator: StringValidatorInterface = getValidator().startsWith("start");

    expect(validator.validate("start_of_a_string").ok).toBeTruthy();
  });

  test("startsWith", "it can invalidate or a string doesn't end with a suffix", () => {
    const validator: StringValidatorInterface = getValidator().startsWith("ending");

    expect(validator.validate("not_a_start_of_a_string").ok).toBeFalsy();
  });

  test("endsWith", "it can validate or a string ends with a suffix", () => {
    const validator: StringValidatorInterface = getValidator().endsWith("ending");

    expect(validator.validate("some_string_with_an_ending").ok).toBeTruthy();
  });

  test("endsWith", "it can invalidate or a string doesn't end with a suffix", () => {
    const validator: StringValidatorInterface = getValidator().endsWith("ending");

    expect(validator.validate("not_ending_with_the_ending_suffix").ok).toBeFalsy();
  });

  test("isPalindrome", "It can validate or a string is a palindrome", () => {
    const validator: StringValidatorInterface = getValidator().isPalindrome();

    expect(validator.validate("sus").ok).toBeTruthy();
  })


  test("isPalindrome", "It can invalidate or a string isn't a palindrome", () => {
    const validator: StringValidatorInterface = getValidator().isPalindrome();

    expect(validator.validate("dus").ok).toBeFalsy();
  })

  test("isEmail", "It can validate a valid email", () => {
    const validator: StringValidatorInterface = getValidator().isEmail();

    expect(validator.validate("hello@hotmail.com").ok).toBeTruthy();
    expect(validator.validate("hello@d0main.com").ok).toBeTruthy();
    expect(validator.validate("hello@some.domain.com").ok).toBeTruthy();
  });

  test("isEmail", "Can invalidate an invalid email", () => {
    const validator: StringValidatorInterface = getValidator().isEmail();

    expect(validator.validate("someString").ok).toBeFalsy();
    expect(validator.validate("someString*@email.com").ok).toBeFalsy();
  });

  test("isURL", "Can validate or a string is a URL", () => {
    const validator: StringValidatorInterface = getValidator().isURL();

    expect(validator.validate("http://www.google.com/").ok).toBeTruthy();
    expect(validator.validate("www.google.com").ok).toBeTruthy();
    expect(validator.validate("mailto:some@email.com").ok).toBeTruthy();
    expect(validator.validate("phone:003012345678").ok).toBeTruthy();
    expect(validator.validate("ftp:192.168.0.1").ok).toBeTruthy();
  })
  
  test("isURL", "Can invalidate if a string is not a URL", () => {
    const validator: StringValidatorInterface = getValidator().isURL();
    
    expect(validator.validate("www.google,com").ok).toBeFalsy(); 
    expect(validator.validate("http://example with spaces.com").ok).toBeFalsy();  
    expect(validator.validate("://missing-scheme.com").ok).toBeFalsy();  
    expect(validator.validate("www.missing-tld").ok).toBeFalsy();  
    expect(validator.validate("http://invalid chars.com/#frag^ment").ok).toBeFalsy();  
    expect(validator.validate("http://subdomain.with spaces.com").ok).toBeFalsy();  
  });

  test("isUUID", "Can validate if a string is a UUID", () => {
    const validator: StringValidatorInterface = getValidator().isUUID();
  
    expect(validator.validate("550e8400-e29b-41d4-a716-446655440000").ok).toBeTruthy();
    expect(validator.validate("123e4567-e89b-12d3-a456-426614174001").ok).toBeTruthy();
    expect(validator.validate("abcdefab-cdef-1234-5678-abcdefabcdef").ok).toBeTruthy();
  
  });
  
  test("isUUID", "Can invalidate if a string is not a UUID", () => {
    const validator: StringValidatorInterface = getValidator().isUUID();
  
    expect(validator.validate("").ok).toBeFalsy(); 
    expect(validator.validate("not-a-uuid").ok).toBeFalsy();  
    expect(validator.validate("12345").ok).toBeFalsy();  
    expect(validator.validate("550e8400-e29b-41d4-a716-44665544000Z").ok).toBeFalsy();
  });
});