export function checkPart(part: string) {
  const isPalindrome = (word: string) => {
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
  let isValid = false;
  const splittedParts = part.split("");

  for (let i = 0; i < splittedParts.length; i++) {
    const splittedPartsCopy = splittedParts.slice();
    splittedPartsCopy.splice(i, 1);

    const isPartValid = isPalindrome(splittedPartsCopy.join());
    if (isPartValid) {
      isValid = true;
      break;
    }
  }
  return isValid;
}
