import { getMaxLength, wrapping } from "./1-challenge";

describe("Wrapping", () => {
  it("should wrap", () => {
    const examplePresents = ["book", "game", "socks"];
    const expected = [
      "******\n*book*\n******",
      "******\n*game*\n******",
      "*******\n*socks*\n*******",
    ];
    expect(wrapping(examplePresents)).toStrictEqual(expected);
  });
});

describe("max length", () => {
  it("should return max length", () => {
    const examplePresents = ["book", "game", "socks"];

    expect(getMaxLength(examplePresents)).toBe(5);
  });
});
