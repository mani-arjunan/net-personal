function solution(a) {
  let totalCount = 0;
  let map = {};

  for (let i = 0; i < 3; i++) {
    map[a[i]] = (map[a[i]] || 0) + 1;
  }

  let start = 0;
  Object.keys(map).forEach((key) => {
    if (map[key] === 2) {
      totalCount++;
    }
  });

  for (let i = 3; i < a.length; i++) {
    map[a[start]]--;
    map[a[i]] = (map[a[i]] || 0) + 1;

    if (map[a[start]] === 2 || map[a[i]] === 2) {
      totalCount++;
    }

    console.log(map)
    start++;
  }

  return totalCount;
}

console.log(solution([1, 1, 1, 2, 1, 3, 1, 1, 4]));
