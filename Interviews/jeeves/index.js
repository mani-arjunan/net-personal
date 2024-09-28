// const numbers = [1, 2, 4, 5];
//
// function findMissingNumber(arr) {
//   // let start = arr[0];
//   // const arr = [0, 1, 2, 3]
//
//   for (let i = 0; i < arr.length - 1; i++) {
//     const diff = arr[i + 1] - arr[i];
//
//     if (diff !== 1) {
//       return arr[i] + 1;
//     }
//   }
//
//   return -1;
// }
//
// console.log(findMissingNumber(numbers));
//
//
//
// // const numbers = [1, 2, 3, 5];
// // const numbers = [1, 2, 4, 5];
// // const numbers = [1, 3, 4, 5];
//

// const str = "programming";
// const str1 = "programmingp";
//
// function findFirstNonRepeatingChar(str) {
//   const map = {};
//
//   for (let i = 0; i < str.length; i++) {
//     map[str[i]] = (map[str[i]] || 0) + 1;
//   }
//
//   return Object.keys(map).filter((key) => map[key] === 1)[0];
// }
//
// console.log(findFirstNonRepeatingChar(str));
// console.log(findFirstNonRepeatingChar(str1));

// class CustomDS {
//   stack = [];
//
//   constructor() {}
//
//   insert(value) {
//     this.stack.push(value);
//   }
//
//   delete() {
//     return this.stack.pop();
//   }
//
//   search(value) {
//     return this.stack.findIndex((s) => s === value) !== -1;
//   }
//
//   print() {
//     return this.stack;
//   }
// }
//
// const ds = new CustomDS();

// ds.insert(1); // [1]
// ds.insert(2); // [1, 2]
// ds.insert(3); // [1, 2, 3]
// ds.insert(4); // [1, 2, 3, 4]
// ds.delete(); // [1, 2, 3]
// console.log(ds.search(2)); // true
// ds.delete(); // [1, 2]
// console.log(ds.search(3)); // false
//
// console.log(ds.print()); // [1, 2, 3]

// const arr = [1, 3, 4, 5, 2];
// const arr1 = [3, 2, 5, 4, 1];
//
// // 1 3
//
// // ls = [2, 1];
// // rs = [5, 4];
// function sort(arr) {
//   const quickSort = (arr) => {
//     if (arr.length === 0) {
//       return [];
//     }
//     const pivotElement = arr[0];
//     const leftSubArr = [];
//     const rightSubArr = [];
//
//     if (arr.length === 1) {
//       // console.log(arr, leftSubArr, rightSubArr, "BASE _CASE");
//       return [arr[0]];
//     }
//
//     for (let i = 1; i < arr.length; i++) {
//       if (pivotElement < arr[i]) {
//         rightSubArr.push(arr[i]);
//       } else {
//         leftSubArr.push(arr[i]);
//       }
//     }
//
//     return [...quickSort(leftSubArr), pivotElement, ...quickSort(rightSubArr)];
//   };
//
//   return quickSort(arr);
// }
//
// console.log(sort(arr));
// console.log(sort(arr1));
// console.log(sort([100, 30, 3, 2, 99, 98, 102, 1]));
//






