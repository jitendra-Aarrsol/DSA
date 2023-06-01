const array = [12, 23, 32, 5, 7, 1, 0, 34]
nameOfAlgorithm = 'Bubble'
const fun = (arr, algo) => {
    for (let i = 1; i < arr.length - 1; i++) {

        let swap = false
        // * iterate the every element
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                swap = true
            }
        }
        if (swap) break;
    }
    console.log(`${algo} Sort  `)
    console.log(arr)
}

fun(array, nameOfAlgorithm)