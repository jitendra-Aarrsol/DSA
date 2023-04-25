const isPerfectNumber = (num) => {
    let sum = 1
    for(let i = 2; i <= num/2; i++){
        if(num % i === 0 ){
            sum += i;   
        }
    }
    if(sum === num) return console.log('===>PERFECT NUMBER')
    else return console.log('===>not PERFECT NUMBER')
}

isPerfectNumber(6)