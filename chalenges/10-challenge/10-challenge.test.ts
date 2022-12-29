import { checkJump } from "./10-challenge";

describe("check jump", () => {
  it("should return false on [1, 7, 3, 5] ", () => {
    const heights = [1, 7, 3, 5];
    expect(checkJump(heights)).toBe(false); // false
  });
});
