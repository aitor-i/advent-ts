import { countHours } from "./2-challenge";

describe("Count hours", () => {
  it("should count hours", () => {
    const year = 2023;
    const holidays = ["01/06", "04/01", "12/25"];

    expect(countHours(year, holidays)).toBe(4);
  });

  it("should count hours 2", () => {
    const year = 1985;
    const holidays = [
      "01/01",
      "01/06",
      "02/02",
      "02/17",
      "02/28",
      "06/03",
      "12/06",
      "12/25",
    ];

    expect(countHours(year, holidays)).toBe(10);
  });
});
