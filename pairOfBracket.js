const pairOfBracket = (input) => {
  const stack = [];
  const bracketPairs = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < input.length; i++) {
    console.log(i);
    const char = input[i];
    console.log("char==>", char);
    console.log("bracketPairs====>", bracketPairs[char]);

    if (bracketPairs[char]) {
      // If it's an opening bracket, push it onto the stack.
      stack.push(char);
      console.log("stack>>>>", stack);
    } else if (Object.values(bracketPairs).includes(char)) {
      // If it's a closing bracket, check if it matches the top of the stack.
      const lastOpenBracket = stack.pop();
      console.log("lastOpenBracket===>", lastOpenBracket);
      if (bracketPairs[lastOpenBracket] !== char) {
        console.log("jee main aa gya");
        return false; // Mismatched brackets
      }
    }
  }
  return stack.length === 0;
};

console.log(pairOfBracket("()")); // true
// console.log(pairOfBracket("{[()]}")); // true
// console.log(pairOfBracket("{[(])}")); // false
// console.log(pairOfBracket("")); // true (empty string is balanced)
// console.log(pairOfBracket(")(")); // false (unmatched brackets)
