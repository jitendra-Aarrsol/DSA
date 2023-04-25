const FACTORIAL = (n) => {
    let FACTORIALNumber = 1
    for(let i = 1; i <= n; i++){
        console.log('===nnnn==>>', i)
        FACTORIALNumber = FACTORIALNumber *i;
    }
    console.log('==FACTORIALNumber==>>', FACTORIALNumber)
}
FACTORIAL(4)