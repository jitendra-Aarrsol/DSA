const pairOfBracket = (str) => {
  const stack = [];
  const openingBracket = ["(", "{", "["];
  const closingBracket = [")", "}", "]"];
  const bracketPair = {
    ")": "(",
    "{": "}",
    "[": "]",
  };

  for (let char of str) {
    console.log(typeof char);
    if (openingBracket.includes(char)) {
      stack.push(char);
    } else if (closingBracket.includes(char)) {
      const matchingOpeningBracket = bracketPair[char];
      console.log(matchingOpeningBracket);
      if (stack.pop() !== matchingOpeningBracket) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(pairOfBracket(")"));
