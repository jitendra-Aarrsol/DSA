let a = [1,2,3,4,5]
let b = {1:1,2:2,3:3,4:4,5:5}
/*
Mohamed Saqib Khaleel P7:19 PM
const fs = require('fs');
        const data = fs.readFileSync('/file.md');
        console.log(data);
        // moreWork();



const fs = require('fs');
        fs.readFile('/file.md', (err, data) => {
        if (err) throw err;
        console.log(data);
        });
        // moreWork();
Mohamed Saqib Khaleel P7:20 PM
function display()  
        {  
        document.writeln("Function");  
        }  




var display=function()  
        {  
        document.writeln("Function");  
        }
Mohamed Saqib Khaleel P7:22 PM
Question:let a = [1,2,3,4,5]
let a = {1:1,2:2,3:3,4:4,5:5}
Question:
let a = [1,2,3,4,5]
let a = {1:1,2:2,3:3,4:4,5:5}
*/
// const data = Object.assign({}, a)
// const data = Object.assign(b)
// console.log(data)



const convert = (input) =>{
    const dataType = typeof(input)
    // console.log(dataType === 'object')
    let output
    // console.log(input)
    if(Array.isArray(input)){
        // console.log('input', input)
       output = Object.assign({}, input)
       
    } else if(dataType === 'object'){
        output = Object.keys(input).map((key) => input[key]);
    }
    return output
}
console.log(convert(a))