function largestAlternateSubSequence(str) {
  let length = -Infinity;
  let currentStr = str[0];

  function updateLength(str) {
    if (str.length > 1) {
      length = length < currentStr.length ? currentStr.length : length;
    }
  }

  for (let i = 1; i < str.length; i++) {
    const currentBit = currentStr[currentStr.length - 1];

    if (currentBit === str[i]) {
      updateLength(currentStr);
      currentStr = str[i];
    } else {
      currentStr += str[i];
    }
  }

  updateLength(currentStr);
  return length;
}

console.log(largestAlternateSubSequence("1101011"));
console.log(largestAlternateSubSequence("100101101010110"));
console.log(largestAlternateSubSequence("010101010"));
console.log(
  largestAlternateSubSequence(
    "000000000000000000000000000000000000101010111100101010101001001010",
  ),
);
console.log(largestAlternateSubSequence("0000000000000000000000"));
