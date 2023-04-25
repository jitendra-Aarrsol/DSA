//! here we are doing right sift and insert the value particular position

const rightSide = (arr, positions, newElement) => {
    console.log('===BEFORE ARRAY=====', arr)
    //* THIS LOOP IS REVERS BECAUSE WE HAVE TO SHIFT THE RIGHT SIDE SO FIRST WE HAVE TO 
    //* DO SHIFT LAST ELEMENT TO RIGHT SIDE 
    for(let i = arr.length -1; i >= 0 ; i--){
        if(i >= parseInt(positions)){

            // below code is for sift right side of element
            arr[i+1] = arr[i];

            // below code is for insert the value in particular position
            if(i === positions){
                arr[i] = newElement;
            }
        }
    }
    console.log('====AFTER ARRAY==>>', arr)
}
let arr = [10, 20, 30, 40]
rightSide(arr, 2, 11)
