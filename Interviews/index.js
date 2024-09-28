// process.nextTick(() => console.log("Hello"));
// setImmediate(() => console.log("Immeditae"));
// setTimeout(() => {
//   console.log("After 5 seconds");
// }, 5000);
// (async function () {
//   await new Promise((res) => {
//     setTimeout(() => {
//       console.log("First 5 seconds", 5000);
//       res();
//     }, 10000);
//   });
// })();
//

const fs = require('fs')

let begin = Date.now();

function log(msg) {
  let t = ((Date.now() - begin) / 1000).toFixed(3);
  console.log("" + t + ':' + msg)
}

log("start Program")


// setImmediate(() => log("immediate"));
// Promise.resolve().then(() => log("Promise"))
// new Promise((res, rej) => { res("jello")}).then(data => log(data))
// setTimeout(() => log("timer"), 2000);
// fs.stat(__filename, () => log("statfile"))
// fs.readFile(__filename, () => log("readfile"))
// process.nextTick(() => console.log("Hello1"));
// process.nextTick(() => console.log("Hello3"));
// process.nextTick(() => console.log("Hello3"));
//
// const now = Date.now();
// log("start While")
// while(Date.now() - now < 1000) {}
// log("done Loop")

// setTimeout(() => {
//   log("First HI");
// }, 1000)
//
// setTimeout(() => {
//   log("Second HI");
// }, 1000)
//
// setTimeout(() => {
//   log("Third HI");
// }, 2000)
//
//
// setTimeout(() => {
//   log("Fourth HI");
// }, 1000)

function delay(ms) {
  const now = Date.now();

  // while(Date.now() - now < ms) {}
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms)
  })
}
(async function() {
  await delay(2000);
  log("Hello")
  console.log("Next Star")

  function asyncTimeout(arr, cb) {
    arr.forEach(d => {
      setTimeout(cb, 1000)
    })
  }

  asyncTimeout([1,2,3,4], () => {
    log("Log")
  })
})()














