// let firstWord = "mom";
// function reverseString(str) {
//   let splitString = str.split("");
//   let reverseArray = splitString.reverse("");
//   let joinArray = reverseArray.join("");
//   return joinArray;
// }
// let result = reverseString(firstWord);

// console.log(firstWord === result);

// let number = 9009;
// let numbertoString = number.toString();
// console.log(typeof number);
// console.log(typeof numbertoString);

for (let naturalNumber = 10; naturalNumber <= 99; naturalNumber++) {
  for (let nextNumber = naturalNumber; nextNumber <= 99; nextNumber++) {
    let lookedNumber = naturalNumber * nextNumber;
    let numberToBeChecked = lookedNumber.toString();

    function reverseString(str) {
      let splitString = str.split("");
      let reverseArray = splitString.reverse("");
      let joinArray = reverseArray.join("");
      return joinArray;
    }
    let result = reverseString(numberToBeChecked);

    if (numberToBeChecked === result) {
      console.log(numberToBeChecked);
    }
  }
}


