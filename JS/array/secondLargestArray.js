const input = [12, 21, 333, 0, 8, 4, 2, 22, 33]

const findSecondLargestNumber  = (arr) =>{
    //First we have to find the largest number of the array
    const firstLargestNumber =  Math.max(...arr)
    //Find the index of that array
    index  = arr.indexOf(firstLargestNumber)
    //Delete largest number 
    const deletedVal = arr.splice(index, 1)
    //find the second largest number
    const secondLargestNumber = Math.max(...arr)
    console.log(secondLargestNumber)
}

findSecondLargestNumber(input)
