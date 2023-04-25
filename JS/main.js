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

//* LINER SEARCH ALGORITHM
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





//TODO EPISODE 15 - 16
//TODO https://www.youtube.com/watch?v=exPKDGVsi6g&list=PL8p2I9GklV47TMMnPzqnkCtSOS3ebr4O7&index=15&ab_channel=CodeStepByStep
//TODO https://www.youtube.com/watch?v=hMa16WdvDI4&list=PL8p2I9GklV47TMMnPzqnkCtSOS3ebr4O7&index=16&ab_channel=CodeStepByStep
//! Stack Data structure in JavaScript
// this is linear DAS it means consecutive elements ek ke bad ek elements
//array me hm sb kahi pe elements add or remove kr skte h pr stack ke sath nhi hota hai
// STACK me top se hi element remove or add kr sakte h FILO(first come/in last out) / LIFO
// In stack and quey we have to fixed the size of elements
// OPERATION:-  pop and push / isEmpty peek:- GET THE TOPMOST ITEM
// there are two way to implement STACK   1)USING ARRAY    2)USING LINKED LIST

//! PROS: easy to implement.Memory is saved as pointers are not invoked.
//! CONS: It is not dynamic. it does not grow and shrink depending on need  at runtime


//TODO BELOW CODE WE ARE USING THE ARRAY TO BUILD THE STACK
let arrayData1 = [];
let currentSizeOfArray =  arrayData1.length;
let maxVal = 5;
const pushData = (newValues) => {
    // let e1 = document.getElementById('arrayElement').value;
    newValues = document.getElementById('arrayElement').value;
    console.log('--newValues--', newValues);
    //! HERE WE ARE DOING OVERFLOW CONDITION
    if(currentSizeOfArray <= maxVal) {
        arrayData1[currentSizeOfArray] = newValues;
        currentSizeOfArray += 1;
    } else {
        alert('STACK LIMITATION IS FILL  ------  ' + newValues)
    }
    console.log(`----- Array----- ${arrayData1} </br>`);
    // document.write(`----- Array----- ${arrayData1} </br>`);
}
const popData = () => {
    //! HERE IS UNDERFLOW CONDITION means we are checking data is there or not 
    if(currentSizeOfArray > 0) {
        currentSizeOfArray -= 1;
        arrayData1.length = currentSizeOfArray
    } else {
        alert('STACK IS ALREADY EMPTY ----- ');
    }
    console.log(`----- Array----- ${arrayData1} </br>`);
    // document.write(`----- Array----- ${arrayData1} </br>`);
}

const displayArray = () => {
    for(let i=0; i< arrayData1.length; i++)
    {
        // document.write(`----- Array----- ${arrayData1}`);
        console.log('----- Array-----', arrayData1);
    }
}
// document.write(`----- Array----- ${arrayData1} </br>`);
console.warn('--STACK data--', arrayData1);


//! TOPICS:-  Reverse String with Stack in JavaScript
//TODO EPISODE 17: https://www.youtube.com/watch?v=iXxHiad2uI4&list=PL8p2I9GklV47TMMnPzqnkCtSOS3ebr4O7&index=17&ab_channel=CodeStepByStep`


let sizeOfArray =  arrayData1.length;
const maxSizeOfArray = 5
const stringArrayPush = (item) => {
    if(sizeOfArray < maxSizeOfArray) {
        arrayData1[sizeOfArray] = item;
        sizeOfArray += 1;
        // console.log('--arrayData1---', arrayData1);
    }
    // console.warn('--item--', item);
}
const stringArrayPop = () => {
    // if(sizeOfArray > 0) {
        lastRemoveItem = arrayData1[sizeOfArray-1];
        sizeOfArray -= 1;
        arrayData1.length = sizeOfArray;
        return lastRemoveItem;
    // }
}

const reverseArrayString = (item) => {
    for(let i = 0; i < item.length; i++) {
        stringArrayPush(item[i]);
    }
    for(let i = 0; i < item.length; i++) {
        //! NOTE:- jab v call by reference use krte h tho data always object or array hona chahiye
        //TODO call by reference kya hota h?
        //? CALL BY REFERENCE:- issme ek variable ko re-assigN kiya jata h using function call HERE ITEM HAS RE-ASSIGN  
        // console.log('-----items-----', stringArrayPop());
        item[i] = stringArrayPop();
    }
}
let str = 'jitu';
//! NOTE:- here we are converting the string into array
str = str.split('');
console.log('--before reverse str---', str);
reverseArrayString(str);
//! with the help of join method we are converting array to string
console.log('--after reverse str---', str.join(''));
// stringArrayPush(20);
// stringArrayPush(21);
// stringArrayPush(22);
stringArrayPush(23);
stringArrayPop();
// stringArrayPop();
// stringArrayPop();
console.log('------arrayData1-------', arrayData1);



//!  Queue in JavaScript 
//? EPISODE 19
// linear data structure that is open at both ends and the operations are performed in First In First Out (FIFO) order. 
// We define a queue to be a list in which all additions to the list are made at one end, and all deletions from the list are made at the other end. 
//head/front:=>    ENQUEUE       rear/tail/back:=>  DEQUEUE
//TODO which default method is used for dequeue
//? ANS:- 
const enqueue = (newVal) => {
    console.log('===    newVal  ===', newVal);
    if(maxSizeOfArray > currentSizeOfArray) {
        arrayData1[currentSizeOfArray] = newVal;
        currentSizeOfArray ++;
    } else {
        alert('queue is full')
    }
    console.log('=== arrayData1 ==', arrayData1);
    console.log('=== currentSizeOfArray ==', currentSizeOfArray);
}

const dequeue = () => {
    for(let i =0; i< arrayData1.length; i++){
        arrayData1[i] = arrayData1[i+1];
    }
    currentSizeOfArray --;
    arrayData1.length = currentSizeOfArray;
    console.log('=== arrayData1 ==', arrayData1);
}


//TODO 20 EPISODE:- https://www.youtube.com/watch?v=Ao2VwQSy8zY&list=PL8p2I9GklV47TMMnPzqnkCtSOS3ebr4O7&index=23&ab_channel=CodeStepByStep

const front = () => {
    if(!isEmpty()){
        console.log('front  =====  arrayData1', arrayData1[0]);
    } else {
        alert('queue is empty')
    }
}

const rear = () => {
    if(currentSizeOfArray > 0){
        console.log('rear   =====  arrayData1', arrayData1[currentSizeOfArray - 1]);
    } else {
        alert('queue is empty')
    }
}

const isEmpty = () => {
    console.log('===    currentSizeOfArray  ===', currentSizeOfArray)
    if(currentSizeOfArray <= 0) {
        return true;
    } else {
        return false;
    }
}

//! Circular Queue
//TODO 21-EPISODE:- https://www.youtube.com/watch?v=wdZZyIt3ELk&list=PL8p2I9GklV47TMMnPzqnkCtSOS3ebr4O7&index=21&ab_channel=CodeStepByStep

