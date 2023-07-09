//!Bubble Sort Algorithm – Data Structure and Algorithm Tutorials
//? referred linked :- https://www.geeksforgeeks.org/bubble-sort/  	https://www.youtube.com/watch?v=zOhUavxlzw4

/*
%What is Bubble Sort
    => different round
    => get smallest elements and shift to right place

%TIME COMPLEXITY
    =>loop start from 1, 2, 3 .... n-1, n      	n(n - 1)/2   big of O is O(n^2)
        ^=> BEST CASE:	ALREADY SHORTED  O(n)
        ^=> WORST CASE: O(n^2)	
%SPACE COMPLEXITY
    => loop start from 0 to n-1 when we not use extra variable the space complexity is o(1)
%USER CASE
    => WHEN ARRAY IS SMALL THAT TIME WE CAN USE SELECTIONS SORT MEMORY CASTRATE
*/

//>In place sort

const array = [2, 4, 45, 12, 1, 3]

const fun = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let isSwapped = false
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                isSwapped = true
            }
        }
        if(isSwapped === false) break;
    }

    console.log('==BUBBLE SORTED ARRAY', arr)
}


fun(array)


