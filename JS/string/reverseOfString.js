function reverseString(str) {
  // Split the string into an array of characters, reverse the array, and join the characters back into a string
  const reversedStr = str.split("").reverse().join("");
  return reversedStr;
}

// Example usage
const string = "Hello, World!";
const reversedString = reverseString(string);
console.log(reversedString);
