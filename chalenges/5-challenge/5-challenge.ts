export function getMaxGifts(
  giftsCities: number[],
  maxGifts: number,
  maxCities: number
) {
  const filteredCities = giftsCities.filter(
    (cityCapacity) => cityCapacity <= maxGifts
  );

  if (filteredCities.length == 0) return 0;

  const permutations: number[][] = [[]];

  filteredCities.forEach((cityGifts) => {
    const permutationsWithGifts = permutations.map((permutation) => [
      ...permutation,
      cityGifts,
    ]);
    permutations.push(...permutationsWithGifts);
  });

  const filteredPermutations = permutations
    .filter((permutation) => permutation.length <= maxCities)
    .map((permutation) =>
      permutation.reduce((accumulator, value) => accumulator + value, 0)
    )
    .filter((giftsSum) => giftsSum <= maxGifts)
    .sort((a, b) => b - a);

  return filteredPermutations[0];
}
