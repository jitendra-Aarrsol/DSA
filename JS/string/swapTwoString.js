//! THIS PROGRAM IS FOR SWAP A STRING WITHOUT USING 3rd VARIABLE AND USE A BY DEFAULT METHODS

let a = "hello";
let b = "world";

a = a + b;  // concatenate a and b
b = a.slice(0, a.length - b.length);  // extract original a from concatenated string
a = a.slice(b.length);  // extract original b from concatenated string

console.log("a =", a);  // should print "a = world"
console.log("b =", b);  // should print "b = hello"