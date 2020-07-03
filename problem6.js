let result1 = 0;
let result2 = 0;
for (naturalNumber = 1; naturalNumber <= 10; naturalNumber++) {
  function squareNaturalNumber(num) {
    return Math.pow(num, 2);
  }
  let numberSquare = squareNaturalNumber(naturalNumber);
  result1 += numberSquare;
}
for (naturalNumber = 1; naturalNumber <= 10; naturalNumber++) {
  result2 += naturalNumber;
  function squareNaturalNumber(num) {
    return Math.pow(num, 2);
  }
}
let squareOfTheSum = squareNaturalNumber(result2);
console.log(result1);
console.log(squareOfTheSum);
console.log(squareOfTheSum - result1);
