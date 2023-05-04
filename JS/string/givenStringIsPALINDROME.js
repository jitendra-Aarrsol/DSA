function isPalindrome(str) {
    // Reverse the string and compare to original
    const  str1 = str.split("").reverse().join(""); //! here we are print the palindrome string
    // const  str === str.split("").reverse().join("");   //! here we are checking palindrome or not
    console.log('===str===>>', str1)
}

// Example usage
console.log(isPalindrome("racecar"));  // true
console.log(isPalindrome("hello"));   // false



// TODO we need to make a programs without using by default method