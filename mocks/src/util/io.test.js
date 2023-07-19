import { it, expect, vi } from "vitest";
import { promises as fs } from "fs";

import writeData from "./io";

vi.mock("fs");

it("should execute the writeFile method", () => {
    const testDate = "Test";
    const testFilename = "test.txt";

    writeData(testDate, testFilename);

    expect(fs.writeFile).toBeCalled();
});
