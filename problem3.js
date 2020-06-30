let startingNumber = 600851475143;
for (let naturalNumber = 2; ; naturalNumber++) {
  if (startingNumber % naturalNumber === 0) {
    startingNumber = startingNumber / naturalNumber;
    if (startingNumber === 1) {
      console.log(naturalNumber)
      break;
    }
  }
}
