let startingNumber = 600851475143;
let primeFactors = [];
for (let naturalNumber = 2; ; naturalNumber++) {
  if (startingNumber % naturalNumber === 0) {
    primeFactors.push(naturalNumber);
    startingNumber = startingNumber / naturalNumber;
    if (startingNumber === 1) {
      console.log(primeFactors);
      console.log(primeFactors[primeFactors.length - 1]);
      break;
    }
  }
}
