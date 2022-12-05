import { distributeGifts } from "./3-challenge";

describe("Distribute gifts", () => {
  it("should distribute", () => {
    const packOfGifts = ["book", "doll", "ball"];
    const reindeers = ["dasher", "dancer"];

    expect(distributeGifts(packOfGifts, reindeers)).toBe(2);
  });

  it("should return fixed", () => {
    const packOfGifts = ["a", "b", "c"];
    const reindeers = ["d", "e"];

    expect(distributeGifts(packOfGifts, reindeers)).toBe(1);
  });
});
