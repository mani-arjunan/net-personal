const decipher = (cipherText, needle) => {
  const getCharCode = (char) => {
    return char.toLowerCase().charCodeAt(0) - "a".charCodeAt(0);
  };

  const getChar = (code) => {
    return String.fromCharCode(code + "a".charCodeAt(0));
  };

  let diff = null;
  const totalCharCount = getCharCode("z") + 1;
  cipherText = cipherText.split(" ");
  let needleIndex = 0;
  let currentStr = "";

  for (let i = 0; i < cipherText.length; i++) {
    if (cipherText[i].length === needle.length) {
      for (let j = 0; j < cipherText[i].length; j++) {
        const cipherTextCode = getCharCode(cipherText[i][j]);
        const needleTextCode = getCharCode(needle[needleIndex]);

        if (!diff) {
          diff =
            (totalCharCount - needleTextCode + cipherTextCode) % totalCharCount;
        }

        currentStr += getChar((needleTextCode + diff) % totalCharCount);
        needleIndex++;
      }
    }
    if (currentStr === cipherText[i]) {
      currentStr = "";
      needleIndex = 0;
      break;
    }
    diff = null;
    needleIndex = 0;
    if(i === cipherText.length - 1) {
      return "CANNOT DECRYPT"
    }
  }

  cipherText = cipherText.join(" ");
  for (let i = 0; i < cipherText.length; i++) {
    if (cipherText[i] !== " ") {
      const cipherTextCode = getCharCode(cipherText[i]);

      currentStr += getChar((cipherTextCode - diff) % totalCharCount);
    } else {
      currentStr += cipherText[i];
    }
  }

  return currentStr;
};

console.log(decipher("frglqj lv pruh ixq", "more"));
console.log(decipher("eqfkpi ku vq oqtg hwp", "fund"));
