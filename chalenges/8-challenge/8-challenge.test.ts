import { checkPart } from "./8-challenge";

describe("Check Part", () => {
  it("should return true on uwu", () => {
    expect(checkPart("uwu")).toBe(true);
  });
  it("should return true on miidim", () => {
    expect(checkPart("miidim")).toBe(true);
  });
  it("should return false for midu", () => {
    expect(checkPart("midu")).toBe(false);
  });
});
