export function wrapping(gifts: string[]) {
  const wrappedGifts = gifts.map((gift) => {
    const wrapper = "*".repeat(gift.length) + "**";
    return `${wrapper}\n*${gift}*\n${wrapper}`;
  });
  return wrappedGifts;
}

export const getMaxLength = (names: string[]) => {
  const nameLength = names.map((name) => name.length);
  const maxLength = nameLength.reduce((maxLength, currentLEngth) => {
    if (currentLEngth > maxLength) return currentLEngth;
    return maxLength;
  }, 0);
  return maxLength;
};
