// var a = 10;
// function fun (num) {
//     const result = num * num;
//     return result
// }

// const square1 = fun(a)
// const square2 = fun(4)
// console.log('====SQUARE=>', square1)

const longRun  = (ms) => {
    const start = new Date();
    while( new Date() - start < ms );
};

const executor = (resolve, reject) =>{
    longRun(10000);
    console.log('executor is done'); //4
    resolve('SUCCESS');

};

console.log ('BEFORE THE PROMISE'); //1
const pakka = new Promise( executor );
console.log('AFTER THE PROMISE'); //3

pakka.then((result) => {
    console.log(result);
});
// longRun(5000);
console.log('Programs End'); //2
