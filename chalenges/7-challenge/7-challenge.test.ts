import { getGiftsToRefill } from "./7-challenge";

describe("Gifts to refill", () => {
  test("test 1", () => {
    const a1 = ["bici", "coche", "bici", "bici"];
    const a2 = ["coche", "bici", "muñeca", "coche"];
    const a3 = ["bici", "pc", "pc"];

    const gifts = getGiftsToRefill(a1, a2, a3); // ['muñeca', 'pc']

    expect(gifts).toStrictEqual(["muñeca", "pc"]);
  });
});
