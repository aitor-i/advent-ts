export const isPalindrome = (word: string) => {
  const length = word.length;
  const isOdd = length % 2 !== 0;
  const splittedWord = word.split("");

  const startHalf = splittedWord.slice(0, length / 2);
  const endHalf = isOdd
    ? splittedWord.slice(length / 2 + 1)
    : splittedWord.slice(length / 2);

  const reversedEndHalf = endHalf.reverse();

  const areEqual = startHalf.toString() === reversedEndHalf.toString();
  return areEqual;
};
