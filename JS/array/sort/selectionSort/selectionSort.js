//!Selection Sort Algorithm – Data Structure and Algorithm Tutorials
//? referred linked :- https://www.geeksforgeeks.org/selection-sort/  	https://www.youtube.com/watch?v=UdO2NeHB46c&t=299s	
//www.youtube.com/watch?v=HGk_ypEuS24&ab_channel=takeUforward

/*
%What is selections Sort
	=> different round
	=> get smallest elements and shift to right place
	=>The algorithm repeatedly selects the smallest (or largest) element from the unsorted portion of the list
	 and swaps it with the first element of the unsorted part. 
	 This process is repeated for the remaining unsorted portion until the entire list is sorted. 

%TIME COMPLEXITY
	=>loop start from 1, 2, 3 .... n-1, n      	n(n - 1)/2   big of O is O(n^2)
		^=> BEST CASE:	ALREADY SHORTED  O(n^2)
		^=> WORST CASE: O(n^2)	
%SPACE COMPLEXITY
	=> loop start from 0 to n-1 when we not use extra variable the space complexity is o(1)
%USER CASE
	=> WHEN ARRAY IS SMALL THAT TIME WE CAN USE SELECTIONS SORT MEMORY CASTRATE
*/

//^ Javascript program for implementation of selection sort
https: function selectionSort(arr) {
    var i, j, minValue;

    // One by one move boundary of unsorted subarray
    for (i = 0; i < arr.length - 1; i++) {
        //? Find the minimum element in unsorted array
        minValue = i;
        for (j = i + 1; j < arr.length; j++)
            if (arr[j] < arr[minValue]) minValue = j;

        // Swap the found minimum element with the first element

        const temp = arr[minValue];
        arr[minValue] = arr[i];
        arr[i] = temp;
    }
    console.log("SORTED NEW ARRAY ==>", arr);
}


var arr = [30, 60, 20, 50, 40, 10];
selectionSort(arr);
