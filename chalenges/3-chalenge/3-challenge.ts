export function distributeGifts(packOfGifts: string[], reindeers: string[]) {
  const giftsWeights = packOfGifts.map((gift) => gift.length);
  const reindeersLoads = reindeers.map((reindeer) => reindeer.length);

  const giftsTotalWeight = giftsWeights.reduce(
    (totalWeight, giftWeight) => totalWeight + giftWeight,
    0
  );
  const reindeerTotalLoad =
    reindeersLoads.reduce(
      (totalLoad, reindeerLoad) => totalLoad + reindeerLoad,
      0
    ) * 2;
  const realDistribution = Math.floor(reindeerTotalLoad / giftsTotalWeight);

  return realDistribution;
}
