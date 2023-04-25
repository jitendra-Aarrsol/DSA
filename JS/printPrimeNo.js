const primeNo = (n) => {
    for(let i = 1; i < n; i++){
        let isPrime = true
        for(let j = 2; j<i; j++){
            if(i%j === 0){
                // console.log('====NOT A PRIME NO===>')
                isPrime = false
                break
            }
        }
        if(isPrime) {
            console.log(i)   
        }
    }
}

primeNo(20)