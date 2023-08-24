const shiftFun = (arr) =>{

    for(let i =0; i < arr.length; i++){
        arr[i] = arr[i + 1]
    }
    arr.length = arr.length -1
    return arr
}
// const array = [10, 20, 30, 40, 50]
// console.log(shiftFun(array))

// const checkFun = () => {
//     let a = b = 2
//     a++
//     return a
// }
// console.log(checkFun())
// console.log(typeof a)
// console.log(typeof b)


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
const fruits = [10, 20, 30, 40];
console.log(fruits.toString());
// console.log(fruits);
// console.log(fruits.slice(1, 3));