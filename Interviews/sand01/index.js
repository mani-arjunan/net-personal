const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let testCases = 0;
rl.on('line', function(input){
   if(testCases === 0){
       testCases = input
   } else {
       const arr = [1, 3, 5, 7, 9, 11];
       const seatPosArr = ['WS','MS','AS','AS','MS','WS']
       const inputRemainder = input % 6; 
       const inputQuotient = input / 6;
       let seatNumber;
       let seatPos;
        if (inputRemainder === 0) {
            seatNumber = inputQuotient % 2 === 0 ? input - arr[arr.length - 1] : +input + arr[0]
            seatPos = 'WS';
        } else {
            seatNumber = Math.floor(inputQuotient) % 2 !== 0 ? +input - arr[inputRemainder - 1] : +input + arr[arr.length- inputRemainder]
            const seatPosDiff = seatNumber % 6 === 0 ? 0 : (seatNumber % 6) -1
            seatPos = seatPosArr[seatPosDiff]
        }
        console.log(seatNumber, ' ', seatPos)
    }
});

const convertObjectToArray(obj: Record<string, number>): Array<Record<string, number> {
  
}
