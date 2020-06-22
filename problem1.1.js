let result = 0;
for (let naturalNumber = 0; naturalNumber < 1000; naturalNumber++) {
  const remainder3 = naturalNumber % 3;
  const remainder5 = naturalNumber % 5;
  if (remainder3 === 0 || remainder5 === 0) {
    result += naturalNumber;
  }
}
console.log(result);
