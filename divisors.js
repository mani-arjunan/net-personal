function findDivisor(num) {
  for(let i = 1; i <= num; i++) {
    if(num % i === 0) {
      console.log(i)
    }
  }
}

const map = {}

const args = process.argv
args.slice(2).forEach(arg => {
  if(!map[arg]) {
    console.log("Divisors for arg: " + arg + " is below");
    findDivisor(arg)
  } 
  map[arg] = true
})
// findDivisor(100)
