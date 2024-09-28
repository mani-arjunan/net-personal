// class Singleton {
//   constructor(name, age) {
//     if (Singleton.instance) {
//       return Singleton.instance;
//     }
//     this.name = name;
//     this.age = age;
//     Singleton.instance = this;
//   }
//   }
//

const rodLength = 7; //length
const rods = [1, 2, 3, 4, 5];
const price = [10, 50, 160, 20, 20];
let maxPrice = -Infinity;

for (let i = 0; i < rods.length; i++) {
  let currentPrice = price[i];
  let currentLength = rods[i];
  if(rodLength % rods[i] === 0) {
    const noOfMeters = rodLength / rods[i] 
    const tempPrice = noOfMeters * price[i]
    maxPrice = maxPrice < tempPrice ? tempPrice : maxPrice
    if(noOfMeters * rods[i] !== rodLength) {
      currentPrice = currentPrice * noOfMeters
    }
  }
  for (let j = i + 1; j < rods.length; j++) {
    const tempCurrentLength = currentLength;
    const tempCurrentPrice = currentPrice
    while(currentLength < rodLength) {
      currentLength += rods[j]
      currentPrice += price[j]
    }
    if(currentLength === rodLength) {
      maxPrice = maxPrice < currentPrice ? currentPrice : maxPrice
    }
    currentLength = tempCurrentLength;
    currentPrice = tempCurrentPrice;
  }
}

console.log(maxPrice)
// select * from employees where age > 25
//
//
// select name from students where age > 16 group by classname having length(20)
//
//
// 1,2,3,4,5,6,7,8
//
// searchElement => 1
