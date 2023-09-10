/*
 *
 **
 ***
 ****
 */

let n = 4;
// let i = 1;

// while (i <= n) {
//   let j = 1;
//   let pattern = "";
//   while (i >= j) {
//     pattern += "*";
//     j++;
//   }
//   console.log(pattern);
//   i++;
// }

/*================================================================================ 
1
22
333
4444
 */

// let n = 4;
// let row = 1;
// while (row <= n) {
//   let col = 1;
//   let pattern = "";
//   while (row >= col) {
//     pattern += row;
//     col++;
//   }
//   console.log(pattern);
//   row++;
// }

/*================================================================================ */
/*
 1
 23
 456
 78910
*/
// let row = 1;
// count = 1;
// while (row <= n) {
//   let col = 1;
//   let pattern = "";
//   while (row >= col) {
//     pattern += count;
//     count++;
//     col++;
//   }
//   console.log(pattern);
//   row++;
// }

/*================================================================================ */

/*
 1
 23
 345
 4567
*/
// let row = 1;
// while (row <= n) {
//   //   let count = row;
//   let col = 1;
//   let pattern = "";
//   while (row >= col) {
//     pattern += row + col - 1;
//     // pattern += count;  //!Approach 2
//     // count++;
//     col++;
//   }
//   console.log(pattern);
//   row++;
// }

/*
1
21
321
4321
*/

let row = 1;
while (row <= n) {
  let col = 1;
  let count = row;
  let pattern = "";
  while (row >= col) {
    // pattern += count;
    pattern += row - col + 1; //TODO Approach 2
    count--;
    col++;
  }
  console.log(pattern);
  row++;
}

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=
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
