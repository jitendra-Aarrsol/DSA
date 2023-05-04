//! THIS PROGRAM IS SWAP TWO STRING WITHOUT USING BY DEFAULT METHODS
//! WHIT USING 3RD VARIABLE
let a = "hello";
let b = "world";

// Swap the characters in a and b using a temporary variable
let temp = '';
let i = 0;
while (i < a.length || i < b.length) {
  temp = a[i];
  a = a.substring(0, i) + b[i] + a.substring(i + 1);
  b = b.substring(0, i) + temp + b.substring(i + 1);
  i++;
}

// a now contains the swapped b and b now contains the swapped a
console.log("a =", a);  // should print "a = world"
console.log("b =", b);  // should print "b = hello"
