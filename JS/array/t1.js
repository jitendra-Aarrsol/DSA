const numDel = () => {

}

numDel(2, 10000)






const funDelay = (num, del) => {
    setTimeout((num) => {
        
    }, del);    
    resolve(num)
}

funDelay.then(result => {
    return result
})

console.log(funDelay(2, 10000))



/*
Valid Parentheses 

  

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. 

An input string is valid if: 

Open brackets must be closed by the same type of brackets. 

Open brackets must be closed in the correct order. 

Every close bracket has a corresponding open bracket of the same type. 

  

Example 1: 

Input: s = "()" 
 Output: true 

Example 2: 

        Input: s = "()[]{}" 
        Output: true 

Example 3: 

Input: s = "(]" 
 Output: false 

  

Constraints: 

1 <= s.length <= 104 

s consists of parentheses only '()[]{}'. 

 

 

const charPrint = (str, char) => { 

 
 

    const comObject = { 

        a: ')' 

    } 

    for(let i = 0; i < str.length; i++){ 

        const ch = str[i] 

        if(ch == comObject.a) 

        console.log(str[i]) 

    } 

} 

charPrint('(', ')') 

 

const funDelay = (num, del) => { 

    setTimeout((num) => { 

         

    }, del); 

} 

 
 

funDelay.then(result => { 

    return result 

}) 

 
 

console.log(funDelay(2, 10000)) 

 

 
*/