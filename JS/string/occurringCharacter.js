//TODO How to find the maximum occurring character in given String?

function findMaxOccurringCharacter(str) {
    // Create an empty object to store character frequencies
    const charCount = {};

    // Loop through each character in the string
    for (let char of str) {
        // console.log('=====charCount===>', charCount)
        // Increment the count for the current character
        charCount[char] = (charCount[char] || 0) + 1;
        console.log('==charCount[char]===>', charCount[char])
        console.log('=====>')
    }

    let maxChar = '';
    let maxCount = 0;

    // Loop through the character counts
    for (let char in charCount) {
        if (charCount[char] > maxCount) {
            maxChar = char;
            maxCount = charCount[char];
        }
    }

    return maxChar;
}

// Example usage
const str = 'abracadabra';
const maxChar = findMaxOccurringCharacter(str);
console.log(`Maximum occurring character: ${maxChar}`);
