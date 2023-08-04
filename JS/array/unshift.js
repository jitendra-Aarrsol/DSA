// const unshift = (arr, e) => {
//     const newArr = []
//     newArr.push(e)
//     for(let i =0; i < arr.length; i++){
//         newArr.push(arr[i])
//     }
//     return newArr;
// }

// const array = [10, 20, 30, 40, 50]
// const ele = 11
// console.log(unshift(array, ele))

const unshift = (arr, e) => {
    // newArr.push(e)
    // console.log(arr)
    // console.log(arr.length)
    // for(let i = 0; i < 5; i++) {
    for(let i = arr.length - 1; i >= 0; i--) {
        // const temp = arr[0]
        // console.log(arr[i])
        console.log('i ka value', i)
        arr[i + 1] = arr[i]
        console.log(arr[i + 1])
    }
    arr[0] = e
    return arr;
}

const array = [10, 20, 30, 40, 50]
const ele = 11
console.log(unshift(array, ele))