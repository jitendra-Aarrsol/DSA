const fun = (str) => {
  const stack = [];
  const bracketOfPair = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (bracketOfPair[char]) stack.push(char);
    else if (Object.values(bracketOfPair).includes(char)) {
      let match = stack.pop();
      if (bracketOfPair[match] !== char) return false;
    }
  }
  return stack.length === 0;
};

console.log(fun("{()}"));
