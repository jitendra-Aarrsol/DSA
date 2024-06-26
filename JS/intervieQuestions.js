// //QUESTION 1:-
console.log("age:", age)
var age = 12
console.log("age:", age)

// //QUESTION 2:-
// // console.log("🚀 ~ age:", age1);
// let age1 = 12;
// console.log("🚀 ~ age:", age1);


// //QUESTION 3:-
for (var index = 0; index < 5; index++) {
    setTimeout(() => {
        console.log( index)
    }, 1000*index)
}

// //QUESTION 3:-
//The temporal dead zone
/**
 *
 remove duplicate data in an array?
 const arr = [1, 2, 3, 1, 4, 2, 5, 6, 3];
const uniqueArr = [];

for (let i = 0; i < arr.length; i++) {
  			if (uniqueArr.indexOf(arr[i]) === -1) {
   			 uniqueArr.push(arr[i]);
  		}
}

const arr = [1, 2, 3, 1, 4, 2, 5, 6, 3];

function removeDuplicates(arr) {
  // Create a new array to hold unique elements
  const uniqueArr = [];

  // Outer loop through each element in the original array
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;

    // Inner loop to check if the element is already in uniqueArr
    for (let j = 0; j < uniqueArr.length; j++) {
      if (arr[i] === uniqueArr[j]) {
        isDuplicate = true;
        break;
      }
    }

    // If element is not a duplicate, add it to uniqueArr
    if (!isDuplicate) {
      uniqueArr.push(arr[i]);
    }
  }

  return uniqueArr;
}

const uniqueArr = removeDuplicates(arr);
console.log(uniqueArr); // Output: [1, 2, 3, 4, 5, 6]

//!Difference between Promise.all and Promise.allSettled


gusee what is the output
What is Type Coercion in JavaScript ?
Type Coercion refers to the process of automatic or implicit conversion of values 
from one data type to another. This includes conversion from Number to String, 
String to Number, Boolean to Number, etc. when different types of operators are applied to the values.

In case the behavior of the implicit conversion is not sure, the 
constructors of a data type can be used to convert any value to that datatype,
like the Number(), String() or Boolean() constructor.
//! Shadowing in javascript

 */


let x = true + 2;
let y = false + 2;
console.log(x);
console.log(y);


myFun()
var myFun = function() {
    console.log("FIRST")
}

myFun()

function myFun() {
    console.log("SECOND");
}

myFun();

// //QUESTION 4:-
// var variable = 10;

// (()=> {
//     console.log("🚀 ~ variable:", variable)
//     variable = 20
//     console.log("🚀 ~ variable:", variable);
// })();

// console.log(variable);
// var variable = 30;

// //QUESTION 5:-
// "use strict";
// {
//     function aa() {
//         console.log("aa");
//     }
// }
// aa();

// //QUESTION 6:-

//  variable = 10;
// (()=> {
//     foo = 100;
//     console.log("🚀 ~ variable:", variable)
//     var variable = 20;
//     var foo = 100
//     console.log("🚀 ~ variable:", variable);
// })()
// // console.log("🚀 ~ foo:", foo)
// console.log("🚀 ~ variable:", variable);
// var variable = 30

// //QUESTION 7:-
// var fullName = "John Doe";

// var obj = {
//     fullName: "Hacked full name",
//     prop: {
//         fullName: "inside prop",
//         getFullName: function () {
//             return this.fullName;
//         },
//     },
//     getFullName: function () { 
//     return this.fullName;
// },

// getFullNameV2: ()=> this.fullName,

// getFullNameV3: (function () { 
//     return this.fullName;
// })(),
// };
// console.log("🚀 ~ obj:", obj.prop.getFullName());
// console.log("🚀 ~ obj.getFullName:", obj.getFullName());
// console.log("🚀 ~ getFullNameV2:", obj.getFullNameV2());
// console.log("🚀 ~ getFullNameV3:", obj.getFullNameV3); // this is property not a functions
// console.log("🚀 ~ getFullNameV3:", obj.getFullNameV3());

//QUESTION 8:-
const firstFun = {
    name: "firstFun",
    sayName: function () {
        console.log("firstFun =>", this.name);
    },
};

const secondFun = {
    name: "secondFun",
    sayName: function () {
        console.log("secondFun =>", this.name);
    },
};

secondFun.sayName.call(firstFun);


/**
 * 
 * 
 * advanced Js interview questions
-------------------------------
1.Explain the difference between null and undefined in JavaScript

2.Can you explain how prototypal inheritance works in JavaScript?

- every object has a prototype object that acts as a template object that it inherits methods and properties from. An object's prototype object may also have a prototype object from which it inherits methods and properties, creating a chain of prototypes. This chain of prototypes is called the prototype chain. 

3-Describe the difference between a method and a function in JavaScript? 

The function is a block of code designed to perform a particular task. A function is executed when something invokes it (calls it).
A method, on the other hand, is a function of an object. Methods get defined the way normal functions are defined, but they have to be assigned as the property of an object. Methods are typically used to update an object's properties or perform operations based on an object's current properties.

4-Describe the difference between an arrow function and a regular function in JavaScript?

“this" keyword: In regular functions, the `this` keyword shows the object that is called the function, which could be the document, the window or whatever. However, the `this` keyword doesn't bind its value in arrow functions. It inherits it from the enclosing lexical context. This makes it easier to predict its behavior.
Arguments object: Regular functions have their own `arguments` object. On the other hand, arrow functions do not have their own `arguments` object. Instead, you can use rest parameters to achieve similar functionality.
Constructors: Regular functions created using the `function` declaration can be used as constructors (i.e., you can use the `new` keyword with them). Arrow functions, however, cannot be used as constructors. If you try to use the `new` keyword with an arrow function, it will show an error.
Prototype property: Regular functions have a prototype property, but arrow functions do not have this property.
Method definitions: If you're defining methods within an object literal, you'll typically want to use regular function syntax for the method definition, as it makes the `this` keyword behave as expected.

5. strict mode in JavaScript?

MONGODB
-----------
1-What are some of the advantages of MongoDB?

2-What are reserve databases in MongoDB?


output questions
-----------------

console.log([1]===[1])
console.log([1]==[1])
console.log([1,2]===[1,2])
console.log([1,2,3]+[4,3,7])

DSA
-------

arr=[1,2,3,4,5,6]
output=[1,6,2,5,3,4]

arr=[2,3,45,7,1,0] selection sort 

arr = [1,2,33,100,9, -1] second lowest / greatest
//lagest Number
function secondLargest(arr){
  let result = {}
  for(let i=0; i<arr.length; i++){
    if(arr[i]<arr[i+1]){
      result['x'] = arr[i]
      result['y'] = arr[i+1]
    }
  }
  console.log(result['x'])
}

secondLargest(arr)
**********Lowest Number************
let arr = [1, 2, 33, 100, 9, -1];

function findSecondLowest(arr) {
    if (arr.length < 2) {
        throw new Error("Array should contain at least two elements");
    }

    let firstLowest = Infinity;
    let secondLowest = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < firstLowest) {
            secondLowest = firstLowest;
            firstLowest = arr[i];
        } else if (arr[i] < secondLowest && arr[i] != firstLowest) {
            secondLowest = arr[i];
        }
    }

    return secondLowest;
}

let secondLowest = findSecondLowest(arr);
console.log(secondLowest); // Output: 1
********************************

arr= [1,4,5,6,88,0]
output = ["1.1","4.4","5.5","6.6","88.8","0.0"]

arr= [1,1,2,2,2,0,0,4,4,5,6,88,0]

 */
