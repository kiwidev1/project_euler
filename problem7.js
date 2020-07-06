let primeNumbersList = [];
function isPrime(num) {
  for (let naturalNumber = 2; naturalNumber < num; naturalNumber++) {
    if (num % naturalNumber === 0) {
      return false;
    }
  }
  return true;
}

for (let number = 2; number <= 13; number++) {
  let primeNumber = isPrime(number);
  if (primeNumber === true) {
    primeNumbersList.push(number);
  }
}

let lastNumber = primeNumbersList[primeNumbersList.length - 1];
console.log(primeNumbersList);
console.log(primeNumbersList.length);
console.log(lastNumber);
