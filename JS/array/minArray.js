const input = [11, 10, 2, 3, 0, 21, 32, 44]
const minFun = input.reduce((per, cru)=> {
    return per < cru ? per :cru
})

console.log(minFun)