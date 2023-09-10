/*
AAAA
BBBB
CCCC
DDDD
*/

let n = 4;
// let row = 1;
// while (row <= n) {
//   let col = 1;
//   let count = row;
//   let pattern = "";
//   //   while (row >= col) {
//   while (col <= n) {
//     let char = String.fromCharCode(65 + row - 1);

//     pattern += char;
//     col++;
//   }
//   console.log(pattern);
//   row++;
// }

/*
ABCD
ABCD
ABCD
ABCD
*/

// let row = 1;
// while (row <= n) {
//   let col = 1;
//   let count = row;
//   let pattern = "";
//   //   while (row >= col) {
//   while (col <= n) {
//     let char = String.fromCharCode(65 + col - 1);

//     pattern += char;
//     col++;
//   }
//   console.log(pattern);
//   row++;
// }

/*
==============================================================================
ABCD
EFGH
IJKL
MNOP
*/
// let row = 1;
// let start = 1;
// while (row <= n) {
//   let col = 1;
//   let pattern = "";
//   //   while (row >= col) {
//   while (col <= n) {
//     let char = String.fromCharCode(65 + start - 1);
//     pattern += char;
//     start++;
//     col++;
//   }
//   console.log(pattern);
//   row++;
// }

/*
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
ABCD
BCDE
CDEF
DEFG
===========================================

A
BC
CDE
DEFG
*/
// let row = 1;
// while (row <= n) {
//   let col = 1;
//   let start = row;
//   let pattern = "";
//   //   while (col <= n) {
//   while (row >= col) {
//     // let char = String.fromCharCode(65 + start - 1);
//     let char = String.fromCharCode(65 + row + col - 2); //TODO Approach -2
//     pattern += char;
//     start++;
//     col++;
//   }
//   console.log(pattern);
//   row++;
// }

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=
A
BB
CCC
DDDD
*/
// let row = 1;
// while (row <= n) {
//   let col = 1;
//   let start = row;
//   let pattern = "";
//   //   while (row >= col) {
//   while (row >= col) {
//     let char = String.fromCharCode(65 + row - 1); //TODO Approach -2
//     pattern += char;
//     start++;
//     col++;
//   }
//   console.log(pattern);
//   row++;
// }

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=
D
CD
BCD
ABCD
*/
// let row = 1;
// while (row <= n) {
//   let col = 1;
//   let start = n - row;
//   let pattern = "";
//   //   while (row >= col) {
//   while (row >= col) {
//     pattern += String.fromCharCode(65 + start);
//     start++;
//     col++;
//   }
//   console.log(pattern);
//   row++;
// }

/*
* * * * 
  * * * 
    * * 
      * 

*/

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
