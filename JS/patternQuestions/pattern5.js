/*
___*
__**
_***
****
*/

let n = 4;
let row = 1;

while (row <= n) {
  let col = 1;
  let space = n - row;
  //   let space = 1;
  let pattern = "";
  while (space) {
    pattern += " ";
    space--;
  }
  while (row >= col) {
    pattern += "*";
    col++;
  }
  console.log(pattern);
  row++;
}
