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