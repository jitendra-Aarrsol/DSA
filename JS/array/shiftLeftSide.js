
const leftSideShift = (arr, position) => {
    console.log('===Before shift======>>', arr)
    for (let i = position; i < arr.length - 1; i++) {
        //* HERE WE ARE DOING ELEMENT ARE SHIFT IN LEFT SIDE
        arr[i] = arr[i + 1]
        console.log('=====>>', arr[i])
    }
    //* HERE WE ARE MANAGING THE LAST DUPLICATE DATA
    arr.length = arr.length - 1
    console.log('===AFTER SHIFT==>>', arr)
}

const arr = [10, 20, 30, 40, 45]
leftSideShift(arr, 1 )