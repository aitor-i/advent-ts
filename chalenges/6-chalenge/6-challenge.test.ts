import { createCube } from "./6-challenge";

describe("createCube", () => {
  it("should create a cube", () => {
    const cube = createCube(3);
    const expected =
      "  /\\_\\_\\_\\\n /\\/\\_\\_\\_\\\n/\\/\\/\\_\\_\\_\\\n\\/\\/\\/_/_/_/\n \\/\\/_/_/_/\n  \\/_/_/_/";

    expect(cube).toBe(expected);
  });
});
