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

let maxValue = -1;
for (let naturalNumber = 100; naturalNumber <= 999; naturalNumber++) {
  for (let nextNumber = naturalNumber; nextNumber <= 999; nextNumber++) {
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
      numberToBeChecked = +numberToBeChecked;
      if (maxValue < numberToBeChecked) {
        maxValue = numberToBeChecked;
      }
    }
  }
}
console.log(maxValue);
