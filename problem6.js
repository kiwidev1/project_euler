let result1 = 0;
let result2 = 0;

function squareNaturalNumber(num) {
  return Math.pow(num, 2);
}

for (naturalNumber = 1; naturalNumber <= 100; naturalNumber++) {
  let numberSquare = squareNaturalNumber(naturalNumber);
  result1 += numberSquare;
  result2 += naturalNumber;
}

let squareOfTheSum = squareNaturalNumber(result2);
console.log(result1);
console.log(squareOfTheSum);
console.log(squareOfTheSum - result1);
