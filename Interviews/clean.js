const arr = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]; 
const arr2 = [1, "2", "2","3",6,"4","5","5","6","6","9","9","9","2","5", "9",10, "3", 2]; 


function cleanArr(arr) {
    function quickSort(arr) {
        let isStringPivot = typeof arr[0] === 'string'
        const pivotElement = isStringPivot ? +arr[0] : arr[0];
        const leftSubArr = [];
        const rightSubArr = [];


        if (arr.length < 1) {
            return arr;
        } else {
            for(let i = 1; i < arr.length; i++) {
                const comparer = typeof arr[i] === 'string' ? +arr[i] : arr[i]
                if (pivotElement > comparer) {
                    leftSubArr.push(arr[i])
                } else {
                    rightSubArr.push(arr[i])
                }
            }
        }

        return [...quickSort(leftSubArr), isStringPivot ? pivotElement.toString() : pivotElement, ...quickSort(rightSubArr)]
    }
    arr = quickSort(arr);
    let tempArr = [];
    const strArr = []
    const numArr = [];
// [
//    1,  1,  1, 2,  2,  2,
//    4,  5, 10, 10,
//   20, 20, 20
// ]
    for (let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === 'string') {
            const lastElem = strArr[strArr.length - 1];
            if(!lastElem) {
                strArr.push(arr[i])
            } else if (Array.isArray(lastElem) && lastElem[lastElem.length - 1] === arr[i]) {
                lastElem.push(arr[i])
            } else if (!Array.isArray(lastElem) && lastElem === arr[i]) {
                strArr[strArr.length - 1] = [lastElem, arr[i]];
            } else {
                strArr.push(arr[i])
            }
        } else {
            if (arr[i] === arr[i + 1]) {
                tempArr.push(arr[i]);
            } else {
                numArr.push(tempArr.length ? tempArr.concat(arr[i]) : arr[i]);
                tempArr = [];
            }
        }
    }


    console.log(arr, numArr, strArr)
}

cleanArr(arr2);
