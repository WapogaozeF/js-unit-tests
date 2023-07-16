import { it, expect, describe } from "vitest";
import { validateNumber, validateStringNotEmpty } from "./validation";

describe("validateNumber()", () => {
    it("should throw an error if a non-numeric value is provided ", () => {
        const input = "123";
        const validatationFn = () => validateNumber(input);
        expect(validatationFn).toThrowError(/Invalid number input./);
    });

    it("should throw an error with a message that contains a reason (invalid number)", () => {
        const input = NaN;
        const validatationFn = () => validateNumber(input);
        expect(validatationFn).toThrowError(/Invalid number input./);
    });

    it("should not throw an error, if a number value is provided ", () => {
        const input = 123;
        const validatationFn = () => validateNumber(input);
        expect(validatationFn).not.toThrowError();
    });
});

describe("validateStringNotEmpty()", () => {
    it("should throw an error, if an empty string provided", () => {
        const input = "";
        const validatationFn = () => validateStringNotEmpty(input);
        expect(validatationFn).toThrowError();
    });

    it("should throw an error with a message that contains a reason (must not be empty)", () => {
        const input = "";
        const validateFn = () => validateStringNotEmpty(input);
        expect(validateFn).toThrowError(/Invalid input - must not be empty./);
    });

    it("should throw an error if any other value then a string is provided", () => {
        const inputNum = 1;
        const inputBool = true;
        const inputObj = {};

        const validationFnNum = () => validateStringNotEmpty(inputNum);
        const validationFnBool = () => validateStringNotEmpty(inputBool);
        const validationFnObj = () => validateStringNotEmpty(inputObj);

        expect(validationFnNum).toThrowError();
        expect(validationFnBool).toThrowError();
        expect(validationFnObj).toThrowError();
    });
});
