import { createCube } from "./6-challenge";

describe("createCube", () => {
  it("should create a 3 cube", () => {
    const cube = createCube(3);
    const expected =
      "  /\\_\\_\\_\\\n /\\/\\_\\_\\_\\\n/\\/\\/\\_\\_\\_\\\n\\/\\/\\/_/_/_/\n \\/\\/_/_/_/\n  \\/_/_/_/";

    expect(cube).toBe(expected);
  });

  it("should create a 1 cube", () => {
    const cube = createCube(1);
    const expected = "/\\_\\\n\\/_/";

    expect(cube).toBe(expected);
  });
});
