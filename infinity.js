const infinityStringFinder = (str, n) => {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      count++;
    }
  }

  const temp = (Math.floor(n / str.length) - 1) * count;
  count += temp;
  const remainder = n % str.length;
  console.log(count, remainder);

  for (let i = 0; i < remainder; i++) {
    if (str[i] === "a") {
      count++;
    }
  }

  return count;
};

console.log(infinityStringFinder("aba", 7));

console.log(infinityStringFinder("aba", 10));
console.log(infinityStringFinder("abcac", 10));
// abaabaa
// abaabaabaa
// abcacabcac


