//! Write a program to REVERSE the number?
const fun = (n) => {
    console.log('BEFORE REVERSE NUMBER', n)
    let rev = 0
    while(n !== 0){
        rev = rev * 10 + ( n % 10)
        n = Math.floor(n/10)
    }
    console.log('AFTER REVERSE')
    console.log(rev)
}

fun(102)