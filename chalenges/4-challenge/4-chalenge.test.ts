import { fitsInOneBox } from "./4-challenge";

describe("Fits in the box", () => {
  it("1 try", () => {
    const boxes = [
      { l: 1, w: 1, h: 1 },
      { l: 3, w: 3, h: 3 },
      { l: 2, w: 2, h: 2 },
    ];
    expect(fitsInOneBox(boxes)).toBe(true);
  });

  it("2-try", () => {
    const boxes = [
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 3, w: 1, h: 3 },
    ];
    expect(fitsInOneBox(boxes)).toBe(false);
  });

  it("3-try", () => {
    const boxes = [
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
    ];
    expect(fitsInOneBox(boxes)).toBe(true);
  });
});
