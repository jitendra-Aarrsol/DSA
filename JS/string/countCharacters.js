//! Write a Program for the number of characters in each WORD and count Them?

function countCharactersInWords(inputString) {
  // Split the input string into words
  const words = inputString.split(/\s+/);

  // Initialize an object to store the character count for each word
  const wordCharacterCounts = {};

  // Initialize a variable to store the total character count
  let totalCharacterCount = 0;

  // Iterate through each word and count the characters
  for (const word of words) {
    // Remove punctuation and special characters from the word
    const cleanedWord = word.replace(/[^\w\s]/g, "");

    // Count the characters in the cleaned word
    const characterCount = cleanedWord.length;

    // Store the character count for the word
    wordCharacterCounts[word] = characterCount;

    // Add the character count to the total count
    totalCharacterCount += characterCount;
  }

  return {
    wordCharacterCounts,
    totalCharacterCount,
  };
}

// Example usage
const inputString =
  "This is a sample sentence, with words of different lengths!";
const result = countCharactersInWords(inputString);

console.log("Character count for each word:", result.wordCharacterCounts);
console.log("Total character count in all words:", result.totalCharacterCount);
