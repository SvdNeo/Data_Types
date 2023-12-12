let str = "Hello";
console.log(str.length);// getting length
console.log(str[-1]);// accessing the strings
console.log(str.at(-5));
console.log(str[0]);

let str1 = 'Widget with id';
console.log(str1.indexOf("with"))
console.log(str1.indexOf("Widget"))
console.log(str1.indexOf("id",1))

let str2 = "Competition";
console.log(str2.slice(5,-2));
console.log(str2.slice(-5,-1));
console.log(str2.substring(3,-4));
console.log(str2.substr(4,3))

//Uppercase the first character
function ucFirst(str){
    return str[0].toUpperCase()+str.substring(1,str.length)
}
console.log(ucFirst("vinay"))

//Check for spam

function checkSpam(str){
    let lowerStr = str.toLowerCase()
    if(lowerStr.includes("viagra")|| lowerStr.includes("xxx") ){
        return true
    }
    else{
        false
    }
}
console.log(checkSpam('buy ViAgRA now'));

function truncate(str,maxLength){
    if(str.length>maxLength){
        return str.slice(0,maxLength-1)+"..."
    }
    else{
        return str
    }
}
console.log(truncate("What I'd like to tell on this topic is:", 20))

function extractCurrencyValue(str){
    return +str.slice(1)
}
console.log(extractCurrencyValue('$120') === 120 )