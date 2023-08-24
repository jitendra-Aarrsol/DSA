//!Write a program to find the sum of numbers in an ALPHANUMERIC STRING?
function sumNumbersInString(inputString) {
  // Use regular expression to extract numbers from the input string
  const numbers = inputString.match(/\d+/g);

  // Check if there are any numbers in the string
  if (!numbers) {
    return 0; // If no numbers found, return 0
  }

  // Convert the extracted numbers from strings to integers and sum them up
  const sum = numbers.reduce((acc, numStr) => acc + parseInt(numStr, 10), 0);

  return sum;
}

// Example usage:
const alphanumericString = "Hello123World456";
const result = sumNumbersInString(alphanumericString);
console.log("Sum of numbers in the string:", result);
