// let result = 0
// for (let number = 0; number <= 3; number++) {
//  result += number
// }
// console.log(result)

let result = 0;
for (let naturalNumber = 0; naturalNumber < 10; naturalNumber++) {
  // console.log(naturalNumber)
  let remainder3 = naturalNumber % 3;
  // console.log(remainder3)
  // if (remainder3 === 0) {console.log(naturalNumber)}
  if (remainder3 === 0) {
    result += naturalNumber;}

  let remainder5 = naturalNumber % 5
  // console.log(remainder5)
//   if (remainder5 === 0) {console.log(naturalNumber)}
if (remainder5 === 0)  {result += naturalNumber;}
}
console.log(result);
