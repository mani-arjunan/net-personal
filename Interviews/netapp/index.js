// Example -
//
// 1 1 2 -> -1,
//
// 3 7 3 -> 2
//
//
// [3, 7] [3]
//
// 1. [4, 8] [2]  2. [2, 6] [4]
// 1. [5, 9] [1]  2. [1, 5] [5]
//
// 1. [4, 4] [6] 2. [5, 5] [5]
//
// 3, 7, 10
//
//
// [4, 8] [10]

function makeNumbersEqual(a, b, c) {
  if (a !== b && a !== c && b !== c) {
    return -1;
  }

  if (a === b && a === c && b === c) {
    return 0;
  }

  let count = 0;
  let largest = null;
  let smallest = null;

  if (a === b) {
    if (a < c) {
      largest = c;
      smallest = a;
    } else {
      largest = a;
      smallest = c;
    }
  } else if (a === c) {
    if (a < b) {
      largest = b;
      smallest = c;
    } else {
      largest = a;
      smallest = b;
    }
  } else {
    if (b < a) {
      largest = a;
      smallest = b;
    } else {
      largest = b;
      smallest = a;
    }
  }

  // 2
  // 4 1 2
  // 3 2 2
  // 4 3
  const dif = largest - smallest;

  return dif % 2 === 0 ? dif / 2 : -1;
  // // while (largest !== smallest) {
  // //   largest--;
  // //   smallest++;
  // //
  // //   if (largest < smallest) {
  // //     return -1;
  // //   }
  // //   count++;
  // // }
  //
  // return count;
}

console.log(makeNumbersEqual(1, 1, 2));
console.log(makeNumbersEqual(3, 7, 9));
console.log(makeNumbersEqual(9, 7, 9));
console.log(makeNumbersEqual(7, 7, 7));
console.log(makeNumbersEqual(3, 3, 7));
console.log(makeNumbersEqual(3, 7, 7));
console.log(makeNumbersEqual(7, 3, 7));

// 7 3
// [7, 7] [3]
// [6, 6] [4]
// [5, 5] [5]

// [7][(3, 3)][6][(4, 4)][5][(5, 5)];
