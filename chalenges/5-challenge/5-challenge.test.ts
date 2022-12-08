import { getMaxGifts } from "./5-challenge";

describe("Max gifts", () => {
  it("test - 1", () => {
    const giftsCities = [12, 3, 11, 5, 7];
    const maxGifts = 20;
    const maxCities = 3;

    expect(getMaxGifts(giftsCities, maxGifts, maxCities)).toBe(20); // 20
  });
  test("", () => {
    expect(getMaxGifts([12, 3, 11, 5, 7], 20, 3)).toBe(20); // 20
    expect(getMaxGifts([1, 2, 3], 6, 3)).toBe(6);
    expect(getMaxGifts([50], 15, 1)).toBe(0); // 0
    expect(getMaxGifts([50], 100, 1)).toBe(50); // 50
    expect(getMaxGifts([50, 70], 100, 1)).toBe(70); // 70
    //     getMaxGifts([50, 70, 30], 100, 2); // 100
    //     getMaxGifts([50, 70, 30], 100, 3); // 100
    //     getMaxGifts([50, 70, 30], 100, 4); // 100
  });
});
