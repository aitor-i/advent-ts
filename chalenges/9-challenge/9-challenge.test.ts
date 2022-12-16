import { countTime } from "./9-challenge";

describe("Count time", () => {
  it("should be 7s on [0, 1, 1, 0, 1]", () => {
    const leds = [0, 1, 1, 0, 1];

    expect(countTime(leds)).toBe(7);
  });
});
