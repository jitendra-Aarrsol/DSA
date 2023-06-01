const linearSearch = (arr, searchElement) => {

    for(let i = 0; i< arr.length; i++) {
        if(arr[i] === searchElement){
            console.log('====>>', arr[i])
            break;
        } 
        // else {
        //     console.log('=====NOT ELEMENT FOUND=====>>')
        // }
    }
}
const arr = [11, 20, 30, 40]
linearSearch(arr, 44)