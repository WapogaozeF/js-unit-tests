import { it, expect } from "vitest";

import { generateToken } from "./async-example";

it("should generate a token value", (done) => {
    const testUserEmail = "test@test.com";
    
    generateToken(testUserEmail, (err, token) => {
        try {
            expect(token).toBeDefined();
            done();
        } catch (err) {
            done(err);
        }
    });
});
