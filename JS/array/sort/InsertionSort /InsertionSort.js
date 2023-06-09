//!Insertions Sort Algorithm – Data Structure and Algorithm Tutorials
//? referred linked :- https://www.geeksforgeeks.org/insertion-sort/  	https://www.youtube.com/watch?v=7kIVfVY6Axk

/*
%What is Insertions Sort
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
        let temp = arr[i]
        let j = j-1
        for (; j >= 0; j--) {
            if (arr[j] > temp) {
                arr[j+1] = arr[j]
            } else {
                break
            }
        }
        arr[j+1] = temp
    }
    console.log('==INSERTION SORTED ARRAY', arr)
}


fun(array)


