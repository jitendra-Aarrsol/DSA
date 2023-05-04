const checkPrimeNo = (n) => {
    let i
    if(n === 1) return console.log(`${n} is not a prime no`)
    for(i=2; i< n; i++){
        if(n % i === 0){
            console.log(`${n} is not a prime no`)
            break;
        }
    }
    if(i === n) return console.log(`${n} is prime No`)
}

checkPrimeNo(4)