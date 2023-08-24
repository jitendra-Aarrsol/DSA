function convertCase(inputString) {
  let result = "";

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString.charAt(i);

    if (char === char.toLowerCase()) {
      // If the character is in lowercase, convert it to uppercase
      result += char.toUpperCase();
    } else {
      // If the character is in uppercase, convert it to lowercase
      result += char.toLowerCase();
    }
  }

  return result;
}

// Example usage:
const input = "Hello, World!";
const converted = convertCase(input);
console.log(converted); // Output: "hELLO, wORLD!"
