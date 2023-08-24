const  input = [12, 32, 33, 21, 45, 54, 66]

const maxFun = input.reduce((pre, cru) => {
    return pre > cru ? pre : cru
})

console.log(maxFun)

//! 2ns Method

const result = Math.max(...input)

console.log(result)