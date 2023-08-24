function findMissingNumbers(inputArray) {
  if (inputArray.length < 2) {
    return [];
  }

  const minNum = Math.min(...inputArray);
  const maxNum = Math.max(...inputArray);

  // const allNumbers = Array.from({ length: maxNum - minNum + 1 }, (_, i) => i + minNum);

  //! above lines are easy way
  const allNumbers = [];
  for (let i = minNum; i <= maxNum; i++) {
    allNumbers.push(i);
  }

  const missingNumbers = allNumbers.filter((num) => !inputArray.includes(num));

  return missingNumbers;
}

// Example usage:
const inputArray = [5, 3, 8, 10, 14, 5, 7, 15, 17, 12];
// console.log(inputArray.sort())
const output = findMissingNumbers(inputArray);
console.log(output); // Output: [4, 6, 9, 11, 13, 16]
