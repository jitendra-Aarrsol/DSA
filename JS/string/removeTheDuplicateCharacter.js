//TODO APPROACH 1:-
function removeDuplicates(str) {
    return [...new Set(str)].join('');
}




//TODO APPROACH 2:-

function removeDuplicates1(str) {
    const charCount = {};
    let result = '';

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (!charCount[char]) {
            charCount[char] = true;
            result += char;
        }
    }

    return result;
}

const originalString = "hello";
const stringWithoutDuplicates = removeDuplicates(originalString);
const stringWithoutDuplicates1 = removeDuplicates1(originalString);
console.log(stringWithoutDuplicates); // Output: "helo"
console.log(stringWithoutDuplicates1); // Output: "helo"
