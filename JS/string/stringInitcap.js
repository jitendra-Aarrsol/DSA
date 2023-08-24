function initCap(inputString) {
  // Split the input string into an array of words
  const words = inputString.split(" ");

  // Capitalize the first letter of each word
  const capitalizedWords = words.map((word) => {
    // Check if the word is not empty
    if (word.length > 0) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    // If the word is empty, return it as is
    return word;
  });

  // Join the capitalized words back into a string
  const resultString = capitalizedWords.join(" ");

  return resultString;
}

// Example usage:
const inputString = "STRING INITCAP of Words";
const initCapString = initCap(inputString);
console.log(initCapString); // Output: "String Initcap Of Words"
