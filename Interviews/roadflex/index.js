function findPrimeFactor(n) {
  function isPrime(n) {
    if(n === 2 || n === 3) {
      return true
    }

    for(let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
      if(n % i === 0) {
        return false;
      }
    }

    return true 
  }

  // 100
  // 1 - 50
  // 1- sqrt(100)
  // 1-10
  //
  // 9 * 10
  // 10 * 11

  const possibleFactorsRange = Math.floor(n / 2);
  
  for(let i = 2; i < possibleFactorsRange; i++) {
    if(n % i === 0) {
      if(isPrime(i)) {
        console.log("Factor for " + n + "===>", i)
      }      
    }
  }
}


findPrimeFactor(500)



function smallestNumber(n) {
  function multiplyDigits(i) {
    let product = 1;

    while(i !== 0) {
      product = product * (i % 10);
      i = Math.floor(i / 10);
    }

    return product;
  }

  for(let i = 1; i <= 1000000; i++) {
    if(i > 10) {
      if(multiplyDigits(i) === n) {
        return i
      }
    } else {
      if(i === n) {
        return i
      }
    }

  }
}


console.log(smallestNumber(84))


