import { it, expect, describe } from "vitest";

import { HttpError, ValidationError } from "./errors";

describe("class HttpError", () => {
    it("should have a statusCode, message and data properties", () => {
        const statusCode = 1;
        const message = "error";
        const data = {};

        const httpError = new HttpError(statusCode, message, data);

        expect(httpError).toHaveProperty("statusCode");
        expect(httpError).toHaveProperty("message");
        expect(httpError).toHaveProperty("data");
    });

    it("should contain undefined as datais provided", () => {
        const statusCode = 1;
        const message = "error";

        const httpError = new HttpError(statusCode, message);

        expect(httpError.statusCode).toBe(statusCode);
        expect(httpError.message).toBe(message);
        expect(httpError.data).toBeUndefined();
    });
});

describe("class ValidationError", () => {
    it("should contain the provided message", () => {
        const testMessage = "test";

        const testError = new ValidationError(testMessage);

        expect(testError.message).toBe(testMessage);
    });
});
