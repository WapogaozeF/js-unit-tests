import { it, expect, describe } from "vitest";

import { cleanNumbers, transformToNumber } from "./numbers";

describe("transformToNumber", () => {
  it("should be transform to number", () => {
    const input = "1";

    const result = transformToNumber(input);

    const expectedResult = +input;
    expect(result).toBeTypeOf("number");
    expect(result).toBe(expectedResult);
  });

  it("should return NaN if no value is passed into the function", () => {
    const result = transformToNumber();

    expect(result).toBeNaN();
  });

  it("should throw an error if incorrect value is passed into the function", () => {
    const input = "invalid";
    const input2 = {};

    const result = transformToNumber(input);
    const result2 = transformToNumber(input2);

    expect(result).toBeNaN();
    expect(result2).toBeNaN();
  });
});

describe('cleanNumbers()', () => {
  it('should return an array of number values if an arrao of string number values is provided', () => {
    const numberValues = ['1', '2'];

    const cleanedNumbers = cleanNumbers(numberValues);

    expect(cleanedNumbers[0]).toBeTypeOf('number');
  });

  it('should throw an error if an array with at least one empty string', () => {
    const numberValues = ['', 1];

    const cleanFn = () => cleanNumbers(numberValues);

    expect(cleanFn).toThrowError();
  });
});
