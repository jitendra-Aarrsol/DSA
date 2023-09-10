/*

****
****
****
****

*/
// let n = 4;
// let i = 1;
// while (i <= n) {
//   let j = 1;
//   let pattern = "";
//   while (j <= n) {
//     pattern += "* ";
//     j++;
//   }
//   console.log(pattern);
//   i++;
// }

/*
1111
2222
3333
4444
*/

// let n = 4;
// let i = 1;
// while (i <= n) {
//   let j = 1;
//   let pattern = "";
//   while (j <= n) {
//     pattern += i;
//     j++;
//   }
//   console.log(pattern);
//   i++;
// }

/*
1234
1234
1234
1234
*/

// let n = 4;
// let i = 1;

// while (i <= n) {
//   let j = 1;
//   let pattern = "";
//   while (j <= n) {
//     pattern += j;
//     j++;
//   }
//   console.log(pattern);
//   i++;
// }

/*
4321
4321
4321
4321
*/

// let n = 4;
// let i = 1;

// while (i <= n) {
//   let j = n;
//   let pattern = "";
//   while (j <= n) {
//     if (j === 0) break;
//     pattern += j;
//     j--;
//   }
//   console.log(pattern);
//   i++;
// }

//todo APPROACH 2
// let n = 4;
// let i = 1;

// while (i <= n) {
//   let j = 1;
//   let pattern = "";
//   while (j <= n) {
//     pattern += n - j + 1;
//     j++;
//   }
//   console.log(pattern);
//   i++;
// }

/*
123
456
789
*/

let n = 3;
let i = 1;

let no = 1;
while (i <= n) {
  let j = 1;
  let pattern = "";
  while (j <= n) {
    pattern += no;
    no++;
    j++;
  }
  console.log(pattern);
  i++;
}

/*
AAAA
BBBB
CCCC
DDDD
*/

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
*/
