let primeNumbersList = [];
function isPrime(num) {
  for (let naturalNumber = 2; naturalNumber < num; naturalNumber++) {
    if (num % naturalNumber === 0) {
      return false;
    }
  }
  return true;
}

for (let number = 2; number <= 17; number++) {
  let primeNumber = isPrime(number);
  let arrayLength = primeNumbersList.length;
  if (primeNumber === true) {
    primeNumbersList.push(number);
  }
  if (arrayLength === 6) {
    break;
  }
}

let lastNumber = primeNumbersList[primeNumbersList.length - 1];
console.log(lastNumber);
