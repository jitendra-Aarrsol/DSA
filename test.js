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

// const executor = (resolve, reject) =>{
//     longRun(10000);
//     console.log('executor is done'); //4
//     resolve('SUCCESS');

// };

// console.log ('BEFORE THE PROMISE'); //1
// const pakka = new Promise( executor );
// console.log('AFTER THE PROMISE'); //3

// pakka.then((result) => {
//     console.log(result);
// });
// // longRun(5000);
// console.log('Programs End'); //2


const fun = (n, d) => {
// const fun = (resole, reject) => {
    // longRun(2000)
    longRun(d)
    // console.log('name')
    console.log(n)
    // resole('success')
    // reject('faultier')
}
// const pakka = new Promise( fun('name', 2000) )
// const pakka = new Promise( fun )
// pakka.then(result => {
//     return console.log(result)
// })
// pakka.catch(err => {
//     console.log(err)
// })// fun('name', 2000)
