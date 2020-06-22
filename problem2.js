// let fibonacciSeq = [0, 1, 1, 2, 3];
// let last = fibonacciSeq[fibonacciSeq.length - 1];
// // console.log(last)
// let lastMinus1 = fibonacciSeq[fibonacciSeq.length - 2];
// // console.log(lastMinus1)
// let lastMinus2 = fibonacciSeq[fibonacciSeq.length - 3];
// // console.log(lastMinus2)
// let nextTerm = lastMinus1 + lastMinus2;
// // console.log(nextTerm)

// // for (let item of startingSeq) {
// //     console.log(item)
// // }

let startingSeq = [0, 1];
let result = 0;
while (true) {
  let previousComponent = startingSeq[startingSeq.length - 1];
  let oneBeforePreviousComponent = startingSeq[startingSeq.length - 2];
  let nextComponent = previousComponent + oneBeforePreviousComponent;
  if (nextComponent > 4000000) {
    break;
  }
  // console.log(nextComponent)
  // console.log(previousComponent)
  // console.log(oneBeforePreviousComponent)
  startingSeq.push(nextComponent);

  if (nextComponent % 2 === 0) {
    result += nextComponent;
  }
}
console.log(result)

// let result = 0;

// for (let item of startingSeq) {
//   if (item % 2 === 0) {
//     result += item;
//   }
// }
// console.log(result);
// console.log(startingSeq);
