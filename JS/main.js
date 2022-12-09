//! Array is defined and print each elements
let data = [9,22, 2, 8, 45, 23, 45];
let data1 = [11, 22, 33, 44];
const printData = () => {
    document.write(`-----First Array-----<br>`);
    for (let i = 0; i < data.length; i++) {
        document.write(`element [${i}] = ${data[i]}<br>`);
        console.log(data[i]);
    }
    console.log('-----Second Array-----');
    document.write(`-----Second Array-----<br>`);
    for (let i = 0; i < data1.length; i++) {
        document.write(`element [${i}] = ${data1[i]}<br>`);
        console.log(data1[i]);
    }
}
printData();



const arrayTraversing = () => {
    let e1 = document.getElementById('element').value;
    console.log('--elements--', e1);
        if(e1 < data.length){
            alert(data[e1])
        } else {
            alert('Enter valid number');
        }
};

//! Insert Element in Array at last position
const arrayInsert = () => {
    let e2 = document.getElementById('element1').value;
    data.push(e2);
    printData();
    setTimeout(function () { 
        location.reload();
      }, 60 * 100);
}



//! Insert Element in Array at any position
//TODO shortcut of INSERT
//? ANS:- splice(indexof, removeElement, newInsertElement)

const arrayInsertAtAnyPosition = () => {
    let positions = document.getElementById('positions').value;
    let newElement = document.getElementById('newElement').value;
    //! This is inbuilt function in javascript
    // data.splice(positions,0 ,newElement);
    document.write('---data.length----', data.length);
    printData();
    //this is revers loop
    for(let i= data.length; i >=0; i--){
        if(i >= parseInt(positions)){
            data[i+1] = data[i];
            if(i == positions){
                // document.write('<h1> ja be </h1>');
                data[i] = newElement;
            }
        }
    }
    document.write('---data.length----', data.length);
    document.write('---AFTER INSERT----');
    printData();
    // setTimeout(function () { 
    //     location.reload();
    //   }, 60 * 100); // after 6 sec it will reloaded
}


//! REMOVE tha element in Array
//TODO  shortcut of REMOVE element
//? ANS:- splice(indexof, NoOfElement)

const removeArray = () => {
    // let removePositions = document.getElementById('removePositions').value;
    let removePositions = document.getElementById('removePositions').value;
    for( let i =parseInt(removePositions); i<data.length-1; i++){
            data[i] = data[i+1];
    }
    data.length = data.length - 1;
    printData();
    setTimeout(function () { 
        location.reload();
      }, 60 * 100); // after 6 sec it will reloaded
}


//! SEARCH Element in Array
//TODO if we have two same elements how we search the elements   INTERVIEW QUESTION
//? ANS:-  
//TODO shortcut of search element (Default Function)
//? ANS:- indexof()

const arraySearch = () => {
    let searchItem = document.getElementById('searchItem').value;
    let searchItem1 = parseInt(searchItem);
    for(let i=0; i <= data.length; i++){
        if(searchItem1 === data[i]){
            alert(`index Position ${data.indexOf(searchItem1)} VALUE ${data[i]}`)
            break;
        }
    }
}   

//! MERGE two Array using for loop
//!two different loop to Merge element      |   make Three Element
//TODO shortcut for reverse array Element (Default Function)
//? ANS:-data.reverse();
//TODO shortcut for Merge array (Default Function)
//? ANS:- let mergedArray = [...data, ...data1]

const mergeArray = () => {
    let mergedArray = [];
    for (let i = 0; i < data.length; i++) {
        mergedArray[i] = data[i];
    }
    for (let i = 0; i < data1.length; i++) {
        mergedArray[data.length + i] = data1[i]
    }
    //! REVERSE the array
    let reverseData = data.reverse();
    console.log('--reverseData--', reverseData);
    //!This is for default method to merged 
    let mergedData = [...data, ...data1]
    console.log('--mergedData--', mergedData);
    // mergedArray = data.push(data1);
    console.log('--mergedArray--', mergedArray);
}

//? NOTE:- Need to understand first , it is not working proper way
//! MERGE two array using while loop
//! 
//TODO Here we need to compleat this program bcoz first array has not sort proper way 
const mergedArrayWithWhile = () => {
    let mergedArrayWithWhile= [];
    let d1 = 0;
    let d2 = 0;
    let d3 = 0;
    
    while (d1 < data.length && d2 < data1.length) {
        if (data[d1] < data1[d2]) {
            mergedArrayWithWhile[d3] = data[d1];
            d1++;
        } else {
            mergedArrayWithWhile[d3] = data1[d2]
            d2++;
        }
        d3++;
    }
    console.log('---d1--', d1);
    while(d1 < data.length) {
        // if (data[d1] < mergedArrayWithWhile[d3]){
        mergedArrayWithWhile[d3] = data[d1];
        d1++;
        // } else {
        //     mergedArrayWithWhile[d3] = mergedArrayWithWhile[d3]
        // }
        d3++;
    }
    console.log('---mergedArrayWithWhile----', mergedArrayWithWhile);
}


//! Shorting the array using bubble sort
const sortingWithBubbleSort = () => {
    for(let i = 0; i < data.length; i++){
        for(let j = 0; j< data.length; j++){
            if(data[j] > data[j+1]){
                let tamp = data[j];
                data[j] = data[j+1];
                data[j+1] = tamp;
            }
        }
    }
    console.log('--sorted DATA--', data);
    document.write(` <h1>Sorted Array </h1><br>`);
    for (let i = 0; i < data.length; i++) {
        console.log('--step--', data);
        document.write(`element [${i}] = ${data[i]}<br>`);
    }
    setTimeout(function () { 
        location.reload();
    }, 60 * 100); // after 6 sec it will reloaded
}

//! Factorial  using loop

const factorialWithLoopData = () => {
    let factorialDigit = 5;
    let factorialNo = 1;
    for(let i = factorialDigit; i <= factorialDigit; i--){
        factorialNo = factorialNo * i;
    }
    console.log('--factorialNo-11-', factorialNo);
    document.write('--factorialNo-33-', factorialNo);
}

//! Factorial  without using loop that is Recursion
//! Direct Recursion
const factorialWithoutLoopData = (item) => {
    if(item == 0){
        return 1;
    }
    return item * factorialWithoutLoopData(item - 1);
}
console.log('--factorialNo--', factorialWithoutLoopData(6));
document.write('--factorialNo--', factorialWithoutLoopData(5));


//!Indirect Recursion
let money = 100;
unitPrice = 10;
let totalApple = 0;
const buyApple = (paisa) => {
    if(paisa > 0){
        // console.log(`--mere pass ${paisa} paisa hai -- ${totalApple} kharida hu`);
        buyMore(paisa);
    } else {
        // console.warn (`I don't have more mony, Total bought APPLE ${totalApple}`);
    }
}

const buyMore = (paisa) => {
    totalApple++;
    buyApple(paisa - unitPrice)
}

buyApple(money);

//! Reverse Array With Recursion
//TODO default function for revers the array is REVERSE()
// let temp;
// const reverseArray = (data, start, end) => {
//     // console.warn('-------data----', data);
//     if(start <= end){
//         temp = data[start];
//         data[start] = data[end];
//         //data[end] = data[start]
//         data[end] = temp
//         reverseArray(data, start + 1, end - 1);
//     }
//     // console.warn('-----data---new--', data);
// };

// reverseArray(data, 0, data.length -1);