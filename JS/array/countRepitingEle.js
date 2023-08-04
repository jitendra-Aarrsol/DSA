// this is array of number
const Input = [5, 3, 8, 10, 5, 3, 10, 5, 3, 8, 2, 6, 8];

let count = {};
Input.forEach((item) => {
  if (count[item]) {
    count[item]++;
  } else {
    count[item] = 1;
  }
});
console.log(count);

//this is array of string

const letter = ["a", "b", "c", "a", "d", "c", "b", "a", "d", "b", "c", "a"];
let letterCount = {};
letter.forEach((item) => {
  if (letterCount[item]) {
    letterCount[item]++;
  } else {
    letterCount[item] = 1;
  }
});
console.log(letterCount);
