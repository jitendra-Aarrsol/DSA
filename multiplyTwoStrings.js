/*
Given two numbers as strings s1 and s2. Calculate their Product.

Note: The numbers can be negative and You are not allowed to use any built-in function or convert the strings to integers. There can be zeros in the begining of the numbers.

Example 1:

Input:
s1 = "0033"
s2 = "2"
Output:
66
Example 2:

Input:
s1 = "11"
s2 = "23"
Output:
253

*/

function multiplyStrings(s1, s2) {
  const isNegative =
    (s1[0] === "-" ? !!(s1 = s1.slice(1)) : false) ^
    (s2[0] === "-" ? !!(s2 = s2.slice(1)) : false);
  const result = new Array(s1.length + s2.length).fill(0);

  for (let i = s1.length - 1; i >= 0; i--) {
    const digit1 = parseInt(s1[i]);

    for (let j = s2.length - 1; j >= 0; j--) {
      const digit2 = parseInt(s2[j]);
      const product = digit1 * digit2;

      const sum = product + result[i + j + 1];
      result[i + j + 1] = sum % 10;
      result[i + j] += Math.floor(sum / 10);
    }
  }

  while (result[0] === 0 && result.length > 1) {
    result.shift();
  }

  let resultStr = result.join("");

  if (isNegative) {
    resultStr = "-" + resultStr;
  }

  return resultStr;
}

// Example usage:
const s1 = "0033";
const s2 = "2";
const product = multiplyStrings(s1, s2);
console.log(product); // Output: "66"
