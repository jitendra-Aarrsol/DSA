const pushArray = (arr, ele) => {
    arr[arr.length - 1 + 1] = ele
    console.log(arr)
}
const array = [10, 20, 30, 40, 50]
const pushEle = 60
pushArray(array, pushEle)
