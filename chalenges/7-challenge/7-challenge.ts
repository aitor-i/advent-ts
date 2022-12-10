export function getGiftsToRefill(a1: string[], a2: string[], a3: string[]) {
  const giftsToRefill: string[] = [];

  const searchInStore = (
    store1: string[],
    store2: string[],
    giftToSearch: string
  ) => {
    const isInStore1 = store1.find((gift) => gift == giftToSearch);
    const isInStore2 = store2.find((gift) => gift == giftToSearch);

    return { isInStore1, isInStore2 };
  };
  a1.forEach((gift) => {
    const { isInStore1, isInStore2 } = searchInStore(a2, a3, gift);
    if (isInStore1 == undefined && isInStore2 == undefined)
      giftsToRefill.push(gift);
  });

  a2.forEach((gift) => {
    const { isInStore1, isInStore2 } = searchInStore(a1, a3, gift);
    if (isInStore1 == undefined && isInStore2 == undefined)
      giftsToRefill.push(gift);
  });

  a3.forEach((gift) => {
    const { isInStore1, isInStore2 } = searchInStore(a2, a1, gift);
    if (isInStore1 == undefined && isInStore2 == undefined)
      giftsToRefill.push(gift);
  });

  const uniqueGiftsToRefill = new Array(...new Set(giftsToRefill));

  return uniqueGiftsToRefill;
}
