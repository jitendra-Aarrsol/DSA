//! How to convert a byte array to String?

//TODO APPROACH 1 :-->
const byteArray = [72, 101, 108, 108, 111]; // Example byte array
const decoder = new TextDecoder('utf-8');
const str = decoder.decode(Uint8Array.from(byteArray));

console.log(str); // Output: Hello

//TODO APPROACH 2 :-->
const uint8Array = new Uint8Array(byteArray);
const str1 = String.fromCharCode(...uint8Array);

console.log(str1); // Output: Hello
