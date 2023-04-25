const palindromeFun = (n) => {
    let rev = 0
    let t = n
    while(n !== 0){
        rev = rev * 10 + ( n % 10)
        n = Math.floor(n/10)
    }
    // console.log('rev', rev)
    if(rev === t){
        console.log('====PALINDROME===>')
    } else {
        console.log('==NOT==PALINDROME===>')
    }
}

palindromeFun(122)

//**121 = 1,  */