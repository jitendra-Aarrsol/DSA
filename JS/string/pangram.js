// A pangram is a sentence or phrase that contains every letter of the alphabet at least once. 

function isPangram(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  // Convert the string to lowercase
  const lowercaseStr = str.toLowerCase();

  // Iterate through each letter of the alphabet
  for (let i = 0; i < alphabet.length; i++) {
    const letter = alphabet[i];

    // Check if the letter is not present in the string
    if (lowercaseStr.indexOf(letter) === -1) {
      return false;
    }
  }

  return true;
}

// Example usage
const sentence = "The quick brown fox jumps over the lazy dog";
if (isPangram(sentence)) {
  console.log(`"${sentence}" is a pangram.`);
} else {
  console.log(`"${sentence}" is not a pangram.`);
}
