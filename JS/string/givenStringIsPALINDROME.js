// function isPalindrome(str) {
//   // Reverse the string and compare to original
//   const str1 = str.split("").reverse().join(""); //! here we are print the palindrome string
//   // const  str === str.split("").reverse().join("");   //! here we are checking palindrome or not
//   console.log("===str===>>", str1);
// }

// Example usage
// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("hello")); // false

// TODO we need to make a programs without using by default method

function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Check if the string is empty or has only one character
  if (str.length <= 1) {
    return true;
  }

  //% This is binary search
  let start = 0;
  let end = str.length - 1;

  // Compare characters from the beginning and end of the string
  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}

// Example usage
console.log(isPalindrome("MALAYALAM")); // Output: true
// console.log(isPalindrome("hello")); // Output: false
// console.log(isPalindrome("A man, a plan, a canal: Panama"));    // Output: true
// console.log(isPalindrome("A"));    // Output: true

/*

point: https://workat.tech/company/google/interview-questions/problem-solving
pascal's Triangle

*/
