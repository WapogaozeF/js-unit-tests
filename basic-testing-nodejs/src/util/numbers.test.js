import { it, expect } from "vitest";

import { transformToNumber } from "./numbers";

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
