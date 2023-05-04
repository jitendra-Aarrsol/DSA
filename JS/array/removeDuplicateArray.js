//! THIS PROGRAM IS WITHOUT USING INBUILT FUNCTIONS

const arr = [1, 2, 3, 1, 4, 2, 5, 6, 3];
const uniqueArr = [];

for (let i = 0; i < arr.length; i++) {
  			if (uniqueArr.indexOf(arr[i]) === -1) {
   			 uniqueArr.push(arr[i]);
  		}
}
console.log('=====WITHOUT USING INBUILT FUNCTIONS====>>')
console.log(uniqueArr); // output: [1, 2, 3, 4, 5, 6]


//! THIS PROGRAM USED INBUILT FUNCTION
const arr1 = [1, 2, 3, 1, 4, 2, 5, 6, 3];
const uniqueArr1 = [...new Set(arr1)];
console.log('====AFTER USING THE INBUILT FUNCTION===>>')
console.log(uniqueArr1); // output: [1, 2, 3, 4, 5, 6]


//! without using the other array and inbuilt function
const arr2 = [1, 2, 3, 1, 4, 2, 5, 6, 3];

for (let i = 0; i < arr2.length; i++) {
  for (let j = i + 1; j < arr2.length; j++) {
    if (arr2[i] === arr2[j]) {
      arr2.splice(j, 1);
      j--;
    }
  }
}
console.log('=====without using the other array and inbuilt function====>>>')
console.log(arr2); // output: [1, 2, 3, 4, 5, 6]

