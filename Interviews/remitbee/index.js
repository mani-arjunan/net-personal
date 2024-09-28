// // Given two strings, s1 and s2, write code to check if s2 is a rotation of s1.
// // Output should be true or false.

// // For example:
// // 1. remitbee, beeremit => true (rotation)
// // 2. remitbee, eremitbe => true (rotation)
// // 3. remitbee, itrembee => false (not a rotation)
// 15
// remitbeeebeeeee

// eeeeremitbeeebe
function findIndex(inputStr, rotatedStr, rotatedCharIndex = 0) {
    let nextIndex = -1;
    let currentStr = rotatedStr[rotatedCharIndex]

    for(let i = 0; i < inputStr.length; i++) {
        if(inputStr[i] === rotatedStr[rotatedCharIndex]) {
            let tempI = i;
            let tempRotatedIndex = rotatedCharIndex + 1;
            while(currentStr === inputStr[(tempI + 1) % inputStr.length] && currentStr === rotatedStr[tempRotatedIndex]) {
                currentStr = rotatedStr[rotatedCharIndex + 1]
                tempI++;
                tempRotatedIndex++;
            }
            if(inputStr[(tempI + 1) % inputStr.length] === rotatedStr[tempRotatedIndex]) {
                nextIndex = i;
                break;
            }
        }
    }

    return nextIndex
}

// console.log(findIndex('remitbeeebeeeee','eeeeremitbeeebe'))
function checkForRotation(inputStr, rotatedStr) {
    if(inputStr.length !== rotatedStr.length) {
        return false
    }
    const inputStrLength = inputStr.length;
    let nextIndex = findIndex(inputStr, rotatedStr, 0)
    if (nextIndex === -1) {
        return false
    }

    for (let i = 0; i < rotatedStr.length; i++) {
        if (inputStr[nextIndex] !== rotatedStr[i]) {
            return false
        }
        nextIndex = (nextIndex + 1) % inputStrLength
    }

    return true
}

console.log(checkForRotation('remitbeeebeeeee', 'eeeeeremitbeeeb'))

// const obj = {
//     "a": 2,
//     "b": {
//         "x": 4,
//         "y": {
//             "foo": 3,
//             "z": {
//                 "bar": 2,
//                 "bar2": 10,
//             }
//         }
//     },
//     "c": {
//         "p": {
//             "h": 2,
//             "r": 5
//         },
//         "q": 'ball',
//         "r": 5
//     },
//     "d": 1,
//     "e": {
//         "nn": {
//             "lil": 2
//         },
//         "mm": 'car'
//     }
// }

// let sum = 0;
// function findSumOfEven(obj) {
//     const values = Object.values(obj);

//     values.forEach(value => {
//         if(typeof value === 'object') {
//             findSumOfEven(value)
//         } else {
//             if(typeof value === 'number' && value % 2 === 0) {
//                 sum += value;
//             }
//         }
//     })
// }

// findSumOfEven(obj)
// console.log(sum)
