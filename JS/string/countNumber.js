function countCharacters(str) {
  // Initialize counters for different character types
  let lowercaseCount = 0;
  let uppercaseCount = 0;
  let specialSymbolCount = 0;
  let spaceCount = 0;
  let digitCount = 0;

  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (/[a-z]/.test(char)) {
      lowercaseCount++;
    } else if (/[A-Z]/.test(char)) {
      uppercaseCount++;
    } else if (/[0-9]/.test(char)) {
      digitCount++;
    } else if (/\s/.test(char)) {
      spaceCount++;
    } else {
      specialSymbolCount++;
    }
  }

  // Display the counts
  console.log("Lowercase letters: " + lowercaseCount);
  console.log("Uppercase letters: " + uppercaseCount);
  console.log("Special symbols: " + specialSymbolCount);
  console.log("Spaces: " + spaceCount);
  console.log("Digits: " + digitCount);
}

// Example usage:
const inputString = "Hello, World! 123";
countCharacters(inputString);
