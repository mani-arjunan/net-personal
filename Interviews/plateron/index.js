// It is New Year's Day and people are in line for the Wonderland rollercoaster ride. Each person wears a sticker
// indicating their initial position in the queue from 1 to n. Any person can bribe the person directly in front of
// them to swap positions, but they still wear their original sticker. One person can bribe at most two others.
// Determine the minimum number of bribes that took place to get to a given queue order. Print the number of bribes,
// or, if anyone has bribed more than two people, print Too chaotic.
// Example:
// q = [1,2,3,5,4,6,7,8]
//
// If person 5 bribes person 4, the queue will look like this: 1,2,3,5,4,6,7,8. Only 1 bribe is required. Print 1.
//
//
// q = [4,1,2,3]
//
// Person 4 had to bribe 3 people to get to the current position. Print Too chaotic.
//  - No value is returned. Print the minimum number of bribes necessary or Too chaotic if someone has bribed more than 2 people.
// Input Format
// The first line contains an integer t, the number of test cases.
//
// Each of the next t pairs of lines are as follows:
// - The first line contains an integer t, the number of people in the queue
// - The second line has n space-separated integers describing the final state of the queue.

// q = [5, 6, 7, 1, 2, 3, 4];

// [1,2,3,4,5,6,7,8]
// [1,2,3,4,6,5,7,8]
// [1,2,3,4,,5,7,8]
// q = [4, 1, 2, 3];
// q = [1, 2, 3, 5, 4, 6, 7, 8];
// 1, 2, 3, 4, 5, 6, 7, 8
// 1, 2, 3, 4, 5, 8, 7, 6 // 2
// 1, 2, 3, 5, 4, 8, 7, 6 // 3
// 3, 2, 1, 5, 4, 8, 7, 6 // 5
// 2, 3, 1, 5, 4, 8, 7, 6 // 5

q1 = [2, 3, 1, 5, 4, 8, 7, 6];
q2 = [2, 3, 4, 5, 6, 7, 8, 1];
// q = [1, 2, 3, 6, 4, 5, 7, 8]; // 3
// [1, 2, 3, 4, 6, 5, 7, 8];

function findNoOfBribes(arr) {
  let bribesCount = 0;
  const orderedArr = new Array(arr.length).fill(0).map((_, index) => index + 1);

  for (let i = orderedArr.length - 1; i >= 0; i--) {
    if (orderedArr[i] === arr[i]) {
      continue;
    } else {
      const index = arr.findIndex((v) => v === orderedArr[i]);
      console.log(index)
      const diff = i - index;

      if (diff > 2) {
        return "Too chaotic";
      } else {
        const temp = orderedArr[i];
        orderedArr[i] = orderedArr[index];
        orderedArr[index] = temp;
        bribesCount += diff;
      }
      console.log(orderedArr)
    }
  }

  return bribesCount;
}

console.log("first => ", findNoOfBribes(q1));
// console.log("second => ", findNoOfBribes(q2));
