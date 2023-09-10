/*
* * * * 
* * * 
* * 
* 

*/

let n = 4;
let i = 1;
while (i <= n) {
  let j = i;
  let pattern = "";
  while (j <= n) {
    pattern += "* ";
    j++;
  }
  console.log(pattern);
  i++;
}
