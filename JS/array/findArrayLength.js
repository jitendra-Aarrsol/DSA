const arrayLength = (arr) => {
    let count  = 0;
    while(arr[count] !== undefined) {
        count++
    }
    return count
}

const array = [10, 20, 30, 40, 50, 60]
console.log(arrayLength(array))
