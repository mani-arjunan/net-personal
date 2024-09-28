function uniqueTargetSum(nums, target) {
    const arr = []
    function quickSort(nums) {
        const partitionElement = nums[0];
        const leftSubArr = [];
        const rightSubArr = [];

        if(nums.length <= 1){
            return nums;
        }

        for(let i = 1; i < nums.length; i++) {
            if(partitionElement > nums[i]) {
                rightSubArr.push(nums[i])
            } else {
                leftSubArr.push(nums[i])
            }
        }

        return [...quickSort(leftSubArr), partitionElement, ...quickSort(rightSubArr)]
    }

    nums = quickSort(nums)

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] <= target) {
            if(nums[i] === target) {
                arr.push([nums[i]])
            } else {
                let sum = nums[i];
                const tempArr = [nums[i]]
                let lastUsed = null
                for(let j = i + 1; j < nums.length; j++) {
                    if(nums[j] + sum <= target) {
                        sum += nums[j];
                        tempArr.unshift(nums[j])
                        if(target === sum && (lastUsed !== nums[j] || !lastUsed)) {
                            lastUsed = nums[j];
                            arr.push([...tempArr])
                            sum -= nums[j];
                        }
                    }
                }
            }
        }
    }


    console.log(arr,'===')
    return arr
}

uniqueTargetSum([10, 1, 2, 7, 6, 1, 5], 8)

// [[1, 7], [2, 6]]
