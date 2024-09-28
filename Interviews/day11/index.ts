const testInput = `
...#......
.......#..
#.........
..........
......#...
.#........
.........#
..........
.......#..
#...#.....
`;

function transposeMatrix(arr: Array<Array<string>>): Array<Array<string>> {
  const result: Array<Array<string>> = [];

  for (let i = 0; i < arr[0].length; i++) {
    const tempArr: Array<string> = [];
    for (let j = 0; j < arr.length; j++) {
      tempArr.push(arr[j][i]);
    }
    result.push(tempArr);
  }

  return result;
}

const input = testInput.split("\n").filter((i) => i);
const arr = input.map((i) => i.split(""));

function updateUniverse(arr: Array<Array<string>>): Array<Array<string>> {
  let count = 1;
  const finalInput: Array<Array<string>> = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].every((d) => d === ".")) {
      finalInput.push(new Array(arr[i].length).fill("."));
    } else {
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === "#") {
          arr[i][j] = count.toString();
          count++;
        }
      }
    }
    finalInput.push(arr[i]);
  }

  return finalInput;
}

const finalInput = transposeMatrix(
  updateUniverse(transposeMatrix(updateUniverse(arr))),
);
const resultArr: Array<number> = [];
let finalSum = 0;

const finalStr: Array<string> = finalInput.map((i) => i.join(""));
for (let i = 0; i < finalStr.length; i++) {
  const iIndex = finalStr[i].indexOf((i + 1).toString());
  let currentNum = i + 2;
  for (let j = i; j < finalStr.length; j++) {
    for (let k = 0; k < finalStr[j].length; k++) {
      if (finalStr[j][k] === currentNum.toString()) {
        const sum = Math.abs(k - iIndex) + j - i;
        resultArr.push(sum);
        finalSum += sum;
        currentNum++;
      }
    }
  }
}
console.log(finalStr, resultArr, finalSum, resultArr.length);
