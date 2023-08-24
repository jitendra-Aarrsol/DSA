const input = "jitendra is programmer";
let count = 0;
// Remove spaces and non-alphabetic characters using regular expression /[^a-zA-Z]/g
let cleanedString = input.replace(/[^a-zA-z]/g, "");
//! COUNT the number of CHARACTERS in a String?
console.log("COUNT the number of CHARACTERS", input.length);

//! COUNT the number of ALPHABETS in a String?
console.log("COUNT the number of ALPHABETS", cleanedString.length);
